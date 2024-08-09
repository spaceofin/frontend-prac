import {
  Gallery,
  PhotosCart,
  LoginPage,
  SignUpPage,
  Home,
  Practice,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { CartPhotosProvider } from "contexts/CartPhotosContext";
import { AuthProvider } from "contexts/AuthContext";

const App = () => {
  return (
    <>
      <CartPhotosProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/photos-cart" element={<PhotosCart />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </AuthProvider>
      </CartPhotosProvider>
    </>
  );
};

export default App;
