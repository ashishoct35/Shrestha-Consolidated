import React, { useState } from 'react';
import { uploadImage } from '../../firebase/storage';
import styles from './AdminComponents.module.css';

const CompanySettings = ({ content, onSave, saving }) => {
    const [formData, setFormData] = useState({
        company: content?.company || {},
        hero: content?.hero || {}
    });
    const [uploading, setUploading] = useState(false);

    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleLogoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        try {
            const url = await uploadImage(file, `logos/${Date.now()}_${file.name}`);
            handleChange('company', 'logo', url);
            alert('Logo uploaded successfully!');
        } catch (error) {
            console.error('Error uploading logo:', error);
            alert('Error uploading logo. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...content, ...formData });
    };

    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Company Settings</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.card}>
                    <h3>Company Information</h3>

                    <div className={styles.inputGroup}>
                        <label>Company Name</label>
                        <input
                            type="text"
                            value={formData.company.name || ''}
                            onChange={(e) => handleChange('company', 'name', e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Tagline</label>
                        <input
                            type="text"
                            value={formData.company.tagline || ''}
                            onChange={(e) => handleChange('company', 'tagline', e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Description</label>
                        <textarea
                            rows="3"
                            value={formData.company.description || ''}
                            onChange={(e) => handleChange('company', 'description', e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Company Logo</label>
                        <div className={styles.logoUpload}>
                            {formData.company.logo && (
                                <img
                                    src={formData.company.logo}
                                    alt="Logo"
                                    className={styles.logoPreview}
                                />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoUpload}
                                disabled={uploading}
                            />
                            {uploading && <span className={styles.uploadingText}>Uploading...</span>}
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <h3>Hero Section</h3>

                    <div className={styles.inputGroup}>
                        <label>Hero Title</label>
                        <input
                            type="text"
                            value={formData.hero.title || ''}
                            onChange={(e) => handleChange('hero', 'title', e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Hero Subtitle</label>
                        <textarea
                            rows="2"
                            value={formData.hero.subtitle || ''}
                            onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>CTA Button Text</label>
                        <input
                            type="text"
                            value={formData.hero.cta || ''}
                            onChange={(e) => handleChange('hero', 'cta', e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={styles.saveBtn}
                    disabled={saving || uploading}
                >
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </div>
    );
};

export default CompanySettings;
