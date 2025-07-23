import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';
import Icon from './icons/Icon';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav ref={menuRef} className={`${isDarkMode ? 'bg-[#1a0e0a] border-gray-800' : 'bg-white border-gray-200'} shadow-lg border-b sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div onClick={() => handleNavigation('/')} className="flex-shrink-0 cursor-pointer">
              <Logo />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => handleNavigation('/')} 
                className={`${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-primary-purple hover:bg-[#430c4b56]' 
                    : 'text-gray-700 hover:text-primary-blue hover:bg-gray-100'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/about')} 
                className={`${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-primary-purple hover:bg-[#430c4b56]' 
                    : 'text-gray-700 hover:text-primary-blue hover:bg-gray-100'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/services')} 
                className={`${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-primary-purple hover:bg-[#430c4b56]' 
                    : 'text-gray-700 hover:text-primary-blue hover:bg-gray-100'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/track')} 
                className={`${
                  isDarkMode 
                    ? 'bg-primary-purple text-white hover:bg-primary-purple/60' 
                    : 'bg-primary-blue text-white hover:bg-primary-blue/60'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Track Package
              </button>
              <button 
                onClick={() => handleNavigation('/contact')} 
                className={`${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-primary-purple hover:bg-[#430c4b56]' 
                    : 'text-gray-700 hover:text-primary-blue hover:bg-gray-100'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-primary-purple hover:bg-[#430c4b56]' 
                  : 'text-gray-400 hover:text-primary-blue hover:bg-gray-100'
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Icon icon={isOpen ? FaTimes : FaBars} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg ${
            isDarkMode 
              ? 'bg-[#1a0e0a] border-t border-gray-800' 
              : 'bg-white border-t border-gray-200'
          }`}>
            <button 
              onClick={() => handleNavigation('/')} 
              className={`${
                isDarkMode 
                  ? 'text-gray-300 hover:text-primary-purple hover:bg-[#430c4b56]' 
                  : 'text-gray-700 hover:text-primary-blue hover:bg-gray-100'
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/about')} 
              className={`${
                isDarkMode 
                  ? 'text-gray-300 hover:text-primary-purple hover:bg-[#430c4b56]' 
                  : 'text-gray-700 hover:text-primary-blue hover:bg-gray-100'
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/services')} 
              className={`${
                isDarkMode 
                  ? 'text-gray-300 hover:text-primary-purple hover:bg-[#430c4b56]' 
                  : 'text-gray-700 hover:text-primary-blue hover:bg-gray-100'
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/track')} 
              className={`${
                isDarkMode 
                  ? 'bg-primary-purple text-white hover:bg-primary-blue' 
                  : 'bg-primary-blue text-white hover:bg-primary-purple'
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            >
              Track Package
            </button>
            <button 
              onClick={() => handleNavigation('/contact')} 
              className={`${
                isDarkMode 
                  ? 'text-gray-300 hover:text-primary-purple hover:bg-[#430c4b56]' 
                  : 'text-gray-700 hover:text-primary-blue hover:bg-gray-100'
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 