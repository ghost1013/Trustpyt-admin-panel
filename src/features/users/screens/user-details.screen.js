
import React, {useState, useEffect} from 'react'
import Header from '../../../creativeCommons/header/header.component'
import { db } from '../../../utility/config/firebase.config'
import { firebaseLooper } from '../../../utility/tools/looper.tool'
import UserCard from '../components/user-card.component'
import { Avatar, Box, Button, Card, CardActions, Dialog, DialogContent, Divider, Grid, IconButton, InputLabel, TextField, Typography } from '@mui/material';

const UserDetailsScreen = () => {

    const [users, setUsers] = useState([])
  

    useEffect(() => {
        db.collection('users').onSnapshot((user) => {
            const data = firebaseLooper(user)
            setUsers(data)
        })
    }, [])

  return (
    < >
            <Header title="User management" route="/add-companies" buttonTitle="Add Companies" />
        <Divider/>
        <Box>
            {/* Headeing */}
             <Box sx={{mt: 4, p: 3}}>
            <Typography
                gutterBottom
                variant="h4"
            >User Management</Typography>
            <Typography>
                (All User management features are available here)
            </Typography>
             </Box>
            <Box sx={{mt: 2}}> 
            <Grid sx={{px: 6}} container spacing={2}>
                {users.map((data) => (
                   <Grid key={data.name+data.id}  item lg={4} xs={6}>
                    <UserCard user={data}/>
                  </Grid>
                ))} 
                 </Grid>
            </Box>
           
        </Box>

    </>
  )
}

export default UserDetailsScreen