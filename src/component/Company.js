import React, { useState, useEffect } from "react";

import "../css/style.css";
import "@fortawesome/fontawesome-free/js/all.js";
import ReactPlayer from "react-player/youtube";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import companyData from "../data/CompanyData";

// import Banner from '../component/Banner'
import Header from "../component/Header";
import Navbar from "./Navbar";
import Footer from "../component/Footer";
import Present from "../component/Present";

import Listnews from "./Listnews";

import Companyinformation from "../component/Companyinformation";
import Companyhistory from "../component/Companyhistory";
import Companyclip from "../component/Companyclip";
import Companyaward from "../component/Companyaward";
import Companymap from '../component/Companymap'

//console.log(companyData);

const Company = () => {

  const [Detail, setDetail] = useState([companyData[0]]);


  const [Page, setPage] = useState(1);

  async function detailData(e, id) {
    setPage(0)
    console.log("ID = " + id);
    let fill = companyData.filter((item) => {
      return item.id == id;
    });

    console.log(fill);
    await setDetail(fill);
    await setPage(id);
  }

  return (
    <div>
      <Header />
      <Navbar fistTitle="หน้าแรก" title="ธุรกิจของเรา" />
      <div className="box-news">
        <li>
          {/* <Menubusiness/> */}
          <ul>
            {companyData.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={(e) => {
                    detailData(e, item.id);
                  }}
                >
                  <span></span>
                  <span>{item.header}</span>
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
          {Page == 1 ? (
            <Companyinformation startpage="0" />
          ) : Page == 2 ? (
            <Companyhistory />
          ) : Page == 3 ? (
            <Companyclip />
          ) : Page == 4 ? (
            <Companyaward />
          ) : Page == 5 ? (
            <Companymap />
          ) : null}

          {/* {Detail.length > 0 ? (
            <div className="news-content">
              <div className="news-content-head">
                <div className="mobile-none"></div>
                <div className="text-head-news-ang"></div>
                <div className="text-head-news">{Detail[0].header}</div>
              </div>
              <div className="business-detail">
                <div className="clsUl" style={{ textIndent: "0px" }}>
                  <b>{Detail[0].title1}</b>
                </div>
                <div className="clsUlBr">
                  {Detail[0].detail_1.map((item, index) => {
                    return (
                      <div key={index}>
                        {item[0] == "-" ? (
                          <span style={{ color: "white" }}>พ.ศ. 9999</span>
                        ) : (
                          <span>{item[0]}</span>
                        )}
                        {item[1]}
                        {item[2]}
                        {item[3]}
                      </div>
                    );
                  })}
                </div>
                <div className="clsUl" style={{ textIndent: "0px" }}>
                  <b>{Detail[0].title2}</b>
                </div>
                <div className="clsUlBr">
                  {Detail[0].detail_2.map((item, index) => {
                    return <div key={index}>{item}</div>;
                  })}
                </div>
                <div className="clsUl" style={{ textIndent: "0px" }}>
                  <b>{Detail[0].title3}</b>
                </div>
                <div className="clsUlBr">
                  {Detail[0].detail_3.map((item, index) => {
                    return <div key={index}>{item}</div>;
                  })}
                </div>

                <div className="clsUl">
                  {Detail[0].pictures.map((item) => {
                    return (
                      <div className="clsLi">
                        <img src={item} />
                      </div>
                    );
                  })}
                </div>
                <div
                  className="clsUl"
                  style={{
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {Detail[0].video ? (
                    <div>
                      <div className="clsLi" style={{ flexBasis: "50px" }}>
                        คลิปแนะนำตลาด
                      </div>
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=-0r7TyLNsLc&t=203s"
                        controls={true}
                        playing={false}
                        height="520px"
                        style={{ overflow: "hidden" }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <div className="news-content"></div>
          )} */}
        </li>
      </div>
      <br />
      <Present />
      <Footer />
    </div>
  );
};

export default Company;
