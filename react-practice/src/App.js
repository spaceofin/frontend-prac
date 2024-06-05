import { Gallery } from "components/Gallery";
import { Routes, Route } from "react-router-dom";
import { PhotosCart } from "components/PhotosCart";
import { CartPhotosProvider } from "components/CartPhotosContext";

const App = () => {
  return (
    <>
      <CartPhotosProvider>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/photos-cart" element={<PhotosCart />} />
        </Routes>
      </CartPhotosProvider>
    </>
  );
};

export default App;
