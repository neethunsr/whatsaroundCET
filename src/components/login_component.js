import axios from "axios";
import { useState } from "react";
import {BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom";
import './loginSignup.css'
export default function Login() {

	const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                'https://whatsaround-backend.herokuapp.com/login',
                {
                    mail: email,
                    password
                }
            );

			if(res.data.success) {
				return history.push('/home');
			}

        } catch(err) {
            console.log(err.message);
            alert('Login failed');
        }
        
    }
    
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form onSubmit={handleLogin}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>

            {/* <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div> */}

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
            <a href="#"><Link className="nav-link" to={"/sign-up"}>Sign up</Link></a>
            </p>
        </form>
            </div>
            </div>
        
    );
    
}