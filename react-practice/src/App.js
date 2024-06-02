import { Gallery } from "components/Gallery";
import { Routes, Route } from "react-router-dom";
import { PhotosCart } from "components/PhotosCart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/photos-cart" element={<PhotosCart />} />
      </Routes>
    </>
  );
};

export default App;
