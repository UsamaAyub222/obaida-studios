import React, { useState } from 'react';

const PhoneConsultationButton = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`phone-consultation-button ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.location.href = 'tel:+15144766190'}
    >
      <span className="phone-icon">&#9742;</span>
      {isExpanded && (
        <span className="button-text">Get Your Free Phone Consultation</span>
      )}
    </div>
  );
};

export default PhoneConsultationButton;