import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/AboutPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RegisterPage from "./Components/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster position="bottom-center" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
