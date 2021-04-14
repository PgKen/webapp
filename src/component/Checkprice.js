import React,{useEffect,useState} from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Present from '../component/Present'
import Price from '../component/Price'
import Footer from '../component/Footer'

import { connect } from "react-redux";


const Checkprice = (props) => {

    function loadPage(){
        console.log("load page");
        // console.log(props.match.path);
    }
    useEffect(() => {
        loadPage()
    }, [])
    return (
        <div>
            <Header/>
            <Navbar fistTitle="หน้าแรก" title="ตรวจสอบราคา"/>
            <Price/>
            <Present title_1="สินค้าเกษตรครบวงจร" title_2="ผักปลอดภัย มั่นใจ" title_3="เป็นศูนย์กลางการค้าปลีก-ส่ง" title_4="CSR ภาครัฐและเอกชน" title_5="เปิดตลอด 24 ชั่วโมง"/>
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
export default connect(mapStateToProps, null)(Checkprice);
