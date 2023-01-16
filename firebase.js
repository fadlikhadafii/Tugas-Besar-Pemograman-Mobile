// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtTo6z5_hzCabJlCFZAJEVABJZW69uoDk",
  authDomain: "pet-doc-409ae.firebaseapp.com",
  projectId: "pet-doc-409ae",
  storageBucket: "pet-doc-409ae.appspot.com",
  messagingSenderId: "32704803343",
  appId: "1:32704803343:web:b198fad26acc3c55dae97a",
  measurementId: "G-Z7LBXQ7D7G"
};

// Initialize Firebase
app = firebase.initializeApp(firebaseConfig)
export default firebase;