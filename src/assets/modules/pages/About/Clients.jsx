import React from "react";
import Verge from "../../../images/logo-the-verge.png";
import Post from "../../../images/logo-jakarta-post.png";
import Guardian from "../../../images/logo-the-guardian.png";
import Radar from "../../../images/logo-tech-radar.png";
import Gadget from "../../../images/logo-gadgets-now.png";
import Shape from "../../../images/bg-pattern-about-4.svg";
import Shape1 from "../../../images/bg-pattern-about-4-1.svg";
import Shape2 from "../../../images/bg-pattern-about-4-2.svg";

export default function Clients() {
  return (
    <>
      <section className="clients-section">
        <div className="clients-section__shape">
          <img src={Shape} alt="" />
        </div>
        <div className="clients-section__shape--hide-desktop">
          <img src={Shape1} alt="" />
        </div>
        <div className="clients-section__shape--show-mobile">
          <img src={Shape2} alt="" />
        </div>
        <div>
          <h2>Some of our clients</h2>
          <ul>
            <li>
              <img src={Verge} alt="Verge" />
            </li>
            <li>
              <img src={Post} alt="Post" />
            </li>
            <li>
              <img src={Guardian} alt="Guardian" />
            </li>
            <li>
              <img src={Radar} alt="Radar" />
            </li>
            <li>
              <img src={Gadget} alt="Gadget" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
