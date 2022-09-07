import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CategoryRow from './category-row.component';
import { SubCategoriesContext } from '../../../services/sub-categories/sub-categories.context';


export default function CategoryTable() {

  const {subCategories} = React.useContext(SubCategoriesContext)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#42855B'}}>
          <TableRow >
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Sub Category Name</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}} align="right">Category</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}} align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subCategories.map((row) => (
                <CategoryRow row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}