import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
require('firebase/firestore');

const config = {
    apiKey: "AIzaSyAWuW3f6wlmWWQKgaKo0bel8F3UYTkMxcQ",
    authDomain: "aresproject-c9fb4.firebaseapp.com",
    databaseURL: "https://aresproject-c9fb4.firebaseio.com",
    projectId: "aresproject-c9fb4",
    storageBucket: "",
    messagingSenderId: "556290486483"
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
