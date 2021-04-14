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
        <Link to="/th/Mainnews">
          <span></span>
          <span>ข่าวประชาสัมพันธ์</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
      

      <li>
        <Link to="/th/csr">
          <span></span>
          <span>บริการในตลาด</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/th/csr">
          <span></span>
          <span>CSR</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/th/csr">
          <span></span>
          <span>วารสารศรีเมือง</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>
      <li style={{ background: "none" }}></li>
      <li>
        <Link to="/th/csr">
          <span></span>
          <span>Test</span>
          <span>
            <i className="fas fa-caret-right" style={{ color: "#FFFFFF" }}></i>
          </span>
        </Link>
      </li>

      
    </ul>
  );
};

export default Menuevent;
