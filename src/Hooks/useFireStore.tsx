import React, { useEffect } from 'react'
import firebase,{ db } from '../firebase/firebase'
interface condition {
	fieldName: string
	operator: firebase.firestore.WhereFilterOp
	value: string
}
function useFireStore(collection: string, condition: condition) {
	useEffect(() => {
		let collectionRef = db.collection(collection).orderBy('createdAt')
		if (condition) {
			collectionRef.where(condition.fieldName, condition.operator, condition.value)
		}
		// db.collection(collection).onSnapshot((snapshot) => {
		// 	const data = snapshot.docs.map((doc) => ({
		// 		...doc.data(),
		// 		id: doc.id,
		// 	}))
		// 	console.log(data)
		// })
	}, [])
	return <div></div>
}

export default useFireStore
