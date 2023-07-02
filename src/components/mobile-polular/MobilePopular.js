import React from 'react';
import './MobilePopular.css';
import spring from 'react-motion/lib/spring';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {connect} from "react-redux";
import {setPackage, setPackageView, viewGame} from "../../constants/cartActions";

const mapStateToProps = (state) => {
    return {
        topGames: state.topGames,
        bestSale: state.bestSale,
        listGame: state.listGame
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        viewGame: (data) => {
            dispatch(viewGame(data))
        },
        setPackage: (data) => {
            dispatch(setPackage(data))
        }
    }
}

class MobilePopular extends React.Component {
    constructor(props) {
        super(props);

        this.handleHover = this.handleHover.bind(this);
        this.getSpringProps = this.getSpringProps.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleHover(active) {
        this.setState({isHover: active});
    }

    handleClick(item, type) {
        console.log(item);
        this.props.listGame.forEach((game) => {
            if (type === 0 && game.id === item.id) {
                this.props.setPackage({});
                this.props.viewGame(game);
            } else {
                if (game.id === item.gameId) {
                    this.props.setPackage(item);
                    this.props.viewGame(game);
                }
            }
        })
    }


    getSpringProps() {
        return {
            defaultStyle: {
                scale: 1.15,
                marginTop: 25,
                imageOpacity: 0.7,
                opacity: 0
            },
            style: {
                scale: spring(this.state.isHover ? 1 : 1.15),
                marginTop: spring(this.state.isHover ? 22 : 25),
                imageOpacity: spring(this.state.isHover ? 0.4 : 0.7),
                opacity: spring(this.state.isHover ? 1 : 0)
            }
        };
    }

    renderMobileGames() {
        return (
            <div className="row justify-content-between service-container1">
                {this.props.topGames.map((each, index) => (
                    <div className="col-4 p-2" key={index}>
                        <div className="img-hover-zoom position-relative h-auto w-100">
                            <img src={each.imageUrl} alt="Batman" className="w-100 h-auto"/>

                            <div className="image-footer px-2 py-1 py-md-3 h-auto"
                                 onClick={() => this.handleClick(each, 0)}>
                                <Link to="/game-detail" className="product-nav-links p-0">
                                    {window.innerWidth<1000?<span className="game-name" style={{fontSize:'10px'}}>{each.name}</span>:<span className="game-name">{each.name}</span>}
                                    <br/>
                                    <span className="shop-now">
                                        <FormattedMessage id="shop now"/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {/*  <div className="col-4 p-2">*/}
                {/*    <div className="img-hover-zoom position-relative h-auto w-100">*/}
                {/*      <img src={require('./mobile-image/category-image-01-446x550_t.jpg')} alt="Bayonetta" className="w-100 h-auto" />*/}
                {/*      <div className="image-footer px-2 py-1 py-md-3 h-auto">*/}
                {/*        <span className="game-name">Bayonetta</span>*/}
                {/*        <br />*/}
                {/*        <span className="shop-now">*/}
                {/*          <FormattedMessage id="shop now" />*/}
                {/*        </span>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="col-4 p-2">*/}
                {/*    <div className="img-hover-zoom position-relative h-auto w-100">*/}
                {/*      <img src={require('./mobile-image/category-image-03-446x550_t.jpg')} alt="Dark souls" className="w-100 h-auto" />*/}
                {/*      <div className="image-footer px-2 py-1 py-md-3 h-auto">*/}
                {/*        <span className="game-name">Dark souls</span>*/}
                {/*        <br />*/}
                {/*        <span className="shop-now">*/}
                {/*          <FormattedMessage id="shop now" />*/}
                {/*        </span>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
            </div>
        );
    }

    renderBestSale() {
        return (
            <div className="row service-container1">
                {this.props.bestSale.map((each, index) => (
                    <div className="image-content col-4" key={index}>
                        <div className="img-block w-100">
                            <span/>
                            <Link
                                to="/game-detail"
                                className="product-nav-links p-0">
                                <img src={each.previewUrl} alt="Dragon Nest" onClick={() => this.handleClick(each, 1)}/>
                            </Link>
                        </div>
                    </div>
                ))}

                {/*  <div className="image-content col-4">*/}
                {/*    <div className="img-block w-100">*/}
                {/*      <span />*/}
                {/*      <Link to="/game-detail" className="product-nav-links p-0">*/}
                {/*        <img src={require('./mobile-image/final-fantasy-xvi.png')} alt="Final Fantasy XVI" />*/}
                {/*      </Link>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="image-content col-4">*/}
                {/*    <div className="img-block w-100">*/}
                {/*      <span />*/}
                {/*      <Link to="/game-detail" className="product-nav-links p-0">*/}
                {/*        <img src={require('./mobile-image/bless-unleashed.png')} alt="Bless unleashed" />*/}
                {/*      </Link>*/}
                {/*    </div>*/}
                {/*  </div>*/}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="center-title">
                    <h1 align="center">
                        <FormattedMessage id="most popular games"/>
                    </h1>
                    <div className="underline-span"/>
                </div>

                {this.renderMobileGames()}
                <div className="center-title">
                    <h1 align="center">
                        <FormattedMessage id="best sale"/>
                    </h1>
                    <div className="underline-span"/>
                </div>

                {this.renderBestSale()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobilePopular);

