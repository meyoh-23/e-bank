import { AppBar, Box, Button, Container, Drawer, Link, List, ListItem, Toolbar} from '@mui/material'
import React, { useState } from 'react';
import logo from './../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MainButton from './MainButton';


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <AppBar
        component='nav'
        elevation={0}
        >
            <Toolbar>
                <Container
                sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
                >
                    <Box
                    sx={{
                        display: "inline-block",
                        textOverflow: "no-wrap",
                        cursor: "pointer"
                    }}
                    >
                        <span><img src={logo} alt="logo" /></span>
                    </Box>
                    <Box
                    sx={{
                        display: {
                            xs: " none",
                            md: "flex",
                        },
                    }}
                    >
                        <List
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                        }}
                        >
                            <ListItem>
                                <Link
                                href='#home'
                                underline='none'
                                sx={{
                                    color: "hsl(233, 8%, 62%)",
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontWeight: "300",
                                    fontSize: "1.125rem",
                                    textTransform: "capitalize",
                                    py: "1.25rem",
                                    "&:hover": {
                                        color: "hsl(233, 26%, 24%)",
                                        borderBottom: "4px solid hsl(136, 65%, 51%)",
                                        cursor: "pointer"
                                    }
                                }}
                                >
                                home
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                href='#about'
                                underline='none'
                                sx={{
                                    color: "hsl(233, 8%, 62%)",
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontWeight: "300",
                                    fontSize: "1.125rem",
                                    textTransform: "capitalize",
                                    py: "1.25rem",
                                    "&:hover": {
                                        color: "hsl(233, 26%, 24%)",
                                        borderBottom: "4px solid hsl(136, 65%, 51%)",
                                        cursor: "pointer"
                                    }
                                }}
                                >
                                about
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                href='#contact'
                                underline='none'
                                sx={{
                                    color: "hsl(233, 8%, 62%)",
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontWeight: "300",
                                    fontSize: "1.125rem",
                                    textTransform: "capitalize",
                                    py: "1.25rem",
                                    "&:hover": {
                                        color: "hsl(233, 26%, 24%)",
                                        borderBottom: "4px solid hsl(136, 65%, 51%)",
                                        cursor: "pointer"
                                    }
                                }}
                                >
                                contact
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                href='#blog'
                                underline='none'
                                sx={{
                                    color: "hsl(233, 8%, 62%)",
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontWeight: "300",
                                    fontSize: "1.125rem",
                                    textTransform: "capitalize",
                                    py: "1.25rem",
                                    "&:hover": {
                                        color: "hsl(233, 26%, 24%)",
                                        borderBottom: "4px solid hsl(136, 65%, 51%)",
                                        cursor: "pointer"
                                    }
                                }}
                                >
                                blog
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                href='#career'
                                underline='none'
                                sx={{
                                    color: "hsl(233, 8%, 62%)",
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontWeight: "300",
                                    fontSize: "1.125rem",
                                    textTransform: "capitalize",
                                    py: "1.25rem",
                                    "&:hover": {
                                        color: "hsl(233, 26%, 24%)",
                                        borderBottom: `4px solid hsl(136, 65%, 51%)`,
                                        cursor: "pointer"
                                    }
                                }}
                                >
                                career
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box
                    sx={{
                        display: {
                            xs: " none",
                            md: "flex",
                        }
                    }}
                    >
                    <MainButton/>
                    </Box>
                    <Box
                    sx={{
                        display: {
                            xs: "flex",
                            md: "none",
                        }
                    }}
                    >
                        <Button
                        variant='text'
                        onClick={() => setMobileMenu(!mobileMenu)}
                        size='lg'
                        sx={{
                            color: "#000",
                        }}
                        >
                            {
                                mobileMenu? <CloseIcon/>
                                : <MenuIcon/>
                            }
                        </Button>
                    </Box>
                </Container>
                <Drawer
                role='menu'
                anchor='top'
                onClose={()=>setMobileMenu(false)}
                open={mobileMenu}
                PaperProps={{
                    sx: {
                        marginTop: "4rem",
                        backgroundColor: "transparent",
                        maxWidth: "90vw",
                        mx: "auto",
                        borderRadius: 2,
                        alignItems: "center",
                        justifyContent: "center",
                    }
                }}
                >
                    <Box
                    sx={{
                        background: 'primary',
                        height: "auto",
                        mx: "auto",
                        my: "1.25rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                    }}
                    >
                        <List
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", 
                            justifyContent: "center",
                            gap: 3,
                        }}
                        >
                            <ListItem 
                            sx={{
                                justifyContent: "center",
                                alignContent: "center",
                                color: "secondary",
                            }}
                            >
                                <Link
                                href='#home'
                                underline='none'
                                color='secondary'
                                sx={{
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontSize: "1.125rem",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                }}
                                >
                                    home
                                </Link>
                            </ListItem>
                            <ListItem color='#000'
                            sx={{
                                justifyContent: "center",
                                alignContent: "center",
                                color: "secondary",
                            }}
                            >
                                <Link
                                href='#about'
                                underline='none'
                                color='secondary'
                                sx={{
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontSize: "1.125rem",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                }}
                                >
                                    about
                                </Link>
                            </ListItem>
                            <ListItem
                            sx={{
                                justifyContent: "center",
                                alignContent: "center",
                                color: "secondary",
                            }}
                            >
                                <Link
                                href='#contact'
                                underline='none'
                                color='secondary'
                                sx={{
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontSize: "1.125rem",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                }}
                                >
                                    contact
                                </Link>
                            </ListItem>
                            <ListItem
                            sx={{
                                justifyContent: "center",
                                alignContent: "center",
                                color: "secondary",
                            }}
                            >
                                <Link
                                href='#blog'
                                underline='none'
                                color='secondary'
                                sx={{
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontSize: "1.125rem",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                }}
                                >
                                    blog
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                href='#careers'
                                underline='none'
                                color='secondary'
                                sx={{
                                    fontFamily: "'Public Sans', sans-serif",
                                    fontSize: "1.125rem",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                }}
                                >
                                    careers
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
)}

export default Navbar;