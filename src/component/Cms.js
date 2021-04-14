import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import Forminput from "../component/Forminput";
import Qanda from "../component/Qanda";
import Formjob from "../component/Formjob";

import HeaderCms from "../component/HeaderCms";
import Footer from "../component/Footer";

const Cms = () => {
  const [Menu, setMenu] = useState(0);
  const [Remenu, setRemenu] = useState(false);

  let selectMenu = (i) => {
    console.log(i);
    setRemenu(true);
    setMenu(i);
    setTimeout(() => {
      setRemenu(false);
    }, 100);
  };

  return (
    <div>
      <HeaderCms />

      <div className="box-cms">
        <ul className="menuCms">
          <li
            onClick={(e) => {
              selectMenu(0);
            }}
          >
            ข่าวสาร และกิจกรรม
          </li>
          <li
            onClick={(e) => {
              selectMenu(1);
            }}
          >
            คำถามที่พบบ่อย
          </li>
          <li
            onClick={(e) => {
              selectMenu(2);
            }}
          >
            สมัครงาน
          </li>
        </ul>
        {!Remenu ? (
          <div className="box-content-cms">
            {Menu === 0 ? <Forminput /> : null}
            {Menu === 1 ? <Qanda /> : null}
            {Menu === 2 ? <Formjob /> : null}
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Cms;
