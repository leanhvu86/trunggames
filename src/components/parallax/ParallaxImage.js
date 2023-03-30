import React from 'react';
import './parallax.css';
import 'react-slideshow-image/dist/styles.css';

class ParallaxImage extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
                <div id="title" className="section header">
                    {/*<h1>Trung AboutUs</h1>*/}
                    <h1>Your happiness is our business mission</h1>
                    <p>Top ten of Best Game Charging in Vietnam</p>
                </div>
        )
    }
}

export default (ParallaxImage);
