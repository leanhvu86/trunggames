import React from 'react';
import './NewGame.css';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


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

    onClickGame(e){
        console.log(e.target.src);
    }

    render() {
        const style={
            width:'20%'
        }
        return (
            <div>
                <br/>
                <br/>
                <div className="center-title">
                    <h1 align="center" >New Games</h1>
                    <div className="underline-span"/>

                </div>
                <br/>
                <br/>
                <Swiper
                    initialSlide="3"
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
                    // Using array
                    {slide_img.map((img, i) => {
                        return (
                            <SwiperSlide style={style} key={i}>
                                <img src={img} alt=""  onClick={(e)=>this.onClickGame(e)}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        )
    }
}

export default (NewGame);
