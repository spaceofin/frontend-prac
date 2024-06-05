import { createContext, useContext, useState } from "react";

const CartPhotosContext = createContext();

export const CartPhotosProvider = ({ children }) => {
  const [cartPhotos, setCartPhotos] = useState([]);

  return (
    <CartPhotosContext.Provider value={{ cartPhotos, setCartPhotos }}>
      {children}
    </CartPhotosContext.Provider>
  );
};

export const useCartPhotos = () => useContext(CartPhotosContext);
