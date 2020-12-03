import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCs3dV-z3AD9c2_QcD_r1L2XN8etpLu4dQ",
    authDomain: "freecharge-challenge.firebaseapp.com",
    databaseURL: "https://freecharge-challenge.firebaseio.com",
    projectId: "freecharge-challenge",
    storageBucket: "freecharge-challenge.appspot.com",
    messagingSenderId: "255004885003",
    appId: "1:255004885003:web:e1264a1584d7a5b9b5c70e",
    measurementId: "G-CVQVZC2616"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db , auth }