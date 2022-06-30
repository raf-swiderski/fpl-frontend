import { createTheme } from '@mui/material/styles';

import { teal } from '@mui/material/colors';

const lightTeal = teal[50];
const background = teal[100];


const theme = createTheme({
  palette:{
    primary: teal,
    secondary: {
      main: lightTeal
    },
    background: background
  }
})

export default theme;