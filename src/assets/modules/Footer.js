import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";

import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

import About from "./pages/About";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <div>
          <ul className="footer__nav">
            <li>
              <a href="./pages/About" target="_blank">
                about
              </a>
            </li>
            <li>
              <Router>
                <NavLink exact to="/about">
                  about
                </NavLink>

                <Routes>
                  <Route path="/about" element={<About />} />
                </Routes>
              </Router>
            </li>
          </ul>
        </div>
        <div className="footer__info">
          <ul>
            <li>987 Hillcrest Lane</li>
            <li>Irvine, CA</li>
            <li>California 92714</li>
            <li>Call Us : 949-833-7432</li>
          </ul>
        </div>

        <div className="footer__links">
          <a href="/">
            <img src={facebook} alt="Facebook Logo" />
          </a>
          <a href="/">
            <img src={pinterest} alt="Pinterest Logo" />
          </a>
          <a href="/">
            <img src={twitter} alt="Twitter Logo" />
          </a>
        </div>
        <p>Copyright 2023. All Rights Reserved</p>
      </footer>
    </>
  );
}
