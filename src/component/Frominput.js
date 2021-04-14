import { event } from "jquery";
import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import moduleName from '../Reducer'

import ListData from './ListData'

const Frominput = (props) => {
  // let gName = props.counter
  
  console.log(props.state);

  const [Name, setName] = useState();
  const [Data, setData] = useState({})

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("name =" + Name);
    // mainInput.value = ""
    // console.log(state);
    props.dispatch({
      type: "ADD_DATA",
      data : Name,
    })

    setData(props.state)
  }

  useEffect(() => {
    setData({})
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input onChange={(evt) => setName(evt.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <ListData/>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    // counter: state
    state
  }
}


// export default connect(mapStateToProps,mapDispatchToProps)(Frominput);
export default connect(mapStateToProps,null)(Frominput);
// export default Frominput
