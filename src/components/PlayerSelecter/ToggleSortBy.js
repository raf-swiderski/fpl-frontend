import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleSortBy(props) {
  const [toggle, setToggle] = React.useState();

  const handleToggle = (event, newToggle) => {
    setToggle(newToggle);
    props.sortBy(newToggle)
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