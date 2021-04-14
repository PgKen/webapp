import React from "react";
import "../css/style.css";
import "@fortawesome/fontawesome-free/js/all.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import Menuevent from "./Menuevent"

// import Banner from '../component/Banner'
import Header from "../component/Header";
import Navbar from "./Navbar";
import Footer from "../component/Footer";
import Present from "../component/Present";

import Listnews from "./Listnews";

const News = () => {
  return (
    <div>
      <Header />
      <Navbar fistTitle="หน้าแรก" title="ข่าวสารกิจกรรม" />
      <div className="box-news">
        <li>
         <Menuevent/>
          <div className="news-content">
            <div className="news-content-head">
              <div className="mobile-none"></div>
              <div className="text-head-news-ang"></div>
              <div className="text-head-news">ข่าวประชาสัมพันธ์</div>
            </div>
            <Listnews />
          </div>
        </li>
      </div>
      <br />
      <Present />
      <Footer />
    </div>
  );
};

export default News;
