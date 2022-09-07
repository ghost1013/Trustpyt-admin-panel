
import React, {useState, useEffect} from 'react'
import Header from '../../../creativeCommons/header/header.component'
import { db } from '../../../utility/config/firebase.config'
import { firebaseLooper } from '../../../utility/tools/looper.tool'
import UserCardAdmin from '../components/user-admin.component'
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, Button, Card, CardActions, Dialog, DialogContent, Divider, Grid, IconButton, InputLabel, TextField, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const UserAdminsScreen = () => {

    const [users, setUsers] = useState([])
    const [open, setOpen] = useState(false)
    const [userDetails, setUserDetails] = useState({ authkey: '', email: '',  userId: '', name: '', avatar: ''}) 

    useEffect(() => {
        db.collection('db-admins').onSnapshot((user) => {
            const data = firebaseLooper(user)
            setUsers(data)
        })
    }, [])

    const addNewAdmin = () => {
        if(userDetails.name.trim().length === 0 || userDetails.authkey.trim().length === 0 || userDetails.email.trim().length === 0){
            return alert("Please don't leave valid details empty")
        }
        db.collection('db-admins').doc(userDetails.userId).set(userDetails).then(() => {
            setOpen(false)
        })
    }

 

  return (
    < >
            <Header title="Admin Management" route="/add-companies" buttonTitle="Add Companies" />
        <Divider/>
        <Box>
            {/* Headeing */}
             <Box sx={{mt: 4, p: 6, display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                     <Typography
                gutterBottom
                variant="h4"
            >Admin Management</Typography>
            <Typography>
                (All admin management features are available here)
            </Typography> 
                </Box>
                <Box>
                    <Button 
                    onClick={()=> setOpen(true)}
                    sx={{bgcolor: '#001D6E', color: 'white'}} startIcon={<AddIcon/>}>Add Admins</Button>
                </Box>
             </Box>

            <Box sx={{mt: 2}}> 
            <Grid sx={{px: 6}} container spacing={2}>
                {users.map((data) => (
                   <Grid  item lg={4} xs={6}>
                    <UserCardAdmin user={data}/>
                  </Grid>
                ))} 
                 </Grid>
            </Box>
           
        </Box>
       
          {/* Add a new user */}
   <Dialog 
   onClose={()=> setOpen(false)}
   fullWidth open={open}>
    <DialogContent>
    <Box>
               
               <Typography
                    sx={{ fontWeight: 'bold'}}
                    variant="h4"
                   >
                   Add New User
                   </Typography>
                   <InputLabel
                    sx={{mt: 4, fontWeight: 'bold'}}
                   >
                   User ID * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The User ID is used at time of account login)</span>
                   </InputLabel>
                   <TextField
                   onChange={(e) => setUserDetails({...userDetails, userId: e.target.value})}
                   type="text"
                   fullWidth variant="outlined" placeholder="eg: suryanandx"/>
                   <InputLabel
                    sx={{mt: 4, fontWeight: 'bold'}}
                   >
                   Admin Name * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The name used for display information)</span>
                   </InputLabel>
                   <TextField
                     onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                   type="text"
                   fullWidth variant="outlined" placeholder="eg: Suryanand K"/>
               <InputLabel
                    sx={{mt: 4, fontWeight: 'bold'}}
                   >
                   Admin Email * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The email used at time of account login)</span>
                   </InputLabel>
                   <TextField
                     onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                   type="email"
                   fullWidth variant="outlined" placeholder="eg: suryanandkurup@gmail.com"/>
                   <InputLabel
                    sx={{mt: 4, fontWeight: 'bold'}}
                   >
                   Admin Auth Key * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The key is used at time of account login)</span>
                   </InputLabel>
                   <TextField 
                    onChange={(e) => setUserDetails({...userDetails, authkey: e.target.value})}
                   fullWidth
                   type="password"
                   variant="outlined" placeholder="eg: db-review-xsHrdf"/>
   
                   <Button 
                   onClick={() => addNewAdmin()}
                   fullWidth
                        endIcon={<ArrowForwardIcon/>}
                       sx={{bgcolor: '#1F4690', color: 'white', mt: 4, textTransform: 'none'}}
                   >
                       Compute Admin User 
                   </Button>
               </Box>
    </DialogContent>
   </Dialog>
    </>
  )
}

export default UserAdminsScreen