import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'animate.css';
import "./App.css";
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { routes } from './router/routes';
import Loader from './components/Loader';
import NotFound from './pages/404';
const App = () => {
  const location = useLocation();
  const isAuthPage = ['/auth/login', '/auth/register', '/auth/verify-otp', '/auth/reset-password', '/auth/role-selection', '/auth/verify-email', '/auth/forgot-password', '*'].includes(location.pathname);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const screenLoader = document.getElementsByClassName('screen_loader');
    if (screenLoader?.length) {
      screenLoader[0].classList.add('animate__fadeOut');
      setTimeout(() => {
        setShowLoader(false);
      }, 200);
    }
  }, []);

  return (
    <ThemeProvider>
    <>
      {showLoader && <Loader />} 

      {!isAuthPage && <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isAuthPage && <Footer />}
    </>
    </ThemeProvider>
  );
}

export default App;