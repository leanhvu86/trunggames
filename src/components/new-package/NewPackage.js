import React from 'react';
import './NewPackage.css';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [{
    breakpoint: 800,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3
    }
}, {
    breakpoint: 500,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    }
}];

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
class NewPackage extends React.Component {

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
                    <h1 align="center" >New Package</h1>
                    <div className="underline-span"/>

                </div>
                <br/>
                <br/>
                <Slide slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} responsive={responsiveSettings}>
                    {slide_img.map((img, i) => {
                        return (
                            <div  key={i}>
                                <img src={img} alt=""  style={{
                                    textAlign: 'center',
                                    padding: '20px 30px',
                                    fontSize: '30px',
                                    height:'300px', width:'400px'
                                }} />
                            </div>
                        );
                    })}
                </Slide>
            </div>
        )
    }
}

export default (NewPackage);
