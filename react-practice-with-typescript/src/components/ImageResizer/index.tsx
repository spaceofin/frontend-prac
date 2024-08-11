import { useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 750px;
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #666666;
  font-size: 25px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 450px;
  height: 450px;
  border: 1px solid dimgray;
  border-radius: 2px;
  overflow: hidden;
`;

const ResizableImage = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const StyledInput = styled.input`
  margin: 10px;
  padding: 5px;
  min-height: 35px;
  border: 3px solid #76d16b;
  border-radius: 5px;
  font-size: 16px;
  background-color: #d6ffc6;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const ZoomButton = styled.button`
  margin: 1px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: normal;
  margin: 10px;
`;

export const ImageResizer: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const imgRef = useRef<HTMLImageElement | null>(null);
  const basicImageSize: number = 300;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const resizeImage = (scale: number) => {
    if (imgRef.current) {
      //   imgRef.current.style.width = String(100 * scale) + "%";
      //   imgRef.current.style.height = String(100 * scale) + "%";
      imgRef.current.style.width = String(basicImageSize * scale) + "px";
      imgRef.current.style.height = String(basicImageSize * scale) + "px";
    }
  };

  return (
    <Container>
      Image Resizer
      <ImageUploaderContainer>
        <StyledInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </ImageUploaderContainer>
      <ImageContainer>
        {imageUrl && (
          <ResizableImage
            ref={imgRef}
            src={imageUrl}
            size={basicImageSize}
            alt="resizable-img"
          />
        )}
      </ImageContainer>
      <Label>Resize Image</Label>
      <ButtonGroup>
        <ZoomButton onClick={() => resizeImage(0.5)}>0.5x</ZoomButton>
        <ZoomButton onClick={() => resizeImage(1.0)}>1.0x</ZoomButton>
        <ZoomButton onClick={() => resizeImage(1.5)}>1.5x</ZoomButton>
        <ZoomButton onClick={() => resizeImage(2.0)}>2.0x</ZoomButton>
      </ButtonGroup>
    </Container>
  );
};
