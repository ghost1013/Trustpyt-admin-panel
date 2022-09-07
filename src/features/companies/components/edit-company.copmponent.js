import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../../../services/categories/categories.context'
import { CompaniesContext } from '../../../services/companies/companies.context'
import { SubCategoriesContext } from '../../../services/sub-categories/sub-categories.context'
import { useStorage } from '../../../utility/tools/storage-util.tool'

const EditCompanyForm = ({onClose, updateFormDetails, row}) => {

    const [company, setCompany] = useState({...row})
    const {subCategories} = useContext(SubCategoriesContext)
    const {categories} = useContext(CategoriesContext)
    const {onAddition} = useContext(CompaniesContext)
    const [file, setFile] = useState(null)

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        setFile(file)
    }   

    const {progress, url} = useStorage(file);


  return (
    <> 
    <Box sx={{display: 'flex',justifyContent: 'space-between', px: 4, pb:2}}>
    <Box sx={{width: '40%'}}>
    <InputLabel>Company Name</InputLabel>
        <TextField 
        onChange={(e) => setCompany({...company, name: e.target.value})}
        value={company?.name}
         fullWidth
         variant="outlined"
         placeholder="eg: ICICI Bank Pvt Ltd"/>
    </Box>
    <Box sx={{width: '40%'}}>
    <InputLabel>Logo</InputLabel>
        <TextField  variant="outlined" onChange={handleLogoChange} fullWidth type="file"/>
        <h4>{progress}%</h4>
        <img src={company?.logo} alt="Wait for preview" width="200px" />
    </Box>
   </Box>
   <Box sx={{display: 'flex',justifyContent: 'space-between', px: 4, pb:2}}>
   <Box sx={{width: '40%'}}>
    <InputLabel>Category </InputLabel>
        <FormControl fullWidth variant="outlined">
            <Select
                onChange={(e) => setCompany({...company, category_id: e.target.value})}
                value={company?.category_id}
                fullWidth
                variant="outlined"
               placeholder='Select Category'
            >
               {categories?.map((data) => (
                <MenuItem key={data.id} value={data.id} >{data.name}</MenuItem>
               ))}
            </Select>
        </FormControl>
    </Box>
    <Box sx={{width: '40%'}}>
    <InputLabel>Sub Category </InputLabel>
        <FormControl fullWidth variant="outlined">
            <Select
            onChange={(e) => setCompany({...company, sub_category_id: e.target.value})}
            value={company?.sub_category_id}
                fullWidth
                variant="outlined"
               placeholder='Select Category'
            >
                {
                    subCategories.filter((data) => {
                        if(company?.category_id === data.category_id) {
                            return data
                        }
                    }).map((data) => (
                        <MenuItem value={data.id}>{data.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    </Box>
   </Box>
   <Box sx={{display: 'flex',justifyContent: 'space-between', px: 4, pb:2}}>
   <Box sx={{width: '40%'}}>
    <InputLabel>Verified </InputLabel>
        <FormControl fullWidth variant="outlined">
            <Select
            onChange={(e) => setCompany({...company, verified: e.target.value})}
            value={company?.verified}
                fullWidth
                variant="outlined"
               placeholder='Select Category'
            >
              
                <MenuItem  value={true} >Company is Verified</MenuItem>
                <MenuItem  value={false} >Company is NOT Verified</MenuItem>
            </Select>
        </FormControl>
    </Box>
    <Box sx={{width: '40%'}}>
    <InputLabel>Company Website</InputLabel>
    <TextField 
    onChange={(e) => setCompany({...company, website: e.target.value})}
    value={company?.website}
         fullWidth
         variant="outlined"
         placeholder="eg: https://icicibank.com"/>
    </Box>
   </Box>
   <Box sx={{display: 'flex', justifyContent: 'flex-end', px: 4, pb: 3}}>
   <Button 
        onClick={() => onClose()}
        sx={{textTransform: 'none', backgroundColor: 'red', mr: 2}} variant="contained">
           Cancel
         </Button>
        <Button 
        onClick={() =>{
             updateFormDetails({data: company, logo: url ? url : row?.logo})
            onClose();
            }}
        sx={{textTransform: 'none', backgroundColor: '#607EAA'}} variant="contained">
            Update Company
         </Button>
    </Box>
    </>
  
  )
}

export default EditCompanyForm 