import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

import Carousel from '../components/Carousel/Carousel';

const Home = () => {
    return(
        <Fragment>
            <Carousel />
            <div className="container">
                <div className="jumbotron">
                    <h1>Bienvenidos a mi aplicacion</h1>
                    <p>
                        <Link className="btn btn-primary btn-lg" to='login'>
                            Iniciar Sesion
                        </Link>
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;