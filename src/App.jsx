import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import ShopPage from "./pages/shop/ShopPage";
import CartPage from './pages/cart/CartPage';
import CoffeeMenu from "./pages/coffeeMenu/CoffeeMenu";
import Login from "./pages/Register/Login";
import SignUp from "./pages/Register/SignUp";
import SmsPanel from "./pages/Register/SmsPanel";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cafe-menu" element={<CoffeeMenu />} />
        <Route path="/blog" element={<h1>وبلاگ</h1>} />
        <Route path="/about-us" element={<h1>درباره ما</h1>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/sms" element={<SmsPanel/>} />
        <Route path="*" element={<h1>صفحه یافت نشد</h1>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
