import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";
import styled from 'styled-components';

const Styles=styled.div `
     .navbar{
    background-color:#373a40;
    z-index:100;
  }
    .navbar-brand, .navbar-nav .nav-link{
    color:#bbb;

    &:hover{
      color:white;
    }
  }
`;
function Book(props) {
    return(
        <div>
          
        <div  
            style={
                {
                    backgroundImage: "url(/bg.jpg)",
                    backgroundBlendMode: 'luminosity',
                    opacity:'0.7',
                    height: '100%',
                    position: 'absolute',
                    left: '0px', 
                    width: '100%',
                    overflow: 'hidden',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}>        
            </div>
      <div class="bg-text">
           <h2>Hello User😃!!!</h2>
           <h1 style={{fontSize:'50px'}}>◽◽◽Please Login!!◽◽◽</h1>
          <p>To book the tickets🎬</p>
          <button className="btn btn-dark"> <Link to="/signin">Go to Login page</Link> </button>
      </div>


       </div>
    );
}
const Navigation=()=>{
  return(

  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Cinemaxx</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav classname="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/signin"></Nav.Link></Nav.Item>

          </Nav>
      </Navbar.Collapse>
      </Navbar>
  </Styles>
)};

export default Book;