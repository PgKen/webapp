import React from 'react'
import n1 from "../img/n1.jpg";

const CompanyinformationN1 = () => {
    return (
        <div className="ceo-content" id="detail">
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
    )
}

export default CompanyinformationN1
