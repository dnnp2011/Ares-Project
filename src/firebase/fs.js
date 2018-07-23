import { fs } from './firebase';


// User API
export const doAddUserData = (data, uid) => {
  fs.collection('users').doc(uid).set(data);
}
