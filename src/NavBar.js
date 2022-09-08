import * as React from "react";
import flower from '../src/images/flower.png'
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import './index.css'

export default function NavBar() {
return (
	<AppBar sx={{background:"none", position:"fixed"}}>
        <Box sx={{display:"inline-flex"}}>
	 <Box sx={{mt:2}}>
        <Typography variant="text" sx={{margin:4}}>Home</Typography>
        <Typography variant="text" sx={{margin:4}}>Game</Typography>
        <Typography variant="text" sx={{margin:4}}>NFTs</Typography>
     </Box>	
     <Box sx={{mt:2}}>
        <img src={flower} height ={80} style={{margin:1}} />
     </Box>
     <Box className="box1" sx={{mt:2}}>
        <Typography variant="text" sx={{margin:4}}>Team</Typography>
        <Typography variant="text" sx={{margin:4}}>RoadMap</Typography>
        <Typography variant="text" sx={{margin:4}}>Partner</Typography>
     </Box>
        </Box>
	</AppBar>
   
);
}
