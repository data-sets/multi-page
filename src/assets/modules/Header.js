import React, { Component } from "react";
import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import pattern from "../images/bg-pattern-home-2.svg";
export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <section className="header">
            <div className="header__logo">
              <img src={logo} alt="My Team Logo" />
            </div>
            <div className="header__menu">
              <nav>
                <img src={burger} alt="Burger Menu" />
              </nav>
            </div>
          </section>
          <section className="h_content">
            <h1>
              Find the best <span>talent</span>
            </h1>
            <div>
              <p>
                Finding the right people and building high performing teams can
                be hard. Most companies aren't tapping into the abundance of
                global talent. We're about to change that.
              </p>
              <img src={pattern} alt="" />
            </div>
          </section>
        </header>
      </>
    );
  }
}
