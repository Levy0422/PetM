import React, { useState } from 'react';
import LoginAnimation from '../components/LoginAnimation'; // Importa el componente de animación
import '../components/LoginPage.scss';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre Login y Sign Up

  // Función para alternar entre Login y Sign Up
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div id="back">
      <LoginAnimation /> {/* Componente de animación en el fondo */}
      
      <div className="backRight"></div>
      <div className="backLeft"></div>

      <div id="slideBox" style={{ marginLeft: isLogin ? '50%' : '0' }}>
        <div className="topLayer" style={{ marginLeft: isLogin ? '0' : '100%' }}>
          {/* Sección de Sign Up */}
          <div className="left">
            <div className="content">
              <h2>Sign Up</h2>
              <form id="form-signup" method="post" onSubmit={(e) => e.preventDefault()}>
                <div className="form-element form-stack">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" type="email" name="email" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="username-signup" className="form-label">Username</label>
                  <input id="username-signup" type="text" name="username" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="password-signup" className="form-label">Password</label>
                  <input id="password-signup" type="password" name="password" />
                </div>
                <div className="form-element form-checkbox">
                  <input id="confirm-terms" type="checkbox" name="confirm" value="yes" className="checkbox" />
                  <label htmlFor="confirm-terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                </div>
                <div className="form-element form-submit">
                  <button id="signUp" className="signup" type="submit" name="signup">Sign up</button>
                  <button type="button" id="goLeft" className="signup off" onClick={toggleForm}>Log In</button>
                </div>
              </form>
            </div>
          </div>

          {/* Sección de Login */}
          <div className="right">
            <div className="content">
              <h2>Login</h2>
              <form id="form-login" method="post" onSubmit={(e) => e.preventDefault()}>
                <div className="form-element form-stack">
                  <label htmlFor="username-login" className="form-label">Username</label>
                  <input id="username-login" type="text" name="username" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="password-login" className="form-label">Password</label>
                  <input id="password-login" type="password" name="password" />
                </div>
                <div className="form-element form-submit">
                  <button id="logIn" className="login" type="submit" name="login">Log In</button>
                  <button type="button" id="goRight" className="login off" onClick={toggleForm}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
