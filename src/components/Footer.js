import React from 'react';
import Nav from 'react-bootstrap/Nav';

import SosialIcons from '../images/social-icons.png';

function Footer() {
    return (
        <Nav bg="white" expand="lg" id='footer-menu'>
            <Nav id="basic-navbar-nav" className="w-100 d-flex flex-column align-items-center">

                <Nav>
                    <Nav.Link href="/">
                        <img src={SosialIcons} alt='logo' className='nav-logo' />
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/admin/login">Admin</Nav.Link>
                </Nav>

                <Nav>
                    <small class="pb-3">Icons from heroicons.dev</small>
                </Nav>

            </Nav>
        </Nav>
    );
}

export default Footer;