import React from 'react';
import './NewGame.css';
import SwiperCore, {EffectCoverflow, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/autoplay';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {connect} from "react-redux";
import {setPackageView, viewGame} from "../../constants/cartActions";

SwiperCore.use([EffectCoverflow, Pagination]);

const mapStateToProps = (state) => {
    return {
        newGames: state.newGames,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        viewGame: (data) => {
            dispatch(viewGame(data))
        },
        setPackageView: (data) => {
            dispatch(setPackageView(data))
        }
    }
}

class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    state = {
        slideIndex: 3
    };

    handleClick(game) {
        this.props.viewGame(game);
    }

    onClickGame(i) {
        // console.log(i)
        this.setState({slideIndex: i});
    }

    render() {
        const style = {
            width: '300px'
        };
        return (
            <div>
                <div className="center-title">
                    <h1 align="center">
                        <FormattedMessage id="new games"/>
                    </h1>
                    <div className="underline-span"/>
                </div>
                <br/>
                <br/>
                <Swiper
                    initialSlide={this.state.slideIndex}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                    pagination={true}
                    className="mySwiper"
                >
                    {this.props.newGames.map((game, i) => {
                        return (
                            <SwiperSlide style={style} key={i}>
                                <Link to="/game-detail" className="product-nav-links">
                                    <Tippy placement="right" content={<span>{game.name}</span>}>
                                        <img src={game.imageUrl} alt="" style={{borderRadius: '10px'}}
                                             onClick={() => this.handleClick(game)}/>
                                    </Tippy>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
