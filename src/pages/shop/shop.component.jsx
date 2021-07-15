import React from "react";
import {Route} from "react-router-dom";

import { connect } from "react-redux";
import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./testgrid.css";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.jsx";
import Category from "../category/category.component.jsx";
 const ShopPage =({match})=> {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     collections: SHOP_DATA,
  //   };
  // }

 
   
    return (
      <div className="shop-page">
        
          < Route exact path={`${match.path}`} component={CollectionOverview} />
       <Route  path={`${match.path}/:categoryID`} component={Category}/>
      </div>
    );
  
}


const mapStateToProps=(state)=>({
collections:state.shop.collections
});
export default connect(mapStateToProps)(ShopPage);
