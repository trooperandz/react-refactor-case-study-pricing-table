import React from 'react';

const PricingPlanToggle = (props) => {
  const { onToggle, planDuration } = props;

  const activeClassName = 'pricing-toggle__duration--active';
  let activeClassNameMonthly = (planDuration === 'monthly' ? activeClassName : '');
  let activeClassNameYearly = (planDuration === 'yearly' ? activeClassName : '');

  // On duration click, apply active class to selected element and trigger onToggle state change
  const setActiveToggle = () => {
    switch(planDuration) {
      case 'monthly':
        activeClassNameMonthly = activeClassName;
        activeClassNameYearly = '';
        break;
      case 'yearly':
        activeClassNameMonthly = '';
        activeClassNameYearly = activeClassName;
        break;
      default:
        break;
    }

    onToggle();
  };

  return (
    <div className="pricing-toggle">
      <div className={`pricing-toggle__duration ${activeClassNameMonthly}`} onClick={setActiveToggle}>Monthly</div>
      <div className={`pricing-toggle__duration ${activeClassNameYearly}`} onClick={setActiveToggle}>Yearly &nbsp;
        <span className="pricing-toggle__savings">(Save 20%)</span>
      </div>
    </div>
  );
};

export default PricingPlanToggle;