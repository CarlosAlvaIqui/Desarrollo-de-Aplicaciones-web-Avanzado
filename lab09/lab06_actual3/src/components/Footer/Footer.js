import React from 'react';

const Footer= props => {
    return(
        <footer>
            <div id="footer" className="pb-4 pt-4">
                <div className="row text-center">
                    <div className="col-12 col-lg">
                        <a href="#"> Preguntas Frecuentes </a>
                    </div>
                    <div className="col-12 col-lg">
                        <a href="#"> Contactanos </a>
                    </div>
                    <div className="col-12 col-lg">
                        <a href="#"> Terminos y condiciones </a>
                    </div>
                    <div className="col-12 col-lg">
                        <a href="#"> Privacidad </a>
                    </div>
                    <div className="col-12 col-lg">
                        <a href="#"> Mi App </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;