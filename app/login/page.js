"use client"
// pages/login.js
import { useState } from "react";
import { login } from "../../services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import styles from '../styles/auth.module.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { user, role } = await login(email, password);
      if (role === 'admin') {
        throw new Error('Please use admin portal to login as admin.');
      }
      setMessage("Logged in successfully!");
      // Redirect to home page after successful login
      setTimeout(() => {
        router.push('/');
      }, 1500); // Short delay to show success message
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
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleLogin} className={styles.form}>
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
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
        
        <div className={styles.linkText}>
          <p>Don&apos;t have an account?
            <Link href="/signup">
              <span className={styles.link}>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
