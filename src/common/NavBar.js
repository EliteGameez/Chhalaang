import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './common.css';
const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Nexus Gamers</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/error">Games</Nav.Link>
                    <Nav.Link href="/error">Blogs</Nav.Link>
                    <Nav.Link href="/error">Contact</Nav.Link>
                </Nav>
            </Navbar>
            <br />
        </>
    );
};

export default NavBar;