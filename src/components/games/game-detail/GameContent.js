import React from 'react';
import './game-detail.css';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


class GameContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
        parent.scrollTo(0, 0);
    }

    componentDidMount() {
    }

    render() {
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
}

export default GameContent
