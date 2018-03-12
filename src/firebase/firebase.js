import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC3rhh2ARTELTW_H0vgyuAc0dmJI0V2sQ0",
    authDomain: "testauth-dccdd.firebaseapp.com",
    databaseURL: "https://testauth-dccdd.firebaseio.com",
    projectId: "testauth-dccdd",
    storageBucket: "testauth-dccdd.appspot.com",
    messagingSenderId: "426360728922"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth
}