import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleSortBy() {
  const [alignment, setAlignment] = React.useState('left');
  const [toggle, setToggle] = React.useState(null);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleToggle = (e) => {
    e.preventDefault()
    
    setToggle(e.target.value)
    console.log(toggle)
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="now_cost" aria-label="left aligned" 
      onChange={
        (e) => {
          setToggle(e.target.value)
          handleToggle(e)
        }

        } >
        Price
      </ToggleButton>
      <ToggleButton value="total_points" aria-label="centered" onClick={handleToggle}>
        Points
      </ToggleButton>
      <ToggleButton value="form" aria-label="right aligned" onClick={handleToggle}>
        Form
      </ToggleButton>
    </ToggleButtonGroup>
  );
}