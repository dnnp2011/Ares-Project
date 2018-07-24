import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
require('firebase/firestore');

// const config = {
//   apiKey: "AIzaSyDnoLsLqejG5dMXO24lZSTqhxTgEFD18Sk",
//   authDomain: "ares-project-orchardblockchain.firebaseapp.com",
//   databaseURL: "https://ares-project-orchardblockchain.firebaseio.com",
//   projectId: "ares-project-orchardblockchain",
//   storageBucket: "",
//   messagingSenderId: "660326526839"
// };

// Practice DB config
var config = {
  apiKey: "AIzaSyCusbnlqqtfHIybSzDziR1HbKlUCppT6D8",
  authDomain: "ares-practice-database.firebaseapp.com",
  databaseURL: "https://ares-practice-database.firebaseio.com",
  projectId: "ares-practice-database",
  storageBucket: "",
  messagingSenderId: "570364030397"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// admin.initializeApp(functions.config().firebase);

const auth = firebase.auth();
const db = firebase.database();
const fs = firebase.firestore();

const settings = {timestampsInSnapshots: true};
fs.settings(settings);

export { auth, db, fs };
