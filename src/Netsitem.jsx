import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem, Typography,List } from '@mui/material';
import NETSITEM from './images/NETS ITEM.png';
import GROUP47 from './images/Group 47.png';
import GROUP52 from './images/Group 52.png';
import GROUP51 from './images/Group 51.png';
import GROUP50 from './images/Group 50.png';
import GROUP48 from './images/Group 48.png';
import ICONS from './images/icons.png';
import WHATCOIN from './images/whatcoin.png';
import LINE from './images/LINE.png';
import CONE from './images/CONE.png';
import BORDERLINES from './images/BORDERLINES.png';
import BTNS from './images/BTN.png'
import LINE2 from './images/LINE2.png'
export default function Netsitem() {
  return (
    <Box pb={5} sx={{
      // backgroundColor: "#373030",
        background:`linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundBlendMode :"overlay"
        // opacity:0.15,
        // height:"100vh,"
    }}>
      <Grid container>
        <Grid xs={12} md={12} >
        <img src={NETSITEM} alt="" style={{
                        marginTop: "4rem",
                        padding: "2rem 30rem"
                    }}/>

                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        padding:"0 7rem",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>
        <Grid xs={12} md={2}>
        <img src={GROUP47} alt="" width={'100%'} style={{padding:"3rem"}} />
        </Grid>
        <Grid xs={12} md={2} >
        <img src={GROUP52} alt="" width={'100%'} style={{ padding:"3rem", paddingLeft:"4rem" }}/>  
        </Grid>
        <Grid xs={12} md={2} >
        <img src={GROUP51} alt="" width={'100%'} style={{padding:"3rem",paddingLeft:"5rem" }} />  
        </Grid>
        <Grid xs={12} md={2} >
        <img src={GROUP50} alt="" width={'100%'} style={{padding:"3rem",paddingLeft:"5rem" }}/>  
        </Grid>
        <Grid xs={12} md={2} >
        <img src={GROUP48} alt="" width={'100%'} style={{padding:"3rem",paddingLeft:"6rem" }}/>  
        </Grid>
        <Grid xs={12} md={12} >
        <img src={ICONS} alt="" width={'8%'} style={{ float:"right", marginRight:"120px"}}/>  
        </Grid>

        <Grid xs={12} md={12} >
        <img src={WHATCOIN} alt="" style={{
                        marginTop: "4rem",
                        paddingLeft:"25rem"
                    }}/>

                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        padding:"0 7rem",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>
        <Grid xs={12} md={12}>
        <img src={LINE} alt="" width={'100%'} />
        </Grid>
        <Grid xs={12} md={3}>
        <img src={CONE} alt="" width={'80%'} style={{marginTop:"-3rem"}}/>
        </Grid>
        <Grid xs={12} md={2}>
            <List sx={{color:"white"}}>
              <ListItem>Special Events</ListItem>
              <ListItem>Battle Pass</ListItem>
              <ListItem>Ranking Rewards</ListItem>
              <ListItem>Quest</ListItem>
              <ListItem>Guild War</ListItem>
              <ListItem>Tournament</ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={4}>
        <img src={BORDERLINES} alt="" style={{paddingLeft:"2rem"}}/>
        </Grid>
        <Grid xs={12} md={3}>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"120px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"80px"
                        }}>EXCHANGE</Typography>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"115px",marginTop:"40px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"80px"
                        }}>TRADE</Typography>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"120px", marginTop:"55px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"80px"
                        }}>THETAN BOX</Typography>
        </Grid>
        <Grid xs={12} md={12}>
        <img src={LINE2} alt="" width={'100%'} />
        </Grid>
      </Grid>
    </Box>
  );
}
