"use client"
import { useState } from "react";
import { login } from "../../../services/auth";
import Link from "next/link";
import styles from '../../styles/auth.module.css';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { user, role } = await login(email, password);
      if (role !== 'admin') {
        throw new Error('Unauthorized access. Admin only.');
      }
      setMessage("Logged in successfully!");
      // Redirect to admin dashboard
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-black">
      <div className={styles.container}>
        <div className={styles.formCard}>
          <h1 className={styles.title}>Admin Login</h1>
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
            <p>Need an admin account?
              <Link href="/admin/signup">
                <span className={styles.link}>Request Access</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin; 