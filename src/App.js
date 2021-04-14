import Banner from "./component/Banner";
import Header from "./component/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { QueryParamProvider } from 'use-query-params';

import { createStore } from "redux";
import Reducer from "./Reducer"; // redux
import { connect } from "react-redux";

// import Home from "./Home";
// import News from "./News";
// import Checkprice from "./Checkprice";
// import Safety from "./Safety";
import About from "./component/About";

import Home from "./component/Home";
import HomeEn from "./component/HomeEn";
import HomeCn from "./component/HomeCn";

import NewsMain from './component/NewsMain'

import News from "./component/News";
import NewsEn from "./component/NewsEn";
import NewsCn from "./component/NewsCn";

import business from './component/business'
import Company from './component/Company'

import Newsdetail from './component/Newsdetail'

import Csr from "./component/Csr";


import Safety from "./component/Safety";
import SafetyEn from "./component/SafetyEn";
import SafetyCn from "./component/SafetyCn";

import Vegetable from './component/Vegetable'
import Test from './component/Test'

import VegetableDetail from './component/VegetableDetail'


import Checkprice from "./component/Checkprice";
import CheckpriceEn from "./component/CheckpriceEn";
import CheckpriceCn from "./component/CheckpriceCn";

import Contact from './component/Contact'
import ContactEn from './component/ContactEn'
import ContactCn from './component/ContactCn'

import Relation from './component/Relation'
import RelationEn from './component/RelationEn'
import RelationCn from './component/RelationCn'

import My404Component from "./component/My404Component";
import Footer from "./component/Footer";
import Frominput from "./component/Frominput";
// import Banner from "./component/Banner";
import { Provider } from "react-redux";
import ListData from "./component/ListData";

import privacy from './component/privacy'

import Cms from './component/Cms'

const store = createStore(Reducer); // redux

function App() {
  let lang = "2";
  return (
    <Provider store={store}>
      
      <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/th" component={Home}></Route>
          <Route exact path="/en" component={HomeEn}></Route>
          <Route exact path="/cn" component={HomeCn}></Route>
          
          <Route exact path="/th/mainnews" component={NewsMain}></Route>

          

          <Route path="/th/news" component={News}></Route>
          <Route path="/en/news" component={NewsEn}></Route>
          <Route path="/cn/news" component={NewsCn}></Route>
          
          
          <Route path="/th/newsdetail" component={Newsdetail}></Route>

          <Route path="/th/vegetable-detail" component={VegetableDetail}></Route>


          <Route path="/th/business" component={business}></Route>
          <Route path="/th/company" component={Company}></Route>

          <Route path="/th/csr" component={Csr}></Route>

          <Route path="/th/checkprice" component={Checkprice}></Route>
          <Route path="/en/checkprice" component={CheckpriceEn}></Route>
          <Route path="/cn/checkprice" component={CheckpriceCn}></Route>

          <Route path="/th/vegetable" component={Vegetable}></Route>
          <Route path="/en/safety" component={SafetyEn}></Route>
          <Route path="/cn/safety" component={SafetyCn}></Route>

          <Route path="/th/test" component={Test}></Route>


          <Route path="/th/about" component={Frominput}></Route>
          <Route path="/en/about" component={Frominput}></Route>
          <Route path="/cn/about" component={Frominput}></Route>

          <Route path="/th/contact" component={Contact}></Route>
          <Route path="/en/contact" component={ContactEn}></Route>
          <Route path="/cn/contact" component={ContactCn}></Route>

          <Route path="/th/list" component={ListData}></Route>
          <Route path="/en/list" component={ListData}></Route>
          <Route path="/cn/list" component={ListData}></Route>

          <Route path="/th/relation" component={Relation}></Route>
          <Route path="/en/relation" component={RelationEn}></Route>
          <Route path="/cn/relation" component={RelationCn}></Route>
          
          
          <Route path="/en/privacy" component={privacy}></Route>

          <Route path="/Cms" component={Cms}/>


          <Route path="/404" component={My404Component} />
          <Redirect from="*" to="/404" />
        </Switch>
        </QueryParamProvider>
      </Router>
    </Provider>
  );
}

// function mapStateToProps(state) {
//   return {
//     // counter: state
//     state
//   }
// }
export default App;
// export default connect(mapStateToProps,null)(App);
