import React, { useEffect } from "react";
import "../css/style.css";
import { gsap } from "gsap";

const Tabcontact = () => {
  function loadTap() {
    console.log("load");
    gsap.to(
      ".box-tabcontact",
      1,
      {
        x: 1000,
      },
      1
    );
  }

  useEffect(() => {
    loadTap();
  }, []);
  return (
    <div>
      <ul className="box-tabcontact">
        <li>&nbsp;</li>
        <li></li>
        <li>
          <span>
            <i
              className="fas fa-globe"
              style={{
                color: "#1cdff3",
                fontSize: "32px",
                backgroundColor: "white",
                borderRadius: "17px",
                height: "32px",
                border: "2px solid white",
              }}
            ></i>
          </span>
          <span className="txtTabContact">www.taladsrimuang.com</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <i
              className="fas fa-phone"
              style={{
                color: "#f2c763",
                fontSize: "30px",
                //   backgroundColor: "white",
                border: "3px solid white",
                borderRadius: "17px",
                height: "32px",
              }}
            ></i>
          </span>
          <span className="txtTabContact">032-338250</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            style={{
              backgroundColor: "white",
              height: "31px",
              overflow: "hidden",
            }}
          >
            <i
              className="fab fa-line"
              style={{ color: "#07f307", fontSize: "32px" }}
            ></i>
          </span>
          <span className="txtTabContact">@taladsrimuang</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <i
              className="fab fa-facebook"
              style={{
                color: "#2c6bf1",
                fontSize: "32px",
                backgroundColor: "white",
                borderRadius: "17px",
                height: "32px",
                border: "2px solid white",
              }}
            ></i>
          </span>
          <span className="txtTabContact">ตลาดศรีเมือง</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            style={{
              color: "#ff051e",
              backgroundColor: "white",
              height: "31px",
              overflow: "hidden",
              borderRadius : "8px"
            }}
          >
            <i
              className="fab fa-youtube"
              style={{ color: "#ff051e", fontSize: "32px" }}
            ></i>
          </span>
          <span className="txtTabContact">ตลาดศรีเมือง</span>&nbsp;&nbsp;
        </li>
      </ul>
    </div>
  );
};

export default Tabcontact;
