import React, { useEffect, useState } from "react";
import axios from "axios";

import new1 from "../img/news1.jpg";

const Listnews = () => {
  const [Data, setData] = useState([]);
  function loadData() {
    axios
      //   .get("http://taladsrimuang.com:3200/checkB1/")
        // .get("http://localhost:3435/apinews")
      .get("http://taladsrimuang.com:3435/apicsr")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
        if (resp.data.length > 0) {
          //   setdateshow(resp.data[0].date_check_th);
        } else {
          //   setdateshow();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="news-content-list">
      {Data.map((item) => {
        return (
          <div className="list-news-box" key={item.id_news}>
            <img src={item.pa} alt="new" />
            <div className="title-head-detail">{item.title_news}</div>
            <div className="sort-news-detail">{item.detail_news}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Listnews;
