import { fs } from './firebase';

// User API
export const doSetData = (data) =>
  fs.collection('icos').doc('litecoin').set(data);

  export const doSetNewCoin = (data, en) =>{
    fs.collection('icos').doc(data.name).set({data});
  }

  export const doGetCoin = (name) =>{
    var cityRef = db.collection('icos').doc(name);
  var getDoc = cityRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });

  }
