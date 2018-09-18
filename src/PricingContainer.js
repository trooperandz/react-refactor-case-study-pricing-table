// TODO: break out components into other files later...
// TODO: Use all class-based components until we know what's up, & structure is finalized...
// TODO: Get styles going

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

// Test data structure
const getPlanFeatures = () => {
  return {
    professional: [
      { featureSlug: 'revenue', featureTitle: 'Revenue', value: 'N/A' },
      { featureSlug: 'subscribers', featureTitle: 'Subscribers', value: 1000 },
      { featureSlug: 'sites', featureTitle: 'Sites', value: 1 },
      { featureSlug: 'seats', featureTitle: 'Seats', value: 2 },
      { featureSlug: 'ecommerce-integrations', featureTitle: 'Shopify & Woocommerce Integrations', value: 'icon-x' },
      { featureSlug: 'discount-codes', featureTitle: 'Discount Codes', value: 'icon-x' },
      {
        featureSlug: 'message-center',
        featureTitle: 'Message Center',
        value: [
          'Auto Response Email',
          'Email Campaign',
          'Browser Push Notification',
        ],
      },
      {
        featureSlug: 'forms',
        featureTitle: 'Forms Features',
        value: [
          'Pro Design Tools',
          'Basic Templates',
          'Basic Visitor Targeting',
          'Click Triggers',
          'Content Upgrades',
        ],
      },
      { featureSlug: 'remove-sumo-branding', featureTitle: 'Remove Sumo Branding', value: 'icon-checkmark' },
      { featureSlug: 'sumo-support', featureTitle: 'Sumo Support', value: 'Basic' },
      { featureSlug: 'email-integrations', featureTitle: 'Email Integrations', value: 'Basic' },
      { featureSlug: 'analytics', featureTitle: 'Analytics', value: 'Pro' },
      { featureSlug: 'ab-tests', featureTitle: 'A/B Tests', value: 'icon-checkmark' },
    ],
    ecommerce: [
      { featureSlug: 'revenue', featureTitle: 'Revenue', value: 'Up to $50k' },
      { featureSlug: 'subscribers', featureTitle: 'Subscribers', value: 'Unlimited' },
      { featureSlug: 'sites', featureTitle: 'Sites', value: 3 },
      { featureSlug: 'seats', featureTitle: 'Seats', value: 10 },
      { featureSlug: 'ecommerce-integrations', featureTitle: 'Shopify & Woocommerce Integrations', value: 'icon-checkmark' },
      { featureSlug: 'discount-codes', featureTitle: 'Discount Codes', value: 'icon-checkmark' },
      {
        featureSlug: 'message-center',
        featureTitle: 'Message Center',
        value: [
          'Auto Response Email',
          'Email Campaign',
          'Browser Push Notification',
          'Chat',
        ],
      },
      {
        featureSlug: 'forms',
        featureTitle: 'Forms Features',
        value: [
          'Pro Design Tools',
          'Basic Templates',
          'Basic Visitor Targeting',
          'Click Triggers',
          'Content Upgrades',
          'Cart Casino Forms',
        ],
      },
      { featureSlug: 'remove-sumo-branding', featureTitle: 'Remove Sumo Branding', value: 'icon-checkmark' },
      { featureSlug: 'sumo-support', featureTitle: 'Sumo Support', value: 'Basic' },
      { featureSlug: 'email-integrations', featureTitle: 'Email Integrations', value: 'Pro' },
      { featureSlug: 'analytics', featureTitle: 'Analytics', value: 'Pro' },
      { featureSlug: 'ab-tests', featureTitle: 'A/B Tests', value: 'icon-checkmark' },
    ],
    growth: [
      { featureSlug: 'revenue', featureTitle: 'Revenue', value: 'Unlimited' },
      { featureSlug: 'subscribers', featureTitle: 'Subscribers', value: 'Unlimited' },
      { featureSlug: 'sites', featureTitle: 'Sites', value: 'Unlimited' },
      { featureSlug: 'seats', featureTitle: 'Seats', value: 'Unlimited' },
      { featureSlug: 'ecommerce-integrations', featureTitle: 'Shopify & Woocommerce Integrations', value: 'icon-checkmark' },
      { featureSlug: 'discount-codes', featureTitle: 'Discount Codes', value: 'icon-checkmark' },
      {
        featureSlug: 'message-center',
        featureTitle: 'Message Center',
        value: [
          'Auto Response Email',
          'Email Campaign',
          'Browser Push Notification',
          'Chat',
        ],
      },
      {
        featureSlug: 'forms',
        featureTitle: 'Forms Features',
        value: [
          'Pro Design Tools',
          'Basic Templates',
          'Basic Visitor Targeting',
          'Click Triggers',
          'Content Upgrades',
          'Cart Casino Forms',
        ],
      },
      { featureSlug: 'remove-sumo-branding', featureTitle: 'Remove Sumo Branding', value: 'icon-checkmark' },
      { featureSlug: 'sumo-support', featureTitle: 'Sumo Support', value: 'Pro' },
      { featureSlug: 'email-integrations', featureTitle: 'Email Integrations', value: 'Pro' },
      { featureSlug: 'analytics', featureTitle: 'Analytics', value: 'Pro' },
      { featureSlug: 'ab-tests', featureTitle: 'A/B Tests', value: 'icon-checkmark' },
    ],
  };
};

// Hacky; consolidate w/ existing fn etc.  Just for testing render of very first desktop feature column now...
// This row has an empty container at the top and bottom (which is the header and footer for the plan columns)
// Our plans are always going to have the same # of features since we are going w/ a table-type comparison structure,
// so we just use the first plan data object to populate it
const getFirstColumnPlanFeatures = () => {
  const planArr = Object.values(getPlanFeatures());

  const features = planArr.reduce((returnArr, plan, i) => {
    if (i === 0) {
      // Add the empty top & bottom row array elements to produce our empty spaces
      plan.unshift({ featureSlug: '', featureTitle: '' });
      plan.push({ featureSlug: '', featureTitle: '' });

      const planData = plan.map(({ featureSlug, featureTitle, value }, i) => {
        if (i === 0) { // empty header row
          return (
            <div className="pricing-header" key={'pricing-header'}>
              <div></div>
            </div>
          );
        } else if (i === (plan.length - 1)) { // empty button row
          return (
            <div className="pricing-row pricing-row--button" key={`button-${i}`}></div>
          );
        } else {
          return (
            <div className={`pricing-row pricing-row--${featureSlug}`} key={featureTitle}>
              <div className="pricing-row__feature">{featureTitle}</div>
            </div>
          );
        }
      });

      returnArr.push(planData);
    }

    return returnArr;
  }, []);

  return features;
};

// Render out feature names for testing; just make it global for now
const getFormattedPlanFeatures = (planType) => {
  const currentPlan = getPlanFeatures()[planType];

  const features = currentPlan.map(({ featureSlug, featureTitle, value }) => {
    return (
      <div className={`pricing-row pricing-row--${featureSlug}`} key={featureTitle}>
        <div className="pricing-row__feature">{featureTitle}</div>
      </div>
    );
  });

  return features;
};

// Complementary rows to our main feature title rows; contains detail values for each feature for
// its perspective plan (can contain icon, text, or a list of items)
// TODO: make this cleaner; split up into components etc
const getFormattedFeatureValues = (planType) => {
  const currentPlan = getPlanFeatures()[planType];

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
}

// First column on left, with main feature headings; prob want to make this a part of another existing method,
// but it's kind of unique with its empty spaces...do this for now
class PricingFeaturesDesktopColumn extends React.Component {
  render() {
    return (
      <div className="pricing-feature-col-wrapper pricing-feature-col-wrapper--categories">
        {getFirstColumnPlanFeatures()}
      </div>
    );
  }
};

// Column that contains each plan's feature column & feature value column;
// These columns sit side-by-side like a table; first one shows only on mobile.
// Placed directly under the main plan header, and above the footer component.
class PricingFeaturesColumn extends React.Component {
  render() {
    const { planType } = this.props;

    return (
      <div className="pricing-features-wrapper">
        <PricingFeatureRows planType={planType} />
        <PricingFeatureValueRows planType={planType} />
      </div>
    );
  }
}

// Main plan header, spans entire plan column width
// Note: planType prop is used for setting plan blocks img background modifier class & btn modifier
class PricingPlanHeader extends React.Component {
  render() {
    const { planType } = this.props;

    return (
      <div className="pricing-header">
        <div className="pricing-header__img-wrapper">
          <div className={`pricing-header__img pricing-header__img--${planType}`}></div>
        </div>
        <div className="pricing-header__title">{planType}</div>
        <div className="pricing-header__price pricing-header__price--contact">Contact Us</div>
        <div>To Learn More</div>
        <div></div>
        <PricingPlanButton planType={planType} />
      </div>
    );
  }
}

// Bottom-most row of main pricing plan column, contains buy button
class PricingPlanFooter extends React.Component {
  render() {
    const { planType } = this.props;

    return (
      <div className="pricing-row pricing-row--button">
        <PricingPlanButton planType={planType} />
      </div>
    );
  }
}

// The Button itself, used in header and footer
// Note: planType prop is used for setting button modifier class
class PricingPlanButton extends React.Component {
  render() {
    const { planType } = this.props;
    console.log('planType in PricingPlanButton: ', planType);
    let modifierClass = (planType === 'ecommerce' ? 'primary' : 'secondary');

    return (
      <a className={`pricing-button pricing-button--${modifierClass}`}>Try 14-day free trial</a>
    );
  }
}

// Rows within each pricing plan feature column; contains the feature title (mobile-only)
class PricingFeatureRows extends React.Component {
  render() {
    const { planType } = this.props;

    return (
      <div className="pricing-feature-col-wrapper pricing-feature-col-wrapper--categories pricing-feature-col-wrapper--mobile-only">
        {getFormattedPlanFeatures(planType)}
      </div>
    );
  }
}

// Rows within each pricing plan value column; contains each feature's values (sometimes a list)
class PricingFeatureValueRows extends React.Component {
  render() {
    const { planType } = this.props;

    return (
      <div className="pricing-feature-col-wrapper">
        {getFormattedFeatureValues(planType)}
      </div>
    );
  }
}

// Entire plan container, houses header, feature columns & footer
// Note: planType prop is used for setting plan background modifier class
class PricingPlan extends React.Component {
  render() {
    const { planType } = this.props;

    return (
      <div className={`pricing-plan-wrapper pricing-plan-wrapper--${planType}`}>
        <PricingPlanHeader planType={planType} />
        <PricingFeaturesColumn planType={planType} />
        <PricingPlanFooter planType={planType} />
      </div>
    );
  }
}

// Main pricing container, highest level component wrapper
class PricingContainer extends React.Component {
  renderPlans() {
    const planArr = Object.keys(getPlanFeatures());

    return planArr.map(planType => <PricingPlan planType={planType} />);
  }

  render() {
    return (
      <React.Fragment>
        <div className="pricing-table-wrapper">
          {/* Our first features column is unique with extra spaces; consolidate into other fn's eventually... */}
          <PricingFeaturesDesktopColumn />
          {this.renderPlans()}
        </div>
      </React.Fragment>
    );
  }
}

export default PricingContainer;