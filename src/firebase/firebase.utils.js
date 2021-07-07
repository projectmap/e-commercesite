import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";




const config={
    apiKey: "AIzaSyCtdms2LlB9Bzw4TbDJCELBhbihY0q3hO4",
    authDomain: "e-commercedb-37abd.firebaseapp.com",
    projectId: "e-commercedb-37abd",
    storageBucket: "e-commercedb-37abd.appspot.com",
    messagingSenderId: "318436943877",
    appId: "1:318436943877:web:1ccee888bb2ba8ea34d46c",
    measurementId: "G-06D6KKXRMR"
}

firebase.initializeApp(config);


export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:"select_account"});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;