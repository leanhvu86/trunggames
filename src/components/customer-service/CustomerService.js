import React from 'react';
import './CustomerService.css';
import {ParallaxHover} from 'react-parallax-hover';


class CustomerService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    render() {
        const imgStyle={
            marginRight:'auto',
            marginLeft:'auto'
        }
        return (
            <div className="service-container">
                <div className="image-tag">
                    <ParallaxHover borderRadius={5} height={350} scale={5} width={620}>
                        <img className={imgStyle}  alt="Demo image"  src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-01.jpg"   />

                    </ParallaxHover>
                    <span className="static-text">
                            Most Popular
                        </span>
                    <span className="static-text2">
                        The Battlefield 4 Naval Strike
                    </span>
                </div>
                <div className="image-tag">
                    <ParallaxHover borderRadius={5} height={350} scale={5} width={620}>
                        <img  className={imgStyle} alt="Demo image"   src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-02.jpg" />

                    </ParallaxHover>
                    <span className="static-text">
                            Lastest Game
                        </span>
                    <span className="static-text2">
                        Assassin's Creed Unity Game
                    </span>
                </div>

            </div>
        )
    }
}

export default (CustomerService);
