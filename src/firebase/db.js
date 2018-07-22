import { db } from './firebase';

// User API

export const doCreateUser = (uid, firstName, lastName, email) =>
  db.ref(`users/${uid}`).set({
    uid,
    firstName,
    lastName,
    email,
  });

export const doSetAdditionalInfo = (uid, country='', state='', city='') =>
  db.ref(`users/${uid}`).set({
    country,
    state,
    city,
  });

export const doSetNewCoin = (collect, doc, name, start, end, ticker, description) =>{
  db.collection(collec).doc(doc).set({
    name: name,
    start: start,
    end: end,
    ticker: ticker,
    description: description
  });
  /*
price number
start and end is timestamp
name string
ticker string
description string
  */

}
export const onceGetUsers = () =>
  db.ref(`users`).once(`value`);

export const onceGetUser = (uid) => {
  return (db.ref(`users`).child(`uid`));
}
