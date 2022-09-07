import { Avatar, Box, Button, Card, CardActions, Dialog, DialogContent, IconButton, InputLabel, LinearProgress, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { db } from '../../../utility/config/firebase.config';
import { useStorage } from '../../../utility/tools/storage-util.tool';

const UserCardAdmin = ({user}) => {
    const [userDetails, setUserDetails] = useState({...user})
    const [openEdit, setOpenEdit] = useState(false)
    const currentUser = localStorage.getItem('@authuser')
    const [file, setFile] = useState(null)

    const updateUserDetails = () => {
        if(userDetails.name.trim().length === 0 || userDetails.authkey.trim().length === 0 || userDetails.email.trim().length === 0){
            return alert("Please don't leave valid details empty")
        }
        db.collection('db-admins').doc(user.id).update({...userDetails, avatar: url ? url : ''}).then(() => {
            setOpenEdit(false)
        })
    }

    const deleteAdmin = () => {
        db.collection('db-admins').doc(user.id).delete()
    }

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile)
    }

    const {progress, url} = useStorage(file)

  return (
    <>
   
   <Card sx={{ p: 4, bgcolor: currentUser === user.id ? '#65C18C' : 'white', color: currentUser === user.id ? 'white' : 'black'}}>
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Avatar src={user?.avatar}/>
         <Box>
         <Typography  variant="body1"
          sx={{ml: 2, fontWeight: 'bold', color: 'black'}}>{user?.name}</Typography>
         <Typography variant="caption" sx={{ml: 2}}>{user?.email}</Typography>
         </Box>   
        </Box>
        
           <Box sx={{display: 'flex', alignItems: 'center'}}>
    {currentUser !== user.id ? <IconButton
    onClick={() => deleteAdmin()}
    sx={{color: '#EB4747', alignSelf: 'end'}}>
<DeleteIcon/>
</IconButton> : <></>}
    <IconButton 
    onClick={() => setOpenEdit(true)}
    sx={{color: 'black', alignSelf: 'end'}}>
    <EditIcon/>
    </IconButton>
           </Box>
    
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 2}}>
    <Box>
   <Typography variant="caption" sx={{ml: 2}}><b style={{color: '#062C30'}}>Auth Key :</b> {user?.authkey}</Typography>
   </Box>
   <Box>
   <Typography variant="caption" sx={{ml: 2}}><b style={{color: '#062C30'}}>User ID :</b> {user?.id}</Typography>
   </Box>
    </Box>
 
   </Card>

   <Dialog 
   onClose={()=> setOpenEdit(false)}
   fullWidth open={openEdit}>
    <DialogContent>
    <Box>
               
               <Typography
                    sx={{ fontWeight: 'bold'}}
                    variant="h4"
                   >
                  Update User Details
                   </Typography>
                   <InputLabel
                    sx={{mt: 4, fontWeight: 'bold', display: 'flex', alignItems: 'center', mb: 2}}
                   >
                  <Avatar src={url ? url : userDetails.avatar} sx={{mr: 2}}/> Avatar  <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The avatar used for display )</span>
                   
                   </InputLabel>
                   <TextField
                   type="file"
                   onChange={handleChange}
                   fullWidth variant="outlined" />
                  
                   <LinearProgress value={progress} sx={{mt: 2, height: '10px'}} variant="determinate"/>
                   <InputLabel
                    sx={{mt: 4, fontWeight: 'bold'}}
                   >

                   Admin Name * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The name used for display information)</span>
                   </InputLabel>
                   <TextField
                   type="text"
                   value={userDetails?.name}
                   onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                   fullWidth variant="outlined" placeholder="eg: Suryanand K"/>
               <InputLabel
                    sx={{mt: 4, fontWeight: 'bold'}}
                   >
                   Admin Email * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The email used at time of account login)</span>
                   </InputLabel>
                   <TextField
                   type="email"
                   value={userDetails?.email}
                   onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                   fullWidth variant="outlined" placeholder="eg: suryanandkurup@gmail.com"/>
                   <InputLabel
                    sx={{mt: 4, fontWeight: 'bold'}}
                   >
                   Admin Auth Key * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The key is used at time of account login)</span>
                   </InputLabel>
                   <TextField 
                    value={userDetails?.authkey}
                    onChange={(e) => setUserDetails({...userDetails, authkey: e.target.value})}
                   fullWidth
                   type="text"
                   variant="outlined" placeholder="eg: db-review-xsHrdf"/>
   
                   <Button 
                   onClick={() => updateUserDetails()}
                   fullWidth
                        endIcon={<ArrowForwardIcon/>}
                       sx={{bgcolor: '#1F4690', color: 'white', mt: 4, textTransform: 'none'}}
                   >
                       Update Admin User 
                   </Button>
               </Box>
    </DialogContent>
   </Dialog>
   </>
  )
}

export default UserCardAdmin