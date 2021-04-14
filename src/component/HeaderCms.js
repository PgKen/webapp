import React, { useEffect, useState } from "react";
import $ from "jquery";
import imgLogo from "../img/logo_srimaung.png";
import { gsap } from "gsap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import Home from "./Home";
import News from "./News";
import Checkprice from "./Checkprice";
import Safety from "./Safety";
import About from "./About";
import Banner from "../component/Banner";
import Footer from "./Footer";

import safe from "../img/safe.png";
import contact from "../img/contact.png";
import checkprice from "../img/checkprice.png";
import company from "../img/company.png";
import business from "../img/business.png";
import map from "../img/map.png";
import news from '../img/news.png'

import th from "../img/th.gif";
import en from "../img/en.gif";
import cn from "../img/cn.gif";

import { connect } from "react-redux";

const HeaderCms = (props) => {
  let { path, url } = useRouteMatch();
  const location = useLocation();
  const path2 = location.pathname;
  const [Lang, setLang] = useState(props.state[0].lang);

  const [Listmenu, setListmenu] = useState(true);

  var lastpath = path.substring(3);

  // console.log("####");
  console.log(props);
  // console.log(props.state[0]);
  // console.log("####");
  console.log("load new = " + props.state[0].lang);

  let val = props.state;
  async function loadLang() {
    // console.log(props.match.path);
    setLang("");
    // console.log(props.state);
    // let val = props.state;
    await setLang(props.state[0].lang);
  }

  function offBanner() {
    $(".mainbox-banner").addClass("hideClass");
  }

  function setLangStateTH() {
    setLang("TH");
    window.location.href = "/th" + lastpath;
  }
  function setLangStateEN() {
    setLang("EN");
    window.location.href = "/en" + lastpath;
  }
  function setLangStateCN() {
    setLang("CN");
    window.location.href = "/cn" + lastpath;
  }

  function mobileMenu() {
    console.log("mobile-menu");
    setListmenu();
    // document.getElementById("header-web").classList.toggle("togle-menu");
    if (Listmenu) {
      setListmenu(false);
    } else {
      setListmenu(true);
    }
  }

  function loadDefaultMenu() {
    var w = window.innerWidth;
    console.log(w);
    if (w > 500) {
      setListmenu(true);
    } else {
      setListmenu(false);
    }
  }

  function loadScollBar() {
    window.scrollTo(0, 0);
  }

  function gotoTop() {
    var h = window.innerHeight;
    console.log("h =" + h);
    setInterval(() => {
      h -= 10;
      if (h < 0 || h == 0) {
        clearInterval();
      } else {
        window.scrollTo(0, h);
      }
    }, 2);
  }

  useEffect(() => {
    //loadJq()
    loadDefaultMenu();
    loadLang();
    loadScollBar();
  }, []);

  return (
    <div>
      {/* ภาษา {Lang} */}
      <ul className="social-web">
        <li>
          <span style={{ color: "#005454" }}>|</span>
          <span onClick={props.chLangTH}>
            <img src={th} onClick={setLangStateTH} />
          </span>
        </li>
      </ul>
      <ul className="btn-top">
        <li onClick={gotoTop}>
          <i class="fas fa-chevron-up"></i>
        </li>
      </ul>
      {/* <ul className="header-web-top">
        <li>xx</li>
        <li>xx</li>
      </ul> */}
      <ul className="mobile-menu" id="mobile-menu" onClick={mobileMenu}>
        {Listmenu ? (
          <li>
            <span>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </span>
            <span>ปิด</span>
          </li>
        ) : null}

        {Listmenu === false ? (
          <li>
            <span>
              <i className="fas fa-bars" style={{ color: "green" }}></i>
            </span>
            <span>เมนู</span>
          </li>
        ) : null}
      </ul>
      {Listmenu ? (
        <ul className="header-web" id="header-web">
          <li>
            <Link className="link" to="/th">
              <img className="logo" src={imgLogo} />
            </Link>
          </li>
          <li></li>
          <li className="listMenu">
            {Lang === "TH" ? (
              <Link className="link" to="/th/company">
                {/* <span
                  className="fas fa-building font-icon"
                  style={{ color: "#FFF" }}
                ></span> */}
                <span>
                  <img src={company} />
                </span>
                <span>ข้อมูลบริษัท</span>
              </Link>
            ) : null}
          </li>
        </ul>
      ) : null}
      {/* <ul className="head-tab-web">
        <li></li>
        <li></li>
      </ul> */}
      <ul className="tab-web">
        <li></li>
        <li></li>
        <li>
        </li>
      </ul>
    </div>
  );
};

// export default Header;

function mapDispatchToProps(dispatch) {
  console.log("Toprops");
  return {
    // sendTheAlert: () => {dispatch(ALERT_ACTION)}
    chLangEN: () => {
      dispatch({
        type: "CH_LANG",
        data: "EN",
      });
    },
    chLangTH: () => {
      dispatch({
        type: "CH_LANG",
        data: "TH",
      });
    },
    chLangCN: () => {
      dispatch({
        type: "CN_LANG",
        date: "CN",
      });
    },
  };
}

function mapStateToProps(state) {
  return {
    // counter: state
    state,
  };
}

// export default connect(mapStateToProps,mapDispatchToProps)(Frominput);
export default connect(mapStateToProps, mapDispatchToProps)(HeaderCms);
// export default Frominput
