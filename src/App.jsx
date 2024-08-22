import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ShopPage from "./pages/shop/ShopPage";
<<<<<<< HEAD
import CartPage from './pages/cart/CartPage';
=======
import CoffeeMenu from "./pages/coffeeMenu/CoffeeMenu";
>>>>>>> a4daed4e0f040077ebc7d28648706452c1899d22
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cafe-menu" element={<h1>منوی کافه</h1>} />
        <Route path="/branch" element={<h1>شعبه ها</h1>} />
        <Route path="/blog" element={<h1>وبلاگ</h1>} />
        <Route path="/about-us" element={<h1>درباره ما</h1>} />
<<<<<<< HEAD
        <Route path="/cart" element={<CartPage/>} />
=======
        <Route path="*" element={<h1>صفحه یافت نشد</h1>} />
        <Route path="/menu" element={<CoffeeMenu />} />
>>>>>>> a4daed4e0f040077ebc7d28648706452c1899d22
      </Routes>
      <Footer />
    </>
  );
}

export default App;
