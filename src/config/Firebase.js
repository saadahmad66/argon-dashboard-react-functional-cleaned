// Import the functions you need from the SDKs you need

import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCpLQuScbJIglVevNuLBOrpydrYvagRas4',
	authDomain: 'argon-auth.firebaseapp.com',
	projectId: 'argon-auth',
	storageBucket: 'argon-auth.appspot.com',
	messagingSenderId: '236580890835',
	appId: '1:236580890835:web:90142b80e7594290fc8c26',
	measurementId: 'G-KC6H5G1MCQ',
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
