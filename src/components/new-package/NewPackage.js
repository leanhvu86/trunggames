import React from 'react';
import './NewPackage.css';
import 'react-slideshow-image/dist/styles.css';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from 'swiper';
import {setPackage, setPackageView, viewGame} from "../../constants/cartActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];
const mapStateToProps = (state) => {
    return {
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

class NewPackage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        let temp = this.props.listGame;
        console.log(item)
        temp.forEach((game) => {
            if (game.id === item.gameId) {
                this.props.setPackage(item);
                this.props.viewGame(game);
            }
        })
    }

    renderMobile() {
        return (
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={
                    (swiper) => {
                    }
                    // console.log(swiper)
                }
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {this.props.slideImage.map((img, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Link to="/package-detail">

                                <img
                                    src={img.previewUrl}
                                    alt=""
                                    key={i}
                                    style={{
                                        textAlign: 'center',
                                        margin: '20px auto',
                                        fontSize: '30px',
                                        height: 'auto',
                                        width: '80%'
                                    }}
                                    onClick={() => this.handleClick(img)}
                                />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }

    renderWebsite() {
        return (
            <Swiper
                spaceBetween={0}
                slidesPerView={Math.floor(window.innerWidth / 384) + 1}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={
                    (swiper) => {
                    }
                    // console.log(swiper)
                }
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {this.props.slideImage.map((img, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Link to="/package-detail">

                                <img
                                    src={img.previewUrl}
                                    alt=""
                                    key={i}
                                    style={{
                                        textAlign: 'center',
                                        margin: '20px auto',
                                        fontSize: '30px',
                                        height: 'auto',
                                        width: '80%'
                                    }}
                                    onClick={() => this.handleClick(img)}
                                />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }

    render() {
        const style = {
            width: '25%'
        };
        return (
            <div>
                <br/>
                <br/>
                {this.renderWebsite()}
                <br/>
                <br/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPackage);
