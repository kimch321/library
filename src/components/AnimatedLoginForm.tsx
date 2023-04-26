import React from 'react';
import "../style/AnimatedLoginForm.css"

export default function AnimatedLoginForm() {
  return (
    <div className="box">
      <span className="borderLine"></span>
      <form>
        <h2>Sign in</h2>
        <div className="inputBox">
          <input type="text" required={ true } />
            <span>Username</span>
            <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required={ true } />
            <span>Password</span>
            <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}