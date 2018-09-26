import React from 'react';

import PricingFeatureTitleRow from './PricingFeatureTitleRow';
import PricingFeatureValueRow from './PricingFeatureValueRow';

// Column that contains each plan's feature column & feature value column;
// These columns sit side-by-side like a table; first one shows only on mobile.
// Placed directly under the main plan header, and above the footer component.
const PricingFeaturesColumn = (props) => {
  const { planType } = props;

  return (
    <div className="pricing-features-wrapper">
      <PricingFeatureTitleRow planType={planType} />
      <PricingFeatureValueRow planType={planType} />
    </div>
  );
};

export default PricingFeaturesColumn;