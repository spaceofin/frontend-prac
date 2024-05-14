import { Header } from "./Header";
import { useState, useEffect } from "react";

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
        data = data.filter((img) => img?.url != null);
        // console.log(data);

        setImgUrls(data.map((img) => img.url));
        // console.log(imgUrls);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("useEffect");
  }, []);

  console.log(imgUrls);

  return (
    <div>
      <Header />
      <div>
        {imgUrls.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`Cat ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
