
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header({title, route, buttonTitle, bVisible}) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar elevation={0}  color="transparent" position="relative" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <p style={{color: 'white'}}>{title}</p> 
          </Typography>
       { bVisible &&  <Button variant="contained" color="primary">{buttonTitle}</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
