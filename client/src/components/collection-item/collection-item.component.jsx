import React from 'react';


import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import './collection-item.styles.scss';

const CollectionItem = ({ item,toggleState,addItem }) => {
  const {id,name,price,imageUrl}=item;
console.log("toggle form collection",toggleState)
  return(
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={()=>addItem(item)} className="checkout-button" variant="contained" >Add to Cart</Button>
    </div>
  );
}

const mapDispatchToProps=(dispatch)=>({
  addItem:(item)=>dispatch(addItem(item))
})


const mapStateToProps=({cart})=>({
toggleState:cart.toggleState
})

export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);