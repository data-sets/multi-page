import React from "react";
import Plus from "../../../images/icon-cross.svg";
import Shape from "../../../images/bg-pattern-home-4-about-3.svg";
import ShapeLeft from "../../../images/bg-pattern-about-2-contact-1.svg";
import Avatar1 from "../../../images/avatar-nikita.jpg";
import Avatar2 from "../../../images/avatar-christian.jpg";
import Avatar3 from "../../../images/avatar-cruz.jpg";
import Avatar4 from "../../../images/avatar-drake.jpg";
import Avatar5 from "../../../images/avatar-aden.jpg";

export default function Director() {
  return (
    <main className="director-section">
      <div className="director-section__shape--left">
        <img src={ShapeLeft} alt="" />
      </div>
      <section className="container">
        <h2>Meet the directors</h2>
        <ul>
          <li>
            <img src={Avatar1} alt="Nikita Marks" />
            <h3>Nikita Marks</h3>
            <p>Founder & CEO</p>
            <div>
              <a href="/">
                <img src={Plus} alt="" />
              </a>
            </div>
          </li>
          <li>
            <img src={Avatar2} alt="Christian Duncan" />
            <h3>Christian Duncan</h3>
            <p>Co-founder & COO</p>
            <div>
              <a href="/">
                <img src={Plus} alt="" />
              </a>
            </div>
          </li>
          <li>
            <img src={Avatar3} alt="Cruz Hamer" />
            <h3>Cruz Hamer</h3>
            <p>Co-founder & CTO</p>
            <div>
              <a href="/">
                <img src={Plus} alt="" />
              </a>
            </div>
          </li>
          <li>
            <img src={Avatar4} alt="Drake Heaton" />
            <h3>Drake Heaton</h3>
            <p>Business Development Lead</p>
            <div>
              <a href="/">
                <img src={Plus} alt="" />
              </a>
            </div>
          </li>
          <li>
            <img src={Avatar5} alt="Aden Allan" />
            <h3>Griffin Wise</h3>
            <p>Lead Marketing</p>
            <div>
              <a href="/">
                <img src={Plus} alt="" />
              </a>
            </div>
          </li>

          <li>
            <h3>Aden Allan</h3>
            <p>
              “Empowered teams create truly amazing products. Set the north star
              and let them follow it.”
            </p>
            <span>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
            </span>

            <div>
              <a href="/">
                <img src={Plus} alt="" />
              </a>
            </div>
          </li>
        </ul>
      </section>
      <div className="director-section__shape">
        <img src={Shape} alt="" />
      </div>
    </main>
  );
}
