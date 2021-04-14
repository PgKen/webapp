import React, { useState, useEffect } from "react";

import "../css/style.css";
import "@fortawesome/fontawesome-free/js/all.js";
import ReactPlayer from "react-player/youtube";

import Job from "../component/Job";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import ContactData from "../data/ContactData";

// import Banner from '../component/Banner'
import Header from "../component/Header";
import Navbar from "./Navbar";
import Footer from "../component/Footer";
import Present from "../component/Present";

import Listnews from "./Listnews";
import Maincontact from "./Maincontact";
import Buywithus from './Buywithus'
import Qa from './Qa'

console.log(ContactData);

const Contact = () => {
  const [Detail, setDetail] = useState([ContactData[0]]);

  async function detailData(e, id) {
    console.log("ID = " + id);
    let fill = ContactData.filter((item) => {
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
            {ContactData.map((item) => {
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
          <div className="news-content">
            {Detail.length > 0 ? (
              Detail[0].id == 1 ? (
                <Maincontact/>
              ) : Detail[0].id == 2 ? (
                <Job />
              ) : Detail[0].id == 3 ? (
                <Buywithus/>
              ) : Detail[0].id == 4 ? (
                <Qa/>
              ) : null
            ) : null}
          </div>
        </li>
      </div>
      <br />
      <Present />
      <Footer />
    </div>
  );
};

export default Contact;
