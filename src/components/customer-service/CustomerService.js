import React from 'react';
import './CustomerService.css';
import { ParallaxHover } from 'react-parallax-hover';
import { FormattedMessage } from 'react-intl';
import { ParallaxCards } from './ParallaxCards';

class CustomerService extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    // console.log(window.innerWidth);
  }

  render() {
    const imgStyle = {
      marginRight: 'auto',
      marginLeft: 'auto'
    };
    return (
      <div>
        <div className="container">
          <br />

          <div className="row row-cols-auto service-container">
            <div className="col-6 col-lg-3 py-2 service-tag">
              <a className="icon-image">
                <img
                  src={require('./service-image/delivery.ico')}
                  onMouseOver={(e) => (e.currentTarget.src = require('./service-image/delivery-hover.ico'))}
                  onMouseOut={(e) => (e.currentTarget.src = require('./service-image/delivery.ico'))}
                  alt=""
                />
              </a>
              <div className="content">
                <div className="service-title">
                  <FormattedMessage id="free delivery" />
                </div>
                <div className="service_other_text">
                  <FormattedMessage id="free shipping on all order" />
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 py-2 service-tag">
              <a className="icon-image">
                {' '}
                <img
                  src={require('./service-image/pack-money.ico')}
                  onMouseOver={(e) => (e.currentTarget.src = require('./service-image/pack-money-hover.ico'))}
                  onMouseOut={(e) => (e.currentTarget.src = require('./service-image/pack-money.ico'))}
                  alt=""
                />{' '}
              </a>
              <div className="content">
                <div className="service-title">
                  <FormattedMessage id="money return" />
                </div>
                <div className="service_other_text">
                  <FormattedMessage id="back guarantee in 7 days" />
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 py-2 service-tag">
              <a className="icon-image">
                <img
                  src={require('./service-image/discount.ico')}
                  onMouseOver={(e) => (e.currentTarget.src = require('./service-image/discount-hover.ico'))}
                  onMouseOut={(e) => (e.currentTarget.src = require('./service-image/discount.ico'))}
                  alt=""
                />{' '}
              </a>
              <div className="content">
                <div className="service-title">
                  <FormattedMessage id="member discount" />
                </div>
                <div className="service_other_text">
                  <FormattedMessage id="on every order over $130.00" />
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 py-2 service-tag">
              <a className="icon-image">
                <img
                  src={require('./service-image/return.ico')}
                  onMouseOver={(e) => (e.currentTarget.src = require('./service-image/return-hover.ico'))}
                  onMouseOut={(e) => (e.currentTarget.src = require('./service-image/return.ico'))}
                  alt=""
                />{' '}
              </a>
              <div className="content">
                <div className="service-title">
                  <FormattedMessage id="return policy" />
                </div>
                <div className="service_other_text">
                  <FormattedMessage id="support 24 hours a day" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>

      </div>
    );
  }
}

export default CustomerService;
