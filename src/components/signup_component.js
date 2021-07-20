import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './loginSignup.css'

function SignUp(props)
    {
        return (
            <div className="auth-wrapper">
         <div className="auth-inner">
         <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label for="inputState" class="form-label">Batch</label>
                    <select id="inputState" class="form-select">
                    <option selected>Select your Year</option>
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
                    <select id="inputState" class="form-select">
                    <option selected>Select your Department</option>
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
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    <a href="#"><Link className="nav-link" to={"/sign-in"}>Sign in</Link></a>
                </p>
            </form>
             </div>
             </div>
            
            
        );
    }
export default SignUp;