import React, { useState } from 'react';
import './add_argonautes.scss';

const AddArgonaute = ({ add }) => {
    const [newArgonaute, setNewArgonaute] = useState({});
    const [isEnable, setIsEnable] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (event) => {
        setNewArgonaute({
            name: event.target.value
        });

        if (event.target.value.length >= 3) {
            setIsEnable(false);
            setErrorMsg('');
        } else { 
            setIsEnable(true);
            setErrorMsg('Le nom doit comporté au minimum 3 caractères.');
        }
    }

    return (
        <div className="row justify-content-center">
            <h2 className="mb-4 mt-5">Ajouter un(e) Argonaute</h2>

            <form className="col-md-6 col-lg-4 argo-form">
                <label htmlFor="name" className="form-label">Nom de l'Argonaute</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="name" onChange={handleChange} placeholder="Charalampos" />
                    <span className="input-group-append space"></span>
                    <div className="input-group-append">
                        <button type="submit" disabled={isEnable} className="btn btn-custom" onClick={(e) => add(newArgonaute, e)}>Envoyer</button>
                    </div>
                </div>
                
                {
                    errorMsg && (
                        <div className="text-danger msgError">
                            {errorMsg}
                        </div>
                    )
                }
            </form>
        </div>
    )
}

export default AddArgonaute;