import React from 'react';
import './game.css';
import {Translation} from "react-i18next";
import TopMenu from "../ui-common/TopMenu";
import NavBar from "../ui-common/NavBar";
import ParallaxImage from "../parallax/ParallaxImage";
import Footer from "../Footer";
import ScrollButton from "../ui-common/ScrollButton";
import {Link} from "react-router-dom";
import {viewGame} from "../../constants/cartActions";
import {connect} from "react-redux";


class GameList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(game) {
        this.props.viewGame(game);
    }

    onLoaded(value) {
        // for a date field, the value is passed into the change handler
        this.props.onChange('loaded', value);
    }

    renderGameContent(game) {
        return (
            <div className="row  game-hover " onClick={() => this.handleClick(game)}>
                <div className="col-4 wrapper">
                    <img src={game.imageUrl} alt="" key={game.name}
                         onLoad={() => setTimeout(() => this.onLoaded(true), 1000)}

                         style={{height: 'auto', width: '100%'}}/>
                </div>
                <div className="col-8 game-item">
                    <h6>{game.name}</h6>
                    <span>{game.type}</span>&nbsp;/&nbsp;<span>{game.marketType}</span>
                    <br/>
                    <span>{game.companyName}</span>
                </div>
            </div>
        )
    }

    renderMobile(game) {
        return (
            <div className=" game-hover wrapper">
                <img src={game.imageUrl} alt="" key={game.name}
                     onLoad={() => setTimeout(() => this.onLoaded(true), 1000)}
                     onClick={() => this.handleClick(game)}
                     style={{height: 'auto', width: '100%'}}

                />
            </div>
        )
    }

    render() {
        return (
            <div className="row">
                {this.props.slideImage.map((game, i) => {
                    return (
                        <div className="col-4" key={i}>
                            <Link to="/game-detail" className="product-nav-links">
                                {window.innerWidth < 1000 ?
                                    this.renderMobile(game)
                                    : this.renderGameContent(game)}
                            </Link>
                        </div>
                    );
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topGames: state.topGames,
        bestSale: state.bestSale,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        viewGame: (data) => {
            dispatch(viewGame(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameList);

