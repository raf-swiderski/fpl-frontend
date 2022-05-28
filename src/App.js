import './App.css'
import * as React from 'react';
import TeamGrid from './components/TeamGrid';

import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, green } from '@mui/material/colors';

const theme = createTheme({
   palette:{
     primary: green,
     secondary: blueGrey
   }
})

function App() {


  return (

    <ThemeProvider theme={theme}>
      <NavBar/>
      <Container fixed className="TeamGridContainer" maxWidth="lg" >
        <TeamGrid/>
      </Container>
    </ThemeProvider>

  );
}


export default App;
