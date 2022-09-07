import React, {createContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../../utility/config/firebase.config'

export const AuthContext = createContext()

export const AuthenticationContextProvider = ({children}) => {


    const [userDetails, setUserDetails] = useState({name: '',  authKey: '', email: '',  userId: '', avatar: ''}) 
    const authenticatedUser = localStorage.getItem('@authuser')
    const  navigate = useHistory()

    useEffect(() => {
       if(authenticatedUser.length){ db.collection('db-admins').doc(authenticatedUser).onSnapshot(snap => {
            const data = snap.data()
            setUserDetails(data)
        })}
    }, [authenticatedUser])

    const loginToDashboard = (user) => {
        db.collection('db-admins').doc(userDetails.userId).onSnapshot(snap => {
            const data  = snap.data();
            if(data.authKey === userDetails.authKey) {
                localStorage.setItem('@authuser', userDetails.userId)
                navigate.push('/')
            }
        })
    }

  return (
    <AuthContext.Provider value={{userDetails, loginToDashboard}}>
        {children}
    </AuthContext.Provider>
  )
}

