<?php

namespace App\Controller;

use App\Entity\Argonaute;
use App\Repository\ArgonauteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ApiArgonauteController extends AbstractController
{
    #[Route('/api/argonautes', name: 'api_argonaute', methods:['GET'])]
    public function index(ArgonauteRepository $argonauteRepository): Response
    {
        $argonautes = $argonauteRepository->findAll();
        return $this->json($argonautes, 200, []);
    }

    #[Route('/api/argonautes', name: 'api_argonaute_store', methods:['POST'])]
    public function createArgonaute(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
    {
        $json = $request->getContent();

        try {
            $argonaute = $serializer->deserialize($json, Argonaute::class, 'json');
    
            $errors = $validator->validate($argonaute);

            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            $entityManager->persist($argonaute);
            $entityManager->flush();
    
            return $this->json($argonaute, 201, []);

        } catch (NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
