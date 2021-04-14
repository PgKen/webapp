import React from "react";
import "../css/style.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from '../component/Footer'
import Header from '../component/Header'

const About = () => {
  return (
    <div>
      <Header />

      <ul className="box-news">
        <li>
          <ul>
            <li>
              <i className="fas fa-bullhorn" style={{ color: "green" }}></i>
              <Link>ผู้บริหาร</Link>{" "}
            </li>
            <li>
              <i className="fas fa-bullhorn" style={{ color: "green" }}></i>
              <Link>เกี่ยวกับบริษัท</Link>{" "}
            </li>
            <li>
              <i className="fas fa-image" style={{ color: "green" }}></i>
              <Link>วิสัยทัศน์</Link>{" "}
            </li>
            <li>
              <i className="fas fa-image" style={{ color: "green" }}></i>
              <Link>พันธกิจ</Link>{" "}
            </li>
            <li>
              <i className="fas fa-image" style={{ color: "green" }}></i>
              <Link>เป้าประสงค์</Link>{" "}
            </li>
            <li>
              <i className="fas fa-image" style={{ color: "green" }}></i>
              <Link>รางวัล และเกียรติบัตร</Link>{" "}
            </li>
            <li>
              <i className="fas fa-image" style={{ color: "green" }}></i>
              <Link>แนะนำตลาด</Link>{" "}
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
      <Footer />
    </div>
  );
};

export default About;
