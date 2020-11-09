import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import SosialIcons from '../images/social-icons.png';

function Footer() {
    return (
        <Navbar bg="white" expand="lg" id='footer-menu'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" class="w-100 d-flex flex-column align-items-center">

                <Nav>
                    <Nav.Link href="/">
                        <img src={SosialIcons} alt='logo' class='nav-logo' />
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default Footer;