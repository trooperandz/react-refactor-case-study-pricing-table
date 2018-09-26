import React from 'react';

import pricingPlanActions from '../actions/pricingPlanActions';

/**
 * First pricing column on left, with main feature headings; prob want to make this a part of another
 * existing method, but it's kind of unique with its empty spaces...do this for now.
 * Shown only on desktop.
 */
const PricingFeatureTitleDesktopColumn = (props) => {
  // Hacky; consolidate w/ existing fn etc.  Just for testing render of very first desktop feature column now...
  // This row has an empty container at the top and bottom (which is the header and footer for the plan columns)
  // Our plans are always going to have the same # of features since we are going w/ a table-type comparison structure,
  // so we just use the first plan data object to populate it
  const getFirstColumnPlanFeatures = () => {
    const planArr = Object.values(pricingPlanActions.getPlanFeatures());

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

  return (
    <div className="pricing-feature-col-wrapper pricing-feature-col-wrapper--categories">
      {getFirstColumnPlanFeatures()}
    </div>
  );
};

export default PricingFeatureTitleDesktopColumn;