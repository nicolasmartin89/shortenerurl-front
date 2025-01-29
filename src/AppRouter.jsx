import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import NavBar from "./Components/Navbar";
import ShortenUrlPage from "./Components/ShortenUrlPage";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/AboutPage";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";

import DashboardLayout from "./Components/Dashboard/DashboardLayout";

import ErrorPage from "./Components/ErrorPage";

import PrivateRoute from "./PrivateRoute";

/*
<PrivateRoute publicPage={true}>
  <RegisterPage />
</PrivateRoute>;
*/

const AppRouter = () => {
  const hideHeaderFooter = location.pathname.startsWith("/s");

  return (
    <>
      {!hideHeaderFooter && <NavBar />}
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/s/:url" element={<ShortenUrlPage />} />

        <Route
          path="/register"
          element={
            <PrivateRoute publicPage={true}>
              <RegisterPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute publicPage={true}>
              <LoginPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute publicPage={false}>
              <DashboardLayout />
            </PrivateRoute>
          }
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="*"
          element={
            <ErrorPage message="We can't seem to find the page you're looking for" />
          }
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default AppRouter;

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path="/:url" element={<ShortenUrlPage />} />
    </Routes>
  );
};
