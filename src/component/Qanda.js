import React, { useState, useEffect } from "react";

import FroalaEditorComponent from "react-froala-wysiwyg";
import axios from "axios";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

let baseUrl = "http://localhost:3435";

const Qanda = () => {
  const [Question, setQuestion] = useState(null);
  const [Answer, setAnwser] = useState(null);
  const [Data, setData] = useState([]);
  const [Idpreview, setIdpreview] = useState(null);

  const [Detail, setDetail] = useState("");


  function loadData() {
    setData([])
    axios
      .get(baseUrl+"/apiqa")
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

  const handleModelChange = (model) => {
    console.log(model);
    setAnwser(model);
  };

  async function onFormSubmit(e) {
    //setWait(1);
    e.preventDefault(); // Stop form submit
    let question = Question;
    let answer = Answer;
    axios
      .post(baseUrl + "/qanda", {
        question: question,
        answer: answer,
      })
      .then(function (response) {
        // console.log(response);
        setData([]);
        loadData();
        setAnwser("");
        setQuestion("");
      })
      .catch(function (error) {
        console.log(error);
      });
    // setTimeout(() => {
    //   fileUpload(file).then((resp) => {
    //     // console.log(resp.data);
    //     console.log("TEST File");
    //     console.log(file);
    //   });
    // }, 10000);
  }

  // function fileUpload(file) {
  //   //setWait(0);
  //   const url = baseUrl + "/kiosk-upload";
  //   const formData = new FormData();
  //   // formData.append("file", file);
  //   formData.append("question", question);
  //   formData.append("anser", anser);
  //   const config = {
  //     headers: {
  //       // "Accept": "application/json, text/plain, */*",
  //       "content-type": "multipart/form-data",
  //     },
  //   };
  //   return post(url, formData, config);
  // }

  function chnQuestion(e) {
    let a = e.target.value;
    setQuestion(a);
    // console.log(a);
  }

  function preview(e, index) {
    console.log("Preview = " + index);
    if (index == Idpreview) {
      setIdpreview(null);
    } else {
      setIdpreview(index);
    }
  }

  function delQuestion(e, id) {
    axios
      .get(baseUrl + "/delquestion/" + id)
      .then((resp) => {
        loadData();
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(id);
  }

  function newsDetail(e) {
    let model = e.target.value;
    // console.log("model = " +  model);
    setDetail(model);
    setAnwser(model);

  }

  function updateStatus(id,i){
    console.log("id = "+id);
    console.log("i = "+i);
    axios
    .get(baseUrl+ '/updateStatusQa/'+id+"/"+i)
    .then(resp=>{
      console.log(resp);
      loadData();
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <form className="container" onSubmit={onFormSubmit}>
        <div className="box-cms-title">คำถามที่พบบ่อย</div>
        <label>คำถาม</label>
        <br />
        <input
          className="form-control"
          name="question"
          onChange={chnQuestion}
          value={Question}
        />
        <br />
        <label>คำตอบ</label>
        {/* <FroalaEditorComponent
          onModelChange={handleModelChange}
          name="answer"
          model={Answer}
        /> */}
        <textarea
          className=" form-control"
          rows="5"
          cols="120"
          onChange={(e) => newsDetail(e)}
          value={Answer}
        ></textarea>
        <br />
        <button className="btn btn-primary" type="submit">
          ตกลง
        </button>
      </form>
      <hr />
      <div className="list-event">
        <ul>
          <li>
            <span style={{ flex: 0.2 }}>ลำดับ</span>
            <span>หัวข้อ</span>
            <span>รายละเอียด</span>
            <span style={{ flex: 0.2 }}>สถานะ</span>
            <span style={{ flex: 0.2 }}>view</span>
            <span style={{ flex: 0.2 }}>edit</span>
            <span style={{ flex: 0.2 }}>del</span>
          </li>
          {Data.map((item, index) => {
            return (
              <li key={index}>
                <span style={{ flex: 0.2 }}>{index + 1}</span>
                <span style={{ textAlign: "left" }}>
                  {item.question.substring(0, 60)}
                </span>
                <span style={{ textAlign: "left" }}>
                  {Idpreview == index
                    ? ReactHtmlParser(item.answer)
                    : ReactHtmlParser(item.answer.substring(0, 60))}
                </span>

                {item.status == 1 ? (
                  <span style={{ flex: 0.2 }}
                  onClick={(e)=>updateStatus(item.id,0)}>
                    <span
                      className="fas fa-check-square"
                      style={{ color: "#e0590a" }}
                    ></span>
                  </span>
                ) : (
                  <span style={{ flex: 0.2 }}
                  onClick={(e)=>updateStatus(item.id,1)}>
                    <span
                      className="far fa-check-square"
                      style={{ color: "#CCC" }}
                    ></span>
                  </span>
                )}

                <span
                  style={{ flex: 0.2, cursor: "pointer" }}
                  onClick={(e) => {
                    preview(e, index);
                  }}
                >
                  <span
                    class="fas fa-search"
                    style={{ color: "#007bff" }}
                  ></span>
                </span>
                <span style={{ flex: 0.2 }}>
                  <span class="fas fa-edit" style={{ color: "green" }}></span>
                </span>
                <span
                  style={{ flex: 0.2 }}
                  onClick={(e) => {
                    if (window.confirm("Delete the item?")) {
                      delQuestion(e, item.id);
                    }
                  }}
                >
                  <span
                    className="fas fa-trash-alt"
                    style={{ color: "red" }}
                  ></span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Qanda;
