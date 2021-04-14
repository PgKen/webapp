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

// import Banner from '../component/Banner'
import Header from "../component/Header";
import Navbar from "./Navbar";
import Footer from "../component/Footer";
import Present from "../component/Present";

import new1 from "../img/news1.jpg";
import new2 from "../img/news2.jpg";
import new3 from "../img/news03.jpg";
import new4 from "../img/new04.jpg";
import new5 from "../img/news05.jpg";

const News = () => {
  return (
    <div>
      <Header />
      <Navbar fistTitle="หน้าแรก" title="ข่าวสารกิจกรรม" />
      <ul className="box-news">
        <li>
          <ul>
            <li>
              <span>
                <i className="fas fa-bullhorn" style={{ color: "#c6f3dc" }}></i>
              </span>
              <span>
                <Link to="/th/relation"> ข่าวประชาสัมพันธ์</Link>
              </span>
              <span>
              
                <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
              </span>
            </li>
            <li>
              <span>
                <i
                  className="fas fa-hand-holding-heart"
                  style={{ color: "#c6f3dc" }}
                ></i>
              </span>
              <span>
                <Link to="/th/checkprice"> CSR</Link>
              </span>
              <span>
                <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
              </span>
            </li>
            <li>
              <span>
                <i className="fas fa-image" style={{ color: "#c6f3dc" }}></i>
              </span>
              <span>
                <Link> อัลบัมภาพ-วีดีโอ</Link>{" "}
              </span>
              <span>
                <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
              </span>
            </li>
          </ul>
          <ul className="news-content">
            <li>
              <span>&nbsp;</span>
              <span></span>
              <span>ข่าวประชาสัมพันธ์</span>
            </li>
            <li></li>
            <li></li>
            <li className="news-detail">
              <img src={new3} alt="" />
              <p className="news-head-detail">
                หัวข้อ
              </p>
              <hr/>
              <p className="news-content-detail">
                เรื่องราว
              </p>
            </li>
            
          </ul>
        </li>
      </ul>
      <br />
      <Present />
      <Footer />
    </div>
  );
};

export default News;
