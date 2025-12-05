import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CalendlyButton from '../components/CalendlyButton';
import PortfolioCard from '../components/PortfolioCard';
import contentData from '../content.json';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `url(/images/hero_background.jpg)` }}>
                <div className="overlay-gradient"></div>
                <div className="container">
                    <div className="hero-content animate-fadeInUp">
                        <h1 className="hero-title">{contentData.hero.title}</h1>
                        <h2 className="hero-subtitle">{contentData.hero.subtitle}</h2>
                        <p className="hero-description">{contentData.hero.description}</p>

                        <div className="hero-actions">
                            <CalendlyButton text={contentData.hero.ctaText} variant="primary" />
                            <Link to="/portfolio" className="btn btn-outline">
                                View Our Work <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {contentData.stats.map((stat, index) => (
                            <div key={index} className={`stat-item animate-scaleIn stagger-${index + 1}`}>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="animate-fadeInUp">Our Premium Services</h2>
                        <p className="text-muted animate-fadeInUp stagger-1">
                            Comprehensive web solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {contentData.services.slice(0, 3).map((service, index) => (
                            <div key={service.id} className={`service-card animate-fadeInUp stagger-${index + 1}`}>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
                        <Link to="/services" className="btn btn-primary">
                            View All Services <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* Featured Projects Section */}
            <section className="section portfolio-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="animate-fadeInUp">Featured Projects</h2>
                        <p className="text-muted animate-fadeInUp stagger-1">
                            Explore some of our recent premium web development projects
                        </p>
                    </div>

                    <div className="portfolio-grid grid grid-2">
                        {contentData.portfolio.filter(project => ['hotel', 'calcfusion'].includes(project.id)).map((project) => (
                            <PortfolioCard key={project.id} project={project} />
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
                        <Link to="/portfolio" className="btn btn-outline">
                            View Full Portfolio <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;
