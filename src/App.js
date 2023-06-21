import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import React from 'react';
import {Translation} from 'react-i18next';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import 'react-slideshow-image/dist/styles.css';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import {ParallaxCards} from './components/customer-service/ParallaxCards';
import MobilePopular from './components/mobile-polular/MobilePopular';
import NewGame from './components/new-game/NewGame';
import NewPackage from './components/new-package/NewPackage';
import ParallaxImage from './components/parallax/ParallaxImage';
import NavBar from './components/ui-common/NavBar';
import ScrollButton from './components/ui-common/ScrollButton';
import TopMenu from './components/ui-common/TopMenu';
import configData from './config.json';
import {checkLoadData, rawData, removePackageView} from './constants/cartActions';

const mapStateToProps = (state) => {
    return {
        ...state.quiz,
        newPackage: state.newPackage,
        topSale: state.topSale,
        bestSale: state.bestSale,
        reloadCache: state.reloadCache
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkLoadData: (id) => {
            dispatch(checkLoadData(id));
        },
        rawData: (id) => {
            dispatch(rawData(id));
        },
        removePackageView: (id) => {
            dispatch(removePackageView(id));
        }
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

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
        this.props.removePackageView(0);
    }

    loadData() {
        fetch(configData.SERVER_URL + '/games/load-data')
            .then((res) => res.json())
            .then((json) => {
                this.props.rawData(json.data);
                console.log('appjss')
                // const decoded = Buffer.from(json.data, 'base64').toString('utf8');
                this.props.removePackageView(0);

            })
            .catch((error) => {
                console.log(error);
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
                {/* {this.state.loaded ? null : <LoadingSpinner />} */}
                <Translation>{(t) => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <Banner onChange={this.onChange.bind(this)}/>

                {/*<CustomerService/>*/}
                {/*<div className=" service-container">*/}
                {/*    <ParallaxCards/>*/}
                {/*</div>*/}
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

