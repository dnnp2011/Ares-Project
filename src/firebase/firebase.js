import firebase from 'firebase/app';
import 'firebase/auth';

// // Initialize firebase
// const config = {
//     apiKey: "AIzaSyDosKgFpKWfmDMVhO3cQLFcrSq7EZmfQ3g",
//     authDomain: "orchardblock-ares-project.firebaseapp.com",
//     databaseURL: "https://orchardblock-ares-project.firebaseio.com",
//     projectId: "orchardblock-ares-project",
//     storageBucket: "orchardblock-ares-project.appspot.com",
//     messagingSenderId: "414528145445"
//   };

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDnoLsLqejG5dMXO24lZSTqhxTgEFD18Sk",
  authDomain: "ares-project-orchardblockchain.firebaseapp.com",
  databaseURL: "https://ares-project-orchardblockchain.firebaseio.com",
  projectId: "ares-project-orchardblockchain",
  storageBucket: "",
  messagingSenderId: "660326526839"
};

if (!firebase.apps.length)
  firebase.initializeApp(config);

const auth = firebase.auth();

export { auth, };
