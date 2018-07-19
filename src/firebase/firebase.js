import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/database/firestore';

const admin = require('firebase-admin');
const functions = require('firebase-functions');

// Personal Account
// // Initialize firebase
// const config = {
//     apiKey: "AIzaSyDosKgFpKWfmDMVhO3cQLFcrSq7EZmfQ3g",
//     authDomain: "orchardblock-ares-project.firebaseapp.com",
//     databaseURL: "https://orchardblock-ares-project.firebaseio.com",
//     projectId: "orchardblock-ares-project",
//     storageBucket: "orchardblock-ares-project.appspot.com",
//     messagingSenderId: "414528145445"
//   };

// Work Account
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

admin.initializeApp(functions.config().firebase);

const auth = firebase.auth();
const db = firebase.database();
const fs = admin.firestore();

export { auth, db, fs };
