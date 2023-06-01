import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { connect } from 'react-redux';
import 'react-slideshow-image/dist/styles.css';
import Banner from './components/Banner';
import TopMenu from './components/ui-common/TopMenu';
import { Translation } from 'react-i18next';
import NavBar from './components/ui-common/NavBar';
import CustomerService from './components/customer-service/CustomerService';
import LoadingSpinner from './components/ui-common/LoadingSpinner';
import MobilePopular from './components/mobile-polular/MobilePopular';
import ScrollButton from './components/ui-common/ScrollButton';
import NewGame from './components/new-game/NewGame';
import NewPackage from './components/new-package/NewPackage';
import Footer from './components/Footer';
import ParallaxImage from './components/parallax/ParallaxImage';
import { FormattedMessage } from 'react-intl';

const mapStateToProps = (state) => {
  return { ...state.quiz };
};

const mapDispatchToProps = (dispatch) => ({
  // onQuizLoad: payload => dispatch({type: ActionTypes.QuizLoad, payload}),
  // onSubmit: payload => dispatch({type: ActionTypes.QuizSubmit, payload}),
  // onPagerUpdate: payload => dispatch({type: ActionTypes.PagerUpdate, payload})
});

const fadeImages = [
  {
    // url: configData.SERVER_URL+'/file/1bcd9b96-07e7-45e3-8820-b26cc475ac88-banner.jpg',
    url: './image/banner.jpg',
    caption: 'First Slide'
  },
  {
    // url: configData.SERVER_URL+'/file/c50eb9b4-b9f6-4bfe-8f86-262a241ea344-banner2.jpg',
    url: './image/banner4.jpg',
    caption: 'Second Slide'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/banner5.jpg',
    caption: 'Third Slide'
  }
];
const slide_img = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  'https://swiperjs.com/demos/images/nature-7.jpg',
  'https://swiperjs.com/demos/images/nature-8.jpg',
  'https://swiperjs.com/demos/images/nature-9.jpg'
];

const newGame = [
  {
    // url: configData.SERVER_URL+'/file/1bcd9b96-07e7-45e3-8820-b26cc475ac88-banner.jpg',
    url: './image/mobile-free-fire.png',
    caption: 'Free fire'
  },
  {
    // url: configData.SERVER_URL+'/file/c50eb9b4-b9f6-4bfe-8f86-262a241ea344-banner2.jpg',
    url: './image/mobile-game-legend.png',
    caption: 'Game legend'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/mobile-genshin-impact.png',
    caption: 'Genshin Impact'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/mobile-honkai-impact-3.png',
    caption: 'Honkai Impact 3'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/mobile-tower-of-fantasy.png',
    caption: 'Tower Of Fancaty'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/PC-dragon-nest.png',
    caption: 'Dragon Nest'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/PC-final-fantasy-XVI.png',
    caption: 'Final Fantasy XVI'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/PC-lord-ark.png',
    caption: 'Lord Ark'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/smash-legend.png',
    caption: 'Smash Legend'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/viking-rise.png',
    caption: 'Viking Rise'
  }
];

const newPackage = [
  {
    // url: configData.SERVER_URL+'/file/1bcd9b96-07e7-45e3-8820-b26cc475ac88-banner.jpg',
    url: './image/1.png',
    caption: 'Free fire'
  },
  {
    // url: configData.SERVER_URL+'/file/c50eb9b4-b9f6-4bfe-8f86-262a241ea344-banner2.jpg',
    url: './image/2.png',
    caption: 'Game legend'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/3.png',
    caption: 'Genshin Impact'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/4.png',
    caption: 'Honkai Impact 3'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/5.png',
    caption: 'Tower Of Fancaty'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/6.png',
    caption: 'Dragon Nest'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/7.png',
    caption: 'Final Fantasy XVI'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/8.png',
    caption: 'Lord Ark'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/9.png',
    caption: 'Smash Legend'
  },
  {
    // url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
    url: './image/10.png',
    caption: 'Viking Rise'
  }
];

class App extends React.Component {
  state = {
    banner: this.props.banner,
    loaded: false
  };

  componentDidMount() {
    const AnimationFramerRes = window.requestAnimationFrame((e) => console.log(e));
    window.cancelAnimationFrame(AnimationFramerRes);
    // document.addEventListener('contextmenu', (e) => {
    //     e.preventDefault();
    // });
  }

  onChange(value) {
    // parent class change handler is always called with field name and value
    this.setState({ loaded: value });
    // console.log('App load success',value)
  }

  render() {
    return (
      <div>
        {this.state.loaded ? null : <LoadingSpinner />}
        <Translation>{(t) => <TopMenu t={t} />}</Translation>
        <NavBar />
        <Banner banner={fadeImages} onChange={this.onChange.bind(this)} />
        <CustomerService />
        <MobilePopular />
        <NewGame newGame={newGame} />
        <div className="center-title">
          <h1 align="center">
            <FormattedMessage id="new package" />
          </h1>
          <div className="underline-span" />
        </div>
        <NewPackage slideImage={newPackage} />
        <ParallaxImage />
        <div className="center-title">
          <h1 align="center">
            <FormattedMessage id="best sale" />
          </h1>
          <div className="underline-span" />
        </div>
        <NewPackage slideImage={newPackage} />
        <Footer />
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

