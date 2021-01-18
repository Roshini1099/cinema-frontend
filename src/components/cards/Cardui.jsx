import React from 'react';
import { Link } from 'react-router-dom';
import './card-style.css';

const Card=props=>{
    return(
        <div>
          
            <div>
           <hr></hr>
           
            <div>
            <div className="card text-center shadow">
                    <div className="overflow">
                     <img src={props.imgsrc} alt="image1" className="card-img-top"/>
                     </div>
                     <div className="card-body text-dark">
                         <h4 className="card-title">{props.title}</h4>
                        <p className="card-text text-secondary">
                             {props.about}
                         </p>
                            <Link to={'/booking'}>
                            <button className="btn btn-outline-success" disabled={props.buttonname==="Not Available"? true :false}>{props.buttonname}</button>
                            </Link>
                    </div>
            </div>

                </div>
        </div>
        </div>
        
        
    );
}

export default Card;