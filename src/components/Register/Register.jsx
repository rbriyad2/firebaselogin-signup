import React from "react";
import './Register.css';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="loginPage">
      <div className="container">
        <div className="register">
          <div className="registerarea">
            <h2>Register</h2>
            <form>
                <div className="registerinput">
                    <input type="text" name="name" placeholder=" User Name" /> <br />
                    <input type="email" name="email" placeholder=" Enter Email" /> <br />
                    <input type="password" name="passord" placeholder=" Password" /> <br />
                    <button class="registerBtn"> Register</button>
                    
                    <div className="singupLink">
                        <Link to='/login'>Login</Link>
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
