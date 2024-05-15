import styled from "styled-components";
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

export const Cats = () => {
  const url = process.env.REACT_APP_CAT_API_URL;
  const apiKey = process.env.REACT_APP_CAT_API_KEY;

  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        "x-api-key": apiKey,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const filteredData = data
          .filter((img) => img?.url != null)
          .map((img) => img.url)
          .filter((url) => url.endsWith(".jpg"));
        // console.log(filteredData);

        setImgUrls(filteredData.slice(0, 12));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("useEffect");
  }, [url, apiKey]);

  console.log(imgUrls);

  return (
    <div>
      <Header />
      <ImagesContainer>
        {imgUrls.map((imgUrl, index) => (
          <ImageWrapper key={index} $randomOpacity={Math.random() * 0.7 + 0.1}>
            <img key={index} src={imgUrl} alt={`Cat ${index + 1}`} />
          </ImageWrapper>
        ))}
      </ImagesContainer>
    </div>
  );
};
