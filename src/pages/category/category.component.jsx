import React from"react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./category.styles.scss";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";




const Category=({collection})=>{
    const {title,items}=collection;
    return(
        <div className="category-page">
            <h2 className="title">{title}</h2>
            <div className="items">
            {
            items.map(item=>{
                return(<CollectionItem item={item}/>)
        })
    }
            </div>
            
        </div>
    )
}


const mapStateToProps=(state,ownprops)=>({
    collection:selectCollection(ownprops.match.params.categoryID)(state)
})
export default connect(mapStateToProps)(Category);