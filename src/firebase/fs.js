import { fs } from './firebase';


// User API

/**
* Creates a new user document entry in Firestore/users collection
* param-> uid: The User's unique identifier assigned upon Firebase auth registration. See firebase/auth for more info.
* param-> email: The User's email address entered upon registration.
* param-> firstName: The User's first name entered upon registration. Empty if none given.
* param-> lastName: The User's last name entered upon registration. Empty if none given.
* return-> The user document if found, else the error string
* */
export const doCreateUser = (uid, email, firstName = '', lastName = '') =>
  fs.collection('users').doc(uid).set({
    uid,
    email,
    firstName,
    lastName
  });

  /**
  * Returns a single user document based upon the authuser's UID (User ID)
  * param-> uid: The User's unique identifier assigned upon Firebase auth registration. See firebase/auth for more info.
  * return-> The user document if found, else the error string
  * */
export const doGetUser = uid =>
  fs.doc(`users/${uid}`).get();

//  .then(doc => {
//   if(!doc.exists) {
//     console.log(`Error: document does not exist => fs.doGetUser(${uid})`);
//   } else {
//     return doc;
//   }
// }).catch(error => {
//   // Return error info if caught
//   return error;
// });


export const doGetAllUsers = () => {

};