import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../utility/config/firebase.config';
import { firebaseLooper } from '../../utility/tools/looper.tool';

export const SubCategoriesContext = createContext();


const SubCategoriesContextprovider = ({children}) => {
    const [subCategories, setSubCategories] = useState([])

    useEffect(() => {
        db.collection('sub-categories').onSnapshot(snap => {
            const data = firebaseLooper(snap)
            setSubCategories(data)
        })
    }, [])

    const onAddition = (data) => {
        if(data.name.trim().length === 0 || data.category_id.trim().length === 0){
            return alert('Incorrect format of data passed')
        }
        db.collection('sub-categories').add(data).then(() => {
            console.log("data added")
        })
    }

    const onUpdate = (data) => {
        if(data.name.trim().length === 0 || data.category_id.trim().length === 0){
            return alert('Incorrect format of data passed')
        }
        db.collection('sub-categories').doc(data.id).update(data).then(() => {
            console.log("updated categories")
        })
    }

    const onDelete = (data) => {
        db.collection('sub-categories').doc(data.id).delete().then(() => {
            console.log("deleted categories")
        })
    }


  return (
    <SubCategoriesContext.Provider value={{subCategories,onAddition, onUpdate, onDelete}}>
            {children}
    </SubCategoriesContext.Provider>
  )
}

export default SubCategoriesContextprovider