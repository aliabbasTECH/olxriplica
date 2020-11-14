import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAI7WWJtGPNrOrvFuBDiwnLXh9QPCD0AsQ",
    authDomain: "olxrip-e8422.firebaseapp.com",
    databaseURL: "https://olxrip-e8422.firebaseio.com",
    projectId: "olxrip-e8422",
    storageBucket: "olxrip-e8422.appspot.com",
    messagingSenderId: "16603293285",
    appId: "1:16603293285:web:8233a23b47176d4f95488c",
    measurementId: "G-QW5F7BG3QC"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;

