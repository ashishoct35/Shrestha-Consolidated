import React from 'react';
import { CheckCircle } from 'lucide-react';
import CalendlyButton from '../components/CalendlyButton';
import contentData from '../content.json';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-fadeInUp">Our Services</h1>
                    <p className="animate-fadeInUp stagger-1">
                        Comprehensive web development solutions tailored to your business goals
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {contentData.services.map((service, index) => (
                        <div key={service.id} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''} animate-fadeInUp stagger-${(index % 3) + 1}`}>
                            <div className="service-detail-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-detail-content">
                                <h2>{service.title}</h2>
                                <p className="service-detail-description">{service.description}</p>

                                <h4>Key Features:</h4>
                                <ul className="service-features-list">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={20} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <CalendlyButton text="Get Started" variant="primary" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
