import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ShopPage from "./pages/shop/ShopPage";
import CoffeeMenu from "./pages/coffeeMenu/CoffeeMenu";
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
        <Route path="*" element={<h1>صفحه یافت نشد</h1>} />
        <Route path="/menu" element={<CoffeeMenu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
