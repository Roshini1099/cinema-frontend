import React, { Component } from 'react';
import Card from './Cardui';
import img1 from '../assets/Final_Fantasy_Spirits_Within.jpg';
import img2 from '../assets/Kingsglaive_Final_Fantasy_XV.jpg';
import img3 from '../assets/Resident_Evil_Vendetta.jpg';
import img4 from '../assets/Appleseed_Alpha.jpg';
import img5 from '../assets/Ghost_In_The_Shell_2_0.jpg'
class Cards extends Component {
    render() { 
        return ( 
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                       
                        <Card imgsrc={img2} title="Kingsglaive"
                        about=" he Spirits Within is a 2001 computer-animated science fiction film directed by Hironobu Sakaguchi,
                        creator of the Final Fantasy franchise. It was the first photorealistic computer-animated feature film and was the most expensive video
                         game-inspired film until the release of Prince of Persia in 2010."
                        subtitle="Final Fantasy XV" rating="4.5"
                       />
                       
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Final Fantasy" subtitle="Spirits Within" rating="4.5"
                        about="Kingsglaive takes place on the Earth-like world of Eos, running parallel to the opening events of Final Fantasy XV. 
                        The kingdom of Lucis is home to a magical Crystal, given to humanity by the world's deities and used by the ruling Caelum dynasty to 
                         Lucis from invaders via a magical barrier known as the Wall."
                        />
                    </div>
                    <div className="col-md-4" >
                        <Card imgsrc={img3} title="Resident Evil" subtitle="Vendetta" rating="4.2"
                        about="Resident Evil: Vendetta, known as Japanese adult animated action horror 
                        film set in the same universe as the Resident Evil video games. Produced by Marza Animation Planet and Takashi Shimizu, the film
                         features the characters Chris Redfield, Leon S. Kennedy, and Rebecca Chambers."
                        />
                    </div>
                    
                </div> 
                    <div className="col-md-4">
                       
                        <Card imgsrc={img4} title="Appleseed Alpha" subtitle="Appleseed Alpha" rating="3.8"
                        about=" A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 
                        apocalyptic New York in search of human's future hope, the legendary city of Olympus."
                        subtitle=""
                        />
                       
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title="Ghost In The Shell" subtitle="Ghost in the Shell" rating="5"
                        about="A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. 
                        This film is a revised version of Ghost in the Shell (1995)."
                        />
                    </div>
                   
                
            
                
                            
            </div>
         );
    }
}
 
export default Cards;