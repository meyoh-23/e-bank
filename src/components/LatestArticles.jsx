import { Box, Typography } from "@mui/material";
import currency from './../assets/image-currency.jpg';
import restaurant from './../assets/image-restaurant.jpg';
import plane from './../assets/image-plane.jpg';
import confetti from './../assets/image-confetti.jpg';


const LatestArticles = () => {
    return (
        <Box
        sx={{
            my: "2rem",
            mx: {
                xs: "1rem",
                md: "3rem",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: {
                xs: "center",
                md: "flex-start",
            },
        }}
        >
            <Typography
            sx={{
                color: "secondary.main",
                fontFamily: "'Public Sans', sans-serif",
                fontSize: "1.25rem", 
                fontWeight: "400",
                textAlign: {
                    xs: "center",
                    md: "left"
                }
            }}
            >
                Latest Articles
            </Typography>
            <Box
            sx={{
                my: "2rem",
                mx: {
                    xs: "1rem",
                    md: "3rem",
                },
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                justifyContent: {
                    xs: "center",
                    md: "space-between",
                },
                gap: 3,
            }}
            >
                
                <Box>
                    <Box
                    >
                        <img src={currency} alt="currency" 
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                        />
                    </Box>
                    <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "left",
                        mx: 2,
                        my: 2.25,
                        gap: 2,
                    }}
                    >
                        <Typography
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                        }}
                        >
                            By Claire Robinson
                        </Typography>
                        <Typography
                        sx={{
                            color: "secondary.main",
                            fontFamily: "'Public Sans', sans-serif",
                            fontSize: "1.25rem", 
                            fontWeight: "400",
                            "&:hover": {
                                color: "hsl(136, 65%, 51%)",
                                cursor: "pointer"
                            }
                        }}
                        >
                            Receive money in any currency with no fees
                        </Typography>
                        <Typography
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                        }}
                        >
                            
                            The world is getting smaller and we’re becoming more mobile. So why should you be 
                            forced to only receive money in a single …
                        </Typography>
                    </Box>
                        
                </Box>
                <Box>
                    <Box
                    >
                        <img src={restaurant} alt="restaurant" 
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                        />
                    </Box>
                    <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "left",
                        mx: 2,
                        my: 2.25,
                        gap: 2,
                    }}
                    >
                        <Typography
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                        }}
                        >
                            By Wilson Hutton
                        </Typography>
                        <Typography
                        sx={{
                            color: "secondary.main",
                            fontFamily: "'Public Sans', sans-serif",
                            fontSize: "1.25rem", 
                            fontWeight: "400",
                            "&:hover": {
                                color: "hsl(136, 65%, 51%)",
                                cursor: "pointer"
                            }
                        }}
                        >
                            Treat yourself without worrying about money
                        </Typography>
                        <Typography
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                        }}
                        >
                            
                            Our simple budgeting feature allows you to separate out your spending and set 
                            realistic limits each month. That means you …
                        </Typography>
                    </Box>
                        
                </Box>
                <Box>
                    <Box
                    >
                        <img src={plane} alt="plane" 
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                        />
                    </Box>
                    <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "left",
                        mx: 2,
                        my: 2.25,
                        gap: 2,
                    }}
                    >
                        <Typography
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                        }}
                        >
                            By Wilson Hutton
                        </Typography>
                        <Typography
                        sx={{
                            color: "secondary.main",
                            fontFamily: "'Public Sans', sans-serif",
                            fontSize: "1.25rem", 
                            fontWeight: "400",
                            "&:hover": {
                                color: "hsl(136, 65%, 51%)",
                                cursor: "pointer"
                            }
                        }}
                        >
                            Take your Easybank card wherever you go
                        </Typography>
                        <Typography
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                        }}
                        >
                            We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                            while you’re abroad. We’ll even show you …
                        </Typography>
                    </Box>
                        
                </Box>
                <Box>
                    <Box
                    >
                        <img src={confetti} alt="confetti" 
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                        />
                    </Box>
                    <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "left",
                        mx: 2,
                        my: 2.25,
                        gap: 2,
                    }}
                    >
                        <Typography
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                        }}
                        >
                            By Claire Robinson
                        </Typography>
                        <Typography
                        sx={{
                            color: "secondary.main",
                            fontFamily: "'Public Sans', sans-serif",
                            fontSize: "1.25rem", 
                            fontWeight: "400",
                            "&:hover": {
                                color: "hsl(136, 65%, 51%)",
                                cursor: "pointer"
                            }
                        }}
                        >
                            Our invite-only Beta accounts are now live!
                        </Typography>
                        <Typography
                        sx={{
                            fontFamily: "'Public Sans', sans-serif",
                            color: "neutral.main",
                        }}
                        >
                            After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                            It’s easy to request an invite through the site ...
                        </Typography>
                    </Box>
                        
                </Box>
            </Box>
        </Box>
)}

export default LatestArticles;