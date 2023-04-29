import React from 'react';
import styles from "./AnimatedLoginForm.module.css"

export default function AnimatedLoginForm() {
  return (
    <div className={styles.box}>
      <span className={styles.borderLine}></span>
      <form>
        <h2>Sign in</h2>
        <div className={styles.inputBox}>
          <input type={styles.text} required={ true } />
            <span>Username</span>
            <i></i>
        </div>
        <div className={styles.inputBox}>
          <input type="password" required={ true } />
            <span>Password</span>
            <i></i>
        </div>
        <div className={styles.links}>
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}