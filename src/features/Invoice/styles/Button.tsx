import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export const PrimaryButton = styled(IconButton)(() => ({
  background: "#3f5c40",
  color: "white",
  height: "30px",
  width: "30px",
  "&:hover": {
    background: "#557C56",
  },
}));

export const DangerButton = styled(PrimaryButton)(() => ({
  background: "#FF885B",
  "&:hover": {
    background: "#EF9C66",
  },
}));
