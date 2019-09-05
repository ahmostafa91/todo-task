import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb5mQriSgnQDljj329gi3VpPIWQT7dXhQ",
  authDomain: "my-todo-ab9ea.firebaseapp.com",
  databaseURL: "https://my-todo-ab9ea.firebaseio.com",
  projectId: "my-todo-ab9ea",
  storageBucket: "my-todo-ab9ea.appspot.com",
  messagingSenderId: "556509524662",
  appId: "1:556509524662:web:871d776eac744371"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
