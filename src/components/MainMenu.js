import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import SearchBar from './SearchBar';

import logo from '../images/logo.svg';

function MainMenu(props) {
    return (
        <Navbar bg="white" expand="lg" id='main-menu'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="w-100 d-flex justify-content-between align-items-center">

                <Nav>
                    <Nav.Link href="/hotels">Hotels</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>

                {props.displaySearchBar === true &&
                    <SearchBar />
                }

                <Nav>
                    <Nav.Link href="/">
                        <img src={logo} alt='logo' className='nav-logo' />
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainMenu;

