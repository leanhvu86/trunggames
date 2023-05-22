import { Link } from 'react-router-dom';
import React from 'react';
import { FormattedMessage } from 'react-intl';

function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img className="logo" src={'./website-logo.png'} alt="" />
            </Link>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <FormattedMessage id="home" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/games"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <FormattedMessage id="shop" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/top-sale"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <FormattedMessage id="top sale" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <FormattedMessage id="blog" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <FormattedMessage id="about us" />
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
