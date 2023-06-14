import React from 'react';
import { connect } from 'react-redux';
import { Zoom } from 'react-slideshow-image';

const mapStateToProps = (state) => {
  return {
    banners: state.banners
  };
};

const mapDispatchToProps = (dispatch) => ({
  // onAnswer: payload => dispatch({ type: ActionTypes.QuizAnswer, payload })
});

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  onLoaded(value) {
    // for a date field, the value is passed into the change handler
    this.props.onChange('loaded', value);
  }

  render() {
    return (
      <div className="slide-container">
        {/*<Fade>*/}
        {/*    {this.props.banner.map((fadeImage, index) => (*/}
        {/*        <div key={index}>*/}
        {/*            <img style={{ width: '100%' }} src={fadeImage.url} />*/}
        {/*            <h2>{fadeImage.caption}</h2>*/}
        {/*        </div>*/}
        {/*    ))}*/}
        {/*</Fade>*/}

        <Zoom scale={1.4} indicators={true}>
          {this.props.banners.map((each, index) => (
            <div key={index} style={{ width: '100%' }}>
              <img
                style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
                alt="Slide Image"
                src={each.imageUrl}
                onLoad={() => setTimeout(() => this.onLoaded(true), 1000)}
              />
            </div>
          ))}
        </Zoom>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);

