import React from 'react';
import { PopupButton } from 'react-calendly';
import { Calendar } from 'lucide-react';
import './CalendlyButton.css';

const CalendlyButton = ({ text = "Book a Consultation", variant = "primary", className = "" }) => {
  return (
    <PopupButton
      url="https://calendly.com/shresthaconsolidated/30min"
      rootElement={document.getElementById('root')}
      text={text}
      className={`calendly-btn calendly-btn-${variant} ${className}`}
      prefill={{}}
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '1a5cff',
        textColor: '0a0e27'
      }}
    />
  );
};

export default CalendlyButton;
