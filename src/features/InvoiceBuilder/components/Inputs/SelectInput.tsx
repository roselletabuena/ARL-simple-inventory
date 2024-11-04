import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface PlainSelectProps {
  handleOnChange: (value: string) => void;
}

const PlainSelect: React.FC<PlainSelectProps> = ({ handleOnChange }) => {
  const [value, setValue] = React.useState<string>("1_Each");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value as string);

    handleOnChange(event.target.value as string);
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
      <MenuItem value='1_Each'>Each</MenuItem>
      <MenuItem value='12_dozen'>Dozen</MenuItem>
    </Select>
  );
};

export default PlainSelect;
