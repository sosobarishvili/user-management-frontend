import React from 'react'
import bgImage from '../assets/background.jpg'

const SideImage = () => {
  return (
    <div
      className="hidden md:block md:w-1/2 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
  );
};

export default SideImage