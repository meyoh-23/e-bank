import React from 'react';
import {Box, Typography} from '@mui/material';

// import the service icons kesho and implement that section

const WhyUs = () => {
    return (
        <Box variant='section'
        sx={{
            my: {
                xs: 2,
                md: 3,
            },
            backgroundColor: "hsl(0, 0%, 98%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: {
                xs: "center",
                md: "flex-start",
            },
            alignContent: {
                xs: "center",
                md: "left",
            },
            gap: 2,
            py: {
                xs: 4, 
                md: 6,
            },
            px: {
                xs: '1.5rem',
                md: "1.75rem",
            }
        }}
        >
            <Typography
                sx={{
                    color: "secondary.main",
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "1.5rem", 
                    fontWeight: "400",
                    textAlign: {
                        xs: "center",
                        md: "left"
                    }
                }}
                >
                    Why choose Easybank?
            </Typography>
            <Typography variant='p'
                sx={{
                    fontFamily: "'Public Sans', sans-serif",
                    color: "neutral.main",
                    paddingRight: 7.5,
                    maxWidth: "md",
                    textAlign: {
                        xs: "center",
                        md: "left"
                    }
                }}
                >
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
            </Typography>
            <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                justifyContent: "space-between",
                gap: 0.5,
                alignItems: {
                    xs: "center",
                    md: "flex-start",
                }
            }}
            >
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: {
                        xs: "center",
                        md: "flex-start",
                    },
                    gap: 2.25,
                }}
                >
                    <Typography
                sx={{
                    color: "secondary.main",
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "1.5rem", 
                    fontWeight: "400",
                    textAlign: {
                        xs: "center",
                        md: "left"
                    }
                }}
                >
                    Online Banking
                    </Typography>
                    <Typography variant='p'
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                            paddingRight: 7.5,
                            maxWidth: "md",
                            textAlign: {
                                xs: "center",
                                md: "left"
                            },
                            gap: 2,
                        }}
                        >
                            Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.
                    </Typography>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: {
                        xs: "center",
                        md: "flex-start",
                    },
                    gap: 1.5,
                }}
                >
                    <Typography
                sx={{
                    color: "secondary.main",
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "1.5rem", 
                    fontWeight: "400",
                    textAlign: {
                        xs: "center",
                        md: "left"
                    }
                }}
                >
                    Simple Budgeting
                    </Typography>
                    <Typography variant='p'
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                            paddingRight: 7.5,
                            maxWidth: "md",
                            textAlign: {
                                xs: "center",
                                md: "left"
                            },
                            gap: 2,
                        }}
                        >
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                    </Typography>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: {
                        xs: "center",
                        md: "flex-start",
                    },
                    gap: 2.25,
                }}
                >
                    <Typography
                sx={{
                    color: "secondary.main",
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "1.5rem", 
                    fontWeight: "400",
                    textAlign: {
                        xs: "center",
                        md: "left"
                    }
                }}
                >
                    Fast Onboarding
                    </Typography>
                    <Typography variant='p'
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                            paddingRight: 7.5,
                            maxWidth: "md",
                            textAlign: {
                                xs: "center",
                                md: "left"
                            },
                            gap: 2,
                        }}
                        >
                            We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.
                    </Typography>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: {
                        xs: "center",
                        md: "flex-start",
                    },
                    gap: 2.25,
                }}
                >
                    <Typography
                sx={{
                    color: "secondary.main",
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "1.5rem", 
                    fontWeight: "400",
                    textAlign: {
                        xs: "center",
                        md: "left"
                    }
                }}
                >
                    Open API
                    </Typography>
                    <Typography variant='p'
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                            paddingRight: 7.5,
                            maxWidth: "md",
                            textAlign: {
                                xs: "center",
                                md: "left"
                            },
                            gap: 2,
                        }}
                        >
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                    </Typography>
                </Box>
            </Box>
        </Box>
)}

export default WhyUs;