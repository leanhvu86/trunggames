import React from 'react';
import './game-detail.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

                                    <div style={{
                                        fontSize: '10px',
                                        borderRadius: '15px',
                                        padding: '10px 10px'

                                    }}>
                                        <strong style={{color:'white'}}>Giới thiệu về {this.props.game.name}</strong>
                                        <br/>
                                        <CKEditor
                                            editor={ ClassicEditor }
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

                </div>
            </div>
        )
    }
}

export default (SubNavGame);
