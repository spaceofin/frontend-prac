import styled from "styled-components";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useState, useRef, useCallback } from "react";
import squareImage from "assets/images/square_300.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 900px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #666666;
  font-size: 25px;
  font-weight: bold;
`;

const StyledReactCrop = styled(ReactCrop)`
  margin: 20px;
`;

const CroppedContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 3px solid lightgray;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  padding: 20px 0px;
`;

const CroppedImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
`;

export const ImageCropper = () => {
  // const [crop, setCrop] = useState<Crop>();
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  const src = squareImage;

  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const onImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      imageRef.current = e.currentTarget;
    },
    []
  );

  const getCroppedCanvas = (crop: PixelCrop) => {
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    if (!ctx || !imageRef.current) return null;

    const { naturalWidth, naturalHeight, width, height } = imageRef.current;
    const scaleX = naturalWidth / width;
    const scaleY = naturalHeight / height;

    ctx.drawImage(
      imageRef.current,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return canvas.toDataURL("image/png");
  };

  const onCropComplete = useCallback((crop: PixelCrop) => {
    const croppedUrl = getCroppedCanvas(crop);
    if (croppedUrl) {
      setCroppedImageUrl(croppedUrl);
    }
  }, []);

  return (
    <Container>
      Image Cropper
      <StyledReactCrop
        crop={crop}
        onChange={(crop) => setCrop(crop)}
        onComplete={onCropComplete}>
        <img src={src} onLoad={onImageLoad} alt="square" width="300px" />
      </StyledReactCrop>
      <CroppedContainer>
        Cropped Image
        {croppedImageUrl && (
          <CroppedImageWrapper>
            <img src={croppedImageUrl} alt="cropped result" />
          </CroppedImageWrapper>
        )}
      </CroppedContainer>
    </Container>
  );
};
