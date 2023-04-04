import React, {useState} from 'react';
import './game-detail.css';


const list = ['Hot',]

class GameDetailSearchBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            namePackage: '',
            server: '',
            attribute: '',
            type: '',
            viewType: true
        }
    }

    componentDidMount() {
    }

    onChangeServer(e) {
        // console.log(e)
    }

    onChangeCardType(e) {
        // console.log(e)

    }

    handleClick(event) {
        // 👇️ toggle isActive state on click
        // console.log(event);
        event.target.classList.add('active');
    };

    handleChangeViewType() {
        this.setState({viewType: !this.state.viewType});
    }

    render() {
        return (
            <div className="container search-detail-bar">
                <div className="seach-content">
                    <div className="row">
                        <div className="col">
                            <div className="child-search-content">
                                <a>Find product</a>
                                <br/>
                                <input type="text" className="search-input " id="addEventstart" required
                                       name="startDate" placeholder="Type a package"/>
                            </div>

                        </div>
                        <div className="col">
                            <div className="child-search-content">
                                <a>Server</a>
                                <br/>
                                <select onSelect={this.onChangeServer.bind(this)}>
                                    <option value="">Tất cả máy chủ</option>
                                    <option value="Korea">Korea</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Asia">Asia</option>
                                    <option value="North America">North America</option>
                                    <option value="Europe">Europe</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="child-search-content">
                                <a>Category</a>
                                <br/>
                                <select onSelect={this.onChangeCardType.bind(this)}>
                                    <option value="">Tất cả các thuộc tính</option>
                                    <option value="Korea">Token</option>
                                    <option value="Japan">Package</option>
                                    <option value="Asia">Pass</option>
                                    <option value="North America">Others</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="seach-content">
                    <div className="row">
                        <div className="col">
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-fire" aria-hidden="true"/>&nbsp;Hot</span>
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;New</span>
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-usd" aria-hidden="true"/>&nbsp;Price</span>
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"/>&nbsp;Rating</span>

                        </div>
                        <div className="col">
                        </div>
                        <div className="col">
                            <div style={{float: 'right', display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <span onClick={this.handleChangeViewType.bind(this)} >
                                    {this.state.viewType ? <i className="fa fa-list fa-lg" aria-hidden="true" /> :
                                        <i className="fa fa-table fa-lg" aria-hidden="true" />}


                                    &nbsp;&nbsp;
                            </span>
                                <span>
                                <i className="fa fa-chevron-left " aria-hidden="true"/>&nbsp;&nbsp;&nbsp;Page&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-chevron-right" aria-hidden="true"/>

                            </span>
                            </div>

                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default (GameDetailSearchBar);
