import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BLACKGREEN from './images/blacGreen.png';
import THETAN from './images/THETAN.png';
import FOURLINES from './images/Foutlines.png';
import greenBTN1 from './images/greenBTN1.png';
import greenBTN2 from './images/greenBTN2.png'
import BOY from './images/boy.png';
import CORETEAM from './images/CORE TEAM.png';
import { Typography } from '@mui/material';
import box1 from './images/box1.png';
import box2 from './images/box2.png';
export default function TheTan() {
  return (
    <Box pb={30} sx={{
      // backgroundColor: "#373030",
      backgroundImage: `url(${BLACKGREEN}) ,linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <Grid container>
        <Grid xs={12} md={12} >
          <img src={THETAN} alt="" style={{
            marginTop: "4rem",
            paddingLeft: "25rem"
          }} />
        </Grid>
        <Grid xs={12} md={3}>
          <img src={greenBTN1} alt="" width={'70%'} style={{ marginTop: "250px", paddingLeft: "17rem" }} />
        </Grid>
        <Grid xs={12} md={6}>
          <img src={FOURLINES} alt="" style={{ marginTop: "70px", paddingLeft: "10rem" }} />
          <img src={BOY} alt="" style={{ paddingLeft: "19rem", zIndex: -1, marginTop: "-23rem", height: "340px" }} />
        </Grid>
        <Grid xs={12} md={3}>
          <img src={greenBTN2} alt="" width={'70%'} style={{ marginTop: "250px", marginLeft: "-67px" }} />
        </Grid>
        <Grid xs={12} md={12} >
          <img src={CORETEAM} alt="" style={{
            marginTop: "4rem",
            padding: "2rem 30rem"
          }} />

          <Typography sx={{
            fontSize: "16px",
            fontFamily: "'Roboto', sans-serif",
            fontStyle: "normal",
            color: "#FFFFFF",
            textAlign: "center",
            padding: "0 7rem",
            fontWeight: 200,
            marginBottom: "1.5rem"
          }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box2} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
      </Grid>
    </Box>
  );
}
