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

const Text = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  font-size: 30px;
  font-style: italic;
`;

export const SelectedBreed = ({ breed }) => {
  const breedImageBaseUrl = process.env.REACT_APP_CAT_BREEDS_IMAGE_API_URL;

  const [breedImageUrl, setBreedImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [breedImageBaseUrl, breed]);

  return (
    <Container>
      {isLoading && <Text>... Loading ...</Text>}
      {!isLoading && (
        <ImageWrapper $randomOpacity={Math.random() * 0.7 + 0.1}>
          <img src={breedImageUrl} alt={`${breed} cat`} />
        </ImageWrapper>
      )}
    </Container>
  );
};
