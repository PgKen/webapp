import React from "react";

const Maincontact = () => {
  return (
    <div>
      <div className="box-contact">
        <ul>
          <li style={{ background: "none" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.183367886365!2d99.80399191527282!3d13.524335806166548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e32f4e70339f7d%3A0x2bb17a499c2bae81!2z4LiV4Lil4Liy4LiU4Lio4Lij4Li14LmA4Lih4Li34Lit4LiH4Lij4Liy4LiK4Lia4Li44Lij4Li1KOC4leC4peC4suC4lOC4nOC4seC4gSk!5e0!3m2!1sth!2sth!4v1608362585308!5m2!1sth!2sth"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
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
