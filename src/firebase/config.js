// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIVByOZJEq6j6Wry_A9OWYvCYNkea_TVg",
  authDomain: "firegram-88e15.firebaseapp.com", 
  projectId: "firegram-88e15",
  storageBucket: "firegram-88e15.appspot.com",
  messagingSenderId: "116591714397",
  appId: "1:116591714397:web:d48f81fb92cc7d29ee2db4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp  = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};