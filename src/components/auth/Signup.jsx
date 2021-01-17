import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from './utils/notification/Notification';
import {isEmpty, isEmail, isLength, isMatch} from './utils/Validation'
import './auth.css';
import { Ellipsis } from "react-awesome-spinners";
import {Navigationbar} from '../Navigationbar';
import{ToastContainer,toast,Zoom,Bounce}from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure() 
const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Signup(props) {
    
    const [user, setUser] = useState(initialState)
    const [load,setLoad]=useState();
    const {name, email, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            setLoad("logging in");
            console.log("inside try")
            await axios.post('https://movie-ticket-booking-node.herokuapp.com/api/register', {
              name, email, password
          })
        
          setUser({...user, err: '', success:'true'})
          toast.success("Registered Successfully!!", {autoClose:1000})
           localStorage.setItem("username",name);
          
          props.history.push("/signin");
          

          

            
        } catch (err) {
         
            setUser({...user, err: "User already exists!", success: ''})
        }
    }
    
    return (
        <div>
                <Navigationbar/>
                 <div className="login_page">
            
            <h2>Register</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="cf_password">Confirm Password</label>
                    <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <button type="submit" >Register</button>
                </div>
                

                
       
            </form>
            {load==="logging in"?<Ellipsis/> : ""}
            <p>Already an account? <Link to="/signin">Login</Link></p>
        </div>
        </div>
       
    )
}

export default Signup