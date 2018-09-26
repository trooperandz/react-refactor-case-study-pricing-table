import React from 'react';

import PricingPlanButton from './PricingPlanButton';

// Bottom-most row of main pricing plan column, contains buy button
const PricingPlanFooter = (props) => {
  const { planType } = props;

  return (
    <div className="pricing-row pricing-row--button">
      <PricingPlanButton planType={planType} />
    </div>
  );
};

export default PricingPlanFooter;