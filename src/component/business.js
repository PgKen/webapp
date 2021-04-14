import React, { useState, useEffect } from "react";

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

import Menubusiness from "./Menubusiness";

import BusinessData from "../data/BusinessData";

// import Banner from '../component/Banner'
import Header from "../component/Header";
import Navbar from "./Navbar";
import Footer from "../component/Footer";
import Present from "../component/Present";

import Listnews from "./Listnews";

const Business = () => {
  const [Detail, setDetail] = useState([BusinessData[0]]);

  async function detailData(e, id) {
    console.log("ID = " + id);
    let fill = BusinessData.filter((item) => {
      return item.id == id;
    });

    console.log(fill);
    await setDetail(fill);
  }

  return (
    <div>
      <Header />
      <Navbar fistTitle="หน้าแรก" title="ธุรกิจของเรา" />
      <div className="box-news">
        <li>
          {/* <Menubusiness/> */}
          <ul>
            {BusinessData.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={(e) => {
                    detailData(e, item.id);
                  }}
                >
                  <span></span>
                  <span>{item.title}</span>
                  <span>
                    <i
                      className="fas fa-caret-right"
                      style={{ color: "#FFFFFF" }}
                    ></i>
                  </span>
                </li>
              );
            })}
          </ul>
          {Detail.length > 0 ?
          <div className="news-content"> 
            <div className="news-content-head">
              <div className="mobile-none"></div>
              <div className="text-head-news-ang"></div>
              <div className="text-head-news">{Detail[0].title}</div>
            </div>
            <div className="business-detail">
              <div className="clsUl" style={{textIndent:"0px"}}>{Detail[0].title2}</div>
              <div className="clsUl">{Detail[0].detail}</div>

              <div className="clsUl">
                <div className="clsLi">
                  <img src={Detail[0].pic1}/>
                </div>
                <div className="clsLi">
                  <img src={Detail[0].pic2}/>
                </div>
                <div className="clsLi">
                  <img src={Detail[0].pic3}/>
                </div>
              </div>
              {Detail[0].detail2.map((item,index)=>{
                return(
                  <div className="clsArray">
                    {item}
                  </div>
                )
              })}
              {/* <div className="clsUl">{Detail[0].detail2}</div> */}

              <div className="clsUl">{Detail[0].detail3}</div>
              <div className="clsUl">{Detail[0].detail4}</div>
            </div>
          </div>
          :
          <div className="news-content"></div>
          }
        </li>
      </div>
      <br />
      <Present />
      <Footer />
    </div>
  );
};

export default Business;
