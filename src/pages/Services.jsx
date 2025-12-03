import React from 'react';
import content from '../content.json';
import { motion } from 'framer-motion';
import { Code, ShoppingBag, Palette, Search } from 'lucide-react';
import styles from './Services.module.css';

const iconMap = {
    Code: Code,
    ShoppingBag: ShoppingBag,
    Palette: Palette,
    Search: Search
};

const Services = () => {
    return (
        <div className={styles.servicesPage}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.pageHeader}
                >
                    <h1 className={`${styles.pageTitle} premium-text`}>Our Services</h1>
                    <p className={styles.pageSubtitle}>
                        Comprehensive digital solutions tailored to elevate your brand.
                    </p>
                </motion.div>

                <div className={styles.servicesGrid}>
                    {content.services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Code;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={styles.serviceCard}
                            >
                                <div className={styles.iconWrapper}>
                                    <Icon size={28} />
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
