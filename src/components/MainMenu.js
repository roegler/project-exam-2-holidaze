import React from 'react';
import Nav from 'react-bootstrap/Nav';

import SearchBar from './SearchBar';

import logo from '../images/logo.svg';

function MainMenu(props) {
    return (
        <Nav bg="white" expand="lg" id='main-menu'>
            <Nav id="basic-navbar-nav" className="w-100 d-flex justify-content-between align-items-center">

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

            </Nav>
        </Nav>
    );
}

export default MainMenu;

