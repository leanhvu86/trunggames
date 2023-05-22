import React, { useEffect, useState } from 'react';
import './MobilePopular.css';
import spring from 'react-motion/lib/spring';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class MobilePopular extends React.Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
    this.getSpringProps = this.getSpringProps.bind(this);
  }

  handleHover(active) {
    this.setState({ isHover: active });
  }

  getSpringProps() {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0
      },
      style: {
        scale: spring(this.state.isHover ? 1 : 1.15),
        marginTop: spring(this.state.isHover ? 22 : 25),
        imageOpacity: spring(this.state.isHover ? 0.4 : 0.7),
        opacity: spring(this.state.isHover ? 1 : 0)
      }
    };
  }

  renderMobileGames() {
    return (
      <div className="row service-container1">
        <div className="img-hover-zoom">
          <img src={require('./mobile-image/category-image-02-446x550_t.jpg')} alt="Batman" />
          <div className="image-footer">
            <span className="game-name">Batman</span>
            <br />
            <span className="shop-now">
              <FormattedMessage id="shop now" />
            </span>
          </div>
        </div>
        <div className="img-hover-zoom">
          <img src={require('./mobile-image/category-image-01-446x550_t.jpg')} alt="Bayonetta" />
          <div className="image-footer">
            <span className="game-name">Bayonetta</span>
            <br />
            <span className="shop-now">
              <FormattedMessage id="shop now" />
            </span>
          </div>
        </div>
        <div className="img-hover-zoom">
          <img src={require('./mobile-image/category-image-03-446x550_t.jpg')} alt="Dark souls" />
          <div className="image-footer">
            <span className="game-name">Dark souls</span>
            <br />
            <span className="shop-now">
              <FormattedMessage id="shop now" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  renderPCGame() {
    return (
      <div className="row service-container1">
        <div className=" image-content">
          <div className="img-block">
            <span />
            <Link to="/game-detail" className="product-nav-links">
              <img src={require('./mobile-image/dragon-nest.png')} alt="Dragon Nest" />
            </Link>
          </div>
        </div>
        <div className=" image-content ">
          <div className="img-block">
            <span />
            <Link to="/game-detail" className="product-nav-links">
              <img src={require('./mobile-image/final-fantasy-xvi.png')} alt="Final Fantasy XVI" />
            </Link>
          </div>
        </div>
        <div className=" image-content">
          <div className="img-block">
            <span />
            <Link to="/game-detail" className="product-nav-links">
              <img src={require('./mobile-image/bless-unleashed.png')} alt="Bless unleashed" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="center-title">
          <h1 align="center">
            <FormattedMessage id="most popular mobile games" />
          </h1>
          <div className="underline-span" />
        </div>

        {this.renderMobileGames()}
        <div className="center-title">
          <h1 align="center">
            <FormattedMessage id="top sale" />
          </h1>
          <div className="underline-span" />
        </div>

        {this.renderPCGame()}
      </div>
    );
  }
}

export default MobilePopular;
