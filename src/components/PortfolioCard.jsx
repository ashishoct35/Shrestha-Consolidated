import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import './PortfolioCard.css';

const PortfolioCard = ({ project }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = () => {
        window.open(project.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="portfolio-card">
            <div className="portfolio-card-header">
                <h3>{project.title}</h3>
                <span className="portfolio-category">{project.category}</span>
            </div>

            <div className="portfolio-preview" onClick={handleClick}>
                <div className="portfolio-iframe-wrapper">
                    {!isLoaded && (
                        <div className="portfolio-loading">
                            <div className="skeleton" style={{ height: '100%' }}></div>
                        </div>
                    )}
                    <iframe
                        src={project.url}
                        title={project.title}
                        onLoad={() => setIsLoaded(true)}
                        className={isLoaded ? 'loaded' : ''}
                    />
                </div>

                <div className="portfolio-overlay">
                    <button className="portfolio-visit-btn">
                        <ExternalLink size={24} />
                        <span>Visit Live Site</span>
                    </button>
                </div>
            </div>

            <div className="portfolio-card-footer">
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
