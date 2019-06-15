import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-6 mt-2 mb-2">
                    <div className="error-template">
                        <h1>Ooops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            Los sentimos, has solicitado una pagina que no existe
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home" />
                                Llevame al Inicio {' '}
                            </Link>
                            <Link to="/login" className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-envelope" />
                                 Inicia sesion {' '}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;