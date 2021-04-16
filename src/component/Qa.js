import React, { useEffect, useState } from "react";
import axios from "axios";

const Qa = () => {
  const [Data, setData] = useState([]);
  const [Isloading, setIsloading] = useState(true);

  // let webBase = "http://localhost:3435";
  let webBase = "https://taladsrimuang.com:3435";

  function loadData() {
    console.log("load Data");
    axios
      .get(webBase + "/qalist")
      .then((resp) => {
        console.log(resp);
        setData(resp.data);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {!Isloading ? (
        Data.map((item, index) => {
          return (
            <div className="qastyle">
              <div key={index}>
                <span>คำถาม</span>
                <span>{item.question}</span>
              </div>
              <div>
              <span>คำตอบ</span>
                <span>{item.answer}</span>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Qa;
