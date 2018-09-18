import React from 'react';

import PricingPlanHeader from '../components/PricingPlanHeader';
import PricingFeaturesColumn from '../components/PricingFeaturesColumn';
import PricingPlanFooter from '../components/PricingPlanFooter';

// Entire plan container, houses header, feature columns & footer
// Note: planType prop is used for setting plan background modifier class
const PricingPlanContainer = (props) => {
  const { planType } = props;

  return (
    <div className={`pricing-plan-wrapper pricing-plan-wrapper--${planType}`}>
      <PricingPlanHeader planType={planType} />
      <PricingFeaturesColumn planType={planType} />
      <PricingPlanFooter planType={planType} />
    </div>
  );
};

export default PricingPlanContainer;