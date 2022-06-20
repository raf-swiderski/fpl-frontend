import * as React from 'react';
// import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleSortBy(props) {
  const [toggle, setToggle] = React.useState("total_points");

  const handleToggle = (event, newToggle) => {
    if (newToggle != null) {
      setToggle(newToggle);
      props.sortBy(newToggle)
    } else {
      
      setToggle(toggle);
      props.sortBy(toggle)
    }
  };


  return (
    <ToggleButtonGroup
      value={toggle}
      exclusive
      onChange={handleToggle}
      aria-label="sort-by-toggle"
    >
      <ToggleButton value="now_cost" aria-label="left aligned">
        Price 
      </ToggleButton>
      <ToggleButton value="total_points" aria-label="centered">
        Points
      </ToggleButton>
      <ToggleButton value="form" aria-label="right aligned">
        Form
      </ToggleButton>
    </ToggleButtonGroup>
  );
}