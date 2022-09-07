import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CategoryRow from './category-row.component';
import { CategoriesContext } from '../../../services/categories/categories.context';

export default function CategoryTable() {

  const {categories} = React.useContext(CategoriesContext)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#42855B'}}>
          <TableRow >
            
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Category Name</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}} align="right">Icon</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}} align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row) => (
                <CategoryRow row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}