import React from "react";
import "../css/style.css";
import "@fortawesome/fontawesome-free/js/all.js";


import { useQueryParam, NumberParam, StringParam } from 'use-query-params';

// import Banner from '../component/Banner'
import Header from "../component/Header";
import Navbar from "./Navbar";
import Footer from "../component/Footer";
import Present from "../component/Present";

import Menuvegetable from "./Menuvegetable"
import Vegetabledetailindex from './Vegetabledetailindex'



const VagetableDetail = () => {
  return (
    <div>
      <Header />
      <Navbar fistTitle="หน้าแรก" title="ข่าวสารกิจกรรม" />
      <div className="box-news">
        <li>
          <Menuvegetable/>
          <div className="news-content">
            <div className="news-content-head">
              <div className="mobile-none"></div>
              <div className="text-head-news-ang"></div>
              <div className="text-head-news">ข่าวประชาสัมพันธ์</div>
            </div>
            <Vegetabledetailindex />
          </div>
        </li>
      </div>
      <br />
      <Present />
      <Footer />
    </div>
  );
};

export default VagetableDetail;
