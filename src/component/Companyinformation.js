import React, { useState } from "react";
import n1 from "../img/n1.jpg";
import n2 from "../img/n2.jpg";
import n3 from "../img/n3.jpg";

import Information1 from "./CompanyinformationN1";
import Information2 from "./CompanyinformationN2";
import Information3 from "./CompanyinformationN3";

const Companyinformation = (props) => {
  console.log("props.startpage = " +props.startpage);
  const [Information, setInformation] = useState(props.startpage);

  function fnSetInformation(id) {
    console.log("Information = " + id);
    setInformation(id);
    window.scrollTo(0, 700);
    // var h = window.innerHeight;
    // console.log("h =" + h);
    // setInterval(() => {
    //   h += 10;
    //   if (h < 200) {
    //     clearInterval();
    //   } else {
    //     window.scrollTo(0, 500);
    //   }
    // }, 2);
  }

  return (
    <div className="news-content">
      <div className="news-con-box-img">
        <div
          className="news-con-box-img-ls"
          onClick={() => {
            fnSetInformation(1);
          }}
        >
          <img src={n1} />
        </div>
        <div className="news-con-box-img-ls">
          <div>
            <p>คุณนภินทร ศรีสรรพางค์</p>
            <p>ประธานกรรมการ</p>
          </div>
        </div>
        <div className="news-con-box-img-ls">
          <img
            src={n2}
            onClick={() => {
              fnSetInformation(2);
            }}
          />
          <img
            src={n3}
            href="#detail"
            onClick={() => {
              fnSetInformation(3);
            }}
          />
        </div>
        <div className="news-con-box-img-ls">
          <div>
            <p>คุณวีณา ศรีสรรพางค์</p>
            <p>รองประธานกรรมการ</p>
          </div>
          <div>
            <p>คุณภาคิน ศรีสรรพางค์</p>
            <p>ตำแหน่ง.....</p>
          </div>
        </div>
      </div>
      {Information == 1 ? (
        <Information1 />
      ) : Information == 2 ? (
        <Information2 />
      ) : Information == 3 ? (
        <Information3 />
      ) : null}

      {/*
      <div className="ceo-content">
        <div className="ceo-content-img">
          <label>คุณนภินทร ศรีสรรพางค์</label>
          <img src={n1} />
        </div>
        <div className="ceo-content-detail">
            <span>นายนภินทร ศรีสรรพางค์ (อดีตสมาชิกสภาผู้แทนราษฎร ระบบบัญชีรายชื่อ)</span>
            <span>สถานที่ทางาน : บริษัทแอ็กโกรคอมเมอร์สกรุ๊ป จากัด</span>
            <span>ที่อยู่ : 533 ถ. ศรีสุริยวงศ์ ต. หน้าเมือง อ. เมือง จ. ราชบุรี 70000</span>
            <span>โทรศัพท์ : 032 338250, 032-326158</span>
            <span>ด้านการศึกษา</span>
            <span>สาเร็จการศึกษาระดับปริญญาตรี นิติศาสตร์บัณฑิต จากมหาวิทยาลัยรามคาแหง</span>
            <span>สาเร็จการศึกษาระดับปริญญาโท รัฐศาสตร์มหาบัณฑิต มหาวิทยาลัยรามคาแหง</span>
            <span>&nbsp;</span>
            <span className="ceo-content-detail-span-head">หน้าที่การงาน</span>
            <span>ดำรงตาแหน่งกรรมการผู้จัดการ บริษัทแอ็กโกรคอมเมอร์สกรุ๊ป จากัด</span>
            <span>ผู้ดำเนินงาน ตลาดกลางผักและผลไม้ จังหวัดราชบุรี (ศรีเมือง)</span>
            <span>ผู้ดำเนินงาน ตลาดกลางผักและผลไม้ จังหวัดเชียงราย (ล้านเมือง)</span>
            <span>&nbsp;</span>
            <span className="ceo-content-detail-span-head">ตำแหน่งทางการเมือง</span>
            <span>สมาชิกวุฒิสภาจังหวัดราชบุรี ปี 2543 2549</span>
            <span>สมาชิกสภาผู้แทนราษฎร ระบบบัญชีราย ชื่อจังหวัดราชบุรี ปี 2554 2556</span>
        </div>
      </div>
      <div className="ceo-content">
        <div className="ceo-content-img">
          <label>คุณวีณา ศรีสรรพางค์</label>
          <img src={n2} />
        </div>
        <div className="ceo-content-detail">
            <span>นายนภินทร ศรีสรรพางค์ (อดีตสมาชิกสภาผู้แทนราษฎร ระบบบัญชีรายชื่อ)</span>
            <span>สถานที่ทางาน : บริษัทแอ็กโกรคอมเมอร์สกรุ๊ป จากัด</span>
            <span>ที่อยู่ : 533 ถ. ศรีสุริยวงศ์ ต. หน้าเมือง อ. เมือง จ. ราชบุรี 70000</span>
            <span>โทรศัพท์ : 032 338250, 032-326158</span>
            <span>ด้านการศึกษา</span>
            <span>สาเร็จการศึกษาระดับปริญญาตรี นิติศาสตร์บัณฑิต จากมหาวิทยาลัยรามคาแหง</span>
            <span>สาเร็จการศึกษาระดับปริญญาโท รัฐศาสตร์มหาบัณฑิต มหาวิทยาลัยรามคาแหง</span>
            <span>&nbsp;</span>
            <span className="ceo-content-detail-span-head">หน้าที่การงาน</span>
            <span>ดำรงตาแหน่งกรรมการผู้จัดการ บริษัทแอ็กโกรคอมเมอร์สกรุ๊ป จากัด</span>
            <span>ผู้ดำเนินงาน ตลาดกลางผักและผลไม้ จังหวัดราชบุรี (ศรีเมือง)</span>
            <span>ผู้ดำเนินงาน ตลาดกลางผักและผลไม้ จังหวัดเชียงราย (ล้านเมือง)</span>
            <span>&nbsp;</span>
            <span className="ceo-content-detail-span-head">ตำแหน่งทางการเมือง</span>
            <span>สมาชิกวุฒิสภาจังหวัดราชบุรี ปี 2543 2549</span>
            <span>สมาชิกสภาผู้แทนราษฎร ระบบบัญชีราย ชื่อจังหวัดราชบุรี ปี 2554 2556</span>
        </div>
      </div>
      <div className="ceo-content">
        <div className="ceo-content-img">
          <label>คุณภาคิน ศรีสรรพางค์</label>
          <img src={n3} />
        </div>
        <div className="ceo-content-detail">
            <span>นายนภินทร ศรีสรรพางค์ (อดีตสมาชิกสภาผู้แทนราษฎร ระบบบัญชีรายชื่อ)</span>
            <span>สถานที่ทางาน : บริษัทแอ็กโกรคอมเมอร์สกรุ๊ป จากัด</span>
            <span>ที่อยู่ : 533 ถ. ศรีสุริยวงศ์ ต. หน้าเมือง อ. เมือง จ. ราชบุรี 70000</span>
            <span>โทรศัพท์ : 032 338250, 032-326158</span>
            <span>ด้านการศึกษา</span>
            <span>สาเร็จการศึกษาระดับปริญญาตรี นิติศาสตร์บัณฑิต จากมหาวิทยาลัยรามคาแหง</span>
            <span>สาเร็จการศึกษาระดับปริญญาโท รัฐศาสตร์มหาบัณฑิต มหาวิทยาลัยรามคาแหง</span>
            <span>&nbsp;</span>
            <span className="ceo-content-detail-span-head">หน้าที่การงาน</span>
            <span>ดำรงตาแหน่งกรรมการผู้จัดการ บริษัทแอ็กโกรคอมเมอร์สกรุ๊ป จากัด</span>
            <span>ผู้ดำเนินงาน ตลาดกลางผักและผลไม้ จังหวัดราชบุรี (ศรีเมือง)</span>
            <span>ผู้ดำเนินงาน ตลาดกลางผักและผลไม้ จังหวัดเชียงราย (ล้านเมือง)</span>
            <span>&nbsp;</span>
            <span className="ceo-content-detail-span-head">ตำแหน่งทางการเมือง</span>
            <span>สมาชิกวุฒิสภาจังหวัดราชบุรี ปี 2543 2549</span>
            <span>สมาชิกสภาผู้แทนราษฎร ระบบบัญชีราย ชื่อจังหวัดราชบุรี ปี 2554 2556</span>
        </div>
      </div>
      */}
    </div>
  );
};

export default Companyinformation;
