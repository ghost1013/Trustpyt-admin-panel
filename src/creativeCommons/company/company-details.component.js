import { Chip } from "@mui/material"
import { useEffect, useState } from "react"
import { db } from "../../utility/config/firebase.config"

export const CompanyDetails = ({cId, mode}) => {

    const [category, setCategory] = useState({name: '', category_id: '', sub_category_id: '', logo: '', website: '', id: ''})
    
    useEffect(() => {
      db.collection('companies').doc(cId).onSnapshot(snap => {
        const data = snap.data()
        setCategory(data)
      })
    }, [cId])
  
    if(mode === 'name'){
      return (
     <>
       <span>{category?.name}</span>
     </>
   )
   }
  
    if(mode === 'verify'){
      return (
        <>
         
          <Chip label={ category?.verified ? 'VERIFIED COMPANY' : 'NOT VERIFIED'} style={{backgroundColor:category.verified? '#e1f0ee' : 'red',border:'none',borderRadius:'4px',padding:'0px',fontSize:'12px',fontWeight:'bold',color:'#065e3f'}} variant="outlined" />
        </>
      )
    }
  
  
   
  }