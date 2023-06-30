import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "../images/logo.svg";
import Shape from "../images/bg-pattern-about-1-mobile-nav-1.svg";
import { Link } from "react-router-dom";

let styles = {
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
    width: "3px",
    height: "25px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: 0,
  },
  bmMenu: {
    background: "#2C6269",

    fontSize: "1.15em",
    top: "0",
    height: "100vh",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
    padding: "30px",
    margin: "70px 0 0 0",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },

  bmBurgerBars: {
    background: "white",
  },

  bmBurgerButton: {
    position: "absolute",
    width: "25px",
    height: "20px",
    right: "36px",
    top: "36px",
  },
};
export default class Header extends Component {
  render() {
    return (
      <>
        {/* Start Mobile Menu */}
        <section className="header hide-for-desktop ">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="My Team Logo" />
            </Link>
          </div>
          <div className="header__menu">
            <Menu styles={styles} right active fallDown>
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/contact">contact us</Link>
                </li>
              </ul>
              <div className="header__shape">
                <img src={Shape} alt="Shape" />
              </div>
            </Menu>
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
            <Link to="/contact">contact us</Link>
          </div>
        </section>
      </>
    );
  }
}
