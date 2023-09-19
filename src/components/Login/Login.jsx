import React, { useState } from 'react';
import githubicon from '../../assets/images/icons8-github.svg';
import googleIcon from '../../assets/images/icons8-google.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const auth = getAuth(app);


const Login = () => {
  const [errors, setErrors]=useState('')
  const [users, setUsers]= useState('')
  const [success, setSuccess]= useState('')
  const [showPass, setShowPass]=useState(true)
  //handlelogin form submit btn
  const handleEmailPassLogin=(event)=>{
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email , password)
    setErrors('')
    //firebase login Auth
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      if(!user.emailVerified){
        alert(`Your Email is Not Verfyed
        Please Verify Your Email`)
        return;
      }
      setUsers(user)
      toast.success('Login sucessfull', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

      
      // ...
    })
    .catch((error) => {
      console.log(error)
      const errorMessage = error.message;
      setErrors(errorMessage)
      setSuccess('')
      setUsers('')
    });

  }

  const handleGoogleLogin=()=>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUsers(user)
    }).catch((error) => {
      const errorMessage = error.message;
      setErrors(errorMessage)
      // ...
    });
  }
const handleshowPassword=()=>{
  setShowPass(!showPass)
}
  const handleGithubLogin=()=>{
    const gitHubProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitHubProvider)
    .then((result) => {
      const user = result.user;
      setUsers(user)
    }).catch((error) => {
      const errorMessage = error.message;
      setErrors(errorMessage)
      // ...
    });
  }


    return (
        <div className="loginPage">
        <div className="container">
          <div className="register">
            <div className="registerarea">
              <h2>Login</h2>
              <form onSubmit={handleEmailPassLogin}>
                  <div className="registerinput">
                      <input required type="email" name="email"  placeholder=" Enter Email" /> <br />
                      <input id='passwordField' type={showPass? 'password' : 'text'} name="password" placeholder=" Password" />
                     <div className="eyeicon">
                     
                      {showPass? <FontAwesomeIcon onClick={handleshowPassword} icon={faEyeSlash} id='eyeoff'/> : <FontAwesomeIcon onClick={handleshowPassword} icon={faEye} id='eyeoff'/> } <br />
                     </div>
                      <Link className='forgetpassword' to='/forget'>Forget Password?</Link>
                      <button type='submit' class="registerBtn"> LogIn</button>
                      <p className='text-danger'>{errors}</p>
                      <p className='text-success'>{success}</p>
                      <ToastContainer />
                      <p>Or Using For Login</p>
                      <div className="loginwithSocial">
                    <img onClick={handleGoogleLogin} className='googleicon' src={googleIcon} alt=" Facebook Login" />
                    <img onClick={handleGithubLogin} className='githubicon' src={githubicon} alt="Github Login" />
                      </div>
                      <div className="singupLink">
                        <Link to='/register'>Create Account</Link>
                      </div>
                      <div className="afterLoginInfo">
                      <p>{users.email}</p>
                      <p>{users.displayName}</p>
                      <img className='photourlimg' src={users.photoURL} alt="" />
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