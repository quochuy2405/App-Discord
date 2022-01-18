import firebase, { db } from './firebase'

export const addDocument = (collection: string, data: object) => {
	db.collection(collection).add({
		...data,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	})
}
