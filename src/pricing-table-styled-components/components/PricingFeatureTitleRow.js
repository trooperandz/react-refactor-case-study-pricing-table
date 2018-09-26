import React from 'react';

import pricingPlanActions from '../actions/pricingPlanActions';

// Render the feature title rows for each plan feature title column; shown on mobile only
const PricingFeatureTitleRow = (props) => {
  // Render feature title rows
  const getFormattedFeatureTitleRows = () => {
    const { planType } = props;

    const currentPlan = pricingPlanActions.getPlanFeatures()[planType];

    const features = currentPlan.map(({ featureSlug, featureTitle, value }) => {
      return (
        <div className={`pricing-row pricing-row--${featureSlug}`} key={featureTitle}>
          <div className="pricing-row__feature">{featureTitle}</div>
        </div>
      );
    });

    return features;
  };

  return (
    <div className="pricing-feature-col-wrapper pricing-feature-col-wrapper--categories pricing-feature-col-wrapper--mobile-only">
      {getFormattedFeatureTitleRows()}
    </div>
  );
};

export default PricingFeatureTitleRow;