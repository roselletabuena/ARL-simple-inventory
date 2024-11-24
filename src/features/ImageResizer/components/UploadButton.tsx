import React from "react";
import { Box, Button, LinearProgress, Typography } from "@mui/material";

const UploadButton = ({ onUpload }: { onUpload: () => Promise<void> }) => {
  const [isUploading, setUploading] = React.useState(false);

  const handleUpload = async () => {
    setUploading(true);
    await onUpload();
    setUploading(false);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant='h6'>Upload to AWS S3</Typography>
      <Button
        variant='contained'
        onClick={handleUpload}
        sx={{ mt: 2 }}
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Upload"}
      </Button>
      {isUploading && <LinearProgress sx={{ mt: 2 }} />}
    </Box>
  );
};

export default UploadButton;
