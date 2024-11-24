import { useState, useEffect } from "react";
import { Box, Slider, Typography, Button } from "@mui/material";

const ResizeControls = ({
  image,
  onResize,
}: {
  image: File | null;
  onResize: (dimensions: { width: number; height: number }) => void;
}) => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    console.log("image: ", image);
    if (image instanceof File) {
      const url = URL.createObjectURL(image);
      setPreview(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleResize = () => {
    if (!preview || !(image instanceof File)) return;

    const img = document.createElement("img");
    img.src = preview;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        const resizedUrl = canvas.toDataURL("image/jpeg");
        setPreview(resizedUrl);
        onResize({ width, height });
      }
    };
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant='h6'>Resize Image</Typography>
      {preview && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 2,
            mb: 2,
          }}
        >
          <img
            src={preview}
            alt='Preview'
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        </Box>
      )}
      <Slider
        value={width}
        onChange={(_, value) => setWidth(value as number)}
        valueLabelDisplay='auto'
        min={10}
        max={1000}
        sx={{ mt: 2 }}
      />
      <Typography>Width: {width}px</Typography>
      <Slider
        value={height}
        onChange={(_, value) => setHeight(value as number)}
        valueLabelDisplay='auto'
        min={10}
        max={1000}
        sx={{ mt: 2 }}
      />
      <Typography>Height: {height}px</Typography>
      <Button variant='contained' onClick={handleResize} sx={{ mt: 2 }}>
        Apply Resize
      </Button>
    </Box>
  );
};

export default ResizeControls;
