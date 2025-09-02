import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import NotFound from './NotFound';
import Workshop from './pages/Workshop';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import WorkshopsPage from './pages/WorkshopsPage';
import ContactPage from './pages/ContactPage/ContactPage.jsx';


function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <>
      {!shouldHideNavbar && <Header />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Workshop />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="border-t-2">
      <p className="text-center p-5 font-bold">Developed By <span><a href="https://yuktiyantra.in/" className="">YuktiYantra</a></span></p>

      </div>
    </>
  );
}


function App() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
        </BrowserRouter>
      </>
      );
}

      export default App;