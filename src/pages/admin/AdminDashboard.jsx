import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchContent, updateContent } from '../../services/github';
import styles from './AdminDashboard.module.css';
import CompanySettings from '../../components/admin/CompanySettings';
import ServicesManager from '../../components/admin/ServicesManager';
import PortfolioManager from '../../components/admin/PortfolioManager';
import ContactSettings from '../../components/admin/ContactSettings';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('company');
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication
        const isAuthenticated = sessionStorage.getItem('adminAuth') === 'true';
        if (!isAuthenticated) {
            navigate('/admin/login');
            return;
        }

        loadContent();
    }, [navigate]);

    const loadContent = async () => {
        try {
            const data = await fetchContent();
            setContent(data);
        } catch (error) {
            console.error('Error loading content:', error);
            alert('Error loading content. Please check your GitHub token.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('adminAuth');
        navigate('/admin/login');
    };

    const handleSave = async (updatedData) => {
        setSaving(true);
        try {
            await updateContent(updatedData);
            setContent(updatedData);
            alert('✅ Changes saved! Vercel will redeploy in ~2 minutes.');
        } catch (error) {
            console.error('Error saving:', error);
            alert('❌ Error saving changes. Please check your GitHub token and try again.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className={styles.dashboard}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>Admin Dashboard</h1>
                    <div className={styles.headerActions}>
                        <span className={styles.userEmail}>GitHub CMS</span>
                        <button onClick={handleLogout} className={styles.logoutBtn}>
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        <button
                            className={`${styles.navBtn} ${activeTab === 'company' ? styles.active : ''}`}
                            onClick={() => setActiveTab('company')}
                        >
                            Company Settings
                        </button>
                        <button
                            className={`${styles.navBtn} ${activeTab === 'services' ? styles.active : ''}`}
                            onClick={() => setActiveTab('services')}
                        >
                            Services
                        </button>
                        <button
                            className={`${styles.navBtn} ${activeTab === 'portfolio' ? styles.active : ''}`}
                            onClick={() => setActiveTab('portfolio')}
                        >
                            Portfolio
                        </button>
                        <button
                            className={`${styles.navBtn} ${activeTab === 'contact' ? styles.active : ''}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            Contact Info
                        </button>
                    </nav>

                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewSite}
                    >
                        View Live Site →
                    </a>
                </aside>

                {/* Content Area */}
                <main className={styles.main}>
                    {activeTab === 'company' && (
                        <CompanySettings
                            content={content}
                            onSave={handleSave}
                            saving={saving}
                        />
                    )}
                    {activeTab === 'services' && (
                        <ServicesManager
                            content={content}
                            onSave={handleSave}
                            saving={saving}
                        />
                    )}
                    {activeTab === 'portfolio' && (
                        <PortfolioManager
                            content={content}
                            onSave={handleSave}
                            saving={saving}
                        />
                    )}
                    {activeTab === 'contact' && (
                        <ContactSettings
                            content={content}
                            onSave={handleSave}
                            saving={saving}
                        />
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
