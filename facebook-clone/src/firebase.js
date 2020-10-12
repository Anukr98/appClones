import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFHyROdF5KZxRibYABSmOrTDcnx2VDQUI",
    authDomain: "fb-clone-47a5b.firebaseapp.com",
    databaseURL: "https://fb-clone-47a5b.firebaseio.com",
    projectId: "fb-clone-47a5b",
    storageBucket: "fb-clone-47a5b.appspot.com",
    messagingSenderId: "148251027468",
    appId: "1:148251027468:web:e635cea4d8ee1b72386629",
    measurementId: "G-NC1WHM2QEQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth , provider }
export default db