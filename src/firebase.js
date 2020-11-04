import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCb7wYke_rnScq4sAGv617tmhUaDr0nzuc",
	authDomain: "discord-clone-6941d.firebaseapp.com",
	databaseURL: "https://discord-clone-6941d.firebaseio.com",
	projectId: "discord-clone-6941d",
	storageBucket: "discord-clone-6941d.appspot.com",
	messagingSenderId: "963342962152",
	appId: "1:963342962152:web:ce3ae1bf8cc685b0e4285d",
	measurementId: "G-CSCFN7DB0Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
