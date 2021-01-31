import React from "react";

import Carousel from 'react-elastic-carousel';

import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';




function Achievements() {
    

    return(
        <div className="news-container">
        <Container>
        <h4 className="news text-orange text-center pb-5 pt-5">Achievements</h4>
        <Carousel itemsToShow={1} itemPadding={[10, 10]}
        
         >
        <Card className= "bg-grey text-dark text-center p-3" >
       
  <Card.Img variant="top" src="#" />
  <Card.Body>
   
    <Card.Text className= "text-light">
      sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.
    </Card.Text>
    
  </Card.Body>
</Card>
      <Card className= "bg-grey text-light text-center p-3" >
      <p className="mt-2 ml-2 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>  
      </Card>
      <Card className= "bg-grey text-light text-center p-3" >
      <p className="mt-2 ml-2 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>  
      </Card>
      </Carousel>
      </Container>
      </div>

    );
}

export default Achievements;