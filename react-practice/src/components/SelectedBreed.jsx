import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  background-color: rgba(34, 177, 76, ${(props) => props.$randomOpacity});

  img {
    width: 95%;
    height: 95%;
    border-radius: 20px;
  }
`;

export const SelectedBreed = ({ breed }) => {
  const breedImageBaseUrl = process.env.REACT_APP_CAT_BREEDS_IMAGE_API_URL;
  const [breedImageUrl, setBreedImageUrl] = useState("");

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(breedImageBaseUrl + breed);
        const imageUrl = response.data[0].url;

        setBreedImageUrl(imageUrl);

        // console.log(response.data);
        // console.log(response.data[0].url);
        // console.log(breedImageBaseUrl + breed);
        console.log(imageUrl);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [breedImageBaseUrl, breed]);

  return (
    <Container>
      <ImageWrapper $randomOpacity={Math.random() * 0.7 + 0.1}>
        <img src={breedImageUrl} alt={`${breed} cat`} />
      </ImageWrapper>
    </Container>
  );
};
