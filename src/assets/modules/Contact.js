import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        {/* Art Galler Section */}
        <section className="hide-for-mobile tech-used art-gallery">
          <h2 className="reveal fade-bottom cursive">Art Gallery</h2>
          <p className="reveal fade-bottom">
            I do some sketching and portrait in my free time. Feel free to visit
            this page
          </p>
          <button className="reveal fade-bottom" id="artrelated">
            View Gallery
          </button>
        </section>
      </>
    );
  }
}
