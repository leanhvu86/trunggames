import React, {Component} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {connect} from 'react-redux';
import {ActionTypes} from './constants/actionTypes';
import 'react-slideshow-image/dist/styles.css'
import Banner from "./components/Banner";
import TopMenu from "./components/TopMenu";
import { Translation } from "react-i18next";
import configData from "./config.json";
import NavBar from "./components/NavBar";
import CustomerService from "./components/customer-service/CustomerService";
import LoadingSpinner from "./components/LoadingSpinner";

const mapStateToProps = state => {
    return {...state}
};

const mapDispatchToProps = dispatch => ({
    // onQuizLoad: payload => dispatch({type: ActionTypes.QuizLoad, payload}),
    // onSubmit: payload => dispatch({type: ActionTypes.QuizSubmit, payload}),
    // onPagerUpdate: payload => dispatch({type: ActionTypes.PagerUpdate, payload})
});


const fadeImages = [
    {
        url: configData.SERVER_URL+'/file/1bcd9b96-07e7-45e3-8820-b26cc475ac88-banner.jpg',
        // url: './image/banner.jpg',
        caption: 'First Slide'
    },
    {
        url: configData.SERVER_URL+'/file/c50eb9b4-b9f6-4bfe-8f86-262a241ea344-banner2.jpg',
        // url: './image/banner2.jpg',
        caption: 'Second Slide'
    },
    {
        url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
        // url: './image/banner3.png',
        caption: 'Third Slide'
    },
];

class App extends React.Component {


    state = {

        banner: this.props.banner,
        loaded: false
    };

    componentDidMount() {

    }

    onChange( value) {
        // parent class change handler is always called with field name and value
        this.setState({'loaded': value});
        console.log('App load success',value)
    }

    render() {
        const style = {
            background: '#16104e',
            height:'100%',
        }

        return (

            <div style={style}>
                {this.state.loaded ? null :<LoadingSpinner/>}
                <Translation>{t => <TopMenu t={t} />}</Translation>
                <NavBar/>
                <Banner banner={fadeImages} onChange={this.onChange.bind(this)}/>
                <CustomerService/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

