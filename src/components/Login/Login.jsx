import React from 'react';
import githubicon from '../../assets/images/icons8-github.svg';
import fbicon from '../../assets/images/icons8-facebook.svg';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="loginPage">
        <div className="container">
          <div className="register">
            <div className="registerarea">
              <h2>Login</h2>
              <form>
                  <div className="registerinput">
                      <input type="email" name="email" placeholder=" Enter Email" /> <br />
                      <input type="password" name="passord" placeholder=" Password" /> <br />
                      <Link className='forgetpassword' to='/forget'>Forget Password?</Link>
                      <button class="registerBtn"> LogIn</button>

                      <p>Or Using For Login</p>
                      <div className="loginwithSocial">
                    <img className='fbicon' src={fbicon} alt=" Facebook Login" />
                    <img className='githubicon' src={githubicon} alt="Github Login" />
                      </div>
                      <div className="singupLink">
                        <Link to='/register'>Create Account</Link>
                      </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;<h2>Please Login Your Account</h2>