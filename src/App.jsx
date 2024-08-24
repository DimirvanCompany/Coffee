import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ShopPage from "./pages/shop/ShopPage";
import CartPage from "./pages/cart/CartPage";
import CoffeeMenu from "./pages/coffeeMenu/CoffeeMenu";
import AboutUs from "./pages/aboutUs/AboutUs";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cafe-menu" element={<CoffeeMenu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<h1>صفحه یافت نشد</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
