import { createContext, useContext, useState } from "react";

const CartPhotosContext = createContext();

export const CartPhotosProvider = ({ children }) => {
  const [cartPhotoUrls, setCartPhotoUrls] = useState([]);
  const [photoUrls, setPhotoUrls] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <CartPhotosContext.Provider
      value={{
        cartPhotoUrls,
        setCartPhotoUrls,
        randomNumber,
        setRandomNumber,
        photoUrls,
        setPhotoUrls,
      }}>
      {children}
    </CartPhotosContext.Provider>
  );
};

export const useCartPhotos = () => useContext(CartPhotosContext);
