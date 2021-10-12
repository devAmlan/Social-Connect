import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBiDUfjO9Mvr-loNpQBGJMXOryT5s2DviQ",
    authDomain: "socialmedia-app-8d050.firebaseapp.com",
    projectId: "socialmedia-app-8d050",
    storageBucket: "socialmedia-app-8d050.appspot.com",
    messagingSenderId: "143122934817",
    appId: "1:143122934817:web:53ef5e9c60e2ef42a90760"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export {db,storage,auth,provider};
