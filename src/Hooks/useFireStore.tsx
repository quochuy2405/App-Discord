import React, { useEffect, useState } from 'react'
import firebase, { db } from '../firebase/firebase'
interface condition {
	fieldName: string
	operator: any
	value: any
}
function useFireStore(collection: string, condition: condition) {
	const [document, setDocument] = useState([{}])
	useEffect(() => {
		let collectionRef = db.collection(collection).orderBy('createdAt')
		if (condition) {
			if (!condition.value || !condition.value.length) {
				return
			}
			collectionRef = collectionRef.where(condition.fieldName, condition.operator, condition.value)
		}
		const unsubcribe = collectionRef.onSnapshot((snapshot) => {
			const document = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}))
			if (document) setDocument(document)
		})

		return unsubcribe
	}, [collection, condition])
	return document
}

export default useFireStore
