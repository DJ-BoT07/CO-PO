// pages/signup.js
"use client"
import { useState } from "react";
import { signUp } from "../../services/auth";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import styles from '../styles/auth.module.css';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signUp(email, password, 'user');
      setMessage("Account created successfully!");
      // Redirect to user dashboard
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundBeams}>
        <BackgroundBeamsWithCollision />
      </div>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Create Account</h1>
        <form onSubmit={handleSignUp} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button 
            type="submit" 
            className={`${styles.button} ${styles.buttonPrimary}`}
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
        
        <div className={styles.linkText}>
          <p>Already have an account?
            <Link href="/login">
              <span className={styles.link}>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
