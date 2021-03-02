import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUEEYuBtwZ2aAC5nkFbHQaKwHDVaUWiic",
  authDomain: "blaazit.firebaseapp.com",
  projectId: "blaazit",
  storageBucket: "blaazit.appspot.com",
  messagingSenderId: "938999757799",
  appId: "1:938999757799:web:453d0bdb1710d6a6665b42",
  measurementId: "G-MXE2HTW7BX"
});
const db = firebaseApp.firestore()

export default db;
