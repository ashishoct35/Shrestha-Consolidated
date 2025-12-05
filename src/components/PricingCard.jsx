import React from 'react';
import { Check, Star } from 'lucide-react';
import CalendlyButton from './CalendlyButton';
import contentData from '../content.json';
import './PricingCard.css';

const PricingCard = () => {
    return (
        <section className="pricing-section section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="animate-fadeInUp">Our Plans</h2>
                    <p className="text-muted animate-fadeInUp stagger-1">
                        Flexible pricing options designed to grow with your business
                    </p>
                </div>

                <div className="pricing-grid">
                    {contentData.pricing.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`pricing-card animate-fadeInUp stagger-${index + 1} ${plan.isPopular ? 'popular' : ''}`}
                        >
                            {plan.isPopular && (
                                <div className="popular-badge">
                                    <Star size={16} fill="var(--color-secondary)" />
                                    <span>Most Popular</span>
                                </div>
                            )}

                            <h3 className="plan-name">{plan.name}</h3>
                            <p className="plan-description">{plan.description}</p>

                            <div className="pricing-details">
                                <div className="price-item">
                                    <span className="price-label">One-Time Setup</span>
                                    <span className="price-value">{plan.setupPrice}</span>
                                </div>
                                <div className="price-item">
                                    <span className="price-label">Recurring Cost</span>
                                    <span className="price-value recurring">{plan.recurringPrice}</span>
                                </div>
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={20} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="plan-cta">
                                <CalendlyButton
                                    text="Get Started"
                                    variant={plan.isPopular ? "primary" : "outline"}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <p className="vat-disclaimer text-center text-muted">
                    * All prices are exclusive of VAT
                </p>
            </div>
        </section>
    );
};

export default PricingCard;
