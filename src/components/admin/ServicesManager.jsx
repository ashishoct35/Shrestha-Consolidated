import React, { useState } from 'react';
import styles from './AdminComponents.module.css';

const ServicesManager = ({ content, onSave, saving }) => {
    const [services, setServices] = useState(content?.services || []);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAdd = () => {
        setServices([...services, { title: '', description: '', icon: 'Code' }]);
        setEditingIndex(services.length);
    };

    const handleChange = (index, field, value) => {
        const updated = [...services];
        updated[index] = { ...updated[index], [field]: value };
        setServices(updated);
    };

    const handleDelete = (index) => {
        if (confirm('Are you sure you want to delete this service?')) {
            const updated = services.filter((_, i) => i !== index);
            setServices(updated);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...content, services });
        setEditingIndex(null);
    };

    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Services Manager</h2>
                <button onClick={handleAdd} className={styles.addBtn}>
                    + Add Service
                </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.itemsGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>Service #{index + 1}</h3>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(index)}
                                    className={styles.deleteBtn}
                                >
                                    Delete
                                </button>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={service.title || ''}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Description</label>
                                <textarea
                                    rows="3"
                                    value={service.description || ''}
                                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Icon</label>
                                <select
                                    value={service.icon || 'Code'}
                                    onChange={(e) => handleChange(index, 'icon', e.target.value)}
                                >
                                    <option value="Code">Code</option>
                                    <option value="ShoppingBag">Shopping Bag</option>
                                    <option value="Palette">Palette</option>
                                    <option value="Search">Search</option>
                                </select>
                            </div>
                        </div>
                    ))}
                </div>

                {services.length > 0 && (
                    <button
                        type="submit"
                        className={styles.saveBtn}
                        disabled={saving}
                    >
                        {saving ? 'Saving...' : 'Save All Services'}
                    </button>
                )}
            </form>
        </div>
    );
};

export default ServicesManager;
