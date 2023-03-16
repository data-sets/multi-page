import React from "react";
import About from "./assets/modules/About";
import Contact from "./assets/modules/Contact";
import "../src/dist/style.css";

export default function App() {
  return (
    <>
      <div className="App">
        <About />
        <Contact />
      </div>
    </>
  );
}
