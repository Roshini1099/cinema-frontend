import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from './utils/notification/Notification'
import { Ellipsis } from "react-awesome-spinners";
import {Navigationbar} from '../Navigationbar';
const initialState = {
    email: '',
    password: '',
    err: '',
    success: '',
    loading:true
}

function Signin(props) {
    const [user, setUser] = useState(initialState)
    const [load,setLoad]=useState(false);
    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            setLoad(true);
            const res = await axios.post('https://movie-ticket-booking-node.herokuapp.com/api/login', {email, password})
            setUser({...user, err: '', success: "Signedin Successfully"})
            

            localStorage.setItem('initial token',res.data.token)
            localStorage.setItem('email', email)
            localStorage.setItem('login', true)
            

            props.history.push("/movie")

        } catch (err) {
            setLoad(false); 
            setUser({...user, err:"Invalid Credentials!!", success: ''})
        }
    }

    

    return (
        <div>
            <Navigationbar/>
                 <div className="login_page">
            <h2>Login</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>
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
                <div className="row">
                    <button type="submit">Login</button>
                   
                </div>
            </form>
            {load===true ?<Ellipsis/> : ""}
            <p>New User? <Link to="/signup"> Register</Link></p>
        </div>
        </div>
       
    )
}

export default Signin