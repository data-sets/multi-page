import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

export const today = new Date();

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
                <a href="/">home</a>
              </li>
              <li>
                <a href="/about/">about</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__info">
          <ul>{listItems}</ul>
        </div>

        <div>
          <div className="footer__links">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="Facebook Logo" />
            </a>
            <a href="https://ph.pinterest.com/" target="_blank">
              <img src={pinterest} alt="Pinterest Logo" />
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank">
              <img src={twitter} alt="Twitter Logo" />
            </a>
          </div>
          <div className="footer__copyright">
            <p>Copyright {today.getFullYear()}. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
