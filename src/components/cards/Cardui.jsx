import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRating from './StarRating'; 

import './card-style.css';
const Card=props=>{
    return(
        <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={props.imgsrc} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.about}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <StarRating rating={props.rating} />
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.rating}</div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;