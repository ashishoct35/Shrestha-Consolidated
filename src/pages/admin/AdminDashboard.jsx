import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, FileText, Image, Settings, Globe, Users, Briefcase } from 'lucide-react';
import contentData from '../../content.json';
import '../../admin.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(contentData);

    useEffect(() => {
        const isAuth = localStorage.getItem('adminAuth');
        if (!isAuth) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        navigate('/admin/login');
    };

    const handleSave = () => {
        // In a real implementation, this would save to backend/file system
        console.log('Saving content:', content);
        alert('Content saved successfully! (Demo mode - changes are not persisted)');
        setIsEditing(false);
    };

    const updateContent = (path, value) => {
        const keys = path.split('.');
        const newContent = { ...content };
        let current = newContent;

        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }

        current[keys[keys.length - 1]] = value;
        setContent(newContent);
    };

    return (
        <div className="admin-container">
            <aside className="admin-sidebar">
                <div className="admin-logo">Shrestha Admin</div>
                <nav>
                    <ul className="admin-nav">
                        <li className="admin-nav-item">
                            <a href="#overview" className="admin-nav-link active">
                                <Settings size={20} />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="admin-nav-item">
                            <a href="#content" className="admin-nav-link">
                                <FileText size={20} />
                                <span>Content</span>
                            </a>
                        </li>
                        <li className="admin-nav-item">
                            <a href="#images" className="admin-nav-link">
                                <Image size={20} />
                                <span>Images</span>
                            </a>
                        </li>
                        <li className="admin-nav-item">
                            <a href="#services" className="admin-nav-link">
                                <Briefcase size={20} />
                                <span>Services</span>
                            </a>
                        </li>
                        <li className="admin-nav-item">
                            <a href="#portfolio" className="admin-nav-link">
                                <Globe size={20} />
                                <span>Portfolio</span>
                            </a>
                        </li>
                        <li className="admin-nav-item">
                            <a href="/" className="admin-nav-link" target="_blank">
                                <Globe size={20} />
                                <span>View Site</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="admin-main">
                <div className="admin-header">
                    <h1 className="admin-title">Website Management</h1>
                    <div className="admin-actions">
                        {isEditing ? (
                            <>
                                <button className="btn btn-outline btn-sm" onClick={() => setIsEditing(false)}>Cancel</button>
                                <button className="btn btn-primary btn-sm" onClick={handleSave}>Save Changes</button>
                            </>
                        ) : (
                            <button className="btn btn-primary btn-sm" onClick={() => setIsEditing(true)}>Edit Content</button>
                        )}
                        <button className="btn btn-outline btn-sm" onClick={handleLogout}>
                            <LogOut size={18} />
                            Logout
                        </button>
                    </div>
                </div>

                <div className="admin-content">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-label">Total Services</div>
                            <div className="stat-value">{content.services.length}</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Portfolio Items</div>
                            <div className="stat-value">{content.portfolio.length}</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Testimonials</div>
                            <div className="stat-value">{content.testimonials.length}</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Core Values</div>
                            <div className="stat-value">{content.about.values.length}</div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                        <h2>Company Information</h2>
                        <div className="form-group">
                            <label className="form-label">Company Name</label>
                            <input
                                type="text"
                                className="form-input"
                                value={content.company.name}
                                onChange={(e) => updateContent('company.name', e.target.value)}
                                disabled={!isEditing}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Tagline</label>
                            <input
                                type="text"
                                className="form-input"
                                value={content.company.tagline}
                                onChange={(e) => updateContent('company.tagline', e.target.value)}
                                disabled={!isEditing}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-textarea"
                                value={content.company.description}
                                onChange={(e) => updateContent('company.description', e.target.value)}
                                disabled={!isEditing}
                            />
                        </div>

                        <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={content.company.phone}
                                    onChange={(e) => updateContent('company.phone', e.target.value)}
                                    disabled={!isEditing}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    value={content.company.email}
                                    onChange={(e) => updateContent('company.email', e.target.value)}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-input"
                                value={content.company.address}
                                onChange={(e) => updateContent('company.address', e.target.value)}
                                disabled={!isEditing}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Calendly Link</label>
                            <input
                                type="url"
                                className="form-input"
                                value={content.company.calendlyLink}
                                onChange={(e) => updateContent('company.calendlyLink', e.target.value)}
                                disabled={!isEditing}
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                        <h2>Social Media</h2>
                        <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                            {Object.keys(content.social).map((platform) => (
                                <div key={platform} className="form-group">
                                    <label className="form-label" style={{ textTransform: 'capitalize' }}>{platform}</label>
                                    <input
                                        type="url"
                                        className="form-input"
                                        value={content.social[platform]}
                                        onChange={(e) => updateContent(`social.${platform}`, e.target.value)}
                                        disabled={!isEditing}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', background: 'var(--color-gray-100)', borderRadius: 'var(--radius-md)' }}>
                        <h3>Note: Demo Admin Panel</h3>
                        <p style={{ marginBottom: 0, color: 'var(--color-gray-700)' }}>
                            This is a functional demo of the admin panel. In production, changes would be saved to content.json and require a Git push to deploy.
                            For now, changes are stored locally and will reset on page reload.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
