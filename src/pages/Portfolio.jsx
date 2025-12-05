import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import CalendlyButton from '../components/CalendlyButton';
import contentData from '../content.json';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-fadeInUp">Our Portfolio</h1>
                    <p className="animate-fadeInUp stagger-1">
                        Explore our latest projects with live website previews. Click any project to visit the live site.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="portfolio-grid">
                        {contentData.portfolio.map((project, index) => (
                            <div key={project.id} className={`animate-fadeInUp stagger-${(index % 3) + 1}`}>
                                <PortfolioCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section portfolio-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Start Your Project?</h2>
                        <p>Let's create something amazing together</p>
                        <CalendlyButton text="Schedule a Consultation" variant="primary" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
