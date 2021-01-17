import React, { Component } from 'react';
import {Navigationbar} from './Navigationbar';
export default class Home extends Component{

    render()
    {
        return(
            <div>
                <Navigationbar/>
                <div  
            style={
                {
                    backgroundImage: "url(/bg2.jpg)",
                    height: '100%',
                    position: 'absolute',
                    left: '0px', 
                    width: '100%',
                    overflow: 'hidden',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}> 
                       
            </div>
            </div>
        )
    }
}
