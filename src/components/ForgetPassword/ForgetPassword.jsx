import React, { useState } from 'react';
import './ForgetPassword.css';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.init';
const auth = getAuth(app);

const ForgetPassword = () => {
    const [reseterror, setReseterror]=useState('')

    const handelResetFrom=(event)=>{
        event.preventDefault();
        const email= event.target.email.value
        sendPasswordResetEmail(auth, email)
  .then(() => {
    // console.log(result)
    alert('Reset Email Sent')
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorMessage = error.message;
    setReseterror(errorMessage)
  });
    }
    return (
        <div className="loginPage">
            <div className='container'>
            <div className="register">
            <div className="registerarea">
            <h2>Forget Password</h2>
            <form onSubmit={handelResetFrom}>
              <div className="registerinput">
                
                <input required type="email" name="email" placeholder=" Enter Email"/>
                <br />
                <button type="submit" class="registerBtn"> Rest Password</button>
                <p className='text-danger'>{reseterror}</p>
                <div className="singupLink">
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </form>
            </div>
              </div>
        </div>
        </div>
    );
};

export default ForgetPassword;