import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
/* <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script> */

// <!-- TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries -->
/* <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-analytics.js"></script> */

/* // Your web app's Firebase configuration */
const firebaseConfig = {
  apiKey: "AIzaSyCpRtR3IBrwhjwfVjIWrqKP48JLTK6OUNA",
  authDomain: "hacker-news-e415e.firebaseapp.com",
  databaseURL: "https://hacker-news-e415e.firebaseio.com",
  projectId: "hacker-news-e415e",
  storageBucket: "hacker-news-e415e.appspot.com",
  messagingSenderId: "416890119316",
  appId: "1:416890119316:web:4b39cbf6fd8e6d25cc8081",
  measurementId: "G-075E2PF3JG"
};

/* // Initialize Firebase */
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();