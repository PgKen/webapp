import React, { useEffect } from "react";
import $ from "jquery";

// import imgLogo from "../img/logo_srimaung.png";
import bn1 from "../img/banner1.jpg";
import rotate_1 from "../img/rotate_1.jpg";
import rotate_2 from "../img/rotate_2.jpg";
// import bn2 from "../img/banner2.jpg";
// import bn3 from "../img/banner3.jpg";

import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

import imgLogo from "../img/logo_srimaung.png";

const Banner = () => {
  let totalScroll = 0;

  $(window).scroll(function () {
    var $height = $(window).scrollTop();
    console.log("he = " + $height);
    if ($height == 2) {
      window.scrollTo(0, 1);
      totalScroll = totalScroll + 1;
    } else if ($height == 0) {
      window.scrollTo(0, 1);
      totalScroll = totalScroll - 1;
    }

    if (totalScroll > 0) {
      console.log("toatal__ = " + totalScroll);
      if (totalScroll > 8 && totalScroll < 30) {
        loadText();
        hiddenLogo();
        loadText_2_out();
        // loadB1();
      } else if (totalScroll < 30) {
        loadText_out();
        hiddenLogo_in();
      } else if (totalScroll < 40 && totalScroll < 50) {
        load_banner_1_out();
      } else if (totalScroll > 50 && totalScroll < 90) {
        loadText_out();
        loadText_2();
        load_banner_1();
      } else if (totalScroll > 90) {
        loadText_2_out();
        load_banner_1_out();
        //
        logo_rotate();
        logo_rotate_2();
      }
    }
  });
  var tl = new Timeline({
    repeat: 4,
    yoyo: true,
  });
  /*
  function loadBanner() {
    tl.add(gsap.to(".bn0",5,{opacity:0},"+0"))
    tl.add(gsap.to(".bn3", 5, { x: -2500 }, "+2"));
    tl.add(gsap.to(".bn2", 5, { x: -2500 }, "+2"));
    tl.add(gsap.to(".bn1", 5, { x: -2500 }, "+2"));
    tl.add(gsap.from(".bn1", 5, { x: -1500 }, "+2"));
    gsap.to(".bn3", 1, { x: -3000 });
    gsap.to(".bn2", 2, { x: -3000 });
    gsap.to(".bn1", 3, { x: -3000 });
  }
  */

  function loadJq() {
    $(window).scroll(function () {
      var $height = $(window).scrollTop();
      //   console.log($height);
      if ($height > 40) {
        // $('#header').addClass('active');
        console.log($height);
      } else {
        // $('#header').removeClass('active');
        console.log($height);
      }
    });
  }

  function loadText() {
    gsap.to(".box-banner", 2, {
      opacity: 1,
      y: -20,
    });
  }

  function loadText_2() {
    gsap.to(".box-banner-2", 0.7, {
      opacity: 1,
      x: 2000,
    });
  }

  function loadText_2_out() {
    gsap.to(".box-banner-2", 0.7, {
      opacity: 1,
      x: -1800,
    });
  }

  function loadText_out() {
    gsap.to(".box-banner", 1.5, {
      opacity: 0,
      y: 100,
    });
  }

  function loadB1() {
    console.log("test img");
    gsap.to(".bn1", 5, { x: 0 }, "+0");
  }

  function hiddenLogo() {
    $(".logo-body").addClass("hideden");
  }

  function hiddenLogo_in() {
    $(".logo-body").removeClass("hideden");
  }

  function load_banner_1() {
    gsap.to(
      ".logo-slide",
      1,
      {
        x: 1500,
        opacity: 1,
      },
      "+0"
    );
  }

  function load_banner_1_out() {
    gsap.to(
      ".logo-slide",
      1,
      {
        x: -1500,
        opacity: 0,
      },
      "+0"
    );
  }

  function logo_rotate() {
    // $(".logo-body").removeClass("hideden");
    gsap.to(
      ".rotate_1",
      2,
      {
        opacity: 1,
        x: -20,
        rotateY: 360,
      },
      "0"
    );
  }

  function logo_rotate_2() {
    // $(".logo-body").removeClass("hideden");
    gsap.to(
      ".rotate_2",
      3,
      {
        opacity: 1,
        x: -220,
        rotateY: 360,
      },
      "+1"
    );
  }

  function loadLogo() {
    gsap.to(".log");
  }
  useEffect(() => {
    // setTimeout(() => {
    //   //loadBanner();
    // }, 4000);
    //loadText();
  }, []);

  return (
    <div className="mainbox-banner">
      <ul className="box-banner">
        <li>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </li>
        <li>
          <h3>
            Asperiores atque, nesciunt deserunt sapiente consequuntur obcaecati
            eaque culpa distinctio tempora,
          </h3>
        </li>
        <li>
          <h3>
            Asperiores atque, nesciunt deserunt sapiente consequuntur obcaecati
            eaque culpa distinctio tempora, a, explicabo suscipit. Ducimus sequi
            rerum ipsum magni placeat ad asperiores!
          </h3>
        </li>
      </ul>

      <ul className="logo-body">
        <li>
          <img src={imgLogo} />
        </li>
        {/* <li>
          <img src={bn1} />
        </li> */}
      </ul>

      <ul className="logo-slide ">
        <li>
          <img src={bn1} />
        </li>
      </ul>

      <ul className="rotate_1">
        <li>
          <img src={rotate_1} />
        </li>
      </ul>
      <ul className="rotate_2">
        <li>
          <img src={rotate_2} />
        </li>
      </ul>

      <ul className="box-banner-2">
        <li>
          <h1>Lorem ipsum dolor sit am222222 222 2.</h1>
        </li>
        <li>
          <h3>
            Asperiores atque, nesciunt deserunt sapiente consequuntur obcaecati
            eaque culpa distinctio tempora, 222
          </h3>
        </li>
        <li>
          <h3>Asperiores atque, 2222222riores!</h3>
        </li>
      </ul>

      {/* <ul className="img-banner">
        <li>
          <img className="bn1" src={bn1} />
        </li>
      </ul> */}
    </div>
  );
};

export default Banner;

{
  /* <img className="bn1" src={bn1} />
        <img className="bn2" src={bn2} />
        <img className="bn3" src={bn3} /> */
}
{
  /* <img className="bn0" src={bn1} /> */
}
