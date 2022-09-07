import { Box, Button, Container, InputLabel, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { db } from '../../../utility/config/firebase.config'

const AuthenticationScreen = ({setLoggedIn}) => {

    const [userDetails, setUserDetails] = useState({ authkey: '', email: '',  userId: ''}) 
    const  navigate = useHistory()

    const loginToDashboard = () => {
        console.log('clicked', userDetails.userId)
        if(userDetails.userId.length === 0){
            return alert('Please enter a valid user ID')
        }
        db.collection('db-admins').doc(userDetails.userId).onSnapshot(snap => {
            const data  = snap.data();
            if(data.authkey === userDetails.authkey && data.email === userDetails.email) {
                localStorage.setItem('@authuser', userDetails.userId)
                setLoggedIn(true)
                navigate('/')
            }else {
                alert("Incorrect User details . Please Verify user details")
            }
        })
    }

  return (
    <>
    <header style={{backgroundColor: 'black'}}>
<img width="350px" src={logo}/>
</header>
     <Container sx={{display: 'flex' , alignItems: 'center', justifyContent: 'center', p:{lg: 20, xs: 2}, flexDirection : {lg: 'row', xs: 'column'}}}>
    
        <Box sx={{display: {lg: 'block', xs: 'none'}}} >
            
            <img width="500px" src="https://img.freepik.com/premium-vector/xtreme-colorful-illustration-man-gamer-manager-distant-remote-work-internet-marketer-designer-freelancer-sits-computer-cyber-power-fluid-telework-web-design-business_191130-20.jpg?w=2000"/>
        </Box>
            <Box sx={{width: {lg: '50%', xs: '100%'}}}>
               
            <Typography
                 sx={{ fontWeight: 'bold'}}
                 variant="h4"
                >
                Admin Login 
                </Typography>
                <InputLabel
                 sx={{mt: 4, fontWeight: 'bold'}}
                >
                User ID * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The User ID is created at time of account creation)</span>
                </InputLabel>
                <TextField
                onChange={(e) => setUserDetails({...userDetails, userId: e.target.value})}
                type="text"
                fullWidth variant="outlined" placeholder="eg: suryanandx"/>
            <InputLabel
                 sx={{mt: 4, fontWeight: 'bold'}}
                >
                Admin Email * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The email used at time of account creation)</span>
                </InputLabel>
                <TextField
                 onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                type="email"
                fullWidth variant="outlined" placeholder="eg: suryanandkurup@gmail.com"/>
                <InputLabel
                 sx={{mt: 4, fontWeight: 'bold'}}
                >
                Admin Auth Key * <span style={{fontSize: '10px', fontWeight : 'lighter'}}>(The key is generated at time of account creation)</span>
                </InputLabel>
                <TextField 
                 onChange={(e) => setUserDetails({...userDetails, authkey: e.target.value})}
                fullWidth
                type="password"
                variant="outlined" placeholder="eg: db-review-xsHrdf"/>

                <Button 
                fullWidth
                onClick={() => loginToDashboard()}
                    sx={{bgcolor: '#1F4690', color: 'white', mt: 4, textTransform: 'none'}}
                >
                    Continue to Dashboard
                </Button>
            </Box>
            
    </Container>

    </>
   
  )
}

export default AuthenticationScreen