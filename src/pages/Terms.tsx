import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Terms: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="relative bg-[#3A86FF] dark:bg-[#343A40] py-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Terms and Conditions"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mt-6 text-xl text-gray-300 dark:text-gray-200 max-w-3xl mx-auto">
            These Terms & Conditions govern your use of PetXpress services. By accessing or using our services, you agree to be bound by these Terms, our Privacy Policy, and any other guidelines we provide.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 md:p-8`}>
          <div className="prose max-w-none">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>1. Acceptance of Terms</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              By using PetXpress services, including pet shipping, tracking, and customer support, you acknowledge and agree to comply with all applicable terms, conditions, and policies.
            </p>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>2. Service Description</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              PetXpress offers global pet logistics solutions, including:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>International and domestic pet transportation</li>
              <li>Real-time tracking and journey updates</li>
              <li>Customs documentation assistance</li>
              <li>Travel crate rental and preparation</li>
              <li>End-to-end pet relocation services</li>
              <li>Customer care and travel support</li>
            </ul>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>3. User Responsibilities</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              By using our services, you agree to:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Provide accurate and truthful information regarding your pet and shipment</li>
              <li>Follow all applicable pet travel laws and import/export regulations</li>
              <li>Maintain the confidentiality of account login credentials</li>
              <li>Avoid any misuse of our services or systems</li>
              <li>Pay applicable service fees in full and on time</li>
            </ul>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>4. Shipping Policies</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              All shipments are subject to:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Quoted rates, fees, and taxes</li>
              <li>Estimated delivery times (not guaranteed)</li>
              <li>Crate size, weight, and health certification requirements</li>
              <li>Restrictions on certain animal species or breeds</li>
              <li>Compliance with airline and international travel laws</li>
            </ul>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 font-semibold`}>
              Note: Delays may occur due to customs, veterinary checks, weather, or airline operations beyond our control.
            </p>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>5. Liability Disclaimer</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              To the maximum extent permitted by law, PetXpress is not liable for:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Delays caused by customs, authorities, or unforeseen events</li>
              <li>Any injury or health issues not caused by PetXpress negligence</li>
              <li>Incorrect information or documentation provided by the user</li>
              <li>Failures caused by third-party transport partners</li>
            </ul>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>6. Intellectual Property</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              All PetXpress branding, logos, website content, and service materials are the intellectual property of PetXpress or its licensors and are protected by copyright and trademark laws.
            </p>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>7. Termination of Service</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              We may suspend or terminate service to any user who:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Violates these Terms</li>
              <li>Submits false or fraudulent information</li>
              <li>Attempts to harm or misuse our services</li>
            </ul>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>8. Modifications</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              PetXpress reserves the right to update these Terms at any time. Your continued use of our services constitutes acceptance of the updated Terms.
            </p>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>9. Contact Information</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              For questions or concerns regarding these Terms & Conditions, please{' '}
              <Link to="/contact" className={`${isDarkMode ? 'text-[#8338EC] hover:text-[#48CAE4]' : 'text-[#3A86FF] hover:text-[#48CAE4]'}`}>
                contact us
              </Link>
              .
            </p>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 