import React from 'react';
import './NewPackage.css';
import 'react-slideshow-image/dist/styles.css';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from "swiper";


const responsiveSettings = [{
    breakpoint: 800,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 2
    }
}, {
    breakpoint: 500,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    }
}];


class NewPackage extends React.Component {

    constructor(props) {
        super(props);

    }

    onClickGame(e) {
        // console.log(e.target.src);
    }

    renderMobile(){
        return(
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) =>{}
                    // console.log(swiper)
                }
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {this.props.slideImage.map((img, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <img src={img.url} alt="" key={i} style={{
                                textAlign: 'center',
                                margin: '20px auto',
                                fontSize: '30px',
                                height: 'auto', width: '80%'
                            }}/></SwiperSlide>

                    );
                })}
            </Swiper>
        )
    }
    renderWebsite(){
        return(
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) =>{}
                    // console.log(swiper)
                }
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {this.props.slideImage.map((img, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <img src={img.url} alt="" key={i} style={{
                                textAlign: 'center',
                                margin: '20px auto',
                                fontSize: '30px',
                                height: 'auto', width: '80%'
                            }}/></SwiperSlide>

                    );
                })}
            </Swiper>
        )
    }
    render() {
        const style = {
            width: '25%'
        }
        return (
            <div>
                <br/>
                <br/>
                {window.innerWidth<600?this.renderMobile():this.renderWebsite()}
                <br/>
                <br/>
            </div>
        )
    }
}

export default (NewPackage);
