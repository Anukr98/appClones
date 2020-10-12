import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhaQ4m1_f_b-BFz2gSU_OwbHytPO-u1JE",
  authDomain: "whatsapp-clone-788d2.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-788d2.firebaseio.com",
  projectId: "whatsapp-clone-788d2",
  storageBucket: "whatsapp-clone-788d2.appspot.com",
  messagingSenderId: "936047143665",
  appId: "1:936047143665:web:db4762250f27bbf7765750",
  measurementId: "G-MYJ87S41H5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export default db
export { auth , provider }