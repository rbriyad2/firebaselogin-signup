import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
const Register = () => {

  const handelsubmitFrom = (event) => {
    // preventDefult for from reload off
    event.preventDefault();
    // const name = event.target.name.value;

    //data collect from input field
    const email = event.target.email.value;
    const password = event.target.password.value;

    // create user and send firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) =>{
      const loggeduser= result.user;
      console.log(loggeduser)
    })
    .catch(error =>{
      console.error(error)
    })
  };
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
                <input
                  type="email"
                  name="email"
                  placeholder=" Enter Email"
                />{" "}
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder=" Password"
                />{" "}
                <br />
                <button type="submit" class="registerBtn"> Register</button>
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

export default Register;
