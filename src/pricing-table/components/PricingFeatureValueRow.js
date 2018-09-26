import React from 'react';

import PricingTooltip from './PricingTooltip';
import pricingPlanActions from '../actions/pricingPlanActions';

/**
 * Render non-title pricing row content.
 * Includes # seats, icons, basic/pro descriptions, subfeature lists, etc.
 */
class PricingFeatureValueRow extends React.Component {
  constructor(props) {
    super(props);
  }

  getFormattedFeatureValueRow() {
    const { planType } = this.props;

    const currentPlan = pricingPlanActions.getPlanFeatures()[planType];

    const featureValueRows = currentPlan.map(({ featureSlug, value }) => {
      let pricingRowContent;

      // Get table row content titles, and tooltip titles and descriptions
      const { featureTitle, featureDescription } = pricingPlanActions.getFeatureDetails(featureSlug, value);

      if (Array.isArray(value)) {
        const subfeatureItems = value.map(({ featureSlug }, i) => {
          const { featureTitle, featureDescription } = pricingPlanActions.getFeatureDetails(featureSlug);

          return (
            <div key={`${featureTitle}-${i}`} className="pricing-row__subfeature">
              <PricingTooltip featureTitle={featureTitle} featureDescription={featureDescription}>{featureTitle}</PricingTooltip>
            </div>
          );
        });

        pricingRowContent = (
          <div className="pricing-row__subfeature-list">
            {subfeatureItems}
          </div>
        );
      } else if (value.toString().indexOf('icon') > -1) {
        const iconType = value.split('-')[1];

        pricingRowContent = (
          <div className={`pricing-row__icon pricing-row__icon--${iconType}`}>
            <PricingTooltip featureTitle={featureTitle} featureDescription={featureDescription}>&nbsp;</PricingTooltip>
          </div>
        );
      } else if (value.toString().includes('Basic') || value.toString().includes('Pro')) {
        pricingRowContent = (
          <div className="pricing-row__feature-detail">
            <PricingTooltip featureTitle={featureTitle} featureDescription={featureDescription}>{value}</PricingTooltip>
          </div>
        );
      } else {
        pricingRowContent = (
          <div ref={this.getFeatureEl} className="pricing-row__feature-detail">
            <PricingTooltip featureTitle={featureTitle} featureDescription={featureDescription}>{value}</PricingTooltip>
          </div>
        );
      }

      return (
        <div className={`pricing-row pricing-row--${featureSlug}`} key={featureTitle}>
          {pricingRowContent}
        </div>
      );
    });

    return featureValueRows;
  }

  render() {
    return (
      <div className="pricing-feature-col-wrapper">
        {this.getFormattedFeatureValueRow()}
      </div>
    );
  }
}

export default PricingFeatureValueRow;