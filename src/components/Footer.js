import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    render() {
        return (
            <footer id="colophon" className="site-footer" role="contentinfo">
                <div className="row py-4 px-2 container m-auto">
                    <div className="col col-lg-3 col-md-6 col-sm-6">
                        <div>
                            <p className="footer-title">
                                <FormattedMessage id="address info"/>
                            </p>
                            <p className="footer-item">
                                <i className="fa fa-phone " aria-hidden="true"/>
                                &nbsp;&nbsp;(+84)&nbsp;787&nbsp;652&nbsp;222
                            </p>
                            <p className="footer-item">
                                <i className="fa fa-envelope " aria-hidden="true"/>
                                &nbsp;&nbsp;trunggame2512@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-6 d-none d-sm-block">
                        <div>
                            <p className="footer-title">
                                <FormattedMessage id="information"/>
                            </p>
                            <p className="footer-item">
                                <a className="footer-item"> <FormattedMessage id="contact"/>
                                </a>
                            </p>
                            <p className="footer-item">
                                <Link to="/about-us" className="footer-item">
                                    <FormattedMessage id="about_us"/>
                                </Link>
                            </p>
                            <p className="footer-item">
                                <Link to="/blog" className="footer-item">
                                    Blog
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-6 d-none d-sm-block">
                        <div>
                            <p className="footer-title">
                                <FormattedMessage id="extras"/>
                            </p>
                            <p className="footer-item">
                                <Link to="/cart" className="footer-item">
                                    <FormattedMessage id="cart"/>
                                </Link>
                            </p>
                            <p className="footer-item">
                                <Link to="/top-sale" className="footer-item">
                                    <FormattedMessage id="best sale"/>

                                </Link>
                            </p>
                            <p className="footer-item">
                                <Link to="/user-profile" className="footer-item">
                                    <FormattedMessage id="profile"/>

                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-6">
                        <p className="footer-title">
                            <FormattedMessage id="our newsletter"/>
                        </p>
                        <p className="footer-item">
                            <FormattedMessage id="footer-message"/>

                        </p>

                        <input
                            className="c-form__input"
                            placeholder="E-mail"
                            type="email"
                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                            required
                        />
                        <br/>
                        <br/>
                        <p className="footer-item" style={{alignItem: 'center'}}>
                            <a href="https://www.facebook.com/TrungGames"><img
                                src={require('./share-image/icons8-facebook-32.png')} alt=""/></a>
                            <a href="https://zalo.me/0787652222"><img
                                src={require('./share-image/icons8-zalo-32.png')} alt=""/></a>
                            <a href="https://www.instagram.com/trung_games/"><img
                                src={require('./share-image/icons8-instagram-32.png')} alt=""/></a>
                            <a href="https://t.me/TrungGames"><img
                                src={require('./share-image/icons8-telegram-app-32.png')} alt=""/></a>
                        </p>
                    </div>
                </div>
                <div className="underline-footer"/>
                <div className=" row copy-right"> Copy right &#169; 2023 Trung Games</div>
            </footer>
        );
    }
}

export default Footer;
