import React from 'react';
import { CheckCircle } from 'lucide-react';
import contentData from '../content.json';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-fadeInUp">About Us</h1>
                    <p className="animate-fadeInUp stagger-1">
                        Building digital experiences that drive business growth
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-story animate-fadeInUp">
                        <h2>Our Story</h2>
                        <p>{contentData.about.story}</p>
                    </div>

                    <div className="about-mission animate-fadeInUp stagger-1">
                        <h2>Our Mission</h2>
                        <p>{contentData.about.mission}</p>
                    </div>
                </div>
            </section>

            <section className="section about-values">
                <div className="container">
                    <h2 className="text-center animate-fadeInUp">Our Values</h2>
                    <div className="values-grid">
                        {contentData.about.values.map((value, index) => (
                            <div key={index} className={`value-card animate-scaleIn stagger-${index + 1}`}>
                                <CheckCircle size={40} className="value-icon" />
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;
