import './Theme.js'
import * as React from 'react';
import TeamGrid from './components/TeamGrid';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar/NavBar';
import theme from './Theme.js';


function App() {

  return (

    <ThemeProvider theme={theme}>
      <NavBar/>
      <TeamGrid/>
    </ThemeProvider>

  );
}


export default App;
