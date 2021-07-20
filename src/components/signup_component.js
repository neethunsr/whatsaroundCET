import React, { Component, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from "react-router-dom";
import './loginSignup.css'

function SignUp(props)
    {
        const history = useHistory();

        const handleSignin = async (e) => {
            e.preventDefault();
    
            try {
                const res = await axios.post(
                    'https://whatsaround-backend.herokuapp.com/register',
                    {
                        username: username,
                        batch: year,
                        dept: dept,
                        mail: email,
                        password: password
                    }
                );
    
                if(res.data.success) {
                    return history.push('/');
                }
    
            } catch(err) {
                console.log(err.message);
                alert('Signin failed');
            }
            
        }

        const [username, setUsername] = useState("");
        const [year, setYear] = useState("");
        const [dept, setDept] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        return (
        <div className="auth-wrapper">
         <div className="auth-inner">
         <form onSubmit={handleSignin}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="First name" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label for="inputState" class="form-label">Batch</label>
                    <select id="inputState" class="form-select" value={year} onChange={(e)=>{setYear(e.target.value)}}>
                    <option selected disabled>Select your Year</option>
                    <option>S1/S2</option>
                    <option>S3/S4</option>
                    <option>S5/S6</option>
                    <option>S7/S8</option>
                    <option>S9/S10</option>
                    <option>Alumni</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="inputState" class="form-label">Department</label>
                    <select id="inputState" class="form-select" value={dept} onChange={(e)=>{setDept(e.target.value)}}>
                    <option selected disabled>Select your Department</option>
                    <option>ARCH</option>
                    <option>CE</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>EEE</option>
                    <option>MBA</option>
                    <option>MCA</option>
                    <option>ME</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    <a href="#"><Link className="nav-link" to={"/"}>Sign in</Link></a>
                </p>
            </form>
             </div>
             </div>
            
            
        );
    }
export default SignUp;