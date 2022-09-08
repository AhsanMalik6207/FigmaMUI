import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import BG from './homebg.png'
import IMG from './THETRANARENA.png'
import GROUP2 from './Group 2.png'
import STICK from './Rectangle.png'


function Home() {
  return (
    <>

    <Box sx={{
        backgroundImage:`url(${BG})`,
        backgroundRepeat:"no-repeat",
        objectFit:"cover",
        objectPosition:"center",
        padding:"12rem 0"
    }}>
        
            <Grid container>

                <Grid item xs={12} md={6}>
                    <img src={IMG} alt="" style={{
                        marginBottom:"1.5rem",
                    }}/>

                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"left",
                        padding:"0 7rem",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        padding:"0 4rem",
                        fontWeight:200,
                        color:"#5D5FEF"

                        
                    }}>
                    #ThetenArena #MobaNFT #FreeToPlay #BattleToEran
                    </Typography>

                </Grid>
                <Grid item xs={12} md={6}>

                    

                    {/* <Box component={'img'} src={GROUP2} sx={{
                        width:"100%",
                        marginTop:"-7rem",
                        position:"relative"
                    }}>
                        

                        
                        

                    </Box> */}
                    
                    <img src={STICK} alt="" style={{
                            // width:"100%",
                        }} />
                    
                </Grid>


            </Grid>
        
    </Box>
      
    </>
  )
}

export default Home
