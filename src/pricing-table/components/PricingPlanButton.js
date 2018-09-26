import React from 'react';

// The buy buttons, placed in the header and footer
const PricingPlanButton = (props) => {
  const { planType } = props;

  let modifierClass = (planType === 'ecommerce' ? 'primary' : 'secondary');

  // TODO: complete click action logic etc
  const onClickBuyButton = () => {
    console.log('clicked buy button...');
  }

  return (
    <a className={`pricing-button pricing-button--${modifierClass}`} onClick={() => onClickBuyButton()}>Try 14-day free trial</a>
  );
};

export default PricingPlanButton;