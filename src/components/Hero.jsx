import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import MainButton from './MainButton';
import desktopHeroBg from './../assets/bg-intro-desktop.svg';
import mobileHeroBg from './../assets/bg-intro-mobile.svg';
import mockupImage from './../assets/image-mockups.png';

const Hero = () => {
    return (
    <Box variant='header'>
        <Navbar/>
        <Box
        sx={{
            paddingTop: 8,
            mx: {
                xs: 0,
                md: 4,
            }
        }}
        >
            <Box
            sx={{
                display: {
                    xs: "none",
                    md: "flex",
                },
            }}
            > 
                <Grid container spacing={0}>
                    <Grid item md={6}>
                        <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "1.5rem",
                            marginTop: "3rem",
                        }}
                        >
                            <Typography
                            sx={{
                                color: "secondary.main",
                                fontFamily: "'Public Sans', sans-serif",
                                fontSize: "1.5rem", 
                                fontWeight: "400",
                            }}
                            >
                                Next generation  <br/> digital banking
                            </Typography>
                            <Typography variant='p'
                            sx={{
                                fontFamily: "'Public Sans', sans-serif",
                                color: "neutral.main",
                                paddingRight: 7.5,
                            }}
                            >
                                Take your financial life online. Your Easybank account will be a one-stop-shop 
                                for spending, saving, budgeting, investing, and much more.
                            </Typography>
                            <MainButton/>
                        </Container>
                    </Grid>
                    <Grid item md={6}>
                        <Container 
                        sx={{
                            backgroundImage: `url(${desktopHeroBg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                            width: "40vw",
                            marginRight: "0px",
                        }}
                        >
                                <img src={mockupImage} 
                                alt="mockupImage"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                                />
                        </Container>
                        
                    </Grid>
                </Grid>
            </Box>
            <Box
            sx={{
                display: {
                    xs: "flex",
                    md: "none",
                }
            }}
            > 
                <Grid
                container
                spacing={0}
                >
                    <Grid 
                    item
                    xs={12}
                    >
                        <Box
                        sx={{
                            backgroundImage: `url(${mobileHeroBg})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                        >
                            <img src={mockupImage}
                            alt="mockupImage" 
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                            />
                        </Box>
                    </Grid>
                                        <Grid 
                    item
                    xs={12}
                    >
                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        >
                            <Typography
                            sx={{
                                color: "secondary.main",
                                fontFamily: "'Public Sans', sans-serif",
                                fontSize: "1.5rem", 
                                fontWeight: "400",
                            }}
                            >
                                Next generation  <br/> digital banking
                            </Typography>
                            <Typography variant='p'
                            sx={{
                                fontFamily: "'Public Sans', sans-serif",
                                color: "neutral.main",
                                textAlign: "center",
                                px: "1.25rem"
                            }}
                            >
                                Take your financial life online. Your Easybank account will be a one-stop-shop 
                                for spending, saving, budgeting, investing, and much more.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
)}

export default Hero;