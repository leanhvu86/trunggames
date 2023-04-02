import React from 'react';
import './game-detail.css';

class SubNavGame extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="sub-nav">
                {/*<Card/>*/}
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <br/>
                            <div className="game-cover">
                                <div className="cover">
                                    <img src={this.props.game.thumbnail} alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4 content-detail">
                                    <br/>
                                    <h3>{this.props.game.name}</h3>
                                    <br/>
                                    <a> <span>{this.props.game.type}</span>
                                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>{this.props.game.marketType}</span>
                                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>{this.props.game.companyName}</span>
                                    </a>

                                    {/*<div className="change-content">*/}
                                    {/*    <span><i className="fa fa-globe" aria-hidden="true"/></span>*/}
                                    {/*    <span><i className="fa fa-globe" aria-hidden="true"/></span>*/}
                                    {/*</div>*/}

                                </div>
                                <div className="col-8 content-des">
                                    <br/>

                                    <p style={{
                                        fontSize: '10px', backgroundColor: '#081538',
                                        borderRadius: '15px',
                                        padding: '10px 10px', color: 'white'

                                    }}>
                                        <strong>Giới thiệu về {this.props.game.name}</strong>
                                        <br/>
                                        {this.props.game.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default (SubNavGame);
