import React, { useEffect, useState } from "react";
import HeaderEn from "./HeaderEn";
import Present from "./Present";
import PriceEn from "./PriceEn";
import Footer from "./Footer";

const My404Component = () => {
  return (
    <div>
      <HeaderEn />
      <ul className="style-not-found">
        <li>404</li>
        <li>not found</li>
      </ul>
      <Footer />
    </div>
  );
};

export default My404Component;
