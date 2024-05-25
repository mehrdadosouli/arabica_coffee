import { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Loading from './components/loading/Loading'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import Product from "./components/product/Product";
const HomePage = lazy(() => delayForDemo(import("./pages/HomePage")));
const Shopping = lazy(() => delayForDemo(import("./pages/Shopping")));
const ContactUs = lazy(() => delayForDemo(import("./pages/ContactUs")));
const CartPage = lazy(() => delayForDemo(import("./pages/CartPage")));
const Blogs = lazy(() => delayForDemo(import("./pages/Blogs")));
const Blog = lazy(() => delayForDemo(import("./pages/Blog")));
const AboutUs = lazy(() => delayForDemo(import("./pages/AboutUs")));
// animation
import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css";
// toast alert 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// time for delay loading 
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
}
function App() {
  AOS.init();
  return (
    <>
      <Header />
      {/* toast  show*/}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loading />}><HomePage /></Suspense>} />
        <Route path="/shopping" element={<Suspense fallback={<Loading />}><Shopping /></Suspense>} />
        <Route path="/cart" element={<Suspense fallback={<Loading />}><CartPage /></Suspense>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about-us" element={<Suspense fallback={<Loading />}><AboutUs /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<Loading />}><Blogs /></Suspense>} />
        <Route path="/blog/:id" element={<Suspense fallback={<Loading />}><Blog /></Suspense>} />
        <Route path="/contact-us" element={<Suspense fallback={<Loading />}><ContactUs /></Suspense>} />

        {/* see single product */}
        <Route path="/product/:id" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
