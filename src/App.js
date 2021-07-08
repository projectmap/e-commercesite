import React, { useEffect,useState } from 'react';
import { Switch, Route } from 'react-router-dom';

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


function App() {

  const [currentUser,setUser]=useState(null);
  useEffect(()=>{
    const unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth) => {
      //setUser(user);
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot)=>{
          setUser({
            id:snapShot.id,
            photoURL:userAuth.photoURL,
            ...snapShot.data()
          })
        })

        console.log("current user",currentUser);
      }else{
        setUser(null);
      }
      
    })
    return () => {
      unsubscribeFromAuth();
    }

  });


  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
