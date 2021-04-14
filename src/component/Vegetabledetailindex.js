import React, { useEffect, useState } from "react";
import '../css/style.css'

import axios from "axios";

import { Link } from "react-router-dom";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";

const Vegetabledetailindex = (props) => {
  const [Data, setData] = useState([]);
  const [Headnews, setHeadnews] = useState();
  const [Detail, setDetail] = useState()
  const [Date, setDate] = useState()
  const [id, setId] = useQueryParam("id", NumberParam);
  console.log("index_id = " + id);

  function loadData() {
    axios
      // .get(`http://localhost:3435/detailvegetable?id=${id}`)
      // .get(`http://taladsrimuang.com:3435/detailvegetable?id=${id}`)
      .get(`https://taladsrimuang.com:3435/detailvegetable?id=${id}`)
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
        setHeadnews(resp.data[0].title);
        setDetail(resp.data[0].detail)
        setDate(resp.data[0].date)
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
    <div className="news-content-detail">
      <div className="head-news-detail">{Headnews}</div>
      <div className="news-detail">{Detail}</div>
      <div className="news-date"><em>วันที่บันทึก&nbsp;&nbsp;{Date}</em></div>
      <div className="picture-detail">
        {Data.map((item) => {
          return <img key={item.id} src={item.pic} />;
        })}
      </div>
    </div>
  );
};

export default Vegetabledetailindex;
