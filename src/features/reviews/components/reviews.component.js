import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TableCell, TableRow } from '@mui/material';

import React, { useContext } from 'react'
import { CompanyDetails } from '../../../creativeCommons/company/company-details.component';
import { UserById } from '../../../creativeCommons/user/user-name.component';
import { ReviewsContext } from '../../../services/reviews/reviews.context';

const ReviewsComponent = ({row}) => {
    const {onDelete} = useContext(ReviewsContext)

  return (
    <TableRow key={row.id}>
              <TableCell component="th" scope="row">
              {row.review} 
              </TableCell>
              <TableCell  align="right">
               <b><CompanyDetails  cId={row.company_id} mode="name"/> <br/> <CompanyDetails  cId={row.company_id} mode="verify"/></b> 
              </TableCell>
              <TableCell  align="right">
                {row.review_title}
              </TableCell>
              <TableCell  align="right">
              <UserById email={row.user_email} /> <br/> <span style={{color: 'gray', fontSize: '10px'}}>{row.user_email}</span>
              </TableCell>
              <TableCell  align="right">
                <IconButton onClick={(e) => onDelete(row)}>
                    <DeleteIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
  )
}

export default ReviewsComponent