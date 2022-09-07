import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CompanyRow from './company-row.component';
import { CompaniesContext } from '../../../services/companies/companies.context';



export default function CompanyTable() {

    const {companies} = React.useContext(CompaniesContext)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#42855B'}}>
          <TableRow >
          <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Logo</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Company</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}} align="right">Category</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}} align="right">Sub Category</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}} align="right">Status</TableCell>
            <TableCell sx={{color: 'white', fontWeight: 'bold', fontSize: 18}} align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((row) => (
                <CompanyRow row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}