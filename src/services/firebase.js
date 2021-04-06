import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7gcee018m48vPDIP3mZrres3ZXJeDxUM",
    authDomain: "chat-app-21443.firebaseapp.com",
    databaseURL: "https://chat-app-21443-default-rtdb.firebaseio.com/"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();