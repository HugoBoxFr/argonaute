import React, { Fragment } from 'react';
import Argonaute from '../../components/argonaute/argonaute';
import './member.scss';

const Member = ({ argonautes, errors, loading }) => {
    return (
        <Fragment>
            <div className="row member">
                <h2 className="mb-4 mt-3">
                    Membres de l'équipage
                </h2>
                {
                    loading && (
                        <div className="spinner">
                            <div className="spinner-grow spinner-grow-sm spinner-custom" role="status"></div>
                            <div className="spinner-grow spinner-grow-sm spinner-custom" role="status"></div>
                            <div className="spinner-grow spinner-grow-sm spinner-custom" role="status"></div>
                        </div>
                    )
                }
            </div>

            <div className="row member-list">
                {
                    argonautes.map(argo => 
                        <Argonaute key={argo.id} argo={argo} />
                    )
                }

                {
                    errors && (
                        <div className="mt-4 text-danger text-center">
                            &#9888;&#65039;{ errors }&#9888;&#65039;
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

export default Member;