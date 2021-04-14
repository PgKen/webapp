import React from "react";
import "../css/style.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { BrowserRouter as  Link } from "react-router-dom";

// import Banner from '../component/Banner'
import HeaderEn from "./HeaderEn";
import FooterEn from "./FooterEn";
import Present from './Present'

const NewsEn = () => {
  return (
    <div>
      <HeaderEn />
      <ul className="box-news">
        <li>
          <ul>
            <li>
              <i className="fas fa-bullhorn" style={{ color: "green" }}></i>
              <Link> ข่าวประชาสัมพันธ์</Link>{" "}
            </li>
            <li>
              <i className="fas fa-bullhorn" style={{ color: "green" }}></i>
              <Link> CSR</Link>{" "}
            </li>
            <li>
              <i className="fas fa-image" style={{ color: "green" }}></i>
              <Link> อัลบัมภาพ-วีดีโอ</Link>{" "}
            </li>
          </ul>
          <ul>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
          </ul>
        </li>
      </ul>
      <br />
      <Present />
      <FooterEn />
    </div>
  );
};

export default NewsEn;
