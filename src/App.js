import './App.css'
import * as React from 'react';
import TeamGrid from './components/TeamGrid';

import Box from '@mui/material/Box';

function App() {


  return (

    <div className="App">

      <Box sx={{ bgcolor: 'success.main' }}>
        <TeamGrid/>
      </Box>

    </div>
  );
}


export default App;
