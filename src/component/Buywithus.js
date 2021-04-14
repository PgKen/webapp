import React from "react";
import imgLogo from "../img/logo_srimaung.png";

import bg003 from "../img/srimuang2.jpg";



const Maincontact = () => {
  return (
    <div>
      <div className="box-contact">
        <ul>
          <li style={{backgroundColor:"white",    justifyContent: "center"}}>
          <img src={bg003} />
          </li>
        </ul>
        <ul>
          <li>
            <span style={{ color: "#1e8350" }}>
              <i class="fas fa-building"></i>
            </span>
            &nbsp;&nbsp;
            <span>
              <p>บริษัท แอ็กโกรคอมเมอร์ส กรุ๊ป จำกัด 533 ถนนศรีสุริยวงศ์</p>
              <p>ตำบลหน้าเมือง อำเภอเมือง จังหวัดราชบุรี 70000</p>
            </span>
          </li>
          <li>
            <span style={{ color: "#d8a91e" }}>
              <i class="fas fa-phone-alt"></i>
            </span>
            &nbsp;&nbsp;
            <span>
              <p>โทรศัพท์ 0 3233 8250, 0 3232 6158 โทรสาร 0 3232 6437</p>
              <p>ฝ่ายข้อมูลและสารสนเทศและฝ่ายการตลาด</p>
            </span>
          </li>
          <li>
            <span style={{ color: "#ef6809" }}>
              <i class="fas fa-envelope-open-text"></i>
            </span>
            &nbsp;&nbsp;
            <span>
              <p>อีเมลล์ taladsrimuang@hotmail.co.th</p>
              <p>&nbsp;</p>
            </span>
          </li>
          <li>
            <span style={{ color: "#007bff" }}>
              <i class="fas fa-map-marked-alt"></i>
            </span>
            &nbsp;&nbsp;
            <span>
              <p>แผนที่ตลาดศรีเมือง คลิกเพื่อดูแผนที่</p>
              <p>แผนที่การเดินทางมาตลาดศรีเมือง คลิกเพื่อดูแผนที่</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Maincontact;
