import React from "react";

import new1 from "../img/news1.jpg";
import new2 from "../img/news2.jpg";
import new3 from "../img/news03.jpg";
import new4 from "../img/new04.jpg";
import new5 from "../img/news05.jpg";

const Mainnews = () => {
  return (
    <div className="box-main-body">
      <ul className="box-head">
        <li>
          <span>ข่าวสาร กิจกรรม</span>
          <span></span>
        </li>
      </ul>
      <ul className="box-mainnews">
        <li>
          <img src={new1} alt=""/>
        </li>
        <li>
          <img src={new2} alt=""/>
        </li>
        <li>
          <img src={new3} alt=""/>
        </li>
        <li>
          <img src={new4} alt=""/>
        </li>
        <li>
          <img src={new5} alt=""/>
        </li>

      </ul>
      
    </div>
  );
};

export default Mainnews;
