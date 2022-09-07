import { Chip, Dialog, DialogContent, DialogTitle, IconButton, TableCell, TableRow } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { db } from '../../../utility/config/firebase.config';
import { CategoryName } from '../../sub-categories/components/category-row.component';
import { CompaniesContext } from '../../../services/companies/companies.context';
import EditCompanyForm from './edit-company.copmponent';

export const SubCategoryName = ({cId}) => {

  const [category, setCategory] = useState({name: '', category_id: ''})

  useEffect(() => {
    db.collection('sub-categories').doc(cId).onSnapshot(snap => {
      const data = snap.data()
      setCategory(data)
    })
  }, [cId])

  return (
    <>
      <p>{category?.name}</p>
    </>
  )

}

const CompanyRow= ({row}) => {

  const {onUpdate, onDelete} = useContext(CompaniesContext)
  const [open, setOpen] = useState(false)

  return (
    <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                
                <TableCell align="left">
                <img style={{marginRight: "20px"}} width="140px" alt="logo" src={row.logo}/>
                </TableCell>
              <TableCell  component="th" scope="row">
              
               <b>{row.name}</b> 
              </TableCell>
              <TableCell align="right"> <CategoryName  cId={row.category_id}/>  </TableCell>
              <TableCell align="right">
                <SubCategoryName cId={row.sub_category_id}/>
              </TableCell>
              <TableCell align="right">
               
               {row.verified ? 

                <Chip 
                icon={<CheckIcon/>}
                sx={{backgroundColor: "#76BA99" ,color: "white"}}
                label="Verified" 
                />    
               
               :   <Chip 
                  icon={<DoNotDisturbIcon/>}
                  sx={{backgroundColor: "#FF1E00" ,color: "white"}}
                  label="Not Verified" 
                />}
              </TableCell>
              <TableCell align="right">
                    <IconButton onClick={() => setOpen(true)} color="success">
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={() => onDelete(row)}>
                        <DeleteIcon/>
                    </IconButton>
              </TableCell>




              {/* Edit Company details */}
            <Dialog fullWidth maxWidth="lg" onClose={() => setOpen(false)}open={open}>
              <DialogTitle>Edit Company Details</DialogTitle>
                <DialogContent>
                  <EditCompanyForm onClose={() => setOpen(false)} updateFormDetails={onUpdate} row={row} />
                </DialogContent>
            </Dialog>
    </TableRow>
  )
}

export default CompanyRow