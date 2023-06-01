import React from 'react';
import './user-profile.css';
import { Translation } from 'react-i18next';
import TopMenu from '../../ui-common/TopMenu';
import NavBar from '../../ui-common/NavBar';
import ParallaxImage from '../../parallax/ParallaxImage';
import Footer from '../../Footer';
import ScrollButton from '../../ui-common/ScrollButton';
import UserInformationForm from './UserInformationForm';
import ChangePasswordForm from './ChangePasswordForm';
import './user-profile.css';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    const imgStyle = {
      marginRight: 'auto',
      marginLeft: 'auto'
    };
    return (
      <div>
        {/*{this.state.loaded ? null :<LoadingSpinner/>}*/}
        <Translation>{(t) => <TopMenu t={t} />}</Translation>
        <NavBar />
        <div className="container py-4">
          <div className="row">
            <div className="col-4">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action active">Thông tin tài khoản</li>
                <li className="list-group-item list-group-item-action">Đổi mật khẩu</li>
                <li className="list-group-item list-group-item-action p-0">
                  <a href="/login" className="h-100 w-100 d-block text-inherit" style={{ padding: '12px 20px' }}>
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <UserInformationForm />
              <ChangePasswordForm />
            </div>
          </div>
        </div>
        <ParallaxImage />
        <Footer />
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    );
  }
}

export default UserProfile;

