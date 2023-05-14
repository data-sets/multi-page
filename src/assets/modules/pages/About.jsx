import React, { Component } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import GetStarted from "../GetStarted";


export default class About extends Component {
  render() {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <GetStarted />
        <Footer />
      </>
    );
  }
}
