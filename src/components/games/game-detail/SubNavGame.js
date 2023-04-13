import React from 'react';
import './game-detail.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Tippy from "@tippyjs/react";

class SubNavGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    componentDidMount() {
    }

    onLoaded(value) {
        // for a date field, the value is passed into the change handler
        this.props.onChange('loaded', value);
    }

    renderMobile(){
        return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <br/>
                    <div className="game-cover">
                        <div className="cover">
                            <Tippy placement="right" content={<span>{this.props.game.name}</span>}>
                                <img src={this.props.game.thumbnail} alt=""
                                     onLoad={() => setTimeout(()=>this.onLoaded(true), 1000)}
                                />
                            </Tippy>

                        </div>
                    </div>
                </div>
                <div className="col content-detail">
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
            </div>
        </div>
        )
    }

    renderWebsite(){
        return(
            <div className="row">
                <div className="col-4">
                    <br/>
                    <div className="game-cover">
                        <div className="cover">
                            <img src={this.props.game.thumbnail} alt=""
                                 onLoad={() => setTimeout(()=>this.onLoaded(true), 1000)}
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

                            <div style={{
                                fontSize: '10px',
                                borderRadius: '15px',
                                padding: '10px 10px'

                            }}>
                                <strong style={{color:'white'}}>About {this.props.game.name}</strong>
                                <br/>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    disabled
                                    data={this.props.game.description}
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        // console.log( 'Editor is ready to use!', editor );

                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        // console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        // console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        // console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
    render() {
        return (
            <div className="sub-nav">
                <div className="container">
                    {window.innerWidth<1000?this.renderMobile():this.renderWebsite()}
                </div>
            </div>
        )
    }
}

export default (SubNavGame);
