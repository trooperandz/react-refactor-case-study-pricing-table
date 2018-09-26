import React from 'react';

import pricingPlanActions from '../actions/pricingPlanActions';

const PricingFeatureValueRow = (props) => {
  const getFormattedFeatureValueRow = () => {
    const { planType } = props;

    const currentPlan = pricingPlanActions.getPlanFeatures()[planType];

    const featureValueRows = currentPlan.map(({ featureSlug, featureTitle, value }) => {
      let pricingRowContent;

      if (Array.isArray(value)) {
        const subfeatureItems = value.map((subfeature) => {
          return <p className="pricing-row__subfeature">{subfeature}</p>;
        });

        pricingRowContent = (
          <div className="pricing-row__subfeature-list">
            {subfeatureItems}
          </div>
        );
      } else if (value.toString().indexOf('icon') > -1) {
        const iconType = value.split('-')[1];

        pricingRowContent = (
          <div className={`pricing-row__icon pricing-row__icon--${iconType}`}></div>
        );
      } else if (value.toString().includes('Basic') || value.toString().includes('Pro')) {
        pricingRowContent = <div className="pricing-row__feature-detail">{value}</div>; // TODO: give this a class etc
      } else {
        pricingRowContent = <div className="pricing-row__feature">{value}</div>;
      }

      return (
        <div className={`pricing-row pricing-row--${featureSlug}`} key={featureTitle}>
          {pricingRowContent}
        </div>
      );
    });

    return featureValueRows;
  };

  return (
    <div className="pricing-feature-col-wrapper">
      {getFormattedFeatureValueRow()}
    </div>
  );
};

export default PricingFeatureValueRow;