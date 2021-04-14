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


import th from "../img/th.gif";
import en from "../img/en.gif";
import cn from "../img/cn.gif";

import { connect } from "react-redux";

const Header = (props) => {
  let { path, url } = useRouteMatch();
  const location = useLocation();
  const path2 = location.pathname;
  const [Lang, setLang] = useState(props.state[0].lang);

  console.log("path =" + path);
  var lastpath = path.substring(3);
  console.log("url =" + url);
  console.log("lastpath =" + lastpath);
  console.log("location =" + path2);

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

  function loadEffect() {
    //     TweenMax.to('.xx',2,{Y:150})
    gsap.from(".listMenu", { y: 50, duration: 1.5 });
    gsap.from(".logo", { opacity: 0, duration: 3.5 });

    // gsap.to(".ve",1,{
    //   x : 500
    // },1)
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

  useEffect(() => {
    //loadJq()
    console.log(props);
    loadEffect();
    loadLang();
  }, []);

  return (
    <div>
      {/* ภาษา {Lang} */}
      <ul className="social-web">
        <li>
          <span style={{ color: "#3b5998" }}>
            <i className="fab fa-facebook-square"></i>
          </span>
          <span style={{ color: "#02b702" }}>
            <i className="fab fa-line"></i>
          </span>
          <span style={{ color: "#bb0000" }}>
            <i className="fab fa-youtube"></i>
          </span>
          <span style={{ color: "#3b5998" }}>
            <i className="fab fa-instagram-square"></i>
          </span>
          <span style={{ color: "#00aced" }}>
            <i className="fab fa-twitter-square"></i>
          </span>
          <span style={{ color: "#005454" }}>|</span>
          <span onClick={props.chLangTH}>
            <img src={th} onClick={setLangStateTH} />
          </span>
          <span onClick={props.chLangEN}>
            <img src={en} onClick={setLangStateEN} />
          </span>
          <span onClick={props.chLangCN}>
            <img src={cn} onClick={setLangStateCN} />
          </span>
        </li>
      </ul>
      {/* <ul className="header-web-top">
        <li>xx</li>
        <li>xx</li>
      </ul> */}
      <ul className="header-web">
        <li>
          <img className="logo" src={imgLogo} />
        </li>
        <li></li>
        <li className="listMenu">
          <Link className="link" to="/en">
            <i
              className="fas fa-home"
              style={{ color: "#FFF", fontSize: "50px" }}
            ></i>
            HOME
          </Link>

          <Link className="link" to="/en/news">
            <i
              className="fas fa-bullhorn"
              style={{ color: "#FFF", fontSize: "50px" }}
            ></i>
            NEWS
          </Link>

          <Link className="link" to="/en/checkprice">
            <i
              className="fas fa-tags"
              style={{ color: "#FFF", fontSize: "50px" }}
            ></i>
            Price
          </Link>

          <Link className="link" to="/en/safety">
            <i
              className="fas fa-carrot"
              style={{ color: "#FFF", fontSize: "50px" }}
            ></i>
            Safe vegetables
          </Link>

          <Link className="link" to="/en/about">
            <i
              className="fas fa-building"
              style={{ color: "#FFF", fontSize: "50px" }}
            ></i>
            Organization
          </Link>

          <Link className="link" to="/en/contact">
            <i
              className="fas fa-handshake"
              style={{ color: "#FFF", fontSize: "50px" }}
            ></i>
            Contact
          </Link>
        </li>
      </ul>
      {/* <ul className="head-tab-web">
        <li></li>
        <li></li>
      </ul> */}
      <ul className="tab-web">
        <li></li>
        <li></li>
        <li>
          {/* ราคาผัก-ผลไม้ วันนี้ */}
          {/* <span className="noneText">&nbsp;</span>
          <span>ค้นหา</span>

          <span className="htmlInput">
            <input></input>
          </span>
          <span style={{ justifyContent: "flex-start" }}>
            <i className="fas fa-search"></i>
          </span> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Frominput
