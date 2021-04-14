import React from "react";

// import fam1 from "../img/farm01.jpg";
import fam2 from "../img/farm02.jpg";
import fam3 from "../img/farm03.jpg";
import fam4 from "../img/farm04.jpg";
import fam5 from "../img/farm05.jpg";
import fam6 from "../img/farm06.jpg";

const Mainfarm = () => {
  return (
    <div className="box-main-body">
      <ul className="box-head">
        <li>
          <span>ส่งเสริมการเกษตร</span>
          <span></span>
        </li>
      </ul>
      <ul className="box-mainnews">
        <li>
          <img src={fam4} alt=""/>
        </li>
        <li>
          <img src={fam2} alt=""/>
        </li>
        <li>
          <img src={fam3} alt=""/>
        </li>
        <li>
          <img src={fam5} alt=""/>
        </li>
        <li>
          <img src={fam6} alt=""/>
        </li>
      </ul>
    </div>
  );
};

export default Mainfarm;
