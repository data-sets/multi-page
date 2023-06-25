import React from "react";
import Plus from "../../../images/icon-cross.svg"
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
];

export default function Director() {
  const list = dataList.map((data) => (
    <li key={data.id}>
      <img src={data.imgUrl} alt={data.name} />
      <h3>{data.name}</h3>
      <div>
        <img src={Plus} alt="" />
      </div>
    </li>
  ));
  return (
    <main className=" director-section">
      <section className="container">
        <h2>Meet the directors</h2>
        <ul>{list}</ul>
      </section>
    </main>
  );
}
