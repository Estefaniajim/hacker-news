import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import forgotPassword from "./forgotPassword";



const Login = () => {
  return (
    <div >
    <strong>Login</strong> <br></br>
    username: <input></input> <br></br>
    <br></br>
    password: <input></input> <br></br>
    <br></br>
    <br></br>
    <Button>Login</Button>
    <br></br>
    <br></br>
    


    <div><Link to="/forgotPassword">Forgot your password?</Link></div>

    <br></br>
    <br></br>
    <strong>Create Account</strong><br></br>
    username:<input></input><br></br>
    <br></br>
    password:<input></input><br></br>
    <br></br>
    <br></br>
    <Button>Create Account</Button>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


       
    </div>
  );
};

export default Login;
