import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../constants/userActions';
import LocaleOptions from './Locale';
import { FormattedMessage } from 'react-intl';
import configData from "../../config.json";


class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.state = {
      click: false,
      lang: this.props.language
    };
  }

  langChange = (e) => {
    console.log('lang change' + e.target.name);
  };

  handleLogOut() {
    console.log('logout');
    this.props.logout(1);
    window.location.href = '/login';
  }

  render() {
    const { t } = this.props;

    const { lang } = this.state;
    const styleTop = {
      width: '100%',
      borderBottom: '0.5px solid #a6a6a6'
    };

    return (
      <div className="row navbar" style={styleTop}>
        <div className="row w-100 justify-content-end text-white" style={{ gap: '1em' }}>
          <LocaleOptions />
          <Link to="/cart" className="cart-icon" style={{ width: '30px', height: '30px', position: 'relative' }}>
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true" />
            <span className="total-count">{this.props.packageCount}</span>
          </Link>
          {/* <Link
            to="/profile"
            className="d-flex align-items-center text-decoration-none font-weight-bold text-white"
            style={{ fontFamily: 'inherit' }}
          >
            <span>Nguyen Van A</span>
          </Link> */}
          <div className="dropdown ml-3">
            <div
              className="dropdown-toggle d-flex align-items-center justify-content-end"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div style={{ width: '30px', height: '30px', overflow: 'hidden' }}>
                <img src="https://i.pravatar.cc/100?img=3" style={{ aspectRatio: 1 / 1, width: '100%', height: 'auto' }} />
              </div>
            </div>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ zIndex: 99999 }}>
              <div className="px-4 py-1" style={{ maxWidth: '220px' }}>
                <p
                  className="m-0 p-0 font-weight-bold"
                  style={{ whiteSpace: 'nowrap', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {this.props.user.fullName}
                </p>
                <p className="m-0 p-0 font-weight-lighter" style={{ fontSize: '0.875rem' }}>
                  Version: {configData.VERSION}
                </p>
              </div>
              <hr className="mx-1 my-1" />
              <ul className="m-0 p-0">
                <li
                  className="dropdown-item"
                  onClick={() => {
                    window.location.href = '/profile';
                  }}
                >
                  <FormattedMessage id="profile" />
                </li>
                <li onClick={this.handleLogOut} className="dropdown-item">
                  <FormattedMessage id="logout" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    language: state.language,
    packageCount: state.packageCount,
    user:state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: (id) => {
      dispatch(logout(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);

