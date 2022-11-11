import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDisK-gz9dYv4vsw31-i_CsuZlQOQh3J00",
    authDomain: "tmail-clone.firebaseapp.com",
    projectId: "tmail-clone",
    storageBucket: "tmail-clone.appspot.com",
    messagingSenderId: "877539466282",
    appId: "1:877539466282:web:c0fe39d9cf809f672a3753",
    measurementId: "G-Y0K0HTE30F"
  };

// use this to initilaize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// use this for db
const db = firebaseApp.firestore();

// use this for the auth
const auth = firebase.auth();

// have to add new to init google auth
const provider = new firebase.auth.GoogleAuthProvider();

// exports db and auth
export { db, auth, provider };