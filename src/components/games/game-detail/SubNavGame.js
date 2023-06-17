import React from 'react';
import './game-detail.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Tippy from '@tippyjs/react';
import { viewGame } from '../../../constants/cartActions';
import { connect } from 'react-redux';

class SubNavGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {}

  onLoaded(value) {
    // for a date field, the value is passed into the change handler
    this.props.onChange('loaded', value);
  }

  renderMobile() {
    return (
      <div className="row">
        <div className="col">
          <br />
          <div>
            <div
              style={{
                perspective: '25em'
              }}
            >
              <Tippy placement="right" content={<span>{this.props.game.name}</span>}>
                <img
                  src={this.props.game.imageUrl}
                  alt=""
                  onLoad={() => setTimeout(() => this.onLoaded(true), 1000)}
                  style={{
                    transform: 'rotateY(10deg)',
                    borderRadius: '8px',
                    maxWidth: '200px'
                  }}
                />
              </Tippy>
            </div>
          </div>
        </div>
        <div className="col content-detail">
          <br />
          <h3>{this.props.game.name}</h3>
          <br />
          <a>
            <span>{this.props.game.type}</span>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>{this.props.game.marketType}</span>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>{this.props.game.companyName}</span>
          </a>
        </div>
      </div>
    );
  }

  renderWebsite() {
    return (
      <div style={{ display: 'flex', padding: '10px 20px', gap: '20px' }}>
        <div className="grid-container">
          <div
            className="game-detail-img"
            style={{
              perspective: '25em',
              gridArea: 'a'
            }}
          >
            <img
              src={this.props.game.imageUrl}
              alt=""
              className=""
              onLoad={() => setTimeout(() => this.onLoaded(true), 1000)}
              style={{
                transform: 'rotateY(10deg)',
                borderRadius: '8px',
                maxWidth: '200px',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
          <div className="text-white" style={{ gridArea: 'b' }}>
            <h3>{this.props.game.name}</h3>
            <a>
              <span>{this.props.game.type}</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>{this.props.game.marketType}</span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>{this.props.game.companyName}</span>
            </a>
          </div>
          <div
            className="content-des"
            style={{
              gridArea: 'c'
            }}
          >
            <div
              style={{
                fontSize: '11px',
                borderRadius: '15px'
              }}
            >
              <strong style={{ color: 'white' }}>About {this.props.game.name}</strong>
              <br />
              <CKEditor
                editor={ClassicEditor}
                disabled
                data={this.props.language === 'en' ? this.props.game.descriptionEn : this.props.game.description}
                onReady={(editor) => {
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
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="sub-nav">
        <div className="container">{this.renderWebsite()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // viewGame: (data) => {
    //     dispatch(viewGame(data))
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubNavGame);

