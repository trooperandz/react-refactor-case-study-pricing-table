import React from 'react';

import PricingPlanButton from './PricingPlanButton';

// Main plan header, spans entire plan column width
const PricingPlanHeader = (props) => {
  const { planType, planDuration } = props;
  console.log('planDuration in PricingPlanHeader: ', planDuration);
  let planPrice;
  let annualPaymentTotal; // '...paid annually'
  let savingsPerYear = '';

  // Hides the 'savings per year' element if monthly duration is active
  const HIDDEN_DESCRIPTION_CLASS = 'pricing-header__price-description--hidden';
  let hiddenDescriptionActiveClass = '';

  // TODO: finalize price fetching sources and actual calculations...
  switch(planType) {
    case 'professional':
      if (planDuration === 'monthly') {
        planPrice = 29;
        annualPaymentTotal = 348;
        hiddenDescriptionActiveClass = HIDDEN_DESCRIPTION_CLASS;
      } else {
        planPrice = 23;
        annualPaymentTotal = 276;
        savingsPerYear = 72;
      }
      break;
    case 'ecommerce':
      if (planDuration === 'monthly') {
        planPrice = 79;
        annualPaymentTotal = 948;
        hiddenDescriptionActiveClass = HIDDEN_DESCRIPTION_CLASS;
      } else {
        planPrice = 63;
        annualPaymentTotal = 756;
        savingsPerYear = 192;
      }
      break;
    case 'growth':
      planPrice = 'Contact Us';
      break;
    default:
      planPrice = '';
  }

  // Most plan headers have identical structure; the growth plan is a bit different...
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
          <div className="pricing-header__price">
            <span className="pricing-header__price-dollar">$</span>
            <span className="pricing-header__price-number">{planPrice}</span>
            <span className="pricing-header__price-sub">/mo</span>
          </div>
          <div className="pricing-header__price-description">${annualPaymentTotal} paid annually</div>
          <div className={`pricing-header__price-description ${hiddenDescriptionActiveClass}`}>You save ${savingsPerYear} per year</div>
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