import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import SearchBar from './SearchBar';

import logo from '../images/logo.svg';

function MainMenu(props) {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" id="main-menu">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                <Nav>
                    <Nav.Link href="/hotels">Hotels</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    <Nav.Link href="/admin/login">Admin</Nav.Link>
                </Nav>


                {props.displaySearchBar === true &&
                    <div className="form-inline my-2 my-lg-0">
                        <SearchBar />
                    </div>
                }

                <Navbar.Brand href="/">
                    <img src={logo} alt='logo' className='nav-logo' />
                </Navbar.Brand>

            </Navbar.Collapse>

            <Navbar.Brand href="/" className="d-md-block d-lg-none">
                <img src={logo} alt='logo' className='nav-logo' />
            </Navbar.Brand>

        </Navbar>
    );
}

export default MainMenu;

