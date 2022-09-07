import { Avatar, Box, Button, Card, CardActions, Typography } from '@mui/material'
import React from 'react'
import BlockIcon from '@mui/icons-material/Block';
import { db } from '../../../utility/config/firebase.config';
import CheckIcon from '@mui/icons-material/Check';

const UserCard = ({user}) => {

    const blockAccess = () => {
        db.collection('users').doc(user.id).update({status: false})
    }
    const activateAccount = () => {
        db.collection('users').doc(user.id).update({status: true})
    }

  return (
   <Card sx={{ p: 4}}>
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Avatar src={user?.avatar}/>
         <Box>
         <Typography variant="body1"
          sx={{ml: 2, fontWeight: 'bold'}}>{user?.name}</Typography>
         <Typography variant="caption" sx={{ml: 2}}>{user?.email}</Typography>
         </Box>   
        </Box>
        
           
   {user.status === false ? <Button onClick={() => activateAccount()} sx={{color: '#39AEA9', alignSelf: 'end'}} startIcon={<CheckIcon/>}>
       Activate Account
    </Button> :  <Button onClick={() => blockAccess()} sx={{color: '#EB4747', alignSelf: 'end'}} startIcon={<BlockIcon/>}>
        Block Access
    </Button>}
    </Box>
   <Box sx={{mt: 2}}>
   <Typography variant="caption" sx={{ml: 2}}><b>Password :</b> {user?.password}</Typography>
   </Box>

   </Card>
  )
}

export default UserCard