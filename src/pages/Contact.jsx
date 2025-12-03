import React from 'react';
import content from '../content.json';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Phone, MapPin } from 'lucide-react';
import CalendlyWidget from '../components/CalendlyWidget';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.pageHeader}
                >
                    <h1 className={`${styles.pageTitle} premium-text`}>Get in Touch</h1>
                    <p className={styles.pageSubtitle}>
                        Ready to start your project? Contact us through any of the channels below.
                    </p>
                </motion.div>

                <div className={styles.contactGrid}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.contactInfo}
                    >
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>Connect With Us</h3>

                            <div className={styles.socialsGrid}>
                                <a href={content.contact.socials.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <Facebook />
                                    <span className={styles.socialName}>Facebook</span>
                                </a>
                                <a href={content.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <Instagram />
                                    <span className={styles.socialName}>Instagram</span>
                                </a>
                                <a href={content.contact.socials.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <Twitter />
                                    <span className={styles.socialName}>Twitter</span>
                                </a>
                                <a href={content.contact.socials.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <Phone />
                                    <span className={styles.socialName}>WhatsApp</span>
                                </a>
                            </div>

                            <div className={styles.contactDetails}>
                                <div className={styles.contactDetail}>
                                    <div className={styles.contactIcon}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className={styles.contactLabel}>Call Us</p>
                                        <p className={styles.contactValue}>{content.contact.phone}</p>
                                    </div>
                                </div>
                                <div className={styles.contactDetail}>
                                    <div className={styles.contactIcon}>
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className={styles.contactLabel}>Visit Us</p>
                                        <p className={styles.contactValue}>{content.contact.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.calendlySection}>
                                <CalendlyWidget
                                    url={content.contact.calendlyLink}
                                    className={`btn-primary ${styles.calendlyBtn}`}
                                    text="Book a Consultation"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className={styles.mapWrapper}
                    >
                        <iframe
                            src={content.contact.mapEmbed}
                            className={styles.mapIframe}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
