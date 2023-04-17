import React from 'react';
import './game-detail.css';
import {Translation} from "react-i18next";
import TopMenu from "../../ui-common/TopMenu";
import NavBar from "../../ui-common/NavBar";
import ParallaxImage from "../../parallax/ParallaxImage";
import Footer from "../../Footer";
import ScrollButton from "../../ui-common/ScrollButton";
import SubNavGame from "./SubNavGame";
import GameDetailSearchBar from "./GameDetailSearchBar";
import LoadingSpinner from "../../ui-common/LoadingSpinner";
import {addToCart} from "../../../constants/cartActions";
import {connect} from "react-redux";


class GameDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded:false
        }
        parent.scrollTo(0,0);
    }

    componentDidMount() {
    }

    onChange( value) {
        // parent class change handler is always called with field name and value
        this.setState({'loaded': value});
        // console.log('App load success',value)
    }

    render() {
        return (
            <div>
                {this.state.loaded ? null :<LoadingSpinner/>}
                <Translation>{t => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <SubNavGame game={this.props.game} onChange={this.onChange.bind(this)} />
                <div className="item-content-card">
                    <GameDetailSearchBar game={this.props.game} onChange={this.onChange.bind(this)} />
                </div>
                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        game: state.game
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameDetail)
