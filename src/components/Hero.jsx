import React from 'react';
import { motion } from 'framer-motion';
import content from '../content.json';
import CalendlyWidget from './CalendlyWidget';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Abstract Background Animation */}
            <div className={styles.background}>
                <div className={styles.bgOrb1} />
                <div className={styles.bgOrb2} />
                <div className={styles.bgGradient} />
            </div>

            <div className="container">
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.tagline}>
                            {content.company.tagline}
                        </h2>
                        <h1 className={`${styles.title} premium-text`}>
                            {content.hero.title}
                        </h1>
                        <p className={styles.subtitle}>
                            {content.hero.subtitle}
                        </p>

                        <div className={styles.ctaButtons}>
                            <CalendlyWidget
                                url={content.contact.calendlyLink}
                                className="btn-primary"
                                text={content.hero.cta}
                                style={{ fontSize: '1.125rem', padding: '1rem 2rem', minWidth: '200px' }}
                            />
                            <a
                                href="#portfolio"
                                className={styles.secondaryBtn}
                            >
                                View Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className={styles.scrollBox}>
                    <div className={styles.scrollDot} />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
