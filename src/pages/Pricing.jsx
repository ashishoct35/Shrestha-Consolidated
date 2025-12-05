import React from 'react';
import PricingCard from '../components/PricingCard';
import CalendlyButton from '../components/CalendlyButton';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricing-page">
            <section className="page-hero">
                <div className="container">
                    <h1 className="animate-fadeInUp">Transparent Pricing Plans</h1>
                    <p className="animate-fadeInUp stagger-1">Choose the perfect plan for your business needs</p>
                </div>
            </section>

            <PricingCard />

            <section className="section pricing-cta">
                <div className="container">
                    <div className="pricing-cta-content">
                        <h2 className="animate-fadeInUp">Not Sure Which Plan is Right for You?</h2>
                        <p className="animate-fadeInUp stagger-1">
                            Let's discuss your specific needs and find the perfect solution for your business.
                        </p>
                        <div className="animate-fadeInUp stagger-2">
                            <CalendlyButton text="Schedule a Free Consultation" variant="primary" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
