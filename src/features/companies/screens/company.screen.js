import { Divider } from '@mui/material'
import React, { useContext } from 'react'
import Header from '../../../creativeCommons/header/header.component'
import { CategoriesContext } from '../../../services/categories/categories.context'
import AddCompanyForm from '../components/add-company.component'
import CompanyTable from '../components/company-table.component'


const CompaniesScreen = () => {
  const {categories} = useContext(CategoriesContext)
  console.log(categories)
  return (
    <>
        <Header title="Companies" route="/add-companies" buttonTitle="Add Companies" />
        <Divider/>
        <br/>
        <AddCompanyForm categories={categories}/>
        <CompanyTable/>
    </>
  )
}

export default CompaniesScreen