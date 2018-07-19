import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
require('firebase/firestore');

// const admin = require('firebase-admin');
// const functions = require('firebase-functions');

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var fs = admin.firestore();

const config = {
  apiKey: "AIzaSyDnoLsLqejG5dMXO24lZSTqhxTgEFD18Sk",
  authDomain: "ares-project-orchardblockchain.firebaseapp.com",
  databaseURL: "https://ares-project-orchardblockchain.firebaseio.com",
  projectId: "ares-project-orchardblockchain",
  storageBucket: "",
  messagingSenderId: "660326526839"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// admin.initializeApp(functions.config().firebase);

const auth = firebase.auth();
const db = firebase.database();
const fs = firebase.firestore();

<<<<<<< HEAD
export { auth, db, fs }
=======
export { auth, db, fs };
>>>>>>> upgraded-branch
