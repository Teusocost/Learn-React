import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes from react-router-dom

import App from './App';
import Personagem from './Personagem';

export default function AppRoutes() {
  return (
    <Router> {/* Wrap your Routes with Router */}
      <Routes>
        <Route exact path="/" element={<App />} /> {/* Use 'element' prop instead of 'component' */}
        <Route path="/personagem/:id" element={<Personagem />} /> {/* Use 'element' prop instead of 'component' */}
      </Routes>
    </Router>
  );
}
