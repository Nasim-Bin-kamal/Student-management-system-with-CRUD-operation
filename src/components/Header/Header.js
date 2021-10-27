import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        color: 'White',
        fontWeight: '700'
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">STUDENT MS</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="mx-3 text-decoration-none" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="mx-3 text-decoration-none" activeStyle={activeStyle} to="/students">Students</NavLink>
                        <NavLink className="mx-3 text-decoration-none" activeStyle={activeStyle} to="/addStudent">Add Student</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;