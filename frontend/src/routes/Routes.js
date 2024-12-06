// src/routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Profile from '../pages/Profile'; // Adjust the path if necessary
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute'; // If you have protected routes

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Example of a protected route */}
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
