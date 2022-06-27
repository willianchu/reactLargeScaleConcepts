import React from 'react';	
import { Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export function Navbar() {
  return (
  <NavbarBS className="bg-white shadow-lg mb-3">
    <Container>
    <Nav className='me-auto'>
      <Nav.Link to="/"as ={NavLink}>Home</Nav.Link>
      <Nav.Link to="/store"as ={NavLink}>Store</Nav.Link>
      <Nav.Link to="/about"as ={NavLink}>About</Nav.Link>
    </Nav>
    <button>
    <svg
		viewBox="0 0 24 24"
		xmlns="<http://www.w3.org/2000/svg>"
	>
		<circle
			cx="12" cy="12" r="8"
			stroke-width="4" stroke="tomato"
			fill="none"
		/>

	</svg>
    </button>
    </Container> 
  </NavbarBS>
  )
}