import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import CalendlyButton from '../components/CalendlyButton';
import contentData from '../content.json';
import './Contact.css';

const Contact = () => {
    const socialLinks = [
        { icon: Facebook, url: contentData.social.facebook, label: 'Facebook', color: '#1877F2' },
        { icon: Instagram, url: contentData.social.instagram, label: 'Instagram', color: '#E4405F' },
        { icon: MessageCircle, url: contentData.social.whatsapp, label: 'WhatsApp', color: '#25D366' },
    ];


    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-fadeInUp">{contentData.contact.title}</h1>
                    <p className="animate-fadeInUp stagger-1">{contentData.contact.description}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info animate-slideInLeft">
                            <div className="contact-card">
                                <h3>Get in Touch</h3>
                                <p className="contact-text">We're here to help bring your vision to life.</p>

                                <div className="contact-methods">
                                    <div className="contact-method">
                                        <Phone size={24} />
                                        <div>
                                            <strong>Call Us</strong>
                                            <a href={`tel:${contentData.company.phone}`}>{contentData.company.phone}</a>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <Mail size={24} />
                                        <div>
                                            <strong>Email Us</strong>
                                            <a href={`mailto:${contentData.company.email}`}>{contentData.company.email}</a>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <MapPin size={24} />
                                        <div>
                                            <strong>Visit Us</strong>
                                            <span>{contentData.company.address}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-social">
                                    <h4>Connect With Us</h4>
                                    <div className="social-links">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link"
                                                style={{ '--social-color': social.color }}
                                                title={social.label}
                                            >
                                                <social.icon size={24} />
                                                <span>{social.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="contact-cta">
                                    <h4>Schedule a Consultation</h4>
                                    <p>Book a free consultation to discuss your project</p>
                                    <CalendlyButton text="Book Now" variant="primary" />
                                </div>
                            </div>
                        </div>

                        <div className="contact-map animate-slideInRight">
                            <div className="map-wrapper">
                                <iframe
                                    src={contentData.contact.mapEmbedUrl}
                                    title="Office Location"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Contact;
