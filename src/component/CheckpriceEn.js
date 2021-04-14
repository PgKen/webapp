import React,{useEffect,useState} from 'react'
import HeaderEn from './HeaderEn'
import Navbar from './Navbar'
import Present from './Present'
import PriceEn from './PriceEn'
import FooterEn from './FooterEn'

import { connect } from "react-redux";


const CheckpriceEn = (props) => {

    function loadPage(){
        console.log("load page");
        // console.log(props.match.path);
    }
    useEffect(() => {
        loadPage()
    }, [])
    return (
        <div>
            <HeaderEn/>
            <Navbar fistTitle="Home" title="Price"/>
            <PriceEn/>
            <Present/>
            <FooterEn/>
        </div>
    )
}



function mapStateToProps(state) {
    return {
      // counter: state
      state,
    };
  }
// export default Checkprice
export default connect(mapStateToProps, null)(CheckpriceEn);
