import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import {connect} from 'react-redux';
import 'react-slideshow-image/dist/styles.css';
import Banner from './components/Banner';
import TopMenu from './components/ui-common/TopMenu';
import {Translation} from 'react-i18next';
import NavBar from './components/ui-common/NavBar';
import CustomerService from './components/customer-service/CustomerService';
import LoadingSpinner from './components/ui-common/LoadingSpinner';
import MobilePopular from './components/mobile-polular/MobilePopular';
import ScrollButton from './components/ui-common/ScrollButton';
import NewGame from './components/new-game/NewGame';
import NewPackage from './components/new-package/NewPackage';
import Footer from './components/Footer';
import ParallaxImage from './components/parallax/ParallaxImage';
import {FormattedMessage} from 'react-intl';
import configData from "./config.json";
import {ParallaxCards} from "./components/customer-service/ParallaxCards";
import {addToCart, rawData} from "./constants/cartActions";

const mapStateToProps = (state) => {
    return {...state.quiz,
        newPackage: state.newPackage,
        topSale: state.topSale,
        bestSale: state.bestSale,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        rawData: (id) => {
            dispatch(rawData(id))
        }
    }
}

class App extends React.Component {
    state = {
        banner: this.props.banner,
        loaded: false
    };

    componentDidMount() {
        const AnimationFramerRes = window.requestAnimationFrame((e) => console.log(e));
        window.cancelAnimationFrame(AnimationFramerRes);
        // document.addEventListener('contextmenu', (e) => {
        //     e.preventDefault();
        // });
        this.loadData();
    }

    loadData() {
        fetch(
            configData.SERVER_URL + "/games/load-data")
            .then((res) => res.json())
            .then((json) => {
                this.props.rawData(json.data);

                // const decoded = Buffer.from(json.data, 'base64').toString('utf8');

                // console.log('Decoded text: ' + decoded);
                this.setState({loaded: true})
            });
    }

    onChange(value) {
        // parent class change handler is always called with field name and value
        this.setState({loaded: value});
        // console.log('App load success',value)
    }

    render() {
        return (
            <div>
                {this.state.loaded ? null : <LoadingSpinner/>}
                <Translation>{(t) => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <Banner onChange={this.onChange.bind(this)}/>

                {/*<CustomerService/>*/}
                <div className=" service-container">
                    <ParallaxCards/>
                </div>
                <MobilePopular/>
                <NewGame/>
                <div className="center-title">
                    <h1 align="center">
                        <FormattedMessage id="new package"/>
                    </h1>
                    <div className="underline-span"/>
                </div>
                <NewPackage slideImage={this.props.newPackage}/>
                <ParallaxImage/>
                <div className="center-title">
                    <h1 align="center">
                        <FormattedMessage id="top sale"/>
                    </h1>
                    <div className="underline-span"/>
                </div>
                <NewPackage slideImage={this.props.topSale}/>
                <Footer/>
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

