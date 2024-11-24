import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";

const ImageUpload = ({ onUpload }: { onUpload: (file: File) => void }) => {
  const { control, handleSubmit, reset, watch } = useForm();

  const onSubmit = (data: any) => {
    const file = data.image[0];
    if (file) {
      onUpload(file);
      reset(); // Clear the form after successful upload
    }
  };

  // Debugging: Check form values
  const fileWatch = watch("image");
  console.log("Currently selected file:", fileWatch);

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <Typography variant='h6'>Upload Your Image</Typography>
      <Controller
        name='image'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            type='file'
            inputProps={{ accept: "image/*" }}
            {...field}
            fullWidth
          />
        )}
      />
      <Button type='submit' variant='contained' sx={{ mt: 2 }}>
        Upload
      </Button>
    </Box>
  );
};

export default ImageUpload;
