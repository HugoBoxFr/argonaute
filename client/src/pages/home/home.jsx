import React, { Fragment, useEffect, useState } from 'react';
import AddArgonaute from '../../components/argonaute_addition/add_argonaute';
import Member from '../../components/member/member';
import { ARGONAUTES } from '../../models/argonautes.mock';
import axios from 'axios';

const Home = () => {
    const [argonautes, setArgonautes] = useState([]);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(true);
    const api = 'http://localhost:8000/api/argonaut';

    useEffect(() => {
        axios.get(api)
            .then(
                (result) => {
                    setArgonautes(result.data);
                    setErrors('');
                    setLoading(false);
                })
            .catch(
                (error) => {
                    console.log(error);
                    setArgonautes(ARGONAUTES);
                    setErrors('This is a mock data, please clone and connect the project to your Local Database.');
                    setLoading(false);
                }
            );
    }, []);
   
    const handlerAddArgonaute = (value, e) => {
        setLoading(true);
        e.preventDefault();
        axios.post(api, value)
          .then(() => {
            axios.get(api).then(result => {
                setArgonautes(result.data);
                setLoading(false);
            });
          }, (error) => {
            console.log(error);
            let newArgonaute = {
                id: ARGONAUTES.length + 1,
                name: value.name
            };
            let newArgonautesList = ARGONAUTES;
            newArgonautesList.push(newArgonaute);
            setArgonautes(newArgonautesList);
            setLoading(false);
        });
    }

    return (
        <Fragment>
            <AddArgonaute add={handlerAddArgonaute} />
            <hr />
            <Member argonautes={argonautes} errors={errors} loading={loading} />
        </Fragment>
    )
}

export default Home;

