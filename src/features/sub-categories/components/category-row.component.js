import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, TableCell, TableRow, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '../../../utility/config/firebase.config';
import { SubCategoriesContext } from '../../../services/sub-categories/sub-categories.context';
import EditIcon from '@mui/icons-material/Edit';
import { CategoriesContext } from '../../../services/categories/categories.context';

export const CategoryName = ({cId}) => {

  const [category, setCategory] = useState({name: '', icon: ''})


  useEffect(() => {
    db.collection('categories').doc(cId).onSnapshot(snap => {
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

const CategoryRow = ({row}) => {

  const {onUpdate, onDelete} = useContext(SubCategoriesContext)
  const {categories} = useContext(CategoriesContext)
  const [rowDetails, setRowDetails] = useState({...row})
  const [open, setOpen] = useState(false)


  return (
    <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <b>{row.name}</b> 
              </TableCell>
              <TableCell align="right"><CategoryName cId={row.category_id} /></TableCell>
              <TableCell align="right">
                    <IconButton onClick={() => setOpen(true)} color="success">
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={() => onDelete(row)}>
                        <DeleteIcon/>
                    </IconButton>
              </TableCell>



              {/* Edit Sub Category details */}
              <Dialog onClose={() => setOpen(false)} fullWidth open={open}>
              <DialogTitle>
                Edit Sub Category details
              </DialogTitle>
              <DialogContent>
              <InputLabel>Sub Category </InputLabel>
              <TextField variant="outlined" fullWidth value={rowDetails.name} onChange={(e) => setRowDetails({...rowDetails, name: e.target.value})}/>
              <Box sx={{mt: 2}}>
    <InputLabel>Category </InputLabel>
        <FormControl fullWidth variant="outlined">
            
            <Select
             onChange={(e) => setRowDetails({...rowDetails, category_id: e.target.value})}
             defaultValue={rowDetails?.category_id}
                fullWidth
                variant="outlined"
               placeholder='Select Category'
            >
               {
                categories.map((data) => (
                    <MenuItem value={data.id} key={data.id} >{data.name}</MenuItem>
                ))
               }
            </Select>
        </FormControl>
    </Box>
              </DialogContent>
               <DialogActions>
               <Button onClick={() => setOpen(false)} sx={{color: 'red'}}>
                Cancel
              </Button>
              <Button onClick={() =>{ 
                onUpdate(rowDetails)
                setOpen(false)
                }} sx={{color: 'blue'}}>
                Update
              </Button>
            </DialogActions>
            </Dialog>
    </TableRow>
  )
}

export default CategoryRow