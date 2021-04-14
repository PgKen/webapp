import React, { useEffect, useState } from "react";
import axios from "axios";

const Homeprice = () => {
  //   const initialState = [];
  const [dataprice, setdataprice] = useState([]);

  async function loadData() {
    await axios
      // .get("http://taladsrimuang.com:3200/checkB1")
      // .get("https://taladsrimuang.com:5100/imgPrice")
      .get("https://taladsrimuang.com:5100/imgPrice_web")
      .then((resp) => {
        setdataprice(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // async function loadData2() {
  //   // console.log(dataprice[0].length);
  //   // console.log(dataprice);
  // }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ul className="box-price-list">
      {dataprice.map((item) => {
        return (
          <li key={item.id}>
            <span>
              <img src={item.name_img} alt="new" />
            </span>
            <span style={{ fontWeight: "bold" }}>{item.name_pro}</span>
            <span>
              {item.diff === "0" ? (
                <i
                  className="fas fa-angle-double-down"
                  style={{ color: "red" }}
                ></i>
              ) : null}
              {item.diff === "1" ? (
                <i className="fas fa-equals" style={{ color: "blue" }}></i>
              ) : null}
              {item.diff === "2" ? (
                <i
                  className="fas fa-angle-double-up"
                  style={{ color: "green" }}
                ></i>
              ) : null}
              &nbsp;{item.price_pro}&nbsp;บาท/{item.unitname}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Homeprice;
