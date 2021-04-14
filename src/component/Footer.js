import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

const Footer = (props) => {

  function linkFacebook(){
    window.open('https://www.facebook.com/taladsimuang')
  }
  function linkline(){
    window.open('http://line.me/ti/p/~ken-dow')
  }
  function linkyoutube(){
    window.open('https://www.youtube.com/channel/UC_PAKJuv6Y3NEXfiV01Zurg')
  }


  const [Lang, setLang] = useState(props.state[0].lang);
  useEffect(() => {
    console.log("footer");
    console.log(props);
    return () => {
      console.log("clean");
    };
  }, []);
  return (
    <div>
      <ul className="box-footer">
        <li className="footer">
          <span>
            <a className="headFooter-font">เกี่ยวกับตลาด</a>
            <Link to="/th">หน้าแรก</Link>
            <Link to="/th/news">ข่าวสารกิจกรรม</Link>
            <Link to="/th/checkprice">ราคาสินค้า</Link>
            <Link to="/th/safety">ผักปลอดภัย</Link>
            <Link to="/th/about">เกี่ยวกับเรา</Link>
          </span>
          <span>
            <a className="headFooter-center">ข้อมูลการค้า</a>
            <Link to="/th/checkprice">ราคาสินค้า</Link>
            <Link to="/th/safety">ผักปลอดภัย</Link>
            <Link to="/th/about">เกี่ยวกับเรา</Link>
          </span>
          <span>
            <a className="headFooter-end">ติดต่อ</a>
            <span className="footer-contact">
              โทร. 0-32338-250, 0-32326-158
            </span>
            <span className="footer-contact">ติดต่อตลาด ทางโซเชี่ยลมีเดีย</span>
            <span className="footer-contact">
              <span onClick={linkFacebook} style={{ color: "#3b5998" }}>
                <i className="fab fa-facebook-square"></i>
              </span>
              <span onClick={linkline} style={{ color: "#02b702" }}>
                <i className="fab fa-line"></i>
              </span>
              <span onClick={linkyoutube} style={{ color: "#bb0000" }}>
                <i className="fab fa-youtube"></i>
              </span>
            </span>
            <span className="footer-contact"></span>

            {/* <Link to="/th/checkprice">โทร. 0-32338-250, 0-32326-158</Link>
            <Link to="/th/safety">ผักปลอดภัย</Link>
            <Link to="/th/about">เกี่ยวกับเรา</Link> */}
          </span>
        </li>
      </ul>
      <ul className="box-copyright">
        <li >
          Copyright @ 2020 Agrocommerce Group Co., Ltd All rights reserved.
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    // counter: state
    state,
  };
}

// export default Footer;
export default connect(mapStateToProps, null)(Footer);
