import React, { useState } from 'react';
import styles from './AdminComponents.module.css';

const ContactSettings = ({ content, onSave, saving }) => {
    const [contact, setContact] = useState(content?.contact || {});

    const handleChange = (field, value) => {
        setContact(prev => ({ ...prev, [field]: value }));
    };

    const handleSocialChange = (platform, value) => {
        setContact(prev => ({
            ...prev,
            socials: { ...prev.socials, [platform]: value }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...content, contact });
    };

    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.card}>
                    <h3>Contact Details</h3>

                    <div className={styles.inputGroup}>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            value={contact.phone || ''}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            required
                            placeholder="+977-9800000000"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Address</label>
                        <input
                            type="text"
                            value={contact.address || ''}
                            onChange={(e) => handleChange('address', e.target.value)}
                            required
                            placeholder="Kathmandu, Nepal"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Google Maps Embed URL</label>
                        <textarea
                            rows="3"
                            value={contact.mapEmbed || ''}
                            onChange={(e) => handleChange('mapEmbed', e.target.value)}
                            placeholder="Paste your Google Maps embed URL here"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Calendly Link</label>
                        <input
                            type="url"
                            value={contact.calendlyLink || ''}
                            onChange={(e) => handleChange('calendlyLink', e.target.value)}
                            required
                            placeholder="https://calendly.com/..."
                        />
                    </div>
                </div>

                <div className={styles.card}>
                    <h3>Social Media Links</h3>

                    <div className={styles.inputGroup}>
                        <label>Facebook</label>
                        <input
                            type="url"
                            value={contact.socials?.facebook || ''}
                            onChange={(e) => handleSocialChange('facebook', e.target.value)}
                            placeholder="https://facebook.com/..."
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Instagram</label>
                        <input
                            type="url"
                            value={contact.socials?.instagram || ''}
                            onChange={(e) => handleSocialChange('instagram', e.target.value)}
                            placeholder="https://instagram.com/..."
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Twitter</label>
                        <input
                            type="url"
                            value={contact.socials?.twitter || ''}
                            onChange={(e) => handleSocialChange('twitter', e.target.value)}
                            placeholder="https://twitter.com/..."
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>WhatsApp</label>
                        <input
                            type="url"
                            value={contact.socials?.whatsapp || ''}
                            onChange={(e) => handleSocialChange('whatsapp', e.target.value)}
                            placeholder="https://wa.me/..."
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={styles.saveBtn}
                    disabled={saving}
                >
                    {saving ? 'Saving...' : 'Save Contact Info'}
                </button>
            </form>
        </div>
    );
};

export default ContactSettings;
