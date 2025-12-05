import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import contentData from '../content.json';
import './Footer.css';

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, url: contentData.social.facebook, label: 'Facebook' },
        { icon: Instagram, url: contentData.social.instagram, label: 'Instagram' },
        { icon: MessageCircle, url: contentData.social.whatsapp, label: 'WhatsApp' },
    ];


    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/pricing', label: 'Pricing' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">{contentData.company.name}</h3>
                        <p className="footer-tagline">{contentData.company.tagline}</p>
                        <p className="footer-description">{contentData.company.description}</p>

                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            {contentData.services.slice(0, 4).map((service, index) => (
                                <li key={index}>
                                    <Link to="/services">{service.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} />
                                <span>{contentData.company.address}</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href={`tel:${contentData.company.phone}`}>{contentData.company.phone}</a>
                            </li>
                            <li>
                                <Mail size={18} />
                                <a href={`mailto:${contentData.company.email}`}>{contentData.company.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {contentData.company.name}. All rights reserved.</p>
                    <p>Crafted with passion for premium digital experiences.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
