import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 700px;
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

const ResizableImage = styled.img<{ scale: number; size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: scale(${(props) => props.scale});
  transition: transform 0.1s;
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
  border: 3px solid orange;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffea99;
`;

const Slider = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 150px;
  height: 7px;
  background-color: #cccccc;
  cursor: pointer;
`;

const Handle = styled.div<{ $scale: number }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: blue;
  position: absolute;
  left: ${(props) => props.$scale * 100}%;
  transform: translateX(-50%);
`;

export const ImageScaler: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const imgRef = useRef<HTMLImageElement | null>(null);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const scaleOffset = 1;
  const basicImageSize = 300;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const offsetX = e.clientX - sliderRect.left;
      const clampedX = Math.max(0, Math.min(offsetX, sliderRect.width));
      const newScale = Math.max(0, clampedX / sliderRect.width);
      setScale(newScale);
    }
  };

  const handleMouseDown = () => {
    if (!isDragging) setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (isDragging) setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <Container>
      Image Scaler
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
            scale={scale + scaleOffset}
            size={basicImageSize}
            alt="resizable-img"
          />
        )}
      </ImageContainer>
      <Slider ref={sliderRef}>
        <Handle $scale={scale} onMouseDown={handleMouseDown} />
      </Slider>
    </Container>
  );
};
