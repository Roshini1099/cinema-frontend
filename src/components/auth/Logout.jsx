import React, { Component } from 'react';

export function Logout(props){
    localStorage.removeItem("login");
    localStorage.removeItem("email");
    return(
        <div>
             {props.history.push("/signin")}
        </div>
       
    );
        

        
      
}
