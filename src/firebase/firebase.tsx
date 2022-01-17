import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/analytics'
const firebaseConfig = {
	apiKey: 'AIzaSyCNSUgGQuEoI5Pq46U7l-wIzYzcix5B8L0',
	authDomain: 'chat-discord-40843.firebaseapp.com',
	projectId: 'chat-discord-40843',
	storageBucket: 'chat-discord-40843.appspot.com',
	messagingSenderId: '674854155663',
	appId: '1:674854155663:web:3e83cda3d13a5b82e847fa',
	measurementId: 'G-CJRT6F9MSR',
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db }
export const GoogleAuthProvider = firebase.auth.GoogleAuthProvider
export default firebase
