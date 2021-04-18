import firebase from 'firebase';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for cloud firestore
import 'firebase/functions';
import 'firebase/database';    // for realtime database


const firebaseConfig = {
   // config keys
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export default db;
export const auth = firebaseApp.auth();
export const functions = firebaseApp.functions();

