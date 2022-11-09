import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCNkPtLvtZoLSGeOIr7g9qA-1-of9y3XhA",
    authDomain: "linkedin-clone-9c18c.firebaseapp.com",
    projectId: "linkedin-clone-9c18c",
    storageBucket: "linkedin-clone-9c18c.appspot.com",
    messagingSenderId: "433598441071",
    appId: "1:433598441071:web:e7a6e88c4839191e96cf9a"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {db, auth};