import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

interface PlainTextFieldProps {
  width: string;
}

export const PlainTextField = styled(TextField)<PlainTextFieldProps>(
  ({ width }) => ({
    width: width,
    padding: "0px",
    "& .MuiOutlinedInput-input": { padding: "5px 10px" },
  })
);
