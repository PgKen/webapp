import React from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";

const handleModelChange = (model) => {
    console.log(model);
  };

const Formjob = () => {
  return (
    <form className="container">
      <div className="box-cms-title">ข่าวสาร และกิจกรรม</div>
      <label>ตำแหน่งงาน</label>
      <br />
      <input style={{ width: "80%" }} />
      <br />
      <label>รายละเอียด</label>
      <FroalaEditorComponent onModelChange={handleModelChange} />
      <input type="file" />
      <br />
      <button className="btn btn-primary" type="submit">ตกลง</button>
    </form>
  );
};

export default Formjob;
