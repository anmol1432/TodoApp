import firebase from 'firebase';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for cloud firestore
import 'firebase/functions';
import 'firebase/database';    // for realtime database


const firebaseConfig = {
    apiKey: "AIzaSyBagAgznDL4mVAW5Jf7bRux9eSqLKlICPM",
    authDomain: "phonic-realm-300212.firebaseapp.com",
    projectId: "phonic-realm-300212",
    storageBucket: "phonic-realm-300212.appspot.com",
    messagingSenderId: "421262088545",
    appId: "1:421262088545:web:51a5f31016635bd1960d20",
    measurementId: "G-J4J9HE5SXQ"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export default db;
export const auth = firebaseApp.auth();
export const functions = firebaseApp.functions();

