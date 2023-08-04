import React from 'react';
import HeroSection from './hero-section';
import ScrollToTop from "react-scroll-to-top";
import PastEvents from './past-events';

const Events: React.FC = () => (
  <div>
    <ScrollToTop smooth className="scroll-to-top"/>
    <HeroSection />
    <PastEvents />
  </div>
);

export default Events;