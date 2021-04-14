import axios from "axios";

// const initialState = []

axios
  // .get("http://taladsrimuang.com:3200/checkB1")
  .get("https://taladsrimuang.com:3243/checkB1")
  .then((resp) => {
    // handle success
    //console.log(resp.data);
    initialState = [resp.data];
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

// const initialState = [
//   {
//     id: 1,
//     name: "Ken Jirawat",
//   },
//   {
//     id: 2,
//     name: "Hello",
//   },
// ];

const initialState = [
  {
    id: 0,
    lang: "TH",
  },
];

function Reducer(state = initialState, action) {
  console.log("OK");
  // return state;
  let name = "";
  let val_l = "";
  switch (action.type) {
    case "ADD_DATA":
      name = action.data;
      return (state = [...state, { name }]);
      break;

    case "CH_LANG":
      val_l = action.data;
      console.log(val_l);
      state = [{}];
      let val = {
        id : 0,
        lang : val_l
      }
      return (state =  [ val ]);
     
      break;

    default:
      return state;
      break;
  }
}

export default Reducer;
