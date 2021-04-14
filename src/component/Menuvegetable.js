import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useLocation,
  } from "react-router-dom";

const Menuvegetable = () => {
    
    return (
        <ul className="first-box-ul">
            <li>
              <Link to="/th/vegetable">
                <span>
                  {/* <i
                    className="fas fa-bullhorn"
                    style={{ color: "#c6f3dc" }}
                  ></i> */}
                </span>
                <span>การผลิตผักปลอดภัย</span>
                <span>
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FFFFFF" }}
                  ></i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/th/test">
                <span>
                </span>
                <span>ผลการตรวจสอบ</span>
                <span>
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FFFFFF" }}
                  ></i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/th/test">
                <span>
                </span>
                <span>กลุ่มเกษตรโครงการผักปลอดภัย</span>
                <span>
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FFFFFF" }}
                  ></i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/th/test">
                <span>
                </span>
                <span>เมนูเพื่อสุขภาพ</span>
                <span>
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FFFFFF" }}
                  ></i>
                </span>
              </Link>
            </li>
          </ul>
    )
}

export default Menuvegetable
