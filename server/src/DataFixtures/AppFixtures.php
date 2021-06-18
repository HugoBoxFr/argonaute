<?php

namespace App\DataFixtures;

use App\Entity\Argonaute;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);

        $a1 = new Argonaute();
        $a1->setName('Eleftheria');
        $manager->persist($a1);

        $a2 = new Argonaute();
        $a2->setName('Gennadios');
        $manager->persist($a2);

        $a3 = new Argonaute();
        $a3->setName('Lysimachos');
        $manager->persist($a3);

        $manager->flush();
    }
}
