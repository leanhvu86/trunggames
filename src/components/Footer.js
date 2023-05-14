import React from 'react';
import {Link} from "react-router-dom";
import './../index.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    render() {

        return (
            <footer id="colophon" className="site-footer" role="contentinfo">

                <div className="row">
                    <div className="col">
                        <div className="content-wrapper">
                            <p className="footer-title">Address Info</p>
                            <p className="footer-item">
                                <i className="fa fa-phone "
                                   aria-hidden="true"/>&nbsp;&nbsp;(+84)&nbsp;945&nbsp;109&nbsp;262</p>
                            <p className="footer-item">
                                <i className="fa fa-envelope " aria-hidden="true"/>&nbsp;&nbsp;trunggame@gmail.com
                            </p>
                        </div>

                    </div>
                    <div className="col">
                        <div className="content-wrapper">
                            <p className="footer-title">Information</p>
                            <p className="footer-item"><a className="footer-item">Contact</a></p>
                            <p className="footer-item">
                                <Link to="/about-us" className="footer-item">About Us </Link>
                            </p>
                            <p className="footer-item">
                                <Link to="/blog" className="footer-item">Blog</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content-wrapper">
                            <p className="footer-title">Extras</p>

                            <p className="footer-item">
                                <Link to="/cart" className="footer-item">Cart</Link>
                            </p>
                            <p className="footer-item">
                                <Link to="/top-sale" className="footer-item">Top Sale </Link>
                            </p>
                            <p className="footer-item">
                                <Link to="/user-profile" className="footer-item">User Profile </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content-wrapper">
                            <p className="footer-title"> Our Newsletter</p>
                            <p className="footer-item">
                                There are many variations of passages of form humour or randomised</p>

                            <input className="c-form__input" placeholder="E-mail" type="email"
                                   pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required/>
                            <br/>
                            <br/>
                            <p className="footer-item" style={{alignItem: 'center'}}>
                                <img src={require("./share-image/icons8-facebook-32.png")} alt=""/>
                                <img src={require("./share-image/icons8-zalo-32.png")} alt=""/>
                                <img src={require("./share-image/icons8-instagram-32.png")} alt=""/>
                                <img src={require("./share-image/icons8-telegram-app-32.png")} alt=""/>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="underline-footer"/>
                <div className=" row copy-right"> Copy right &#169; 2023 Trung Games</div>
            </footer>
        )
    }
}

export default (Footer);
