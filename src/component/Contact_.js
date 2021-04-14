import React, { useState } from "react";
import Header from "./Header";
import Present from "./Present";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import ReCAPTCHA from "react-google-recaptcha";

// import MyEditor from "./MyEditor";

const Contact = () => {
  const recaptchaRef = React.createRef();
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [namecontact, setnamecontact] = useState("");
  const [email, setemail] = useState("");
  const [athorcontact, setathorcontact] = useState("");
  const [massage, setmassage] = useState("");
  const [submitmassage, setsubmitmassage] = useState("");

  function chNameContact(e) {
    let val = e.target.value;
    setnamecontact(val);
  }

  function chMail(e) {
    let val = e.target.value;
    setemail(val);
  }

  function chathorcontact(e) {
    let val = e.target.value;
    setathorcontact(val);
  }

  function fnmassage(e) {
    let val = e.target.value;
    setmassage(val);
  }

  function submitContact(e) {
    // e.preventdefault()
    // e.stopPropagation();
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    /*
    onSubmit = () => {
      const recaptchaValue = recaptchaRef.current.getValue();
      this.props.onSubmit(recaptchaValue);
    }
    */
    e.preventDefault();
    setnamecontact("");
    setemail("");
    setathorcontact("");
    setmassage("");
    //
    setsubmitmassage(
      "ระบบได้ทำการส่งข้อมูลเรียบร้อยแล้ว รอการติดต่อกลับจากเรา"
    );
    console.log("Event: Form Submit");
    console.log("submit");
    setTimeout(() => {
      setsubmitmassage("");
    }, 3000);
  }

  return (
    // <MyEditor/>
    <div>
      <Header />
      <Navbar fistTitle="หน้าแรก" title="ติดต่อ" />
      <div className="box-contact">
        <ul className="">
          <li>
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
      <div className="box-contact">
        <ul>
          <li>&nbsp;</li>
        </ul>
        <ul>
          <form onSubmit={submitContact} action="/addContact" type="POST">
            <li className="head-contact">แบบฟอร์มสำหรับติดต่อ</li>
            <li>
              <label>ชื่อผู้ติดต่อ</label>
              <input
                className="form-control"
                value={namecontact}
                onChange={chNameContact}
              />
            </li>
            <li>
              <label>Email</label>
              <input className="form-control" value={email} onChange={chMail} />
            </li>
            <li>
              <label>ข้อมูลติดต่ออื่นๆ</label>
              <input
                className="form-control"
                value={athorcontact}
                onChange={chathorcontact}
              />
            </li>
            <li>
              <label>ข้อความ</label>
              <textarea
                className="form-control"
                style={{ height: 150 }}
                value={massage}
                onChange={fnmassage}
              />
            </li>
            <li>
              <label></label>
              <span className="sendedmail">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfK2TsUAAAAAMuLrJnSg7eWwiQBc4c310o6XZUo"
                  onChange={onChange}
                />
              </span>
            </li>
            <li>
              <label>&nbsp;</label>
              <span className="sendedmail">{submitmassage}</span>
            </li>
            <li>
              <label>&nbsp;</label>
              <button type="submit" className="btn btn-primary">
                ตกลง
              </button>
            </li>
          </form>
        </ul>
      </div>
      <div>
        {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
      </div>
      <Present />
      <Footer />
    </div>
  );
};

export default Contact;
