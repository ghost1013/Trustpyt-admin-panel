import { Divider } from '@mui/material'
import React from 'react'
import Header from '../../../creativeCommons/header/header.component'
import AddCategoryForm from '../components/add-category.component'
import CategoryTable from '../components/category-table.component'

const CategoryScreen = () => {

  return (
    <>
        <Header title="Categories" route="/add-categories" buttonTitle="Add Categories" />
        <Divider/>
        <br/>
        <AddCategoryForm/>
        <CategoryTable/>
    </>
  )
}

export default CategoryScreen