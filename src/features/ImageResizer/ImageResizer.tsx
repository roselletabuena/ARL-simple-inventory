import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import ImageUpload from "./components/ImageUpload";
import ResizeControls from "./components/ResizeControls";

const ImageResizer = () => {
  const [uploadedImage, setUploadedImage] = React.useState<File | null>(null);

  const handleImageUpload = (file: File) => {
    console.log(file);
    setUploadedImage(file);
  };

  const handleResize = (dimensions: { width: number; height: number }) => {
    console.log("Resized dimensions:", dimensions);
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <ImageUpload onUpload={handleImageUpload} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            {uploadedImage ? (
              <ResizeControls image={uploadedImage} onResize={handleResize} />
            ) : (
              "Please upload an image to enable resizing."
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageResizer;
