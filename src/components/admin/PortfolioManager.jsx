import React, { useState } from 'react';
import styles from './AdminComponents.module.css';

const PortfolioManager = ({ content, onSave, saving }) => {
    const [portfolio, setPortfolio] = useState(content?.portfolio || []);

    const handleAdd = () => {
        setPortfolio([...portfolio, { title: '', url: '', image: '' }]);
    };

    const handleChange = (index, field, value) => {
        const updated = [...portfolio];
        updated[index] = { ...updated[index], [field]: value };
        setPortfolio(updated);
    };

    const handleDelete = (index) => {
        if (confirm('Are you sure you want to delete this portfolio item?')) {
            const updated = portfolio.filter((_, i) => i !== index);
            setPortfolio(updated);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...content, portfolio });
    };

    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Portfolio Manager</h2>
                <button onClick={handleAdd} className={styles.addBtn}>
                    + Add Portfolio Item
                </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.itemsGrid}>
                    {portfolio.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>Portfolio #{index + 1}</h3>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(index)}
                                    className={styles.deleteBtn}
                                >
                                    Delete
                                </button>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Project Title</label>
                                <input
                                    type="text"
                                    value={item.title || ''}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    required
                                    placeholder="Ashish Restaurant"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Project URL</label>
                                <input
                                    type="url"
                                    value={item.url || ''}
                                    onChange={(e) => handleChange(index, 'url', e.target.value)}
                                    required
                                    placeholder="https://example.vercel.app/"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Screenshot URL (Optional)</label>
                                <input
                                    type="url"
                                    value={item.image || ''}
                                    onChange={(e) => handleChange(index, 'image', e.target.value)}
                                    placeholder="https://example.com/screenshot.png"
                                />
                            </div>

                            {item.url && (
                                <div className={styles.previewBox}>
                                    <label>Preview:</label>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
                                        {item.url}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {portfolio.length > 0 && (
                    <button
                        type="submit"
                        className={styles.saveBtn}
                        disabled={saving}
                    >
                        {saving ? 'Saving...' : 'Save All Portfolio Items'}
                    </button>
                )}
            </form>
        </div>
    );
};

export default PortfolioManager;
