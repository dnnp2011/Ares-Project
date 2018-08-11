import { db, fs } from './firebase';
import { Type } from './fs';

// User API
/**

**/
export const doCreateUser = (uid, firstName, lastName, email) =>
  db.ref(`users/${uid}`).set({
    uid,
    firstName,
    lastName,
    email,
  });

export const doSetAdditionalInfo = (uid, country = '', state = '', city = '') =>
  db.ref(`users/${uid}`).set({
    country,
    state,
    city,
  });


export const onceGetUsers = () =>
  db.ref(`users`).once(`value`);

export const onceGetUser = uid =>
  db.ref(`users`).child(uid);

