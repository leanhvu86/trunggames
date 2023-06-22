import React from 'react';
import './game-detail.css';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {addToCart} from "../../../constants/cartActions";
import {connect} from "react-redux";


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
                        data={this.props.language==='en'?this.props.game.contentEn:this.props.game.contentVi}
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
                    <iframe src={"https://www.youtube.com/embed/"+this.props.game.youtubeLink}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                    />
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.language,
        game: state.game
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        // addToCart: (id) => {
        //     dispatch(addToCart(id));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContent);

