import React, { Component } from 'react';
import Card from './Cardui';
import img1 from '../assets/Final_Fantasy_Spirits_Within.jpg';
import img2 from '../assets/Kingsglaive_Final_Fantasy_XV.jpg';
import img3 from '../assets/Resident_Evil_Vendetta.jpg';
import Navigation from '../Navigation'
class Cards extends Component {
    render() { 
        return ( 
            <div>
                <Navigation/>
                <hr></hr>
                <center><h2 style={{fontFamily:"Lucida Handwriting", textShadow:"2px 2px 5px #96bb7c"}}>Book your Movies to watch</h2></center>
                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                       
                        <Card imgsrc={img1} title="Final Fantasy Spirits Within"
                        about=" he Spirits Within is a 2001 computer-animated science fiction film directed by Hironobu Sakaguchi,
                        creator of the Final Fantasy franchise. It was the first photorealistic computer-animated feature film and was the most expensive video
                         game-inspired film until the release of Prince of Persia in 2010."
                         buttonname="Not Available"
                        />
                       
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Kingsgalive Final Fantasy"
                        about="Kingsglaive takes place on the Earth-like world of Eos, running parallel to the opening events of Final Fantasy XV. 
                        The kingdom of Lucis is home to a magical Crystal, given to humanity by the world's deities and used by the ruling Caelum dynasty to 
                         Lucis from invaders via a magical barrier known as the Wall."
                         buttonname="Booknow"
                        />
                    </div>
                    <div className="col-md-4" >
                        <Card imgsrc={img3} title="Resident Evil Vendetta"
                        about="Resident Evil: Vendetta, known as Japanese adult animated action horror 
                        film set in the same universe as the Resident Evil video games. Produced by Marza Animation Planet and Takashi Shimizu, the film
                         features the characters Chris Redfield, Leon S. Kennedy, and Rebecca Chambers."
                         buttonname="Not Available"
                        />
                    </div>
                    
                </div> 
              
                            
            </div>

            </div>
            
         );
    }
}
 
export default Cards;