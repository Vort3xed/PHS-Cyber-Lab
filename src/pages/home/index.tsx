import React from "react";
import BlogsSection from "./blogs-section";
import HeroSection from "./hero-section";
import WhatWeDoSection from "./who-we-are-section";
import ScrollToTop from "react-scroll-to-top";

const Home: React.FC = () => (
  <div>
    <ScrollToTop smooth className="scroll-to-top"/>
    <HeroSection />
    <WhatWeDoSection />
    <BlogsSection />
  </div>
);

export default Home;
