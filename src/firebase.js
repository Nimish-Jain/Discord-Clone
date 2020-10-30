import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXawvjYadEUWf0f7csS36k8ZmrbQomE-Y",
  authDomain: "discord-clone-9b8fd.firebaseapp.com",
  databaseURL: "https://discord-clone-9b8fd.firebaseio.com",
  projectId: "discord-clone-9b8fd",
  storageBucket: "discord-clone-9b8fd.appspot.com",
  messagingSenderId: "1050088643104",
  appId: "1:1050088643104:web:9cb422e058d37fe183fa45",
  measurementId: "G-6LS85H5JXC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
