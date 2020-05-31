import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXMJcyNVnTgvj0OUSGh4P1BUsvF8nPvfs",
    authDomain: "crwn-db-809e3.firebaseapp.com",
    databaseURL: "https://crwn-db-809e3.firebaseio.com",
    projectId: "crwn-db-809e3",
    storageBucket: "crwn-db-809e3.appspot.com",
    messagingSenderId: "1027023266059",
    appId: "1:1027023266059:web:9d0367f5b06924ab88c20e",
    measurementId: "G-DES8THF2B5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;