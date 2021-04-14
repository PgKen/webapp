// import React from 'react'
// import { Button } from 'react-bootstrap';
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import axios from "axios";
// import Moment from "react-moment";
import moment from "moment";

import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

const Price = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const [Product, setProduct] = useState([]);
  const [Build, setBuild] = useState({});

  const [dateshow, setdateshow] = useState("");
  const [SearchName, setSearchName] = useState("");

  function loadData() {
    console.log(props.state);
    let state = { value: "1" };
    setBuild(state);
    setProduct([]);
    axios
      //   .get("http://taladsrimuang.com:3200/checkB1/")
      .get("http://139.5.146.98:3200/checkB1_v2?build=1")
      .then((resp) => {
        setProduct(resp.data);
        // console.log(resp.data);
        console.log("DATE = " + resp.data[0].date_check_th);
        setdateshow(resp.data[0].date_check_th);
        if (resp.data.length > 0) {
          setdateshow(resp.data[0].date_check_th);
        } else {
          setdateshow();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ค้นหาจากวันที่
  async function handleChange(value, e) {
    // let val = e.target.value
    // console.log(value); // this will be a moment date object
    setSearchName("")
    setStartDate(value);
    setProduct([]);
    value = moment(value).format("YYYY-MM-DD");
    console.log(value); //
    console.log(Build); //
    let valBuild = Build.value;
    await axios
      .get(
        "http://taladsrimuang.com:3200/searchdate?g_date=" +
          value +
          "&build=" +
          valBuild
      )
      .then((resp) => {
        // console.log(resp.data);
        setProduct(resp.data);
        if (resp.data.length > 0) {
          setdateshow(resp.data[0].date_check_th);
        } else {
          setdateshow();
        }
        //setProduct(resp.data);
      });
  }

  // ค้นหาจากประเภท อาคาร
  async function fn_setBuild(event) {
    //   console.log("setbuild");
    setSearchName("")

    event.preventDefault();
    let val = event.target.value;
    await axios
      .get("http://139.5.146.98:3200/checkB1_v2?build=" + val)
      .then((resp) => {
        setBuild({ value: event.target.value });
        setProduct(resp.data);
        if (resp.data.length > 0) {
          setdateshow(resp.data[0].date_check_th);
        } else {
          setdateshow();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function handlName(e) {
    //console.log(value);
    // console.log(e.target.value);
    let val = e.target.value;
    setSearchName(val);
    // await setSearchName()
    // await setSearchName(e.target.value)
  }

  async function submitSearch() {
    let val = SearchName;
    setProduct([]);
    await axios
      .get("http://139.5.146.98:3200/searchname?g_name=" + val)
      .then((resp) => {
        // console.log(resp.data);
        setProduct(resp.data);

        if (resp.data.length > 0) {
          setdateshow(resp.data[0].date_check_th);
        } else {
          setdateshow();
        }

      });
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="box-price">
      <ul className="squaredThree">
        <li>กลุ่มสินค้า</li>
        {/* <li>XXXX{Build.value}</li> */}
        <li>
          {Build.value === "1" ? (
            <input
              type="checkbox"
              className="checkmark"
              value="1"
              onClick={fn_setBuild}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="checkmark"
              value="1"
              onClick={fn_setBuild}
            />
          )}
          &nbsp;&nbsp;ผักทั่วไป
        </li>

        <li>
          {Build.value === "8" ? (
            <input
              type="checkbox"
              className="checkmark"
              value="8"
              onClick={fn_setBuild}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="checkmark"
              value="8"
              onClick={fn_setBuild}
            />
          )}
          &nbsp;&nbsp;ผักปรุงรส
        </li>

        <li>
          {Build.value === "10" ? (
            <input
              type="checkbox"
              className="checkmark"
              value="9"
              onClick={fn_setBuild}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="checkmark"
              value="10"
              onClick={fn_setBuild}
            />
          )}
          &nbsp;&nbsp;ผักพื้นบ้าน
        </li>

        <li>
          {Build.value === "9" ? (
            <input
              type="checkbox"
              className="checkmark"
              value="9"
              onClick={fn_setBuild}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="checkmark"
              value="9"
              onClick={fn_setBuild}
            />
          )}
          &nbsp;&nbsp;ผักเมืองหนาว
        </li>

        <li>
          {Build.value === "14" ? (
            <input
              type="checkbox"
              className="checkmark"
              value="14"
              onClick={fn_setBuild}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="checkmark"
              value="14"
              onClick={fn_setBuild}
            />
          )}
          &nbsp;&nbsp;พืชไร่
        </li>

        <li>
          {Build.value === "11" ? (
            <input
              type="checkbox"
              className="checkmark"
              value="11"
              onClick={fn_setBuild}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="checkmark"
              value="11"
              onClick={fn_setBuild}
            />
          )}
          &nbsp;&nbsp;ผลไม้ฤดูกาล
        </li>
        <li>
          {Build.value === "12" ? (
            <input
              type="checkbox"
              className="checkmark"
              value="12"
              onClick={fn_setBuild}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="checkmark"
              value="12"
              onClick={fn_setBuild}
            />
          )}
          &nbsp;&nbsp;ผลไม้นอก
        </li>

        <li>
          {Build.value === "15" ? (
            <input
              type="checkbox"
              className="checkmark"
              value="15"
              onClick={fn_setBuild}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="checkmark"
              value="15"
              onClick={fn_setBuild}
            />
          )}
          &nbsp;&nbsp;ส้ม
        </li>
        <li>&nbsp;</li>
        <li style={{ borderBottom: "2px solid #CCC" }}></li>
        <li>&nbsp;</li>
        <li className="txtSearch">
          <span>วันที่</span>&nbsp;&nbsp;
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            //value={startDate}
          />
        </li>
        <li>&nbsp;</li>
        <li className="txtSearch">
          <span>ค้นหา</span>&nbsp;&nbsp;
          <input onChange={handlName} value={SearchName}></input>
        </li>
        <li className="txtSearch">
          <span>&nbsp;</span>
          <button type="button" class="btn btn-primary" onClick={submitSearch}>
            ตกลง
          </button>
        </li>
        <li>&nbsp;</li>
        <li style={{ borderBottom: "2px solid #CCC" }}></li>
        <li>&nbsp;</li>
        <li>
          <span>
            <i className="fas fa-chevron-down" style={{ color: "red" }}></i>
          </span>
          &nbsp;&nbsp;
          <span>ราคาลง</span>
        </li>
        <li>
          <span>
            <i className="fas fa-minus" style={{ color: "#aeaeae" }}></i>
          </span>
          &nbsp;&nbsp;
          <span>ราคาไม่เปลี่ยนแปลง</span>
        </li>
        <li>
          <span>
            <i className="fas fa-chevron-up" style={{ color: "green" }}></i>
          </span>
          &nbsp;&nbsp;
          <span>ราคาขึ้น</span>
        </li>
        <li>&nbsp;</li>
        <li style={{ borderBottom: "2px solid #CCC" }}></li>
        <li>&nbsp;</li>
      </ul>
      <ul className="list-price">
        <li>
          <span></span>
          <span></span>
          <span></span>
        </li>
        <li>
          <span>รายการสินค้า</span>
          <span style={{ justifyContent: "flex-end" }}>
            {!dateshow ? (
              <div style={{ color: "red" }}>ไม่มีข้อมูล</div>
            ) : (
              <div>ราคาวันที่ &nbsp;&nbsp;{dateshow}</div>
            )}
          </span>
        </li>
        <li>
          <span>รายการ</span>
          <span className="price-diff">&nbsp;</span>
          <span>ราคา&nbsp;(บาท)</span>
          <span>หน่วย</span>
        </li>

        {Product.map((item) => {
          return (
            <li key={item.id_prod}>
              <span>{item.name_pro}</span>
              <span className="price-diff">
                {item.diff_price === 0 ? (
                  <i
                    className="fas fa-chevron-down"
                    style={{ color: "red" }}
                  ></i>
                ) : null}
                {item.diff_price === 1 ? (
                  <i className="fas fa-minus" style={{ color: "#aeaeae" }}></i>
                ) : null}
                {item.diff_price === 2 ? (
                  <i
                    className="fas fa-chevron-up"
                    style={{ color: "green" }}
                  ></i>
                ) : null}
              </span>
              <span style={{ justifyContent: "center" }}>
                {/*item.diff_price*/}&nbsp;{item.price_pro}
              </span>
              <span style={{ justifyContent: "center" }}>{item.unitname}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    // counter: state
    state
  }
}

// export default Price;
export default connect(mapStateToProps,null)(Price);
