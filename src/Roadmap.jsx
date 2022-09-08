import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ROADMAP from './images/ROADMAP.png';
import ROADMAP1 from './images/RoadMap1.png';
import HAND1 from './images/hand1.png';
import scrolBTN from './images/scrolbtn.png';
import DEVELOPER from './images/DEVELOPER.png';
import DEVELOPERIMG from './images/DEVELOPERIMG.png';
import INVESTORPARTNER from './images/INVESTOR & PARTNER.png';
import One from './images/firstBox.png';
import Second from './images/secondBox.png';
import Third from './images/thirdBox.png';
import Four from './images/fourthBox.png';
import Five from './images/fivthBox.png';
import Six from './images/sixBox.png';
import Seven from './images/seventhBox.png';
import Eight from './images/eightBox.png';
import Nine from './images/nineBox.png';
import Ten from './images/tenBox.png';
import Eleven from './images/eleventhBox.png';
import Tweleve from './images/tewelveBox.png';
import Thirteen from './images/thirteenBox.png';
import Fourteen from './images/forteenBox.png';
import { Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//   flexStyle: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });
export default function RoadMap() {
  // const classes = useStyles();

  return (

    <Box pb={5} sx={{
      // backgroundColor: "#373030",
      background: `linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "overlay",
    }}>
      <Grid container>
        <Grid xs={12} md={12} >
          <img src={ROADMAP} alt="" style={{
            marginTop: "4rem",
            padding: "2rem 2rem",
            height: "60px"
          }} />
        </Grid>
        <Grid xs={12} md={12} >
          <img src={ROADMAP1} alt="" style={{
            padding: "0 2rem"
          }} />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography sx={{
            fontSize: "12px",
            fontFamily: "'Roboto', sans-serif",
            fontStyle: "normal",
            color: "#FFFFFF",
            textAlign: "center",
            padding: "0 7rem",
            fontWeight: 200,
            marginBottom: "1.5rem"
          }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

          <img src={scrolBTN} style={{ height: "40px", paddingLeft: "90px" }} />

        </Grid>
        <Grid xs={12} md={6}>
          <img src={HAND1} height={"300px"} style={{ marginTop: "-130px", marginLeft: "160px" }} />
        </Grid>

        <Grid xs={12} md={12} >
          <img src={DEVELOPER} alt="" style={{
            marginTop: "4rem",
            padding: "2rem 30rem"
          }} />
        </Grid>
        <Grid xs={12} md={12} >
          <img src={DEVELOPERIMG} alt="" style={{
            padding: "2rem 33rem"
          }} />
        </Grid>
        <Grid xs={12} md={12} >
          <img src={INVESTORPARTNER} alt="" style={{
            marginTop: "4rem",
            padding: "2rem 25rem"
          }} />
        </Grid>
        <Box sx={{display:"flex",flexWrap: "wrap", padding:"0 5rem"}} >
          <Box><img src={One} alt=""  /></Box>
          <Box><img src={Second} alt="" className='flexStyle' /></Box>
          <Box><img src={Third} alt="" className='flexStyle' /></Box>
          <Box><img src={Four} alt="" className='flexStyle' /></Box>
          <Box><img src={Five} alt="" className='flexStyle' /></Box>
          <Box><img src={Six} alt="" className='flexStyle' /></Box>
          <Box><img src={Seven} alt="" className='flexStyle' /></Box>
          <Box><img src={Eight} alt="" className='flexStyle' /></Box>
          <Box><img src={Nine} alt="" className='flexStyle' /></Box>
          <Box><img src={Ten} alt="" className='flexStyle' /></Box>
          <Box><img src={Eleven} alt="" className='flexStyle' /></Box>
          <Box><img src={Tweleve} alt="" className='flexStyle' /></Box>
          <Box><img src={Thirteen} alt="" className='flexStyle' /></Box>
          <Box><img src={Fourteen} alt="" className='flexStyle' /></Box>

        </Box>
      </Grid>
    </Box>
  );
}
