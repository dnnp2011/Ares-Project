import { fs } from './firebase';

// User API
export const doSetFirestoreData = (data) => {
  return fs.collection('icos').doc('litecoin').set(data);
}
