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
import styled from 'styled-components';

import PricingFeatureTitleDesktopColumn from '../components/PricingFeatureTitleDesktopColumn';
import PricingPlanContainer from './PricingPlanContainer';

import pricingPlanActions from '../actions/pricingPlanActions';

const StyleTest = styled.div`
  background-color: gray;
  height: 200px;
  width: 200px;
`;

// Main pricing container, highest level component wrapper
class PricingTableContainer extends React.Component {
  // Build each individual pricing plan column container, contains header, features, and footer
  renderPricingPlanColumns() {
    const planArr = Object.keys(pricingPlanActions.getPlanFeatures());

    return planArr.map(planType => <PricingPlanContainer planType={planType} />);
  }

  render() {
    return (
      <React.Fragment>
        <StyleTest />
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