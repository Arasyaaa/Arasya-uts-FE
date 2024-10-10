import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import Hotel from "../Image/hotel.jpg";
import foto from "../Image/google.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./login.css"



const Login = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home'); 
  };
  const [ showPassword, setShowPassword ] = useState(false);
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       navigate('/dashboard');
//     } else {
//       alert("Tolong diisi");
//     }
//   }


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Hotel} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Selamat Datang!</h2>
            <p>Di Nyaman Hotel</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Ingatkan saya
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Lupa Password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button  onClick={handleButtonClick}>Log In</button>
                <button type="button">
                  <img src={foto} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Tidak punya akun? <a href="#">Daftar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;