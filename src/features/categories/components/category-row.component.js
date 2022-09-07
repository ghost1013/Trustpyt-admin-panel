import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TableCell, TableRow, TextField } from '@mui/material'
import React, { useContext } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CategoriesContext } from '../../../services/categories/categories.context';
import { useState } from 'react';

const CategoryRow = ({row}) => {

  const {onUpdate, onDelete} = useContext(CategoriesContext)
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
              <TableCell align="right">{row.icon}</TableCell>
              <TableCell align="right">
                    <IconButton onClick={() => setOpen(true)} color="success">
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={() => onDelete(row)}>
                        <DeleteIcon/>
                    </IconButton>
              </TableCell>
            <Dialog onClose={() => setOpen(false)} fullWidth open={open}>
              <DialogTitle>
                Edit Category
              </DialogTitle>
              <DialogContent>
              <TextField variant="outlined" fullWidth value={rowDetails.name} onChange={(e) => setRowDetails({...rowDetails, name: e.target.value})}/>
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