import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

const FooterEn = (props) => {
  const [Lang, setLang] = useState(props.state[0].lang);
  useEffect(() => {
    console.log("footer");
    console.log(props);
    return () => {
      console.log("clean");
    };
  }, []);
  return (
    <div>
      <ul className="box-footer">
        <li className="footer">
          <span>
            <Link to="/en">HOME</Link>
            <Link to="/en/news">News</Link>
            <Link to="/en/checkprice">Checkprice</Link>
            <Link to="/en/safety">Safe vegetables</Link>
            <Link to="/en/about">About</Link>
          </span>
          <span>
            <Link to="/en/checkprice">Checkprice</Link>
            <Link to="/en/safety">Safe vegetables</Link>
            <Link to="/en/about">About</Link>
          </span>
          <span>
            <Link to="/en/checkprice">Checkprice</Link>
            <Link to="/en/safety">Safe vegetables</Link>
            <Link to="/en/about">About</Link>
          </span>
        </li>
      </ul>
      <ul className="box-copyright">
        <li>
          Copyright @ 2020 Agrocommerce Group Co., Ltd All rights reserved.
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    // counter: state
    state,
  };
}

// export default Footer;
export default connect(mapStateToProps, null)(FooterEn);
