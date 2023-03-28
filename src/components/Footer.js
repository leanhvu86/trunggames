import React from 'react';
import {ActionTypes} from '../constants/actionTypes';
import {connect} from 'react-redux';
import {Zoom} from "react-slideshow-image";

class Footer extends React.Component {

    constructor(props){
        super(props);
        this.state = {loaded: false};
    }

    render() {

        return (
            <footer id="colophon" className="site-footer" role="contentinfo"/>

            )
    }
}

export default (Footer);
