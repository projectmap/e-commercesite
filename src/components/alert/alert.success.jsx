import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

const AlertSuccess=({openAlertBar,openBar,message})=>{
const messageText=message?message:"You are logged in."
    React.useEffect(()=>{
        if(openAlertBar){
            setOpen(true);
            //setTimeout(setOpen(false), 8000);
        }
    })
    console.log("SNACKBAR",openAlertBar);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      //openBar(false);
  
      setOpen(false);
    };
    return(
        <div>
        {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={messageText}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
           
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              {/* <CloseIcon fontSize="small" /> */}
            </IconButton>
          </React.Fragment>
        }
      />

        </div>
    )
}

export default AlertSuccess;