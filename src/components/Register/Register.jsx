import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from "../firebase/firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);
const Register = () => {
const [regerror, setRegerror]= useState('')
const [success, setSuccess]= useState('')
const handelsubmitFrom = (event) => {
    
    // preventDefult for from reload off
    event.preventDefault();
    setSuccess('')
    setRegerror('')
    
    // const name = event.target.name.value;

    //data collect from input field
    const email = event.target.email.value;
    const password = event.target.password.value;
//password validation
if(!/(?=.*[A-Z])/.test(password)){
  setRegerror('Password Start from (A-Z)')
  return;
}
else if(!/(?=.*[a-z].*[0-9])/.test(password)){
  setRegerror('Password Start from (A-Z & a-z & 0-9 ) Use please')
  return;
}

    // create user and send firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      const loggeduser= result.user;
      console.log(email , password)
      console.log(loggeduser.email)
      event.target.reset()
      setRegerror('')
      sendVerification(loggeduser)

      toast.success('account create sucessfull', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    .catch(error =>{
      setRegerror(error.message)
      setSuccess('')
    })
  };
  const sendVerification =(loggeduser)=>{
    sendEmailVerification(loggeduser)
    .then((result)=>{
      alert('Please Verify Your Email')
    })
  }
  return (
    <div className="loginPage">
      <div className="container">
        <div className="register">
          <div className="registerarea">
            <h2>Register</h2>
            <form onSubmit={handelsubmitFrom}>
              <div className="registerinput">
                <input type="text" name="name" placeholder=" User Name" />{" "}
                <br />
                <input required
                  type="email"
                  name="email"
                  placeholder=" Enter Email"
                />{" "}
                <br />
                <input required
                  type="password"
                  name="password"
                  placeholder=" Password"
                />{" "}
                <br />
                <p className="text-danger">{regerror}</p>
                <button type="submit" class="registerBtn"> Register</button>
                <div className="singupLink">
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
