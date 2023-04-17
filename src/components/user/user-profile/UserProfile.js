import React from 'react';
import './user-profile.css';
import {Translation} from "react-i18next";
import TopMenu from "../../ui-common/TopMenu";
import NavBar from "../../ui-common/NavBar";
import ParallaxImage from "../../parallax/ParallaxImage";
import Footer from "../../Footer";
import ScrollButton from "../../ui-common/ScrollButton";

class UserProfile extends React.Component {

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

export default (UserProfile);
