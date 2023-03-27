import React from 'react';
import './MobilePopular.css';
import {ParallaxHover} from 'react-parallax-hover';


class MobilePopular extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    render() {

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h1 align="center" className="center-title">Most Popular Mobile Games</h1>
                <div className="underline-span"/>
                <div className="service-container">


                </div>
            </div>
        )
    }
}

export default (MobilePopular);
