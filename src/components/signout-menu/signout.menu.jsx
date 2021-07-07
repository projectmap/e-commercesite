import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./signout-menu.styles.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  menuCardEmail: {
    fontSize: 10,
  },
  menuCardName: {
    fontSize: 15,
  },
});

const ImgMediaCard = ({ currentUser, handle }) => {
  const classes = useStyles();

  

  

  //const [status,setStatus]=useState("true");
  //
  return (
    <div className="sign-out-container">
      <Card className={classes.root}>
        <CardActionArea>
          {/* <CardMedia className="photo-holder"
          component="img"
          alt="Your profile"
          height="70"
          image={currentUser.photoURL}
          title="Contemplative Reptile"
        /> */}
          <div
            className="photo-holder"
            style={{ backgroundImage: `url(${currentUser.photoURL})` }}
          ></div>
          <CardContent>
            <Typography
              className={classes.menuCardName}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {currentUser.bc.displayName}
            </Typography>
            <Typography
              className={classes.menuCardEmail}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {currentUser.bc.email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handle} size="small" color="primary">
            Sign Out
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ImgMediaCard;
