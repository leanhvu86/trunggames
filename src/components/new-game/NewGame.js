import React from 'react';
import './NewGame.css';
import SwiperCore, {EffectCoverflow, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/autoplay';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/swiper.min.css";


SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
];

class NewGame extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        slideIndex: 3
    }

    onClickGame(i) {
        console.log(i)
        this.setState({slideIndex: i});

    }

    render() {
        const style = {
            width: '300px'
        }
        return (
            <div>
                <div className="center-title">
                    <h1 align="center">New Games</h1>
                    <div className="underline-span"/>

                </div>
                <br/>
                <br/>
                <Swiper

                    initialSlide={this.state.slideIndex}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    className="mySwiper"
                >

                    {this.props.newGame.map((img, i) => {
                        return (
                            <SwiperSlide style={style} key={i}>
                                <Tippy placement="right" content={<span>{img.caption}</span>}>
                                    <img src={img.url} alt="" onClick={(e) => this.onClickGame(i)}/>
                                </Tippy>

                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        )
    }
}

export default (NewGame);
