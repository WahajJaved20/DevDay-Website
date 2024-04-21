import React from 'react';
import { devday } from '../assets';
function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full bg-white w-20 h-20 border border-gray-200 flex items-center justify-center">
        <img className="mx-auto" src={devday} alt="Your Website Logo" />
      </div>
    </div>
  );
}

export default LoadingScreen;
