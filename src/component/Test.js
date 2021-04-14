import React from "react";
import "../css/style.css";
import "@fortawesome/fontawesome-free/js/all.js";


import Menuvegetable from "./Menuvegetable"

// import Banner from '../component/Banner'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Present from "./Present";

import Listtest from "./Listtest";

const Test = () => {
  return (
    <div>
      <Header />
      <Navbar fistTitle="หน้าแรก" title="ผักปลอดภัย" />
      <div className="box-news">
        <li>
         <Menuvegetable/>
          <div className="news-content">
            <div className="news-content-head">
              <div className="mobile-none"></div>
              <div className="text-head-news-ang"></div>
              <div className="text-head-news">ผักปลอดภัย</div>
            </div>
            <Listtest />
          </div>
        </li>
      </div>
      <br />
      <Present />
      <Footer />
    </div>
  );
};

export default Test;
