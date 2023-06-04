import React, { useState } from 'react';
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

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Translation>{(t) => <TopMenu t={t} />}</Translation>
      <NavBar />
      <div className="container py-4">
        <div className="row">
          <div className="col-4 d-none d-md-block">
            <ul className="list-group">
              <li
                onClick={() => {
                  setActiveTab(0);
                }}
                className={`list-group-item list-group-item-action ${activeTab === 0 ? 'active' : ''}`}
              >
                Thông tin tài khoản
              </li>
              <li
                onClick={() => {
                  setActiveTab(1);
                }}
                className={`list-group-item list-group-item-action ${activeTab === 1 ? 'active' : ''}`}
              >
                Đổi mật khẩu
              </li>
              <li className={`list-group-item list-group-item-action p-0`}>
                <a href="/login" className="h-100 w-100 d-block text-inherit" style={{ padding: '12px 20px' }}>
                  Đăng xuất
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-none d-md-block">
              {activeTab === 0 && <UserInformationForm />}
              {activeTab === 1 && <ChangePasswordForm />}
            </div>
            <div className="d-flex d-md-none flex-column" style={{ gap: '1em' }}>
              <UserInformationForm />
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </div>
      <ParallaxImage />
      <Footer />
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </div>
  );
};

export default UserProfile;

