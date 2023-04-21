import Feed from "./components/feed";
import Sidebar from "./components/sidebar";
import RightBar from "./components/rightbar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/navbar";
import Add from "./components/Add";
import {createTheme} from '@mui/material';
import {createContext, useState} from 'react'
import {ThemeProvider ,CssBaseline} from '@mui/material';
 export const themeContext = createContext()
function App() {  
  const [mode,setMode] = useState("dark")

  const theme = createTheme({
    palette:{
      mode
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <themeContext.Provider value={{mode,setMode}}>
    <Box sx={{
    }}>
      <Navbar />
      <Stack direction="row" sx={{
        gap:{
          xs:0,
          sm:2
        }
      }} justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <RightBar />
    </Stack>
    <Add />

   </Box>
   </themeContext.Provider>
   </ThemeProvider>
  )
}

export default App
