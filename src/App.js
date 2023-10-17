import { CssBaseline, ThemeProvider, createTheme, Box } from "@mui/material";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    }
  },
  palette: {
    primary: {
      main: "hsl(0, 0%, 100%)",
    },
    secondary: {
      main: "hsl(233, 26%, 24%)"
    },
    neutral: {
      main: "hsl(233, 8%, 62%)"
    },
  }
})


function App() {
  return (
    <> 
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div>
      <Hero/>
      <Box variant='main'>
        <WhyUs/>
        <LatestArticles/>
      </Box>
      <Footer/>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
