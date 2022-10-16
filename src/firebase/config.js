import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzYViNlOe2i_74n---4Y8qblvPvbMPLAA",
  authDomain: "default-firebase-deb2a.firebaseapp.com",
  projectId: "default-firebase-deb2a",
  storageBucket: "default-firebase-deb2a.appspot.com",
  messagingSenderId: "727039559087",
  appId: "1:727039559087:web:622bc3917a6539f9b8db5a"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp };