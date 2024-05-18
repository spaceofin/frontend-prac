import styled from "styled-components";
import axios from "axios";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import { SelectedBreed } from "./SelectedBreed";

const Text = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  font-size: 30px;
  font-style: italic;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const BreedSelect = styled.select`
  width: 250px;
  text-align: center;
  font-size: 25px;
  margin: 15px;
  padding: 5px;
`;

export const Breeds = () => {
  const breedsUrl = process.env.REACT_APP_CAT_BREEDS_API_URL;

  const [isLoading, setIsLoading] = useState(true);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

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

  const handleChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <div>
      <Header />
      <Container>
        {isLoading && <Text>... Loading ...</Text>}
        {!isLoading && (
          <BreedSelect
            id="breed-select"
            value={selectedBreed}
            onChange={handleChange}>
            <option value="">Choose Cat Breed</option>
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </BreedSelect>
        )}
      </Container>
      <SelectedBreed breed={selectedBreed} />
    </div>
  );
};
