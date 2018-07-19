import { fs } from './firebase';

// User API
export const doSetData = (data) =>
  fs.collection('icos').doc('litecoin').set(data);
