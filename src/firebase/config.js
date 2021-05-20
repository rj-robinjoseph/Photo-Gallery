import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgQ1fBVI_Z98ZIyGgoNGW2kdtOEeIUQPM",
    authDomain: "photo-gallery-93c0e.firebaseapp.com",
    projectId: "photo-gallery-93c0e",
    storageBucket: "photo-gallery-93c0e.appspot.com",
    messagingSenderId: "83734708159",
    appId: "1:83734708159:web:67a1565bd5546a2bc1ab0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };