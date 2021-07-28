import React from 'react';


import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import './collection-item.styles.scss';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const CollectionItem = ({ item,toggleState,addItem }) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



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
        <span className='price'>${price}</span>
      </div>
      <Button onClick={()=>{addItem(item)
    handleClick()  
    }
      } className="checkout-button" variant="contained" >Add to Cart</Button>
      <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        {name} is added in cart.
        </Alert>
      </Snackbar>
     
     
    </div>
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