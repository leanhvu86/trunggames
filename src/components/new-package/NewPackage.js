import React from 'react';
import './NewPackage.css';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {Autoplay, Pagination} from "swiper";

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

    onClickGame(e){
        console.log(e.target.src);
    }

    render() {
        const style={
            width:'25%'
        }
        return (
            <div>
                <br/>
                <br/>
                <Slide
                    modules={[ Pagination, Autoplay]}
                    navigation
                    autoplay={{ delay: 1500 }}
                    slidesToScroll={1}
                    slidesToShow={1}
                    indicators={true}
                    responsive={responsiveSettings}>
                    {this.props.slideImage.map((img, i) => {
                        return (
                                <img src={img.url} alt="" key={i}  style={{
                                    textAlign: 'center',
                                    padding: '20px auto',
                                    fontSize: '30px',
                                    height:'auto', width:'70%'
                                }} />
                        );
                    })}
                </Slide>
            </div>
        )
    }
}

export default (NewPackage);
