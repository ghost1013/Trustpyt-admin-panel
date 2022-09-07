import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../utility/config/firebase.config';
import { firebaseLooper } from '../../utility/tools/looper.tool';

export const CompaniesContext = createContext();


const CompaniesContextprovider = ({children}) => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        db.collection('companies').onSnapshot(snap => {
            const data = firebaseLooper(snap)
            setCompanies(data)
        })
    }, [])

    const onAddition = ({data, logo}) => {
        if(data.name.trim().length === 0 || data.category_id.trim().length === 0 || data.sub_category_id.trim().length === 0 || data.website.trim().length === 0 || data.verified === null){
            return alert('Incorrect format of data passed')
        }
        db.collection('companies').add({...data, logo}).then(() => {
            console.log("data added")
        })
    }

    const onUpdate = ({data, logo}) => {
        if(data.name.trim().length === 0 || data.category_id.trim().length === 0 || data.sub_category_id.trim().length === 0 || data.website.trim().length === 0 || data.verified === null){
            return alert('Incorrect format of data passed')
        }
        db.collection('companies').doc(data.id).update({...data, logo}).then(() => {
            console.log("updated ")
        })
    }

    const onDelete = (data) => {
        db.collection('companies').doc(data.id).delete().then(() => {
            console.log("deleted ")
        })
    }


  return (
    <CompaniesContext.Provider value={{companies,onAddition, onUpdate, onDelete}}>
            {children}
    </CompaniesContext.Provider>
  )
}

export default CompaniesContextprovider