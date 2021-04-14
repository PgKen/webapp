import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useQueryParam, NumberParam, StringParam } from 'use-query-params';



const Listvegatable = (props) => {
  const [Data, setData] = useState([]);
  const [id, setId] = useQueryParam('id', NumberParam);
  console.log("id = " +id);

  function loadData() {
    axios
      // .get("http://localhost:3435/apitest")
      .get("https://taladsrimuang.com:3435/apitest")
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
        var_link  = `/th/vegetable-detail?id=${item.id}`
        // var_link  = `/th/news/:${item.id_news}`
        return (
          <div className="list-news-box" key={item.id}>
            <Link to={var_link}>
            <img src={item.pic} alt="new" />
            <div className="title-head-detail">{item.title}</div>
            <div className="sort-news-detail">{item.detail}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Listvegatable;
