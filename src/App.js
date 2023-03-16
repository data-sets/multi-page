import React from "react";
import About from "./assets/modules/About";
import Contact from "./assets/modules/Contact";
import Main from "./assets/modules/Main";
import Header from "./assets/modules/Header";

import "../src/dist/style.css";

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        {/* <About />
        <Contact /> */}
      </div>
    </>
  );
}
