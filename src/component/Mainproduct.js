import React from "react";
// import new1 from "../img/news1.jpg";
// import new2 from "../img/news2.jpg";
// import new3 from "../img/news3.jpg";
// import new4 from "../img/news4.jpg";

import vag1 from "../img/vag1.jpg";
import fur1 from "../img/fur1.jpg";
import crop1 from "../img/crop1.jpg";
import food1 from "../img/food1.jpg";
import flw1 from "../img/flw1.jpg";

const Mainproduct = () => {
  return (
    <div className="box-main-body">
      <ul className="box-head">
        <li>
          <span>สินค้า</span>
          <span></span>
        </li>
      </ul>
      <ul className="box-mainnews">
        <li>
          <span>ผัก</span>
          <img src={vag1} alt=""/>
        </li>
        <li>
        <span>ผลไม้</span>
          <img src={fur1}  alt=""/>
        </li>
        <li>
          <span>พืชไร่</span>
          <img src={crop1} alt=""/>
        </li>
        <li>
        <span>ของสด</span>
          <img src={food1} alt=""/>
        </li>
        <li>
        <span>ดอกไม้</span>
          <img src={flw1} alt=""/>
        </li>
      </ul>
    </div>
  );
};

export default Mainproduct;
