import React, { useEffect, useState } from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";
// import axios from "axios";
import axios, { post } from "axios";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Mainfarm from "./Mainfarm";

// let baseUrl = "http://taladsrimuang.com:5180";
let baseUrl = "http://localhost:3435";
// let baseUrl = "http://172.16.1.238:5180/kiosk-chkReboot";

const Forminput = () => {
  const [Data, setData] = useState([]);
  const [Wait, setWait] = useState(0);

  const [Title, setTitle] = useState("");
  const [Detail, setDetail] = useState("");

  const [File1, setFile1] = useState(null);
  const [File2, setFile2] = useState(null);
  const [File3, setFile3] = useState(null);
  const [File4, setFile4] = useState(null);
  const [File5, setFile5] = useState(null);
  const [File6, setFile6] = useState(null);
  const [File7, setFile7] = useState(null);
  const [File8, setFile8] = useState(null);

  const [showDetail, setshowDetail] = useState(0);
  const [showId, setShowId] = useState(0);
  const [Imgshow, setImgshow] = useState([]);

  const [IsLoading, setIsLoading] = useState(false);

  const [OrderQuery, setOrderQuery] = useState(0);
  const [OrderFav, setOrderFav] = useState(0);

  const [IsLoadEdit, setIsLoadEdit] = useState(false);
  const [Idnews, setIdnews] = useState(null)

  function chnFile1(e) {
    let a = e.target.files[0];
    setFile1(a);
  }

  function chnFile2(e) {
    let a = e.target.files[0];
    setFile2(a);
  }

  function chnFile3(e) {
    let a = e.target.files[0];
    setFile3(a);
  }

  function chnFile4(e) {
    let a = e.target.files[0];
    setFile4(a);
  }

  function chnFile5(e) {
    let a = e.target.files[0];
    setFile5(a);
  }

  function chnFile6(e) {
    let a = e.target.files[0];
    setFile6(a);
  }

  function chnFile7(e) {
    let a = e.target.files[0];
    setFile7(a);
  }

  function chnFile8(e) {
    let a = e.target.files[0];
    setFile8(a);
  }

  async function onFormSubmit(e) {
    setWait(1);
    e.preventDefault(); // Stop form submit
    // console.log(File1);

    if (IsLoadEdit) {
      // edit
      console.log("isLoadEdit");

      //const formData = new FormData();
      setTimeout(() => {
        detailEdit().then((resp) => {
          console.log("sus edit");
        });
      }, 1000);
    } else {
      setTimeout(() => {
        fileUpload().then((resp) => {
          // console.log(resp.data);
          console.log("TEST File");
        });
      }, 2000);
    }
  }

  async function fileUpload() {
    const url = baseUrl + "/cmsupload";
    const formData = new FormData();
    // console.log(file);
    async function mainapp() {
      await getData();
    }
    mainapp();

    function getData() {
      setWait(0);

      formData.append("file1", File1);
      formData.append("file2", File2);
      formData.append("file3", File3);
      formData.append("file4", File4);
      formData.append("file5", File5);
      formData.append("file6", File6);
      formData.append("file7", File7);
      formData.append("file8", File8);
      //
      formData.append("title", Title);
      formData.append("detail", Detail);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      // return post(url, formData, config);
      postData();
    }

    function postData() {
      axios({
        method: "post",
        url: url,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          loadData();
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  }

  async function detailEdit() {
    console.log("detailEdit..");
    let arrData = [];
    let url = baseUrl + "/cmsupdate";

    async function main() {
      // console.log("Title = " + Title);
      await getArray();
    }
    main();

    function getArray() {
      arrData.push({
        title: Title,
        detail: Detail,
        id:Idnews
      });
      // console.log(arrData);
      sendData();
    }

    function sendData() {
      //console.log(arrData);
      axios({
        method: "post",
        url: url,
        data: arrData[0]
        //headers: { "Content-Type": "multipart/form-data" },
      });
      loadData();
    }
  }

  function loadData() {
    setIsLoading(true);
    axios
      //   .get("http://taladsrimuang.com:3200/checkB1/")
      // .get("http://localhost:3435/apinews")
      // .get("http://taladsrimuang.com:3435/apinews")
      .get(baseUrl + "/apinews_backend")
      .then((resp) => {
        console.log(resp.data);
        setIsLoading(false);
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

  const fncomfirmDel = (id) => {
    confirmAlert({
      title: "แจ้งเตื่อนการลบ",
      message: "ต้องการลบรายการนี้ !!!",
      buttons: [
        {
          label: "Yes",
          //onClick: () => alert('Click Yes'+id)
          onClick: () => delItem(id),
        },
        {
          label: "No",
          onClick: () => {
            return false;
          },
        },
      ],
    });
  };

  function chnTitle(e) {
    let a = e.target.value;
    setTitle(a);
  }

  const handleModelChange = (model) => {
    // console.log("hhh");
    console.log(model);
    setDetail(model);
  };

  function newsDetail(e) {
    let model = e.target.value;
    // console.log("model = " +  model);
    setDetail(model);
  }

  const fnView = (e, id) => {
    setShowId(id);
    console.log("fnWiew = " + id);
    if (showDetail == 1) {
      setshowDetail(0);
    } else {
      setshowDetail(1);
    }

    axios
      .get(baseUrl + "/detailnews?id=" + id)
      .then((resp) => {
        console.log(resp.data);
        setImgshow(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function delItem(id) {
    console.log("del id = " + id);
    axios
      .delete(baseUrl + "/delItemNews/" + id)
      .then((resp) => {
        // console.log(resp);
        loadData();
      })
      .catch((err) => console.log(err));
  }

  function disableDetail() {
    // console.log("disableDetail");
    setShowId(0);
  }

  function fnFav(id, i) {
    // setIsLoading(true);
    console.log("id = " + id);
    console.log("i = " + i);
    axios
      .get(baseUrl + "/setfav/" + id + "/" + i)
      .then((resp) => {
        console.log(resp);
        loadData();
      })
      .catch((err) => console.log(err));
  }

  function fnFavOrder() {
    setIsLoading(true);
    let orderFav = 0;
    async function main() {
      fnStart();
    }
    main();

    function fnStart() {
      if (OrderFav == 1) {
        orderFav = 0;
        setOrderFav(0);
        setOrderQuery(1); // set ว่า เรียง fav
        fnSetFav();
      } else {
        orderFav = 1;
        setOrderFav(1);
        setOrderQuery(1); // set ว่า เรียง fav
        fnSetFav();
      }
    }

    function fnSetFav() {
      axios
        .get(baseUrl + "/apinews_backend?fav=" + orderFav)
        .then((resp) => {
          // console.log(resp);
          setIsLoading(false);
          setData(resp.data);
          //loadData();
        })
        .catch((err) => console.log(err));
    }
  }

  function fnEdit(id) {
    setIdnews(id);
    setDetail("");
    console.log("edit id = " + id);
    axios
      .get(baseUrl + "/editnews/" + id)
      .then((resp) => {
        console.log(resp.data);
        setTitle(resp.data[0].title_news);
        //  console.log(resp.data[0].detail_news);
        setDetail(resp.data[0].detail_news);
        window.scrollTo(0, 0);
        setIsLoadEdit(true);
      })
      .catch((err) => console.log(err));
  }

  function cancleEdit() {
    setIsLoadEdit(false);
    setTitle("");
    setDetail("");
  }

  let var_link = "";

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <form className="container" onSubmit={onFormSubmit}>
        <div className="box-cms-title">ข่าวสาร และกิจกรรม</div>
        <label>หัวข้อ</label>
        <br />
        <input
          className="form-control"
          name="title"
          onChange={chnTitle}
          value={Title}
        />
        <br />
        <label>รายละเอียดข่าวสาร-กิจกรรม</label>
        <br />
        <textarea
          className=" form-control"
          rows="10"
          cols="120"
          onChange={(e) => newsDetail(e)}
          value={Detail}
        ></textarea>
        <br />

        {/* <FroalaEditorComponent onModelChange={handleModelChange} /> */}
        <label>ภาพหลัก</label>
        <input className=" form-control" type="file" onChange={chnFile1} />
        {/* <input type="file" claclassNamess="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload"></input> */}
        <br />
        <label>ภาพในอัลบัม</label>
        <input className=" form-control" type="file" onChange={chnFile2} />
        <input className=" form-control" type="file" onChange={chnFile3} />
        <input className=" form-control" type="file" onChange={chnFile4} />
        <input className=" form-control" type="file" onChange={chnFile5} />
        <input className=" form-control" type="file" onChange={chnFile6} />
        <input className=" form-control" type="file" onChange={chnFile7} />
        <input className=" form-control" type="file" onChange={chnFile8} />

        {IsLoadEdit ? (
          <>
            <button
              className="btn btn-warning"
              type="reset"
              style={{ backgroundColor: "#ffc107" }}
              onClick={cancleEdit}
            >
              ยกเลิก
            </button>
            <button className="btn btn-primary" type="submit">
              แก้ไข
            </button>
          </>
        ) : (
          <button className="btn btn-primary" type="submit">
            บันทึก
          </button>
        )}
      </form>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <span style={{ cursor: "pointer" }} onClick={loadData}>
          Reload&nbsp;
          <span style={{ color: "#28a745" }} class="fas fa-sync-alt"></span>
        </span>
      </div>
      <div className="list-event">
        <ul>
          <li>
            <span style={{ flex: 0.2 }}>Order</span>
            <span style={{ flex: 0.5 }}>Title</span>
            <span>Detail</span>
            <span style={{ flex: 0.2 }} onClick={fnFavOrder}>
              fav
            </span>
            <span style={{ flex: 0.2 }}>view</span>
            <span style={{ flex: 0.2 }}>edit</span>
            <span style={{ flex: 0.2 }}>del</span>
          </li>
          {!IsLoading
            ? Data.map((item, index) => {
                return (
                  <li key={index}>
                    <span style={{ flex: 0.2 }}>{index + 1}</span>
                    <span style={{ textAlign: "left", flex: 0.5 }}>
                      {item.title_news.substring(0, 60)}
                    </span>
                    <span style={{ textAlign: "left" }} onClick={disableDetail}>
                      {showId == item.id_news
                        ? ReactHtmlParser(item.detail_news)
                        : ReactHtmlParser(item.detail_news.substring(0, 60))}

                      {showId == item.id_news ? <img src={item.pa} /> : null}
                      {showId == item.id_news
                        ? Imgshow.map((item_img, index) => {
                            return <img key={index} src={item_img.picnews} />;
                          })
                        : null}
                    </span>
                    {item.fav == 1 ? (
                      <span
                        style={{ flex: 0.2 }}
                        onClick={(e) => fnFav(item.id_news, 0)}
                      >
                        <span
                          className="fas fa-star"
                          style={{ color: "#ffc107" }}
                        ></span>
                      </span>
                    ) : (
                      <span
                        style={{ flex: 0.2 }}
                        onClick={(e) => fnFav(item.id_news, 1)}
                      >
                        <span
                          className="far fa-star"
                          style={{ color: "#ffc107" }}
                        ></span>
                      </span>
                    )}
                    <span
                      style={{ flex: 0.2 }}
                      onClick={(e) => {
                        fnView(e, item.id_news);
                      }}
                    >
                      <span
                        className="fas fa-search"
                        style={{ color: "#007bff" }}
                      ></span>
                    </span>
                    <span
                      style={{ flex: 0.2 }}
                      onClick={() => fnEdit(item.id_news)}
                    >
                      <span
                        className="fas fa-edit"
                        style={{ color: "green" }}
                      ></span>
                    </span>
                    <span
                      onClick={() => fncomfirmDel(item.id_news)}
                      style={{ flex: 0.2 }}
                    >
                      <span
                        className="fas fa-trash-alt"
                        style={{ color: "red" }}
                      ></span>
                    </span>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Forminput;
