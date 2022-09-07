import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../../../services/categories/categories.context'
import { SubCategoriesContext } from '../../../services/sub-categories/sub-categories.context'

const AddCategoryForm = () => {

    const {categories} = useContext(CategoriesContext)
    const {onAddition} = useContext(SubCategoriesContext)

    const [subCategory, setSubCategory ] = useState({name: '', category_id: ''})

  return (
    <> 
    <Box sx={{display: 'flex',justifyContent: 'space-between', px: 4, pb:2}}>
    <Box sx={{width: '40%'}}>
    <InputLabel>Sub Category Name</InputLabel>
        <TextField 
        onChange={(e) => setSubCategory({...subCategory, name: e.target.value})}
         fullWidth
         variant="outlined"
         placeholder="Enter a category name"/>
    </Box>
    <Box sx={{width: '40%'}}>
    <InputLabel>Category </InputLabel>
        <FormControl fullWidth variant="outlined">
            
            <Select
             onChange={(e) => setSubCategory({...subCategory, category_id: e.target.value})}
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
    
   </Box>
   <Box sx={{display: 'flex', justifyContent: 'flex-end', px: 4, pb: 3}}>
        <Button
        onClick={() => onAddition(subCategory)}
        sx={{textTransform: 'none', backgroundColor: '#607EAA'}} variant="contained">
            Create Category
         </Button>
    </Box>
    </>
  
  )
}

export default AddCategoryForm