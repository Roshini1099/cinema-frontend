import React, { Component, useEffect, useState } from 'react';
function Booking(props) {
    const [seats,getSeat]=useState([])
    useEffect(()=>{
        getAllseats();

    },[]);
    const [closedseats,getClosedseats]=useState([])
    useEffect(()=>{
        getAllclosedseats();
    })
    const getAllseats=()=>{
        axios.get('https://movie-ticket-booking-node.herokuapp.com/api/getseats')
        .then(res => {
             console.log(res);
             const seats=res.data;
            getSeat(seats);
    })
    .catch(err => {
      console.log(err);
  })
    }
    const getAllclosedseats=()=>{
        axios.get('https://movie-ticket-booking-node.herokuapp.com/api/close')
        .then(res => {
             console.log(res);
             const closedseats=res.data;
           getClosedseats(closedseats);
    })
    .catch(err => {
      console.log(err);
  })
    }
}