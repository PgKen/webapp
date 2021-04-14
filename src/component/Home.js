import React, { useEffect } from "react";
// import $ from "jquery";
// import { gsap } from "gsap";

import Header from "../component/Header";
import Tabcontact from "../component/Tabcontact";
import Mainproduct from "../component/Mainproduct";
import Mainnews from "../component/Mainnews";
import Footer from "../component/Footer";

import bg001 from "../img/bg.jpg";
import bg003 from "../img/srimuang2.jpg";
import bg004 from "../img/bg3.jpg";

// import product from '../img/product.jpg'
// import imgLogo from "../img/logo_srimaung.png";

import "../css/style.css";
// import { Timeline } from "gsap/gsap-core";
import Present from "../component/Present";
import Mainfarm from "../component/Mainfarm";
import Homeprice from "../component/Homeprice";
// let totalScroll = 0;
// let status_mouse = "";

const Home = () => {
  /*
  function test() {
    totalScroll = 0;
    window.addEventListener("wheel", function (event) {
      if (event.deltaY < 0) {
        console.log("scrolling up");
        status_mouse = "up";
        totalScroll -= 1;
        //   document.getElementById('status').textContent= 'scrolling up';
      } else if (event.deltaY > 0) {
        console.log("scrolling down");
        status_mouse = "down";
        totalScroll += 1;
        //   document.getElementById('status').textContent= 'scrolling down';
      }
      if (totalScroll < 0) {
        totalScroll = 0;
      }
      switch (totalScroll) {
        case 3:
          if (status_mouse == "up") {
            loadLogo_in();
          } else {
            loadLogo();
          }
          break;

        case 8:
          if (status_mouse == "up") {
            loadText_1_out();
          } else {
            loadText_1();
          }
          break;

        case 14:
          if (status_mouse == "up") {
            loadText_2_out();
            loadText_1();
          } else {
            loadText_2();
            loadText_1_out();
          }
          break;

        case 18:
          if (status_mouse == "up") {
            loadText_2();
          } else {
            loadText_2_out();
          }
          break;

        case 24:
          if (status_mouse == "up") {
            // loadText_2_out();
            wall_1_out();
            wall_2_out();
          } else {
            loadText_2_out();
            wall_1();
            wall_2();
          }
          break;

        default:
          break;
      }

      console.log(totalScroll);
    });
  }
*/
  /*  
function loadLogo() {
    gsap.to(
      ".an-logo",
      2,
      {
        scale: 3,
        opacity: 0,
      },
      1
    );
  }

  function loadLogo_in() {
    gsap.to(
      ".an-logo",
      2,
      {
        scale: 1,
        opacity: 1,
      },
      1
    );
  }

  function loadText_1() {
    gsap.to(
      ".an-text-1",
      1,
      {
        opacity: 1,
        y: -100,
      },
      1
    );
  }

  function loadText_1_out() {
    gsap.to(
      ".an-text-1",
      1,
      {
        opacity: 0,
        //y: 0,
      },
      1
    );
  }

  function loadText_2() {
    gsap.to(
      ".an-text-2",
      1,
      {
        opacity: 1,
        y: -100,
      },
      1
    );
  }

  function loadText_2_out() {
    gsap.to(
      ".an-text-2",
      1,
      {
        opacity: 0,
        //y: 0,
      },
      1
    );
  }

  function wall_1() {
    gsap.to(
      ".wall-1",
      3,
      {
        x: -1500,
      },
      1
    );
  }
  function wall_2() {
    gsap.to(
      ".wall-2",
      3,
      {
        x: 1500,
      },
      1
    );
  }

  function wall_1_out() {
    gsap.to(
      ".wall-1",
      1,
      {
        x: 0,
      },
      1
    );
  }
  function wall_2_out() {
    gsap.to(
      ".wall-2",
      1,
      {
        x: 0,
      },
      1
    );
  }

  function loadBanner(){
    let tl = new Timeline({
      repeat : -1,
      yoyo : true
    });
    tl.to('.bg003',1,{
      x:2500
    },5)
    tl.to('.bg004',1,{
      x:2500
    },"+10")
    tl.repeatDelay(2);

    // tl.gsap.to(".bg003",1,{
    //   x:2500
    // },1)
  }
*/
  useEffect(() => {
    setTimeout(() => {
      //  loadBanner();
    }, 4000);
    //mainLoad();
    //test();
  }, []);
  return (
    <div>
      <Header />
      <div className="test">
        <ul className="box-home">
          <li>
            <img src={bg003} alt="" />
            {/* <img className="bg003" src={bg003}/> */}
          </li>
          <li className="bg003">
            <img src={bg001} alt="" />
            {/* <img className="bg003" src={bg003}/> */}
          </li>
          <li className="bg004">
            <img src={bg004} alt="" />
            {/* <img className="bg003" src={bg003}/> */}
          </li>
          {/* <li className="an-logo">
          <img src={imgLogo} />
        </li>
        <li className="an-text-1">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <br />
          <h3>
            Doloribus tempora similique aliquid, asperiores incidunt cupiditate
            magni quas expedita unde optio est illo, quos assumenda, eaque
            alias. Incidunt animi voluptatibus eos.
          </h3>
        </li>
        <li className="an-text-2">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.222</h1>
          <br />
          <h3>
            Doloribus tempora similique aliquid, asperiores incidunt cupiditate
            magni quas expedita unde optio est illo, quos assumenda, eaque
            alias. Incidunt animi voluptatibus eos.
          </h3>
        </li>
        <li className="an-wall">
          <span className="wall-1">wall-1</span>
          <span className="wall-2">wall-2</span>
        </li> */}
          {/* <Footer /> */}
        </ul>
        <Homeprice />
      </div>
      <Tabcontact />
      <Mainproduct />
      <br />
      <Mainnews />
      <br />
      <Mainfarm />
      <Present title_1="สินค้าเกษตรครบวงจร" title_2="ผักปลอดภัย มั่นใจ" title_3="เป็นศูนย์กลางการค้าปลีก-ส่ง" title_4="CSR ภาครัฐและเอกชน" title_5="เปิดตลอด 24 ชั่วโมง"/>
      <Footer />
    </div>
  );
};

export default Home;
