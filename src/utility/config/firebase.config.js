import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth'


const app = firebase.initializeApp({
    apiKey: "AIzaSyB6IBu9zGJ5NQSka-hzwuB_w3QMjlZPSvc",
    authDomain: "db-reviews.firebaseapp.com",
    projectId: "db-reviews",
    storageBucket: "db-reviews.appspot.com",
    messagingSenderId: "890020175978",
    appId: "1:890020175978:web:1a5b46cda68c09abf5ea13"
});

export const db = app.firestore();

// export const database = {
//   folders: db.collection(companies).doc(companyId_constant).collection('folders'),
//   files: db.collection(companies).doc(companyId_constant).collection('files'),
//   getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
//   formatDoc: (doc) => {
//     return {
//       id: doc.id,
//       ...doc.data(),
//     };
//   },
// };

export const storage = app.storage();
export const firestore = app.firestore();
export const auth = app.auth()
export default app;
