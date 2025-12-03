import React from 'react';
import content from '../content.json';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    return (
        <div className={styles.portfolioPage}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.pageHeader}
                >
                    <h1 className={`${styles.pageTitle} premium-text`}>Our Portfolio</h1>
                    <p className={styles.pageSubtitle}>
                        A selection of our recent work across various industries.
                    </p>
                </motion.div>

                <div className={styles.portfolioGrid}>
                    {content.portfolio.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={styles.portfolioItem}
                        >
                            <div className={styles.portfolioHeader}>
                                <h2 className={styles.portfolioNumber}>0{index + 1}. {item.title}</h2>
                                <div className={styles.portfolioDivider} />
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.portfolioLinkBtn}
                                >
                                    Visit Live Site
                                </a>
                            </div>

                            <div className={styles.portfolioPreviewWrapper}>
                                <iframe
                                    src={item.url}
                                    title={item.title}
                                    className={styles.portfolioIframe}
                                    loading="lazy"
                                />
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.portfolioOverlay}
                                    aria-label={`Visit ${item.title}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
