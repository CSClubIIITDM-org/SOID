import React from "react";

import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown'

function Research() {
    
    return(
        <React.Fragment>
            <div className="bg-dark ">
        <h4 className="text-orange text-center pb-5 pt-5">Research in Interdisciplinary Design and Innovation</h4>
          
        <Container>
      
  <div class="row justify-content-center ">
   
  <ul class="list-group research  ">
 
  <Dropdown> 
  <li class="list-group-item  "><Dropdown.Toggle id="dropdown-basic">Product Design & Innovation Process</Dropdown.Toggle></li>
  <Dropdown.Menu>
    <Dropdown.Item >Embodied Cognition</Dropdown.Item>
    <Dropdown.Item >Systems Thinking</Dropdown.Item>
    <Dropdown.Item >Bio-Inspiration</Dropdown.Item>
    <Dropdown.Item >Semiotics;ANT;Interactionism</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <li class="list-group-item  "><Dropdown.Toggle id="dropdown-basic">Product Architectures</Dropdown.Toggle></li>
  <Dropdown.Menu>
    <Dropdown.Item >Embodied Cognition</Dropdown.Item>
    <Dropdown.Item >Systems Thinking</Dropdown.Item>
    <Dropdown.Item >Bio-Inspiration</Dropdown.Item>
    <Dropdown.Item >Semiotics;ANT;Interactionism</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <li class="list-group-item  "><Dropdown.Toggle id="dropdown-basic">Non-Invasive Diagnostic Devices</Dropdown.Toggle></li>
  <Dropdown.Menu>
    <Dropdown.Item >Embodied Cognition</Dropdown.Item>
    <Dropdown.Item >Systems Thinking</Dropdown.Item>
    <Dropdown.Item >Bio-Inspiration</Dropdown.Item>
    <Dropdown.Item >Semiotics;ANT;Interactionism</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <li class="list-group-item  "><Dropdown.Toggle id="dropdown-basic">Smart Products</Dropdown.Toggle></li>
  <Dropdown.Menu>
    <Dropdown.Item >Embodied Cognition</Dropdown.Item>
    <Dropdown.Item >Systems Thinking</Dropdown.Item>
    <Dropdown.Item >Bio-Inspiration</Dropdown.Item>
    <Dropdown.Item >Semiotics;ANT;Interactionism</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <li class="list-group-item  "><Dropdown.Toggle id="dropdown-basic">Product Service System</Dropdown.Toggle></li>
  <Dropdown.Menu>
    <Dropdown.Item >Embodied Cognition</Dropdown.Item>
    <Dropdown.Item >Systems Thinking</Dropdown.Item>
    <Dropdown.Item >Bio-Inspiration</Dropdown.Item>
    <Dropdown.Item >Semiotics;ANT;Interactionism</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  
</ul>
   
  </div>

        </Container>
    </div>
    </React.Fragment>
    );
}

export default Research;