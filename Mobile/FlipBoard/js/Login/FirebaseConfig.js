import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAHJEwI2WTyrz5ujAziNX_9fflBf8vXzbA",
    authDomain: "flipboard-a0b27.firebaseapp.com",
    databaseURL: "https://flipboard-a0b27.firebaseio.com",
    projectId: "flipboard-a0b27",
    storageBucket: "flipboard-a0b27.appspot.com",
    messagingSenderId: "796771795776",
    appId: "1:796771795776:web:f2cba0aae2ec181d1ab0a5",
    measurementId: "G-B6W40PCZ5V"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
