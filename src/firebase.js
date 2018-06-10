import firebase from '../node_modules/firebase'

var config = {
    apiKey: "AIzaSyCUV--2UewwG2LuiCTZAHWbeNqOpdlRLWs",
    authDomain: "hybridapp-9d7a8.firebaseapp.com",
    databaseURL: "https://hybridapp-9d7a8.firebaseio.com",
    projectId: "hybridapp-9d7a8",
    storageBucket: "hybridapp-9d7a8.appspot.com",
    messagingSenderId: "243993828446"
};
firebase.initializeApp(config);

export default firebase
export const db = firebase.database()
export const auth = firebase.auth()