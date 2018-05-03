import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDwOMzMnBAjBxU7n0stGZBdxDkaCLDWkyU",
    authDomain: "livechat-92dfb.firebaseapp.com",
    databaseURL: "https://livechat-92dfb.firebaseio.com",
    projectId: "livechat-92dfb",
    storageBucket: "",
    messagingSenderId: "734976206708"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true});
  
export default firebaseApp.firestore()