import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentStep  }) => {
  return (
    <div className="progress-bar">
      <div className={`circle ${currentStep >= 1 ? 'active' : ''}`}>
        <div className="label">Booking</div>
      </div>
      <div className={`line ${currentStep >= 2 ? 'active' : ''}`}></div>
      <div className={`circle ${currentStep >= 2 ? 'active' : ''}`}>
        <div className="label">Billed</div>
      </div>
      <div className={`line ${currentStep >= 3 ? 'active' : ''}`}></div>
      <div className={`circle ${currentStep >= 3 ? 'active' : ''}`}>
        <div className="label">Payment</div>
      </div>
    </div>
  );
};

export default ProgressBar;
