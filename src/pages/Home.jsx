import React from 'react';
import Hero from '../components/Hero';
import content from '../content.json';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />

            {/* Featured Services Preview */}
            <section className={styles.servicesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div>
                            <h2 className={styles.sectionTitle}>Our Expertise</h2>
                            <p className={styles.sectionSubtitle}>Crafting digital excellence with precision.</p>
                        </div>
                        <Link to="/services" className={styles.sectionLink}>
                            View All Services <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className={styles.servicesGrid}>
                        {content.services.slice(0, 3).map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={styles.serviceCard}
                            >
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.mobileLink}>
                        <Link to="/services" className={styles.mobileLinkBtn}>
                            View All Services <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Portfolio Preview */}
            <section id="portfolio" className={styles.portfolioSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div>
                            <h2 className={styles.sectionTitle}>Selected Works</h2>
                            <p className={styles.sectionSubtitle}>A showcase of our finest digital creations.</p>
                        </div>
                        <Link to="/portfolio" className={styles.sectionLink}>
                            View Full Portfolio <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className={styles.portfolioGrid}>
                        {content.portfolio.slice(0, 2).map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={styles.portfolioItem}
                            >
                                <iframe
                                    src={item.url}
                                    title={item.title}
                                    className={styles.portfolioIframe}
                                    tabIndex="-1"
                                />
                                <div className={styles.portfolioOverlay} />
                                <div className={styles.portfolioInfo}>
                                    <h3 className={styles.portfolioTitle}>{item.title}</h3>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.portfolioLink}
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
