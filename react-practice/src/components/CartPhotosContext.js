import { createContext, useContext, useState } from "react";

const CartPhotosContext = createContext();

export const CartPhotosProvider = ({ children }) => {
  const [cartPhotos, setCartPhotos] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <CartPhotosContext.Provider
      value={{ cartPhotos, setCartPhotos, randomNumber, setRandomNumber }}>
      {children}
    </CartPhotosContext.Provider>
  );
};

export const useCartPhotos = () => useContext(CartPhotosContext);
