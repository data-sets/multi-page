import React from "react";
import Main from "./assets/modules/Main";
import Header from "./assets/modules/Header";
import Testimonial from "./assets/modules/Testimonial";

import "../src/dist/style.css";

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Testimonial />
        {/* 
        <Contact /> */}
      </div>
    </>
  );
}
