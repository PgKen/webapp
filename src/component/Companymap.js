import React from "react";
import mapsrimuang from "../img/mapsrimuang.jpg";
import mapway from "../img/mapway.jpg";

const Companymap = () => {
  return (
    <div className="news-content">
      <div className="ceo-content">
        <div className="ceo-content-detail">
          <span className="ceo-content-detail-span-head">
            แผนที่ และโครงสร้าง
          </span>
        </div>
      </div>
      <div className="ceo-content">
        <div className="ceo-content-detail">
          <span className="ceo-content-detail-span-head">
           แผนที่ตลาด และแผนที่การเดินทางมาตลาด
          </span>
        </div>
      </div>
      <div className="news-con-box-img">
        <div className="news-con-box-img-ls" style={{width:"100%"}}>
          <img className="map" src={mapway} />
        </div>
      </div>
      <div className="ceo-content">
        <div className="ceo-content-detail">
          <span className="ceo-content-detail-span-head">
           โครงสร้างแผนผังตลาด
          </span>
        </div>
      </div>
      <div className="news-con-box-img">
        <div className="news-con-box-img-ls" style={{width:"100%"}}>
          <img  className="map" src={mapsrimuang} />
        </div>
      </div>
    </div>
  );
};

export default Companymap;
