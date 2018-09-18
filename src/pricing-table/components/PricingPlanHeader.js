import React from 'react';

import PricingPlanButton from './PricingPlanButton';

// Main plan header, spans entire plan column width
// Note: planType prop is used for setting plan blocks img background modifier class & btn modifier
const PricingPlanHeader = (props) => {
  const { planType } = props;

  return (
    <div className="pricing-header">
      <div className="pricing-header__img-wrapper">
        <div className={`pricing-header__img pricing-header__img--${planType}`}></div>
      </div>
      <div className="pricing-header__title">{planType}</div>
      <div className="pricing-header__price pricing-header__price--contact">Contact Us</div>
      <div>To Learn More</div>
      <div></div>
      <PricingPlanButton planType={planType} />
    </div>
  );
};

export default PricingPlanHeader;