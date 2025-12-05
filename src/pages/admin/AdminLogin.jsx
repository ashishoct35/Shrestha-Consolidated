import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';
import contentData from '../../content.json';
import '../../admin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === contentData.admin.username && password === contentData.admin.password) {
            localStorage.setItem('adminAuth', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="admin-login">
            <div className="login-card">
                <div className="login-header">
                    <h1 className="login-logo">Admin Panel</h1>
                    <p className="login-subtitle">Sign in to manage your website</p>
                </div>

                {error && <div className="form-error" style={{ marginBottom: 'var(--spacing-md)', padding: 'var(--spacing-sm)', background: 'rgba(255, 71, 87, 0.1)', borderRadius: 'var(--radius-md)' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">
                            <User size={18} style={{ display: 'inline', marginRight: '8px' }} />
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            <Lock size={18} style={{ display: 'inline', marginRight: '8px' }} />
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Sign In
                    </button>
                </form>

                <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>
                    <p>Default credentials: admin / admin123</p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
