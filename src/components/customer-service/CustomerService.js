import React from 'react';
import './CustomerService.css';
import {ParallaxHover} from 'react-parallax-hover';


class CustomerService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
        console.log(window.innerWidth);
    }

    render() {
        const imgStyle = {
            marginRight: 'auto',
            marginLeft: 'auto'
        }
        return (
            <div>
                <div className="container">
                    <br/>

                    <div className="row row-cols-auto service-container">


                        <div className="col service-tag">
                            <a className="icon-image">
                                <img src={require("./service-image/delivery.ico")}
                                     onMouseOver={e => (e.currentTarget.src = require("./service-image/delivery-hover.ico"))}
                                     onMouseOut={e => (e.currentTarget.src = require("./service-image/delivery.ico"))}
                                     alt=""/>
                            </a>
                            <div className="content">
                                <div className="service-title">Free Delivery</div>
                                <div className="service_other_text">Free Shipping On All Order</div>
                            </div>
                        </div>
                        <div className="col service-tag">
                            <a className="icon-image"> <img
                                src={require("./service-image/pack-money.ico")}
                                onMouseOver={e => (e.currentTarget.src = require("./service-image/pack-money-hover.ico"))}
                                onMouseOut={e => (e.currentTarget.src = require("./service-image/pack-money.ico"))}
                                alt=""/> </a>
                            <div className="content">
                                <div className="service-title">Money Return</div>
                                <div className="service_other_text">Back Guarantee in 7 days</div>
                            </div>
                        </div>
                        <div className="col service-tag">
                            <a className="icon-image">
                                <img src={require("./service-image/discount.ico")}
                                     onMouseOver={e => (e.currentTarget.src = require("./service-image/discount-hover.ico"))}
                                     onMouseOut={e => (e.currentTarget.src = require("./service-image/discount.ico"))}
                                     alt=""/> </a>
                            <div className="content">
                                <div className="service-title">Member Discount</div>
                                <div className="service_other_text">On every order over $130.00</div>
                            </div>
                        </div>
                        <div className="col service-tag">
                            <a className="icon-image">
                                <img src={require("./service-image/return.ico")}
                                     onMouseOver={e => (e.currentTarget.src = require("./service-image/return-hover.ico"))}
                                     onMouseOut={e => (e.currentTarget.src = require("./service-image/return.ico"))}
                                     alt=""/> </a>
                            <div className="content">
                                <div className="service-title">Return Policy</div>
                                <div className="service_other_text">Support 24 hours a day</div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>

                </div>
                <div className="row  service-container">
                    <div className="col">
                        <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>

                            <ParallaxHover borderRadius={5} height={350} scale={5} width={620}>
                                <img className={imgStyle} alt="Demo image"
                                     src={require("./service-image/cms-banner-01.jpg")}
                                    // src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-01.jpg"
                                />

                            </ParallaxHover>
                            <span className="static-text">
                            Most Popular
                        </span>
                            <span className="static-text2">
                        The Battlefield 4 Naval Strike
                        </span>
                        </div>

                    </div>
                    <div className="col">
                        <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                            <ParallaxHover borderRadius={5} height={350} scale={5} width={620}>
                                <img className={imgStyle} alt="Demo image"
                                     src={require("./service-image/cms-banner-02.jpg")}
                                    // src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-02.jpg"
                                />

                            </ParallaxHover>
                            <span className="static-text">
                            Lastest Game
                        </span>
                            <span className="static-text2">
                        Assassin's Creed Unity Game</span>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default (CustomerService);
