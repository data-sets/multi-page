import React, { Component } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import GetStarted from "../../GetStarted";
import Header from "../About/Header";
import Director from "../About/Director";

export default class About extends Component {
  render() {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <Header />
        <Director />
        <GetStarted />
        <Footer />
      </>
    );
  }
}
