import React, { Component } from "react";
import pattern1 from "../images/bg-pattern-home-6-about-5.svg";
import { Link } from "react-router-dom";

export default class GetStarted extends Component {
  render() {
    return (
      <>
        <section className="getstarted">
          <div>
            <div>
              <h2>Ready to get started?</h2>
              <Link to="/contact">contact us</Link>
            </div>
            <div>
              <img src={pattern1} />
            </div>
          </div>
        </section>
      </>
    );
  }
}