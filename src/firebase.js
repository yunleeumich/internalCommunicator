import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyU6efKtv0A1FKRznR4FHh4UrFBld14wk",
  authDomain: "slack-clone-yun.firebaseapp.com",
  projectId: "slack-clone-yun",
  storageBucket: "slack-clone-yun.appspot.com",
  messagingSenderId: "191781434569",
  appId: "1:191781434569:web:4c6866c56d412778cac918"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
