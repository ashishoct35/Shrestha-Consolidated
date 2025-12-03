import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Simple password check against environment variable
            const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

            if (password === adminPassword) {
                // Store auth in sessionStorage
                sessionStorage.setItem('adminAuth', 'true');
                navigate('/admin/dashboard');
            } else {
                setError('Invalid password');
            }
        } catch (err) {
            setError('Login failed');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Admin Login</h1>
                <p className={styles.subtitle}>Shrestha Consolidated CMS</p>

                {error && <div className={styles.error}>{error}</div>}

                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter admin password"
                            autoFocus
                        />
                    </div>

                    <button type="submit" className={styles.loginBtn} disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className={styles.hint}>
                    Default password: admin123 (change in .env)
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
