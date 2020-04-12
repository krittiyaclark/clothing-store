import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAxgwx4K1a0PihFumbx166Pm8UdxnmPVPg',
	authDomain: 'clothing-store-cae7f.firebaseapp.com',
	databaseURL: 'https://clothing-store-cae7f.firebaseio.com',
	projectId: 'clothing-store-cae7f',
	storageBucket: 'clothing-store-cae7f.appspot.com',
	messagingSenderId: '906669931017',
	appId: '1:906669931017:web:db6f5fc278cc90673056d8',
	measurementId: 'G-XT8DJ6G7DL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
