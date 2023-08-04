import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { Home, About, Contact, Events, Resources } from "../pages";

const AppRoutes: React.FC = () => (
  <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default AppRoutes;
