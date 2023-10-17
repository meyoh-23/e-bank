import { Box, Button, Link, Typography } from "@mui/material";
import logo from './../assets/logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import MainButton from "./MainButton";

const Footer = () => {
    return (
        <Box
        sx={{
            bgcolor: "secondary.main",
            py: "4rem",
            px: {
                xs: "1.5rem",
                md: "4rem",
            },
            display : "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            },
            alignItems: {
                xs: "center",
                md: "flex-start",
            },
            justifyContent: "space-between",
            gap: {
                xs: 3,
                md: 4,
            }
        }}
        >
            <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                alignItems: {
                xs: "center",
                md: "flex-start",
                },
                justifyContent: "space-between",
                gap: {
                    xs: 4.5,
                    md: 8,
                }
            }}
            >
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: {
                        xs: "center",
                        md: "flex-start",
                    },
                    justifyContent: "space-between",
                    gap: {
                        xs: 2,
                        md: 10,
                    }
                }}
                >
                    <Box>
                        <Button size="large"
                        sx= {{
                            cursor: "pointer",
                            backgroundImage: `url(${logo})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        >
                            <img src={logo}alt="" style={{maxWidth: "100%", height:"auto"}}/>
                        </Button>
                    </Box>
                    <Box
                    sx={{
                        display: "flex",
                        alignItems: {
                            xs: "center",
                            md: "flex-start",
                        },
                        justifyContent: "space-between",

                    }}
                    >
                        <Box variant='span'
                        sx={{
                            color: "primary.main",
                            cursor: "pointer",
                            "&:hover": {
                                color:"hsl(136, 65%, 51%)",
                            }
                        }}
                        >
                            <FacebookIcon/>
                        </Box>
                        <Box variant='span'
                        sx={{
                            color: "primary.main",
                            cursor: "pointer",
                            "&:hover": {
                                color:"hsl(136, 65%, 51%)",
                            }
                        }}
                        >
                            <YouTubeIcon/>
                        </Box>
                        <Box variant='span'
                        sx={{
                            color: "primary.main",
                            cursor: "pointer",
                            "&:hover": {
                                color:"hsl(136, 65%, 51%)",
                            }
                        }}
                        >
                            <TwitterIcon/>
                        </Box>
                        <Box variant='span'
                        sx={{
                            color: "primary.main",
                            cursor: "pointer",
                            "&:hover": {
                                color:"hsl(136, 65%, 51%)",
                            }
                        }}
                        >
                            <PinterestIcon/>
                        </Box>
                        <Box variant='span'
                        sx={{
                            color: "primary.main",
                            cursor: "pointer",
                            "&:hover": {
                                color:"hsl(136, 65%, 51%)",
                            }
                        }}
                        >
                            <InstagramIcon/>
                        </Box>
                    </Box>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: {
                        xs: "center",
                        md: "flex-start",
                    },
                    justifyContent: "space-between",
                    gap: {
                        xs: 2,
                        md: 4,
                    }
                }}
                >
                    <Link
                    underline="none"
                    href='#about-Us'
                    sx={{
                        textTransform: "capitalize",
                        fontFamily: "'Public Sans', sans-serif",
                        color: "hsl(0, 0%, 98%)",
                        fontSize:"1.125rem",
                        fontWeight: "300",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            color: "hsl(136, 65%, 51%)"
                        },
                    }}
                    >
                        About Us
                    </Link>
                    <Link
                    underline="none"
                    href='#contact'
                    sx={{
                        textTransform: "capitalize",
                        fontFamily: "'Public Sans', sans-serif",
                        color: "hsl(0, 0%, 98%)",
                        fontSize:"1.125rem",
                        fontWeight: "300",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            color: "hsl(136, 65%, 51%)"
                        },
                    }}
                    >
                        Contact
                    </Link>
                    <Link
                    underline="none"
                    href='#blog'
                    sx={{
                        textTransform: "capitalize",
                        fontFamily: "'Public Sans', sans-serif",
                        color: "hsl(0, 0%, 98%)",
                        fontSize:"1.125rem",
                        fontWeight: "300",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            color: "hsl(136, 65%, 51%)"
                        },
                    }}
                    >
                        Blog
                    </Link>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: {
                        xs: "center",
                        md: "flex-start",
                    },
                    justifyContent: "space-between",
                    gap: {
                        xs: 2,
                        md: 4,
                    }
                }}
                >
                    <Link
                    underline="none"
                    href='#careers'
                    sx={{
                        textTransform: "capitalize",
                        fontFamily: "'Public Sans', sans-serif",
                        color: "hsl(0, 0%, 98%)",
                        fontSize:"1.125rem",
                        fontWeight: "300",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            color: "hsl(136, 65%, 51%)"
                        },
                    }}
                    >
                        Careers
                    </Link>
                    <Link
                    underline="none"
                    href='#support'
                    sx={{
                        textTransform: "capitalize",
                        fontFamily: "'Public Sans', sans-serif",
                        color: "hsl(0, 0%, 98%)",
                        fontSize:"1.125rem",
                        fontWeight: "300",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            color: "hsl(136, 65%, 51%)"
                        },
                    }}
                    >
                        Support
                    </Link>
                    <Link
                    underline="none"
                    href='#privacy-policy'
                    sx={{
                        textTransform: "capitalize",
                        fontFamily: "'Public Sans', sans-serif",
                        color: "hsl(0, 0%, 98%)",
                        fontSize:"1.125rem",
                        fontWeight: "300",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            color: "hsl(136, 65%, 51%)"
                        },
                    }}
                    >
                        Privacy Policy
                    </Link>
                </Box>
            </Box>
            <Box
            sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: {
                        xs: "center",
                        md: "flex-end",
                    },
                    justifyContent: "space-between",
                    gap: {
                        xs: 2,
                        md: 4,
                    }
                }}
            > 
                <MainButton/>
                <Typography
                sx={{
                    fontFamily: "'Public Sans', sans-serif",
                    color: "neutral.main",
                    maxWidth: "md",
                    textAlign: {
                        xs: "center",
                        md: "left"
                    },
                }}
                >
                    &copy; Easybank. All Rights Reserved
                </Typography>
            </Box>
        </Box>
    )}

export default Footer;