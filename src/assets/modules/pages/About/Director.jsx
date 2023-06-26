import React from "react";
import Plus from "../../../images/icon-cross.svg";
import Shape from "../../../images/bg-pattern-home-4-about-3.svg";
import ShapeLeft from "../../../images/bg-pattern-about-2-contact-1.svg";
const dataList = [
  {
    id: 1,
    name: "Nikita Marks",
    imgUrl: "https://imgur.com/HgMxSNi.jpg",
  },
  {
    id: 2,
    name: "Cristian Duncan",
    imgUrl: "https://imgur.com/8DeG8nV.jpg",
  },
  {
    id: 3,
    name: "Cruz Hamer",
    imgUrl: "https://imgur.com/xCwYmyi.jpg",
  },
  {
    id: 4,
    name: "Drake Heaton",
    imgUrl: "https://imgur.com/6v0JVZQ.jpg",
  },
  {
    id: 5,
    name: "Griffin Wise",
    imgUrl: "https://imgur.com/HpSYYbd.jpg",
  },
  {
    id: 6,
    name: "Griffin Wise",

    desc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
  },
];

export default function Director() {
  const list = dataList.map((data) => (
    <li key={data.id}>
      <img src={data.imgUrl} alt={data.name} />
      <h3>{data.name}</h3>
      <div>
        <img src={Plus} alt="" />
      </div>
      <p>{data.desc}</p>
    </li>
  ));
  return (
    <main className="director-section">
      <div className="director-section__shape--left">
        <img src={ShapeLeft} alt="" />
      </div>
      <section className="container">
        <h2>Meet the directors</h2>
        <ul>{list}</ul>
      </section>
      <div className="director-section__shape">
        <img src={Shape} alt="" />
      </div>
    </main>
  );
}
