import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Form  from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";


function Menubar() {
    
    return(

        
  
  <Navbar className="nabar color-nav underline" collapseOnSelect expand="lg"  >
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link  href="#about">About</Nav.Link>
      <Nav.Link  href="#about">About</Nav.Link>
      <Nav.Link  href="#about">About</Nav.Link>
      <Nav.Link  href="#about">About</Nav.Link>
      <Nav.Link  href="#about">About</Nav.Link>
      <Nav.Link  href="#about">About</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    
    )
}

export default Menubar;