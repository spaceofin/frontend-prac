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

const ImagesContainer = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(500px, 500px));
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  padding: 20px;
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

  const [breedImageUrls, setBreedImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(breedImageBaseUrl + breed);
        const imageUrls = response.data.map((cat) => cat.url);
        // const uniqueImageUrls = [...new Set(imageUrls)];
        setBreedImageUrls(imageUrls);

        console.log(response.data);
        // console.log(response.data[0].url);
        // console.log(breedImageBaseUrl + breed);
        console.log(imageUrls);

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
        <ImagesContainer>
          {breedImageUrls.map((breedImageUrl, index) => (
            <ImageWrapper
              key={index}
              $randomOpacity={Math.random() * 0.7 + 0.1}>
              <img src={breedImageUrl} alt={`${breed} cat`} />
            </ImageWrapper>
          ))}
        </ImagesContainer>
      )}
    </Container>
  );
};
