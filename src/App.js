import React, { useEffect,useState } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';


import {connect} from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';
import {auth, createUserProfileDocument } from "./firebase/firebase.utils";

import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/signinup/sign-in-up';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);


function App({setCurrentUser,currentUser}) {

  // const [currentUser,setUser]=useState(null);
  useEffect(()=>{
    const unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth) => {
      //setUser(user);
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot)=>{
          // setUser({
          //   id:snapShot.id,
          //   photoURL:userAuth.photoURL,
          //   ...snapShot.data()
          // })
          setCurrentUser(
            {
              id:snapShot.id,
              photoURL:userAuth.photoURL,
              ...snapShot.data()
            }
          )


        })

        console.log("current user",currentUser);
      }else{
        setCurrentUser(null);
      }
      
    })
    return () => {
      unsubscribeFromAuth();
    }

  }, []);


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={()=>currentUser? (<Redirect to="/"/>):<SignInUpPage/>} />
      </Switch>
    </div>
  );
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps=(dispatch)=>({
setCurrentUser:(user)=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
