import React, { Component } from "react";
import Navigation from "../modules/Navigation";
import pattern from "../images/bg-pattern-home-2.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <Navigation />
          <section className="h_content container">
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
