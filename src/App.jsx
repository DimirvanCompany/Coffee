import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import ShopPage from "./pages/shop/ShopPage";
import CartPage from "./pages/cart/CartPage";
import CoffeeMenu from "./pages/coffeeMenu/CoffeeMenu";
<<<<<<< HEAD
import Login from "./pages/Register/Login";
import SignUp from "./pages/Register/SignUp";
import SmsPanel from "./pages/Register/SmsPanel";
=======
import AboutUs from "./pages/aboutUs/AboutUs";
import Blog from "./pages/blog/Blog";
>>>>>>> a4d6552ae868cb14ae12dc4956e44488721964fa

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cafe-menu" element={<CoffeeMenu />} />
<<<<<<< HEAD
        <Route path="/blog" element={<h1>وبلاگ</h1>} />
        <Route path="/about-us" element={<h1>درباره ما</h1>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/sms" element={<SmsPanel/>} />
=======
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
>>>>>>> a4d6552ae868cb14ae12dc4956e44488721964fa
        <Route path="*" element={<h1>صفحه یافت نشد</h1>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
