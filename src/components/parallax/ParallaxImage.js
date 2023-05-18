import React from 'react';
import './parallax.css';
import 'react-slideshow-image/dist/styles.css';
import { FormattedMessage } from 'react-intl';

class ParallaxImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="title" className="section header">
        {/*<h1>Trung AboutUs</h1>*/}
        <h1>
          <FormattedMessage id="your happiness is our business mission" />
        </h1>
        <span>
          <FormattedMessage id="top ten of best game charging in vietnam" />
        </span>
      </div>
    );
  }
}

export default ParallaxImage;
