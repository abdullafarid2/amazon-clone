import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQ5hg1Jeo-WuDsTrTseZUqkKROSq92m0c",
  authDomain: "clone-b53ed.firebaseapp.com",
  projectId: "clone-b53ed",
  storageBucket: "clone-b53ed.appspot.com",
  messagingSenderId: "241984360596",
  appId: "1:241984360596:web:e585ba17290ad2dcf86481",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
