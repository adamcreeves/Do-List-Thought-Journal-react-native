import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_tgJbPlTXAXyC7532evvvFvFdTFMiloc",
  authDomain: "do-thot.firebaseapp.com",
  databaseURL: "https://do-thot-default-rtdb.firebaseio.com",
  projectId: "do-thot",
  storageBucket: "do-thot.appspot.com",
  messagingSenderId: "42562294050",
  appId: "1:42562294050:web:7667b90b3d958cd21d557b",
  measurementId: "G-36CCB6XBJW",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
