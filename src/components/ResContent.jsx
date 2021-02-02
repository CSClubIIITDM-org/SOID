import React from "react";
import favicon from "../images/favicon.ico";
import Container from "react-bootstrap/Container";
import {  Row, Col, Card } from "react-bootstrap";
import Media from 'react-bootstrap/Media'


function ResContent(){

    return(
<div className="res-container bg-dark">
           <Container>
           <h4 className="news text-orange text-center pb-5 pt-5">Facilities</h4>

           <p className="text-light text-center">
               The design studio "Ground Zero "  along with the research labs such as Bird and Smile 
               provide the necessary technical infrastructure to support student learning and experimentation
           </p>


            
         <Row className='mb-5'>
                 
                  <Col>
                    <Card className='rounded-lg shadow-lg' border='light' > 
                    <a href="https://github.com/WebOpsIIITDMK/SOID">
                      <Card.Img variant='top' src={favicon}  />
                      </a>
                    </Card>
                  </Col>
                  <Col>
                    <Card className='rounded-lg shadow-lg' border='light'> 
                    <a href="https://github.com/WebOpsIIITDMK/SOID">
                      <Card.Img variant='top' src={favicon}  />
                      </a>
                   
                    </Card>
                  </Col>
                  
                  <Col>
                    <Card className='rounded-lg shadow-lg' border='light'> 
                    <a href="https://github.com/WebOpsIIITDMK/SOID">
                      <Card.Img variant='top' src={favicon}  />
                      </a>
                   
                    </Card>
                  </Col>
                  
                  
                  
                </Row>



                 <Media className="pb-3 mb-5">
                <a href="https://github.com/WebOpsIIITDMK/SOID">
                <img
                    width={150}
                    height={150}
                    className="mr-3"
                    src={favicon}
                    alt="Generic placeholder"
                />
                </a>
                <Media.Body>
                    
                    <p className="text-light">
                    SIDI’s activities are also tightly integrated with the incubator
                 “MaDeIT Innovation Foundation” to facilitate translation of student-led 
                 innovations into entrepreneurial ventures. SIDI along with MaDeIT have
                  also cultivated a network of industry experts to mentor students
                   at different stages of the program.
                    </p>
                </Media.Body>
                </Media> 

                <Media className="pb-5  mb-5">

                <Media.Body>
                    
                    <p className="text-light">
                    One of the flagship events organized by
                     SIDI and MaDeIT is the bi-annual industry 
                     open house called “EHIPASSIKO”. SIDI, MaDeIT
                      and the Institute Innovation Council work together to
                       create an environment that nurtures curiosity, creativity 
                       and collaboration among students, faculty, and industry partners.
                    </p>
                </Media.Body>
                <div className="ehipassiko ">
          <h1 className="text-center">EHIPASSIKO</h1>
        </div>
               
                </Media> 
   

            

 
           </Container>
           </div>
    );

}

export default ResContent;