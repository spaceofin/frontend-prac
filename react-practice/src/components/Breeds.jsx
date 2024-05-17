import styled from "styled-components";
import axios from "axios";
import { Header } from "./Header";
import { useState, useEffect } from "react";

const Text = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  font-size: 30px;
  font-style: italic;
`;

export const Breeds = () => {
  const breedsUrl = process.env.REACT_APP_CAT_BREEDS_API_URL;

  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(breedsUrl);
        const sortedBreeds = response.data.map((cat) => cat.id).sort();

        // console.log(data.data.map((object) => object.id));
        setBreeds(sortedBreeds);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [breedsUrl]);

  return (
    <div>
      <Header />
      {isLoading && <Text>... Loading ...</Text>}
      {!isLoading &&
        breeds.map((breed, index) => <Text key={index}>{breed} </Text>)}
    </div>
  );
};
