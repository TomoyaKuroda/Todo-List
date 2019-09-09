import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC8pb69JVGZdY4F7d5H7UxNYvjcsgeM2xA",
  authDomain: "todoist-tut-47569.firebaseapp.com",
  databaseURL: "https://todoist-tut-47569.firebaseio.com",
  projectId: "todoist-tut-47569",
  storageBucket: "todoist-tut-47569.appspot.com",
  messagingSenderId: "436083608084",
  appId: "1:436083608084:web:8c1388d1c5f3d2e794b501"
});

export { firebaseConfig as firebase };
