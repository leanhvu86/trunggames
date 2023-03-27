import React from "react";

export default class ScrollButton extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.scrollY === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.scrollY - this.props.scrollStepInPx);
    }

    scroll() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        //store the intervalId inside the state,
        //so we can use it later to cancel the scrolling
        this.setState({ intervalId: intervalId });
    }

    render () {
        return <button ref='#' title='Back to top'
                       id='scroll' className='scroll'
                       onClick={ (event) => {
                           event.preventDefault();
                           this.scroll();
                       }}>
            <span ><i className="fa fa-angle-double-up fa-lg" aria-hidden="true"/></span>
        </button>;
    }
}
