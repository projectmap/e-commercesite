import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./signout-menu.styles.scss";

import {connect} from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  menuCardEmail: {
    fontSize: 8,
  },
  menuCardName: {
    fontSize: 12,
  },
  signoutButton:{
    fontSize:10,
  }
});

const ImgMediaCard = ({ currentUser, handle }) => {
  const classes = useStyles();
  //const [firstLetter,setLetter]=useState(null);
  let firstLetter="test";
  if(!currentUser.photoURL){
     const letter=currentUser.displayName.charAt(0).toUpperCase();
     //setLetter(letter);
     firstLetter=letter;
  }

  

  //const [status,setStatus]=useState("true");
  //
  return (
    <div className="sign-out-container">
      <Card className={classes.root}>
        <CardActionArea className="sign-out-container">
          {/* <CardMedia className="photo-holder"
          component="img"
          alt="Your profile"
          height="70"
          image={currentUser.photoURL}
          title="Contemplative Reptile"
        /> */}{
          currentUser.photoURL?<div
          className="photo-holder"
          style={{ backgroundImage: `url(${currentUser.photoURL})` }}
        ></div>:<div className="letter-first"><p>{firstLetter}</p></div>
        }
          
          <CardContent>
            <Typography
              className={classes.menuCardName}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {currentUser.displayName.charAt(0).toUpperCase() + currentUser.displayName.slice(1)}
            </Typography>
            <Typography
              className={classes.menuCardEmail}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {currentUser.email}
            </Typography>
          </CardContent>
        </CardActionArea><hr/>
        <CardActions>
          <Button className={classes.signoutButton} onClick={handle} size="small" color="primary">
            Sign Out
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};



const mapStateToProps=(state)=>({
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(ImgMediaCard);
