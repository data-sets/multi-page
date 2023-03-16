import React, { Component } from "react";
import patter0 from "../images/bg-pattern-home-3.svg";

export default class Main extends Component {
  render() {
    return (
      <>
        <main className="main">
          <div className="main__desc">
            <div className="main__title">
              <h2>Build & manage distributed teams like no one else.</h2>
            </div>
            <div className="main__pattern">
              <img src={patter0} alt="" />
            </div>
          </div>

          <div className="main_featured">
            <div>
              <h3>Experienced Individuals</h3>
              <p>
                Our Network is made up of hughly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
            <div>
              <h3>Easy to Implement</h3>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
            <div>
              <h3>Enhanced Productivity</h3>
              <p>
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }
}
