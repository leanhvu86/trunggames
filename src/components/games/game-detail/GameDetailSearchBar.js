import React, {useState} from 'react';
import './game-detail.css';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";


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

    handleClick(type) {
        console.log(type)
        if (type === 1) {
            if (this.state.type === type) {
                document.getElementById("hot-search").classList.remove('active');
                this.setState({type:0})
            } else {
                document.getElementById("hot-search").classList.add('active');
                document.getElementById("new-search").classList.remove('active');
                document.getElementById("price-search").classList.remove('active');
                document.getElementById("rating-search").classList.remove('active');
                this.setState({type:type})

            }
        } else if (type === 2) {
            if (this.state.type === type) {
                document.getElementById("new-search").classList.remove('active');
                this.setState({type:0})
            } else {
                document.getElementById("hot-search").classList.remove('active');
                document.getElementById("new-search").classList.add('active');
                document.getElementById("price-search").classList.remove('active');
                document.getElementById("rating-search").classList.remove('active');
                this.setState({type:type})

            }

        } else if (type === 3) {
            if (this.state.type === type) {
                document.getElementById("price-search").classList.remove('active');
                this.setState({type:0})
            } else {
                document.getElementById("hot-search").classList.remove('active');
                document.getElementById("new-search").classList.remove('active');
                document.getElementById("price-search").classList.add('active');
                document.getElementById("rating-search").classList.remove('active');
                this.setState({type:type})

            }
        } else {
            if (this.state.type === type) {
                document.getElementById("rating-search").classList.remove('active');
                this.setState({type:0})

            } else {
                document.getElementById("hot-search").classList.remove('active');
                document.getElementById("new-search").classList.remove('active');
                document.getElementById("price-search").classList.remove('active');
                document.getElementById("rating-search").classList.add('active');
                this.setState({type:type})

            }
        }
    };

    handleChangeViewType() {
        this.setState({viewType: !this.state.viewType});
    }

    renderSearchWebsite() {
        return (
            <div className="row">
                <div className="col">
                            <span className="search-bar-icon-filter" id="hot-search"
                                  onClick={this.handleClick.bind(this, 1)}>
                                <i className="fa fa-fire" aria-hidden="true"/>&nbsp;Hot</span>
                    <span className="search-bar-icon-filter" id="new-search" onClick={this.handleClick.bind(this, 2)}>
                                <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;New</span>
                    <span className="search-bar-icon-filter" id="price-search" onClick={this.handleClick.bind(this, 3)}>
                                <i className="fa fa-usd" aria-hidden="true"/>&nbsp;Price</span>
                    <span className="search-bar-icon-filter" id="rating-search"
                          onClick={this.handleClick.bind(this, 4)}>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"/>&nbsp;Rating</span>

                </div>
                <div className="col">
                </div>
                <div className="col">
                    <div style={{
                        float: 'right', display: 'flex',
                        justifyContent: 'center'
                    }}>
                                <span onClick={this.handleChangeViewType.bind(this)}>
                                    {this.state.viewType ? <i className="fa fa-list fa-lg" aria-hidden="true"/> :
                                        <i className="fa fa-table fa-lg" aria-hidden="true"/>}


                                    &nbsp;&nbsp;
                            </span>
                        <span>
                                <i className="fa fa-chevron-left "
                                   aria-hidden="true"/>&nbsp;&nbsp;&nbsp;Page&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-chevron-right" aria-hidden="true"/>

                            </span>
                    </div>

                </div>
            </div>
        )
    }

    renderSearchMobile() {
        return (
            <div className="row">
                <div className="col-8">
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-fire" aria-hidden="true"/>&nbsp;Hot</span>
                    <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;New</span>
                    <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-usd" aria-hidden="true"/>&nbsp;Price</span>
                    <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this)}>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"/>&nbsp;Rating</span>

                </div>
                <div className="col-4">
                    <div style={{
                        float: 'right', display: 'flex',
                        justifyContent: 'center'
                    }}>
                                <span onClick={this.handleChangeViewType.bind(this)}>
                                    {this.state.viewType ? <i className="fa fa-list fa-lg" aria-hidden="true"/> :
                                        <i className="fa fa-table fa-lg" aria-hidden="true"/>}


                                    &nbsp;&nbsp;
                            </span>
                        <span>
                                <i className="fa fa-chevron-left "
                                   aria-hidden="true"/>&nbsp;&nbsp;&nbsp;Page&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-chevron-right" aria-hidden="true"/>

                            </span>
                    </div>

                </div>
            </div>
        )
    }

    renderListPackage() {
        return (
            <div>
                <div className="seach-content search-detail-bar">
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
                <div className="seach-content search-detail-bar">
                    {window.innerWidth < 1000 ? this.renderSearchMobile() : this.renderSearchWebsite()}
                    <hr/>
                </div>
            </div>
        )
    }

    renderContent() {
        return (
            <div className="container search-detail-bar">
                <div className="row search-detail-bar">
                    <br/>
                    <CKEditor
                        editor={ClassicEditor}
                        disabled
                        data={this.props.game.contentEn}
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );

                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            // console.log( { event, editor, data } );
                        }}
                        onBlur={(event, editor) => {
                            // console.log( 'Blur.', editor );
                        }}
                        onFocus={(event, editor) => {
                            // console.log( 'Focus.', editor );
                        }}
                    />
                </div>

            </div>

        )
    }

    onClickChangeContent(e) {
        this.setState({viewType: !this.state.viewType});
    }

    render() {
        return (
            <div className="container ">
                <div className="row ">
                    <div className="col-4">

                    </div>
                    <div className="col-8">
                        <div style={{
                            width: 'auto', float: 'right', height: 'auto',
                            padding: '5px 5px', color: 'white'
                        }}>
                            {this.state.viewType ?
                                <span onClick={this.onClickChangeContent.bind(this)} className="view-type-button">User Guide</span>
                                : <span onClick={this.onClickChangeContent.bind(this)} className="view-type-button">Buy Package</span>}
                        </div>
                    </div>

                </div>
                <br/>
                {this.state.viewType ? this.renderListPackage() : this.renderContent()}
            </div>
        )
    }
}

export default (GameDetailSearchBar);
