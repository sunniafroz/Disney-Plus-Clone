import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWwoPqYF3t5Z5N0ovvF-DIHmiKzuI3RNQ",
  authDomain: "disney-clone-77e25.firebaseapp.com",
  projectId: "disney-clone-77e25",
  storageBucket: "disney-clone-77e25.appspot.com",
  messagingSenderId: "573142435293",
  appId: "1:573142435293:web:7d1008223ee4ee0591a234",
  measurementId: "G-47DQ51HJCZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;