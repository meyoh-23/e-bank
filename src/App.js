import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";

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
    <div className="App">
      <Navbar/>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
