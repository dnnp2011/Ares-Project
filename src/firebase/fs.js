import { fs } from './firebase';

// User API
<<<<<<< HEAD
export const doSetFirestoreData = (data) => {
  return fs.collection('icos').doc('litecoin').set(data);
}
=======
export const doSetData = (data) =>
  fs.collection('icos').doc('litecoin').set(data);
>>>>>>> upgraded-branch
