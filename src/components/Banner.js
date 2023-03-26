import React, {Component} from 'react';
import {ActionTypes} from '../constants/actionTypes';
import {connect} from 'react-redux';
import {Fade, Zoom} from "react-slideshow-image";
import LoadingSpinner from "./LoadingSpinner";

const mapStateToProps = state => ({ ...state.banner, ...state.mode, ...state.pager });

const mapDispatchToProps = dispatch => ({
    onAnswer: payload => dispatch({ type: ActionTypes.QuizAnswer, payload })
});

class Banner extends React.Component {

    constructor(props){
        super(props);
        this.state = {loaded: false};
    }
    render() {

        return (
            <div className="slide-container" >
                {/*<Fade>*/}
                {/*    {this.props.banner.map((fadeImage, index) => (*/}
                {/*        <div key={index}>*/}
                {/*            <img style={{ width: '100%' }} src={fadeImage.url} />*/}
                {/*            <h2>{fadeImage.caption}</h2>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</Fade>*/}
                {this.state.loaded ? null :<LoadingSpinner/>
                }
                <Zoom scale={1.4} indicators={true}>
                    {this.props.banner.map((each, index) => (
                        <div key={index} style={{ width: "100%" }}>
                            <img style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each.url}
                                 onLoad={() => setTimeout(()=>this.setState({loaded: true}), 6000)}/>
                        </div>
                    ))}
                </Zoom>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
