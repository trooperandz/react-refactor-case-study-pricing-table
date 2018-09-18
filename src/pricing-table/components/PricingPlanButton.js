import React from 'react';

// The Button itself, used in header and footer
// Note: planType prop is used for setting button modifier class
const PricingPlanButton = (props) => {
  const { planType } = props;

  let modifierClass = (planType === 'ecommerce' ? 'primary' : 'secondary');

  return (
    <a className={`pricing-button pricing-button--${modifierClass}`}>Try 14-day free trial</a>
  );
};

export default PricingPlanButton;