import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography,Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', left: 0, right: 0, top: 0, zIndex: 1000 }}>
      <AppBar position="static"
        style={{
          height: "70px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          background: "linear-gradient(to right bottom, #505052, ##505052)",
          backgroundColor:"#505052"
        }}
      >
        <Toolbar variant="dense" sx={{marginLeft: '65px'}}>
          <Image src="/favicon.ico" alt="error" width={45} height={45} />
          <Typography variant="h6" color="inherit" component="div"
            sx={{
              fontWeight: "700",
              marginTop: "5px",
              marginLeft: "5px",
              fontSize: "20px",
            }}
          >
            My Resume Builder
          </Typography>
          <Button sx={{
              fontWeight: "600",
              marginTop: "5px",
              marginLeft: "900px",
              fontSize: "20px",
              bgcolor:'white',
              color:'#797979'
              
            }} >SignUp</Button>
            <Button sx={{
              fontWeight: "600",
              marginTop: "5px",
              marginLeft: "10px",
              fontSize: "20px",
              bgcolor:'white',
              color:'#797979',
              
            }} >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
