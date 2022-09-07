import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../utility/config/firebase.config';
import { firebaseLooper } from '../../utility/tools/looper.tool';


export const ReviewsContext = createContext();


const ReviewsContextprovider = ({children}) => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        db.collection('reviews').onSnapshot(snap => {
            const data = firebaseLooper(snap)
            setReviews(data)
        })
    }, [])

    const onAddition = (data) => {
        db.collection('reviews').add(data).then(() => {
            console.log("data added")
        })
    }

    const onUpdate = (data) => {
        db.collection('reviews').doc(data.id).update(data).then(() => {
            console.log("updated ")
        })
    }

    const onDelete = (data) => {
        db.collection('reviews').doc(data.id).delete().then(() => {
            console.log("deleted ")
        })
    }


  return (
    <ReviewsContext.Provider value={{reviews,onAddition, onUpdate, onDelete}}>
            {children}
    </ReviewsContext.Provider>
  )
}

export default ReviewsContextprovider