// TODO: get new stylesheet integrated, or do styled components...

/**
 * Simplified React structure overview:
 * <pricing-table-wrapper>
 *   <pricing-plan-wrapper>
 *     <PricingPlanHeader />
 *     <PricingFeaturesColumn />
 *     <PricingPlanFooter />
 *   </>
 *  </>
 */

import React from 'react';

import PricingFeatureTitleDesktopColumn from '../components/PricingFeatureTitleDesktopColumn';
import PricingPlanToggle from '../components/PricingPlanToggle';
import PricingPlanContainer from './PricingPlanContainer';

import pricingPlanActions from '../actions/pricingPlanActions';

// Main pricing container, highest level component wrapper
class PricingTableContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planDuration: 'monthly',
    };

    this.onTogglePlanDuration = this.onTogglePlanDuration.bind(this);
  }

  // Toggle monthly/yearly plan duration
  onTogglePlanDuration() {
    const { planDuration } = this.state;

    this.setState({
      planDuration: (planDuration === 'monthly' ? 'yearly' : 'monthly'),
    });
  }

  // Build each individual pricing plan column container, contains header, features, and footer
  renderPricingPlanColumns() {
    const { planDuration } = this.state;

    const planArr = Object.keys(pricingPlanActions.getPlanFeatures());

    const pricingPlans = planArr.map((planType) => {
      return (
        <PricingPlanContainer
          key={planType}
          planType={planType}
          planDuration={planDuration}
        />
      );
    });

    return pricingPlans;
  }

  render() {
    const { planDuration } = this.state;

    return (
      <React.Fragment>
        <PricingPlanToggle onToggle={this.onTogglePlanDuration} planDuration={planDuration} />
        <div className="pricing-table-wrapper">
          {/* Our first features column is unique with extra spaces; consolidate into other fn's eventually... */}
          <PricingFeatureTitleDesktopColumn />
          {this.renderPricingPlanColumns()}
        </div>
      </React.Fragment>
    );
  }
}

export default PricingTableContainer;