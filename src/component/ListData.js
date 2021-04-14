import React, { useEffect } from "react";
import { connect } from "react-redux";

const ListData = (props) => {
  // const [listItems, setlistItems] = useState({});

  useEffect(() => {
    //loadData();
  }, []);

  // function loadData() {
  //   let data = props.state;
  //   console.log(data);
  //   const listItems = data.map((d) => <li key={d.id_prod}>{d.name_pro}</li>);
  // }

  return (
    <div>
      {/* {listItems} */}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    // counter: state
    state,
  };
}

// export default connect(mapStateToProps,mapDispatchToProps)(Frominput);
export default connect(mapStateToProps, null)(ListData);
