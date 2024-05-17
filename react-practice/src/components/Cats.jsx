import styled from "styled-components";
import axios from "axios";
import { Header } from "./Header";
import { useState, useEffect } from "react";

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 500px));
  // grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  background-color: rgba(228, 29, 63, ${(props) => props.$randomOpacity});

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

export const Cats = () => {
  const url = process.env.REACT_APP_CAT_API_URL;
  const apiKey = process.env.REACT_APP_CAT_API_KEY;

  const [imgUrls, setImgUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await axios.get(url, { headers: { "x-api-key": apiKey } });

        // console.log(
        //   urls.data.map((img) => img.url).filter((url) => url.endsWith(".jpg"))
        // );
        console.log(data);

        const filteredData = data.data
          .map((img) => img.url)
          .filter((url) => url.endsWith(".jpg"));

        setImgUrls(filteredData.slice(0, 15));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [url, apiKey]);

  return (
    <div>
      <Header />
      {isLoading && <Text>... The Cats Are Coming ...</Text>}
      {!isLoading && (
        <ImagesContainer>
          {imgUrls.map((imgUrl, index) => (
            <ImageWrapper
              key={index}
              $randomOpacity={Math.random() * 0.7 + 0.1}
            >
              <img key={index} src={imgUrl} alt={`Cat ${index + 1}`} />
            </ImageWrapper>
          ))}
        </ImagesContainer>
      )}
    </div>
  );
};
