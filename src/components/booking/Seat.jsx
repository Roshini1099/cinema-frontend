import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './Seat.css';
import Book from'./book';
import Modal from '../Modal/index';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";
import styled from 'styled-components';
import{ToastContainer,toast,Zoom,Bounce}from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure() 
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
 
class Seat extends Component {
  constructor() {
   
    super();
    this.state = { 
      seats:[],
      updatedseats:[],
      closedseats:[],
      button:true,
      true:"danger",
      false:"success"  ,
      email:'',
      login:false,
      show:false,
      name:'',
      clickcount:0
  };
}


  componentDidMount(){
    axios.get('https://movie-ticket-booking-node.herokuapp.com/api/getseats')
    .then(res => {
      console.log(res);

      const seats=res.data;

      this.setState({seats:seats});
    })
    .catch(err => {
      console.log(err);
  })

  let email=localStorage.getItem('email');
  let login=localStorage.getItem('login');
  axios.get('https://movie-ticket-booking-node.herokuapp.com/api/close')
  .then(res => {

    console.log(res);

    const closedseats=res.data;

    this.setState({closedseats:closedseats,email:email,login:login});

    console.log(closedseats);


  })
  .catch(err => {
    console.log(err);
})
  }


  onModal=()=>{
    this.setState({show:!this.state.show});
   // console.log(!this.state.show)
  }

handleClick(index){
  try{
    let seats = [...this.state.seats];
    let seat = {...seats[index]};
    
    if(!seat.isbooked)
    {
        if(seat.isbooked){
          seat.isbooked=false;
          this.setState({clickcount:this.state.clickcount-1})
        }
        else{
          seat.isbooked=true;
          this.setState({clickcount:this.state.clickcount+1})
        }
    }

    else
    {
       var flag=true;

      this.state.closedseats.map((close,index) =>{
          if(close.id===seat.id)
          {
            flag=false;
            toast.error("Seat already booked!!", {position: toast.POSITION.TOP_CENTER},{autoClose:100})
          }

      });

      if(flag)
      {
        
        if(seat.isbooked){
          seat.isbooked=false;
          this.setState({clickcount:this.state.clickcount-1})
        }
        else{
          seat.isbooked=true;
          this.setState({clickcount:this.state.clickcount+1})
        }
      }

    }
    
    seats[index]=seat;

    this.setState({seats:seats});

  }

  catch(err)
  {
    console.log("error");
  }

  }
  logout=()=>{
    localStorage.removeItem("login");
    localStorage.removeItem("email");
    this.props.history.push("/signin")
  }
  handleSubmit=event=>{
    try{
      
      let cs=[];
      let s=[];
      let us=[];

      this.state.closedseats.map((close)=>{
          cs.push(close.id);
      })

      this.state.seats.map((seat)=>{

        if(seat.isbooked===true)
        {
          s.push(seat.id);
        }
          
      })
      for(var i=0;i<s.length;i++)
      {
        if(!cs.includes(s[i]))
        {
          us.push(s[i]);
          
          const user = {
            id: s[i],
            email:this.state.email
          };
          console.log(user);
          var res=axios.post('https://movie-ticket-booking-node.herokuapp.com/api/booking',user, {
                headers: {
                    'Content-Type': 'application/json'
                    },           
               }).then((res) => {
                console.log(res.data)
                 })
               .catch(err => {
                 console.log(err);
                  })

        }
      }

      console.log(us);
      

      this.setState({ updatedseats: us }, () => {
        console.log(this.state.updatedseats);
      }); 
      event.preventDefault();
    this.onModal();
      }

    catch(err)
    {
      console.log("error");
    }
    
  }

  back=()=>{
    this.props.history.push("/movie")
  }
    render() {

        return (
         <div>
           {this.state.login?  
           <div style={
            {
                backgroundImage: "url(/bg3.jpeg)",
                backgroundBlendMode: 'luminosity',
                
                height: '100%',
                position: 'absolute',
                left: '0px', 
                width: '100%',
                overflow: 'hidden',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'
            }}>
              <div style={{ display: "flex" }}>
                   <Button style={{ marginLeft: "auto" }} className="btn btn-primary btn-lg" variant="danger" onClick={this.back}> Back</Button>
              </div>
              <hr></hr>
              <center><h3 style={{color:'white'}}>Book Your Seats now!!</h3></center>
            <div className="container">
                <div className="mt-5 w-50 mx-auto">
                       {this.state.seats.map((seat,index)=>
                            <Button  key={index} className= "m-2 btn" 
                             variant ={seat.isbooked ? this.state.true : this.state.false }
                             style={{ width: 50 }}
                             onClick= {this.handleClick.bind(this,index)}
                            >{seat.id}
                            </Button>
                         )}
                          <div className="text-center mt-5">
                          <Button variant="success"
                          disabled={this.state.clickcount>0 ? false : true}
                          onClick= {this.handleSubmit.bind(this)}
                         >Booknow</Button>
                  </div>
                  <Modal show={this.state.show} modalClosed={this.onModal}>
                      <h4>Success!!!</h4>
                       <div>
                          <p>Seat has been successfully booked!!<br></br> 
                          <hr></hr>
                          <ol>
                            <li><b>Moviename:</b>Kingsgalive Final Fantasy</li>
                            <li><b>Email:</b>{this.state.email}</li>
                            <li>{this.state.updatedseats.map((seat)=>
                                <ol>
                                    <li>Seatnumber:{seat}</li>
                                 </ol>
                            )}</li>

                          </ol>
                          
                            
                          <hr></hr>
                          </p>
                        </div>
                        <center> <button><Link to="/movie">Ok</Link></button></center>
                </Modal>
                  </div>
                 
  
            </div>
          </div> : <Book/>}
         </div>
         
      
        );
    }
}


export default Seat;