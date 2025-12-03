import React, { useEffect } from 'react';

const CalendlyWidget = ({ url, className, text }) => {
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);

        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'https://assets.calendly.com/assets/external/widget.css');
        head.appendChild(style);

        return () => {
            // Cleanup if necessary, though Calendly scripts are usually global
        };
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url });
        }
        return false;
    };

    return (
        <button className={className} onClick={handleClick}>
            {text}
        </button>
    );
};

export default CalendlyWidget;
