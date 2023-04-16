import React, { Component } from "react";
import shape from "../images/bg-pattern-home-4-about-3.svg";
import avatar from "../images/avatar-kady.jpg";
import avatar1 from "../images/avatar-aiysha.jpg";
import avatar2 from "../images/avatar-arthur.jpg";
import quote from "../images/icon-quotes.svg";

export default class Testimonial extends Component {
  render() {
    return (
      <>
        <section className="testimonial">
          <img className="testimonial__shape" src={shape} alt="shape" />
          <h2>
            Delivering real results for top companies. Some of our
            <blockquote> success stories.</blockquote>
          </h2>

          <div className="testimonial__cards">
            <div>
              <img className="testimonial__quote" src={quote} alt="Quote" />
              <p>
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h4>Kady Baker</h4>
              <img className="testimonial__avatar" src={avatar} alt="Kady" />
            </div>

            <div>
              <img className="testimonial__quote" src={quote} alt="Quote" />
              <p>
                “We needed to automate our entire onboarding process. The team
                came in and built out the whole journey. Since going live, user
                retention has gone through the roof!”
              </p>
              <h4>Aiysha Reese</h4>
              <img className="testimonial__avatar" src={avatar1} alt="Aiysha" />
            </div>

            <div>
              <img className="testimonial__quote" src={quote} alt="Quote" />
              <p>
                “Amazing. Our team helped us build an app that delivered a new
                experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.”
              </p>
              <h4>Arthur Clarke</h4>
              <img className="testimonial__avatar" src={avatar2} alt="Arthur" />
            </div>
          </div>
        </section>
      </>
    );
  }
}
