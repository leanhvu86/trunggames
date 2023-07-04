import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {checkLoadData} from "../constants/cartActions";
import {login, logout} from "../constants/userActions";
import {connect} from "react-redux";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false};
        this.onHandleClick = this.onHandleClick.bind(this);
        this.onHandleClickSendMail = this.onHandleClickSendMail.bind(this);
    }

    onHandleClick() {
        window.open('tel:+84787652222');
    }
    onHandleClickSendMail() {
        window.open('mailto:trungbet2512@gmail.com');
    }

    render() {
        return (
            <footer id="colophon" className="site-footer" role="contentinfo">
                <div className="row py-4 px-2 container m-auto">
                    <div className="col col-lg-3 col-md-6 col-sm-6">
                        <div>
                            <p className="footer-title">
                                <FormattedMessage id="information"/>
                            </p>
                            <p className="footer-item" onClick={this.onHandleClick} style={{cursor:'pointer'}}>
                                <i className="fa fa-phone " aria-hidden="true"/>
                                &nbsp;&nbsp;(+84)&nbsp;787&nbsp;652&nbsp;222
                            </p>
                            <p className="footer-item" onClick={this.onHandleClickSendMail} style={{cursor:'pointer'}}>
                                <i className="fa fa-envelope " aria-hidden="true"/>trungbet2512@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-6 d-none d-sm-block">
                        <div>
                            <p className="footer-title">
                                <FormattedMessage id="collection"/>
                            </p>
                            <p className="footer-item">
                                <Link to="/game" className="footer-item">
                                    <FormattedMessage id="shop"/>
                                </Link>

                            </p>
                            <p className="footer-item">
                                <Link to="/about-us" className="footer-item">
                                    <FormattedMessage id="about_us"/>
                                </Link>
                            </p>

                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-6 d-none d-sm-block">
                        <div>
                            <p className="footer-title">
                                <FormattedMessage id="extras"/>
                            </p>
                            <p className="footer-item">
                                <Link to="/top-sale" className="footer-item">
                                    <FormattedMessage id="best sale"/>

                                </Link>
                            </p>
                            <p className="footer-item">
                                <Link to="/blog" className="footer-item">
                                    Blog
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-6">
                        <p className="footer-title">
                            <FormattedMessage id="member"/>
                        </p>

                        <p className="footer-item">
                            <Link to="/cart" className="footer-item">
                                <FormattedMessage id="cart"/>
                            </Link>
                        </p>

                        <p className="footer-item">
                            {this.props.token !== '' ?
                                <Link to="/user-profile" className="footer-item">
                                    <FormattedMessage id="profile"/>

                                </Link> :
                                <a href="/login"><FormattedMessage id="profile"/></a>
                            }
                        </p>
                        <br/>
                        <br/>
                        <p className="footer-item" style={{alignItem: 'center'}}>
                            <a href="https://www.facebook.com/TrungGames" target="_blank"><img
                                src={require('./share-image/icons8-facebook-32.png')} alt=""/></a>
                            <a href="https://zalo.me/0787652222" target="_blank"><img
                                src={require('./share-image/icons8-zalo-32.png')} alt=""/></a>
                            <a href="https://www.instagram.com/trung_games/" target="_blank"><img
                                src={require('./share-image/icons8-instagram-32.png')} alt=""/></a>
                            <a href="https://t.me/TrungGames" target="_blank"><img
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

const mapStateToProps = (state) => {
    return {
        token: state.token,
        language: state.language
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        // logout: (id) => {
        //     dispatch(logout(id));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

