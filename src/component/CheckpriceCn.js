import React,{useEffect,useState} from 'react'
import HeaderCn from './HeaderCn'
import Navbar from './Navbar'
import Present from './Present'
import Price from './Price'
import Footer from './Footer'

import { connect } from "react-redux";


const CheckpriceCn = (props) => {

    function loadPage(){
        console.log("load page");
        // console.log(props.match.path);
    }
    useEffect(() => {
        loadPage()
    }, [])
    return (
        <div>
            <HeaderCn/>
            <Navbar fistTitle="Home" title="Price"/>
            <Price/>
            <Present/>
            <Footer/>
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
export default connect(mapStateToProps, null)(CheckpriceCn);
