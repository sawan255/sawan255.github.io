import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfNjK_idKX8zAE23khW9Dlb9xFJ3sbVO4",
  authDomain: "kingcobrasure.firebaseapp.com",
  projectId: "kingcobrasure",
  storageBucket: "kingcobrasure.firebasestorage.app",
  messagingSenderId: "975421123123",
  appId: "1:975421123123:web:43d3f65983c914abfe1146",
  measurementId: "G-5P634N59P7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };
