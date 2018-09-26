import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import PricingTableContainer from './pricing-table/containers/PricingTableContainer';
// import PricingTableContainer from './pricing-table-styled-components/containers/PricingTableContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <PricingTableContainer />
      </Fragment>
    );
  }
}

export default App;
