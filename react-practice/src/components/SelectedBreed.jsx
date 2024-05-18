import axios from "axios";
import { useState, useEffect } from "react";

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
    <div>
      <img src={breedImageUrl} alt={`${breed} cat`} />
    </div>
  );
};
