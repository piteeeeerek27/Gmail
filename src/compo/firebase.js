import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCqeSQkJxpyGdH9VaQy7DBM7luvmihaKgA',
	authDomain: 'clone-c42fb.firebaseapp.com',
	projectId: 'clone-c42fb',
	storageBucket: 'clone-c42fb.appspot.com',
	messagingSenderId: '894035032405',
	appId: '1:894035032405:web:9657a8ef4018dc9da117dc',
	measurementId: 'G-D97XPN0KYD',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
