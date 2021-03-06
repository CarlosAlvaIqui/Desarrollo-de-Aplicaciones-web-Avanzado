import React from 'react';
import { Link, NavLink} from 'react-router-dom'
import {
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

import imgLogo from '../../assets/img/logo-tecsup.png';

const Header = props => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <div className="container">
            <Link className="nav-bar-brand" to="/">
                <img src={imgLogo} alt="Tecsup Logo" />
                Tecsup App
            </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink to="/" exact className="nav-link">
                            Inicio
                        </NavLink>
                        <NavLink to="/Login" exact className="nav-link">
                            Inciar Sesion
                        </NavLink>
                        <NavLink to="/Logout" exact className="nav-link">
                            Cerrar Sesion
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};
/*
 <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                    </Form> */

export default Header;