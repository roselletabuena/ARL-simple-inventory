import React from "react";
import { Box, Grid, TextField } from "@mui/material";

const CustomerDetails: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Cust. Name'
            variant='standard'
            fullWidth
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Date'
            type='date'
            variant='standard'
            fullWidth
            size='small'
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Address'
            variant='standard'
            fullWidth
            size='small'
            multiline
            rows={2}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerDetails;
