// pages/signup.js
"use client"
import { useState } from "react";
import { signUp } from "../../services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { Loader } from "@/components/ui/loader";
import { motion } from "framer-motion";
import styles from '../styles/auth.module.css';

const SignUp = () => {
  const router = useRouter();
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
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>
            <button 
              type="submit" 
              className={`${styles.button} ${styles.buttonPrimary}`}
              disabled={isLoading}
            >
              Sign Up
            </button>
          </form>
          {message && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.message}
            >
              {message}
            </motion.p>
          )}
          
          <div className={styles.linkText}>
            <p>Already have an account?
              <Link href="/login">
                <span className={styles.link}>Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
