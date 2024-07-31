import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #666666;
  font-size: 25px;
  font-weight: bold;
`;

const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   background-color: lightgray;
  margin: 20px;
`;

const StyledInput = styled.input`
  margin-top: 10px;
  padding: 5px;
  height: 50px;
  border: 3px solid #7c6bb8;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  background-color: #c7ceff;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  //   background-color: lime;
  width: 350px;
`;

export const IamgeUploader = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.file:", e.target.files);

    const fileName = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    if (fileName) reader.readAsDataURL(fileName);
  };
  return (
    <Container>
      ImageUploader
      <ImageUploaderContainer>
        <StyledInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <ImageWrapper>
          {image && (
            <img src={image} alt="Preview" style={{ width: "300px" }} />
          )}
        </ImageWrapper>
      </ImageUploaderContainer>
    </Container>
  );
};
