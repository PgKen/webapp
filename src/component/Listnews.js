import React, { useEffect, useState } from "react";
import axios from "axios";

import new1 from "../img/news1.jpg";
import { Link } from "react-router-dom";

// const queryString = require('query-string');
import { useQueryParam, NumberParam, StringParam } from 'use-query-params';



const Listnews = (props) => {
  const [Data, setData] = useState([]);
  const [id, setId] = useQueryParam('id', NumberParam);
  console.log("id = " +id);

  function loadData() {
    axios
      //   .get("http://taladsrimuang.com:3200/checkB1/")
        // .get("http://localhost:3435/apinews")
      // .get("http://taladsrimuang.com:3435/apinews")
      .get("https://taladsrimuang.com:3435/apinews")
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

  let var_link = ""

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div className="news-content-list">
      {Data.map((item) => {
        var_link  = `/th/newsdetail?id=${item.id_news}`
        // var_link  = `/th/news/:${item.id_news}`
        return (
          <div className="list-news-box" key={item.id_news}>
            <Link to={var_link}>
            <img src={item.pa} alt="new" />
            <div className="title-head-detail">{item.title_news}</div>
            <div className="sort-news-detail">{item.detail_news}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Listnews;
