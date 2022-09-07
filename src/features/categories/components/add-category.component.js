import { Box, Button, InputLabel,  TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../../../services/categories/categories.context'

const AddCategoryForm = () => {

    const {onAddition} = useContext(CategoriesContext)
    const [category, setCategory] = useState({name: '', icon: ''})

  return (
    <> 
    <Box sx={{display: 'flex',justifyContent: 'space-between', px: 4, pb:2}}>
    <Box sx={{width: '40%'}}>
    <InputLabel>Category Name</InputLabel>
        <TextField 
        onChange={(e) => setCategory({...category, name: e.target.value})}
         fullWidth
         variant="outlined"
         placeholder="Enter a category name"/>
    </Box>
    <Box sx={{width: '40%'}}>
    <InputLabel>Category Icon</InputLabel>
        <TextField 
         onChange={(e) => setCategory({...category, icon: ""})}
         fullWidth
         variant="outlined"
         type="file"/>
      
    </Box>
    
   </Box>
   <Box sx={{display: 'flex', justifyContent: 'flex-end', px: 4, pb: 3}}>
        <Button onClick={() => onAddition(category)} sx={{textTransform: 'none', backgroundColor: '#607EAA'}} variant="contained">
            Create Category
         </Button>
    </Box>
    </>
  
  )
}

export default AddCategoryForm