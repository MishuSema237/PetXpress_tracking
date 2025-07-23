import React from 'react';
import logo from '../assets/logo.png';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className=" px-2 rounded-lg flex items-center">
      <img src={logo} alt="PetXpress Logo" className="h-10 sm:h-12 mr-2" />
        <span className="text-primary-purple dark:text-white font-bold text-lg sm:text-2xl tracking-tighter">Pet</span>
        <span className=" dark:text-primary-purple text-[#18a1f6] font-extrabold text-lg sm:text-2xl tracking-tighter">X</span>
        <span className="text-primary-purple dark:text-white font-bold text-lg sm:text-2xl tracking-tighter">press</span>
      </div>
      
    </div>
  );
};

export default Logo; 