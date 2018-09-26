import React from 'react';
import styled from 'styled-components';

let Button = styled.a`
  margin: 8px;
  padding: 24px;
  width: 200px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  background-color: ${props => props.planType === 'ecommerce' ? '#2A70E0' : '#fff'};
`;

// The Button itself, used in header and footer
// Note: planType prop is used for setting button modifier class
const PricingPlanButton = (props) => {
  const { planType } = props;

  // let modifierClass = (planType === 'ecommerce' ? 'primary' : 'secondary');

  return (
    <Button planType={planType}>Try 14-day free trial</Button>
  );
};

export default PricingPlanButton;