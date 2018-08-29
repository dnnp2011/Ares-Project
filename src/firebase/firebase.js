import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
require('firebase/firestore');

// var config = {
//    apiKey: "AIzaSyDakYR2lPtsuXPCV7aZpGNXWGU24B7F5Uk",
//    authDomain: "fir-787d5.firebaseapp.com",
//    databaseURL: "https://fir-787d5.firebaseio.com",
//    projectId: "fir-787d5",
//    storageBucket: "fir-787d5.appspot.com",
//    messagingSenderId: "375136330761"
//  };

//config for practice database
var config = {
  apiKey: "AIzaSyCusbnlqqtfHIybSzDziR1HbKlUCppT6D8",
  authDomain: "ares-practice-database.firebaseapp.com",
  databaseURL: "https://ares-practice-database.firebaseio.com",
  projectId: "ares-practice-database",
  storageBucket: "ares-practice-database.appspot.com",
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
