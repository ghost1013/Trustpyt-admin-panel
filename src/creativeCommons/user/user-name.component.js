import { useEffect, useState } from "react"
import { db } from "../../utility/config/firebase.config"
import { firebaseLooper } from "../../utility/tools/looper.tool"

export const UserById = ({email}) => {
    const [user, setUser] = useState(null)
  
    useEffect(() => {
      db.collection('users')
      .where('email', '==', email)
      .onSnapshot(snap => {
        const data = firebaseLooper(snap)
        setUser(data[0])
      })
    }, [email])
  
    return(
      <>
        {user?.name}
      </>
    )
  
  
  }
  