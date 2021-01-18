import React, { Component } from 'react';

export function Logout(props){
    localStorage.removeItem("login");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    return(
        <div>
             {props.history.push("/signin")}
        </div>
       
    );
        

        
      
}
