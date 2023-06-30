import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import Chart from "../../../images/icon-chart.svg";
import Cog from "../../../images/icon-cog.svg";
import User from "../../../images/icon-person.svg";
import ShapeLeft from "../../../images/bg-pattern-about-2-contact-1.svg";
import ShapeRight from "../../../images/bg-pattern-contact-2.png";
import ShapeSmall from "../../../images/bg-pattern-contact-2-1.png";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>My Team - Contact Page </title>
      </Helmet>
      <header>
        <Navigation />
      </header>
      <section className="contact-section">
        <div className="contact-section__shape">
          <img src={ShapeLeft} alt="" />
        </div>
        <div className="contact-section__description">
          <div>
            <h1>Contact</h1>
            <h2>Ask us about</h2>
            <ul>
              <li>
                <img src={User} alt="User" />
                <p>The quality of our talent network</p>
              </li>
              <li>
                <img src={Cog} alt="Cog" />
                <p>Usage & implementation of our software</p>
              </li>
              <li>
                <img src={Chart} alt="Chart" />
                <p>How we help drive innovation</p>
              </li>
            </ul>
          </div>
          <div>
            <form action="/" method="POST">
              <div>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div>
                <input type="text" name="name" placeholder="Email Address" />
              </div>
              <div>
                <input type="text" name="name" placeholder="Company Name" />
              </div>
              <div>
                <input type="text" name="name" placeholder="Title" />
              </div>
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                placeholder="Message"
              ></textarea>
              <div>
                <button>submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-section__right">
          <img src={ShapeRight} alt="" />
        </div>
        <div className="contact-section__small">
          <img src={ShapeSmall} alt="" />
        </div>
      </section>
      <div className="footer-sec">
        <Footer />
      </div>
    </>
  );
}
