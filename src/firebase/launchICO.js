import { db, fs } from './firebase';

// export const getData = () =>
// console.log("Getting the following data: " + fs.collection('ico-list').doc('FnudT8n6NKmSNN7RLaQk').get());

export const getData = () =>
console.log("Getting the following data: " + fs.collection('ico-list').doc('FnudT8n6NKmSNN7RLaQk').get().data);
