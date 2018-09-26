import React from 'react';

class PricingTooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldTooltipShow: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    console.log('onMouseEnter fired...');
    this.setState({
      shouldTooltipShow: true,
    });
  }

  handleMouseLeave(e) {
    console.log('onMouseLeave fired...');
    this.setState({
      shouldTooltipShow: false,
    });
  }

  render() {
    const { shouldTooltipShow } = this.state;
    const { featureDescription } = this.props;

    // Ensure min size for background images, and that all titles are perfectly centered
    const titleStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      minWidth: '24px',
      minHeight: '24px',
    };

    const activeClassName = (shouldTooltipShow ? 'pricing-tooltip--active' : '');

    return (
      <React.Fragment>
        <div style={titleStyles} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>{this.props.children}</div>
        <div className={`pricing-tooltip ${activeClassName}`}>
          {featureDescription}
        </div>
      </React.Fragment>
    );
  }
};

export default PricingTooltip;