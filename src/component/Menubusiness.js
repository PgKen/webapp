import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";



const Menuevent = () => {
  return (
    <ul className="first-box-ul">
      <li>
        <Link to="/th/news">
          <span></span>
          <span>ตลาดผัก</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/th/csr">
          <span></span>
          <span>ตลาดพืชไร่</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/th/csr">
          <span></span>
          <span>ตลาดผลไม้</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/th/csr">
          <span></span>
          <span>ตลาดอาหาร</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/th/csr">
          <span></span>
          <span>ศรีเมืองอาเซียน</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default Menuevent;
