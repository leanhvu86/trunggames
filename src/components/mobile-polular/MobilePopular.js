import React from 'react';
import './MobilePopular.css';

class MobilePopular extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
        this.state = {
            isHover: false,
        };
        this.handleHover = this.handleHover.bind(this);
        this.getSpringProps = this.getSpringProps.bind(this);
    }

    handleHover(active) {
        this.setState({isHover: active});
    }
    getSpringProps() {
        return {
            defaultStyle: {
                scale: 1.15,
                marginTop: 25,
                imageOpacity: 0.7,
                opacity: 0,
            },
            style:{
                scale: spring(this.state.isHover ? 1 : 1.15),
                marginTop: spring(this.state.isHover ? 22 : 25),
                imageOpacity: spring(this.state.isHover ? 0.4 : 0.7),
                opacity: spring(this.state.isHover ? 1 : 0)
            },
        };
    }
    render() {

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div className="center-title">
                    <h1 align="center" >Most Popular Mobile Games</h1>
                    <div className="underline-span"/>

                </div>

                <div className="service-container1">
                    <div className="img-hover-zoom">
                        <img  src={require("./mobile-image/category-image-02-446x550_t.jpg")} alt="Batman"/>
                        <div className="image-footer">
                            <span className="game-name">Batman</span>
                            <br/>
                            <span className="shop-now">Shop now</span>
                        </div>
                    </div>
                    <div className="img-hover-zoom">
                        <img  src={require("./mobile-image/category-image-01-446x550_t.jpg")} alt="Bayonetta"/>
                        <div className="image-footer">
                            <span className="game-name">Bayonetta</span>
                            <br/>
                            <span className="shop-now">Shop now</span>
                        </div>
                    </div>
                    <div className="img-hover-zoom">
                        <img  src={require("./mobile-image/category-image-03-446x550_t.jpg")} alt="Dark souls"/>
                        <div className="image-footer">
                            <span className="game-name">Dark souls</span>
                            <br/>
                            <span className="shop-now">Shop now</span>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="center-title">
                    <h1 align="center" >Most Popular PC Games</h1>
                    <div className="underline-span"/>

                </div>

                <div className="service-container1">
                    <div className="image-content">
                        <div className="img-block">
                            <span/>
                            <img  src={require("./mobile-image/dragon-nest.png")} alt="Dragon Nest"/>

                        </div>

                    </div>
                    <div className="image-content ">
                        <div className="img-block">
                            <span/>
                            <img  src={require("./mobile-image/final-fantasy-xvi.png")} alt="Final Fantasy XVI"/>

                        </div>

                    </div>
                    <div className="image-content">
                        <div className="img-block">
                            <span/>
                            <img  src={require("./mobile-image/bless-unleashed.png")} alt="Bless unleashed"/>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default (MobilePopular);
