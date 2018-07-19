import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

const auth = firebase.auth();
const db = firebase.database();

export { auth, db, fs }
