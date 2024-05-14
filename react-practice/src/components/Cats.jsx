import { Header } from "./Header";

export const Cats = () => {
  const url = process.env.REACT_APP_CAT_API_URL;
  const apiKey = process.env.REACT_APP_CAT_API_KEY;

  // console.log(url);
  // console.log(apiKey);
  let imgUrls = [];

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
      imgUrls = data;

      for (let i = 0; i < imgUrls.length; i++) {
        console.log(imgUrls[i].url);
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      <Header />
      This is Cats page.
    </div>
  );
};
