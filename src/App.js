import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import {Navigationbar} from './components/Navigationbar';
import Home from './components/Home'
import Seat from './components/booking/Seat';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import {Logout} from './components/auth/Logout'
import Cards from './components/cards/Cards'
const App = () => {
  return (
    <div className="App">
      
    
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
            <Route path='/movie' component={Cards}/>
            <Route path='/booking' component={Seat}/>
            <Route path='/logout' component={Logout}/>
           
          </Switch>  
       </BrowserRouter>

      </div>
  );
};

export default App;
