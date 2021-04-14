import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useLocation
  } from "react-router-dom";

const Navbar = (props) => {
    let nav = useRouteMatch();
    console.log("=======");
    console.log(nav);
    // console.log(nav.url);
    return (
        <div className="box-nav">
            <ul>
                <li>
                <Link to="/th">{props.fistTitle}</Link>
                </li>
                <li>
                <i class="fas fa-angle-double-right"></i>
                </li>
                <li>
                <Link to={nav.url}>{props.title}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
