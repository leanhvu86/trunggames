import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../constants/userActions';
import LocaleOptions from './Locale';

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
          <Link
            to="/profile"
            className="d-flex align-items-center text-decoration-none font-weight-bold text-white"
            style={{ fontFamily: 'inherit' }}
          >
            <span>Nguyen Van A</span>
          </Link>
          <button onClick={this.handleLogOut} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    language: state.language,
    packageCount: state.packageCount
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

