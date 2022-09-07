import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../utility/config/firebase.config';
import { firebaseLooper } from '../../utility/tools/looper.tool';

export const CategoriesContext = createContext();


const CategoriesContextprovider = ({children}) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        db.collection('categories').onSnapshot(snap => {
            const data = firebaseLooper(snap)
            setCategories(data)
        })
    }, [])

    const onAddition = (data) => {
        if(data.name.trim().length === 0){
            return alert('Incorrect format of data passed')
        }
        db.collection('categories').add(data).then(() => {
            console.log("data added")
        })
    }

    const onUpdate = (data) => {
        if(data.name.trim().length === 0){
            return alert('Incorrect format of data passed')
        }
        db.collection('categories').doc(data.id).update(data).then(() => {
            console.log("updated categories")
        })
    }

    const onDelete = (data) => {
        db.collection('categories').doc(data.id).delete().then(() => {
            console.log("deleted categories")
        })
    }


  return (
    <CategoriesContext.Provider value={{categories,onAddition, onUpdate, onDelete}}>
            {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContextprovider