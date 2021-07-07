import React, { useEffect,useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import {auth } from "./firebase/firebase.utils";

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
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log("current user",currentUser);
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
