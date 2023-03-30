import React from 'react';
import './top-sale.css';
import {Translation} from "react-i18next";
import TopMenu from "../TopMenu";
import NavBar from "../NavBar";
import ParallaxImage from "../parallax/ParallaxImage";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";


class TopSale extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    render() {
        const imgStyle = {
            marginRight: 'auto',
            marginLeft: 'auto'
        }
        return (
            <div >
                {/*{this.state.loaded ? null :<LoadingSpinner/>}*/}
                <Translation>{t => <TopMenu t={t} />}</Translation>
                <NavBar/>

                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
            </div>
        )
    }
}

export default (TopSale);
