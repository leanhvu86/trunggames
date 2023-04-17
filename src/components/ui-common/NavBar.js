import {Link, NavLink} from "react-router-dom";
import React, {useState} from 'react';

function NavBar() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()}/>
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <div className="nav-logo">
                        <Link  to="/">
                            <img className="logo" src={'./website-logo.png'} alt=""/>
                        </Link>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/games"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/top-sale"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Top Sale
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/blog"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                BLog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about-us"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}/>
                    </div>
                </div>
            </nav>
        </ div>
    );
}

export default NavBar;
