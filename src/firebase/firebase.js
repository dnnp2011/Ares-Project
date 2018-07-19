import firebase from 'firebase/app';
import 'firebase/auth';
require('firebase/firestore');

const admin = require('firebase-admin');
const functions = require('firebase-functions');

// Initialize firebase
// const config = {
//     apiKey: "AIzaSyDosKgFpKWfmDMVhO3cQLFcrSq7EZmfQ3g",
//     authDomain: "orchardblock-ares-project.firebaseapp.com",
//     databaseURL: "https://orchardblock-ares-project.firebaseio.com",
//     projectId: "orchardblock-ares-project",
//     storageBucket: "orchardblock-ares-project.appspot.com",
//     messagingSenderId: "414528145445"
//   };

// Practice DB config
var config = {
  apiKey: "AIzaSyCusbnlqqtfHIybSzDziR1HbKlUCppT6D8",
  authDomain: "ares-practice-database.firebaseapp.com",
  databaseURL: "https://ares-practice-database.firebaseio.com",
  projectId: "ares-practice-database",
  storageBucket: "",
  messagingSenderId: "570364030397"
};

// if (!firebase.apps.length)
//   firebase.initializeApp(config);

  admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });

const auth = firebase.auth();
var db = admin.firestore();

export { auth, db, };
