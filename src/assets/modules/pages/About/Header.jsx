import React from "react";
import { Helmet } from "react-helmet";
import Shape from "../../../images/bg-pattern-about-1-mobile-nav-1.svg";
const Header = () => {
  return (
    <>
      <Helmet>
        <title>My Team - About Page</title>
      </Helmet>

      <header>
        <div className="container about-header">
          <div>
            <h1>About</h1>
          </div>
          <div>
            <div className="about-header__shape--line"></div>
            <p>
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
            <div className="about-header__shape">
              <img src={Shape} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
