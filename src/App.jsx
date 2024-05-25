import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shopping from "./pages/Shopping";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import Product from "./components/product/Product";
import CartPage from "./pages/CartPage";
// toast alert 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

function App() {
  AOS.init();
  return (
    <>
      <Header />
      {/* toast  show*/}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* see single product */}
        <Route path="/product/:id" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
