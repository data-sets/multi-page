import React from "react";

import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import { Link } from "react-router-dom";

const dataList = [
  {
    id: 1,
    detail: "987 Hillcrest Lane",
  },
  {
    id: 2,
    detail: "Irvine, CA",
  },
  {
    id: 3,
    detail: "California 92714",
  },
  {
    id: 4,
    detail: "Call Us : 949-833-7432",
  },
];

export default function Footer() {
  const listItems = dataList.map((data) => (
    <li key={data.id}>{data.detail}</li>
  ));
  return (
    <>
      <footer className="footer">
        <div>
          <div className="footer__logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div>
            <ul className="footer__nav">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__info">
          <ul>{listItems}</ul>
        </div>

        <div>
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
          <div className="footer__copyright">
            <p>Copyright 2023. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
