import React from 'react';
import './game.css';
import {Translation} from "react-i18next";
import TopMenu from "../TopMenu";
import NavBar from "../NavBar";
import ParallaxImage from "../parallax/ParallaxImage";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";
import {Link} from "react-router-dom";


class GameList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    onClickGame(game) {
        console.log("game choose", game);
        this.props.clickGame(game);
    }
    onLoaded(value) {
        // for a date field, the value is passed into the change handler
        this.props.onChange('loaded', value);
    }

    render() {
        return (
            <div className="row">
                {this.props.slideImage.map((game, i) => {
                    return (
                        <div className="col-4 " key={i}>
                            <Link to="/game-detail" className="nav-links">
                                <div className="row  game-hover ">
                                    <div className="col-4 wrapper">
                                        <img src={game.thumbnail} alt="" key={i}
                                             onLoad={() => setTimeout(()=>this.onLoaded(true), 1000)}
                                             onClick={() => this.onClickGame(game)}
                                             style={{height: 'auto', width: '100%'}}

                                        />
                                    </div>
                                    <div className="col-8 game-item">
                                        <br/>
                                        <h6>{game.name}</h6>
                                        <a> <span>{game.type}</span>&nbsp;/&nbsp;<span>{game.marketType}</span></a>
                                        <br/>
                                        <a> <span>{game.companyName}</span></a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default (GameList);
