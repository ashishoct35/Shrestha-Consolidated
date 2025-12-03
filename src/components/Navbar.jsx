import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import content from '../content.json';
import CalendlyWidget from './CalendlyWidget';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className="container">
                    <div className={styles.navContainer}>
                        <Link to="/" className={styles.logo}>
                            <img src={content.company.logo} alt="Logo" className={styles.logoImg} />
                            <span className={styles.logoText}>SHRESTHA</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className={styles.desktopMenu}>
                            <Link to="/" className={styles.navLink}>Home</Link>
                            <Link to="/services" className={styles.navLink}>Services</Link>
                            <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
                            <Link to="/contact" className={styles.navLink}>Contact</Link>
                            <CalendlyWidget
                                url={content.contact.calendlyLink}
                                className="btn-primary"
                                text="Book a Consultation"
                            />
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className={styles.mobileToggle}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={styles.mobileMenu}
                        >
                            <Link to="/" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Home</Link>
                            <Link to="/services" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Services</Link>
                            <Link to="/portfolio" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Portfolio</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Contact</Link>
                            <div onClick={() => setIsOpen(false)}>
                                <CalendlyWidget
                                    url={content.contact.calendlyLink}
                                    className={`btn-primary ${styles.mobileCalendly}`}
                                    text="Book a Consultation"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
