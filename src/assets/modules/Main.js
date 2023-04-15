import React, { Component } from "react";
import patter0 from "../images/bg-pattern-home-3.svg";
import icon from "../images/icon-person.svg";
import iconCog from "../images/icon-cog.svg";
import iconChart from "../images/icon-chart.svg";

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

          <div className="main__featured">
            <div className="main__card">
              <div className="main__icon">
                <img src={icon} alt="" />
              </div>
              <h3>Experienced Individuals</h3>
              <p>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
            <div className="main__card">
              <div className="main__icon">
                <img src={iconCog} alt="" />
              </div>
              <h3>Easy to Implement</h3>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
            <div className="main__card">
              <div className="main__icon">
                <img src={iconChart} alt="" />
              </div>
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