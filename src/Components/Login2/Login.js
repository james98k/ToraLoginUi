import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div className = "ToraLogin">
            <p className = "LoginTitle" id = "firstText">Email Address</p>
            <input type = "text"></input>
            <p className = "LoginTitle">Password</p>
            <input className = "LoginTitle" type = "password"></input>
            <button className = "LoginButton" type = "submit"><span>Log in</span></button>

            <div className = "LoginText">
                <p>Sign up for Tora</p>
                <p>Search Email Address</p>
            </div> 

        </div>
    );
};

export default Login;