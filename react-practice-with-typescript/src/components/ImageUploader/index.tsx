import styled from "styled-components";
import { useState } from "react";
import ImageFilter from "react-image-filter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 900px;
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

const FiltersPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 20px;
`;

const Filter = styled.div<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  text-align: center;
  width: 85px;
  height: 95px;
  padding: 15px 2px 0px 2px;
  margin: 0px 5px;
  outline: ${(props) => (props.$isSelected ? "4px solid #88579C" : "none")};
  border-radius: 10px;
`;

const FilterLabel = styled.label`
  font-size: 16px;
  font-weight: normal;
`;

const filters = [
  { name: "None", filter: "none" },
  { name: "Blur", filter: "blur(5px)" },
  { name: "Brightness", filter: "brightness(1.5)" },
  { name: "Contrast", filter: "contrast(200%)" },
  { name: "Drop Shadow", filter: "drop-shadow(16px 16px 10px skyblue)" },
  { name: "Grayscale", filter: "grayscale(50%)" },
  { name: "Hue Rotate", filter: "hue-rotate(90deg)" },
  { name: "Invert", filter: "invert(75%)" },
  { name: "Opacity", filter: "opacity(25%)" },
  { name: "Saturate", filter: "saturate(30%)" },
  { name: "Sepia", filter: "sepia(60%)" },
  { name: "Multiple Filter1", filter: "contrast(50%) brightness(150%)" },
  {
    name: "Multiple Filter2",
    filter: "drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)",
  },
];

export const IamgeUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.file:", event.target.files);

    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string);
        setImageUrl(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    // setFilter(filter);
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

        <FiltersPreview>
          {filters.map((filter) => (
            <Filter
              key={filter.name}
              $isSelected={selectedFilter === filter.filter}
              onClick={() => handleFilterChange(filter.filter)}>
              {image && (
                <>
                  <img
                    src={image}
                    alt={filter.name}
                    style={{ filter: filter.filter }}
                    width="50px"
                    height="50px"
                  />
                  <FilterLabel>{filter.name}</FilterLabel>
                </>
              )}
            </Filter>
          ))}
        </FiltersPreview>
        <ImageFiltersContainer>
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
                style={{ width: "300px", filter: selectedFilter }}
              />
            )
          )}
        </ImageWrapper>
      </ImageUploaderContainer>
    </Container>
  );
};
