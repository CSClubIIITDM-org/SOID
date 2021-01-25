import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faViruses } from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container";
// // import Card from 'react-bootstrap/Card';


function Motivation(){

    return(
 <React.Fragment>
 <div className=' bg-dark'>
  <h4 className="text-warning text-center pb-5 pt-5">MOTIVATION</h4>

 <Container>
  <div class="bg-dark shadow p-3 mb-5  rounded card text-white  mb-3" >
  
  <div class="motiv-text  card-body">
    
  <span className=' text-warning mt-2 ml-2 mb-2 mr-3 '>
  <FontAwesomeIcon className="fa-5x" icon={faViruses} />
  </span>
  <span className=' mt-2 ml-2 mb-2 text-light float-right mr-3  '>The pandemic that
       exposed the fault-lines in the prevalent teaching/facuty-centric model of education </span>
  </div>
 
</div>
</Container>


 
 
 <Container className="pb-5">
  <div class=" bg-dark shadow p-3 mb-5  rounded card text-white  mb-3" >
  
  <div class=" card-body">
    
  <span className='motiv-text  mt-2 ml-2 mb-2 '>The National Educational policy 2020 that
  has created posssibilities for developing student centric networks of education and innovation
  <span className='mt-2 ml-2 mb-2 text-warning float-right mr-3 '>
  <FontAwesomeIcon className="fa-5x" icon={faGraduationCap} />
   </span></span>
  </div>
</div>
</Container>
</div>
</React.Fragment>
    )
}

export default Motivation;


// The pandemic that
//      exposed the fault-lines in the prevalent teaching/facu;ty-centric model of education