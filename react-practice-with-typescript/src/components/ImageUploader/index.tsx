import styled from "styled-components";
import { useState, ChangeEvent } from "react";
import ImageFilter from "react-image-filter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 520px;
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
  // background-color: lightgray;
  margin: 20px;
  height: 450px;
`;

const StyledInput = styled.input`
  margin-top: 10px;
  padding: 5px;
  min-height: 35px;
  border: 3px solid #7c6bb8;
  border-radius: 5px;
  font-size: 16px;
  background-color: #c7ceff;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  // background-color: lime;
  width: 300px;
  height: 300px;

  img {
    object-fit: contain;
  }
`;

const ImageFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageFilterWrapper = styled.div`
  display: flex;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: normal;
  margin: 0px 10px;
`;

export const IamgeUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [filter, setFilter] = useState("none");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.file:", event.target.files);

    const fileName = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    if (fileName) reader.readAsDataURL(fileName);

    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      console.log(imageUrl);
      setImageUrl(url);
    }
  };

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
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
        <ImageFiltersContainer>
          <ImageFilterWrapper>
            <div>
              <StyledLabel>Choose a filter</StyledLabel>
              <select id="filters" onChange={handleFilterChange}>
                <option value="none">None</option>
                <option value="blur(5px)">Blur</option>
                <option value="brightness(1.5)">Brightness</option>
                <option value="contrast(200%)">Contrast</option>
                <option value="drop-shadow(16px 16px 10px skyblue)">
                  Drop Shadow
                </option>
                <option value="grayscale(50%)">Grayscale</option>
                <option value="hue-rotate(90deg)">Hue Rotate</option>
                <option value="invert(75%)">Invert</option>
                <option value="opacity(25%)">Opacity</option>
                <option value="saturate(30%)">Saturate</option>
                <option value="sepia(60%)">Sepia</option>
                <option value="contrast(50%) brightness(150%)">
                  Multiple Filter 1
                </option>
                <option value="drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)">
                  Multiple Filter 2
                </option>
              </select>
            </div>
          </ImageFilterWrapper>
          <ImageFilterWrapper>
            <StyledLabel>Apply Special Filter </StyledLabel>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </ImageFilterWrapper>
        </ImageFiltersContainer>
        <ImageWrapper>
          {isChecked ? (
            <ImageFilter
              image={imageUrl}
              filter="duotone"
              colorOne={[177, 16, 136]}
              colorTwo={[195, 255, 122]}
              style={{ width: "300px" }}
            />
          ) : (
            image && (
              <img
                src={image}
                alt="Preview"
                style={{ width: "300px", filter: filter }}
              />
            )
          )}
        </ImageWrapper>
      </ImageUploaderContainer>
    </Container>
  );
};
