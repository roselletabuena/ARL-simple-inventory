import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const PlainSelect: React.FC = () => {
  const [value, setValue] = React.useState<string>("option1");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value as string);
  };

  return (
    <Select
      sx={{
        padding: "4px",
        "& .MuiSelect-select": {
          padding: "2px 0px",
        },
      }}
      value={value}
      onChange={handleChange}
      fullWidth
      variant='outlined'
    >
      <MenuItem value='option1'>Gallon</MenuItem>
      <MenuItem value='option2'>Liter</MenuItem>
      <MenuItem value='option3'>350ml</MenuItem>
    </Select>
  );
};

export default PlainSelect;
