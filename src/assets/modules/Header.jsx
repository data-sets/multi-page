import React, { Component } from "react";
import Navigation from "../modules/Navigation";
import pattern from "../images/bg-pattern-home-2.svg";
import pattern1 from "../images/bg-pattern-home-1.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <Navigation />
          <section className="h_content container">
            <div className="h_content__shape">
              <img src={pattern1} alt="" />
            </div>
            <h1>
              Find the best <span>talent</span>
            </h1>
            <div>
              <div className="h_content__line"></div>
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
