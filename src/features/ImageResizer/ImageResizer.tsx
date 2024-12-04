import { Container } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { postImage } from "../../api/upload";

const ImageResizer = () => {
  const { register, handleSubmit } = useForm<FieldValues>();

  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Access the selected file
    const file = data.image[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    try {
      const response = await postImage(formData);
      console.log("Upload successful:", response);
    } catch (error) {
      console.error("Error uploading the file:", error);
    } finally {
      // reset();
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          {...register("image", {
            required: "Image is required",
          })}
          type='file'
          accept='image/*'
        />
        <button type='submit'>Submit</button>
      </form>
    </Container>
  );
};

export default ImageResizer;
