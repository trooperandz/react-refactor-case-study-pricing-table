import React from 'react';

import PricingPlanButton from './PricingPlanButton';

// Main plan header, spans entire plan column width
const PricingPlanHeader = (props) => {
  const { planType, planDuration } = props;
  console.log('planDuration in PricingPlanHeader: ', planDuration);
  // TODO: finalize price fetching sources...
  let planPrice;

  switch(planType) {
    case 'professional':
      planPrice = (planDuration === 'monthly' ? 53 : 63);
      break;
    case 'ecommerce':
      planPrice = (planDuration === 'monthly' ? 63 : 73);
      break;
    case 'growth':
      planPrice = 'Contact Us';
      break;
    default:
      planPrice = '';
  }

  const getPriceMarkup = () => {
    let priceMarkup;

    if (planType === 'growth') {
       priceMarkup = (
        <React.Fragment>
          <div className="pricing-header__price pricing-header__price--contact">{planPrice}</div>
          <div className="pricing-header__price-description">To Learn More</div>
          <div className="pricing-header__price-description">&nbsp;</div>
        </React.Fragment>
      );
    } else {
      priceMarkup = (
        <React.Fragment>
          <div>
          <div className="pricing-header__price">
            <span className="pricing-header__price-dollar">$</span>
            <span className="pricing-header__price-number">{planPrice}</span>
            <span className="pricing-header__price-sub">/mo</span>
          </div>
          <div className="pricing-header__price-description">$76 paid annually</div>
          <div className="pricing-header__price-description">You save $192 per year</div>
          </div>
        </React.Fragment>
      );
    }

    return priceMarkup;
  };

  return (
    <div className="pricing-header">
      <div className="pricing-header__img-wrapper">
        <div className={`pricing-header__img pricing-header__img--${planType}`}></div>
      </div>

      <div className="pricing-header__title">{planType}</div>

      <div className="pricing-header__price-wrapper">
        {getPriceMarkup()}
      </div>

      <PricingPlanButton planType={planType} />
    </div>
  );
};

export default PricingPlanHeader;