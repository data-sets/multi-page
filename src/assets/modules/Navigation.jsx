import React, { Component } from "react";

import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <section className="header hide-for-desktop ">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="My Team Logo" />
            </Link>
          </div>
          <div className="header__menu">
            <nav>
              <img src={burger} alt="Burger Menu" />
            </nav>
          </div>
        </section>
        {/* End Mobile Menu */}

        <section className="header hide-for-mobile container">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="My Team Logo" />
            </Link>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>
          <div className="header__menu">
            <Link to="/contact">contact</Link>
          </div>
        </section>
      </>
    );
  }
}
