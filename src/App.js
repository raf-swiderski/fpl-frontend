import './App.css'
import * as React from 'react';
import TeamGrid from './components/TeamGrid';

import Container from '@mui/material/Container';
import NavBar from './components/NavBar';

function App() {


  return (

    <div className="App">
      <NavBar/>
      <Container fixed className="TeamGridContainer" maxWidth="lg" sx={{ bgcolor: 'success.main' }}>
        <TeamGrid/>
      </Container>

    </div>
  );
}


export default App;
