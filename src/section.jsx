import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import BG3 from './images/BG3.png';
import GAMEPLAY from './images/GAMEPLAY.png';
import GROUP5 from './images/Group 5.png';
import HAND from './images/HAND.png';
import RECTANGLE70 from './images/Rectangle 70.png';
import VECTOR4 from './images/Vector 4.png';
export default function Section3() {
  return (
    <Box pb={30} sx={{
      // backgroundColor: "#373030",
        backgroundImage:`url(${BG3}) ,linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundBlendMode :"overlay"
        // opacity:0.15,
        // height:"100vh,"
    }}>
      <Grid container>
        <Grid xs={12} md={12} >
        <img src={GAMEPLAY} alt="" style={{
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
        <Grid xs={12} md={12}>
        <img src={GROUP5} alt="" width={'100%'} />
        </Grid>
        <Grid xs={12} md={6}>
        <img src={HAND} alt="" style={{
                        padding: "0rem 10rem",
                        marginTop:"-79px",
                    }}/>
        </Grid>
        <Grid xs={12} md={6}>
        <img src={RECTANGLE70} alt="" style={{
                        padding: "0rem 8rem",
                        zIndex:-1
                    }}/>
        <Typography sx={{fontSize:"24px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        padding:"0 7rem",
                        fontWeight:200,
                        zIndex:1,
                        marginTop:"-5.2rem"
                        }}>BATTLE ROYALE<br/> Solo-Duo</Typography>
        <Typography sx={{
                        fontSize:"14px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        padding:"0 7rem",
                        fontWeight:200,
                        marginTop: "1rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
        </Grid>
        <Grid xs={12} md={12}>
        <img src={VECTOR4} alt="" width={'100%'} />
        </Grid>
      </Grid>
    </Box>
  );
}
