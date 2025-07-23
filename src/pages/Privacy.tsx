import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Privacy: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="relative bg-[#3A86FF] dark:bg-[#343A40] py-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Privacy"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl text-gray-300 dark:text-gray-200 max-w-3xl mx-auto">
            At PetXpress, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information in connection with our global pet transportation services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 md:p-8`}>
          <div className="prose max-w-none">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>Information We Collect</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              We collect the following types of information that you provide directly to us:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Name and contact details</li>
              <li>Pet travel details and documentation</li>
              <li>Shipping and delivery addresses</li>
              <li>Payment information</li>
              <li>Travel preferences and special care instructions</li>
              <li>Communication and service history</li>
            </ul>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>How We Use Your Information</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              We use your information to:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Arrange and manage pet transport logistics</li>
              <li>Provide real-time updates and communication about your pet's journey</li>
              <li>Ensure safe, compliant travel according to international pet transport regulations</li>
              <li>Enhance and improve our service quality</li>
              <li>Send essential updates, alerts, and service communications</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>Information Sharing</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              We may share your information with:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Licensed pet transport partners, airlines, and logistics providers</li>
              <li>Payment processors for secure transactions</li>
              <li>Authorized service vendors supporting our operations</li>
              <li>Government authorities or legal entities when required by law</li>
            </ul>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 font-semibold`}>
              We never sell or rent your personal information.
            </p>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>Data Security</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              We use secure technologies and operational safeguards to protect your information from unauthorized access, misuse, or disclosure. All personal and pet-related data is handled with strict confidentiality.
            </p>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>Your Rights</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              You have the right to:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Request access to your personal information</li>
              <li>Update or correct inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Opt out of promotional communications at any time</li>
              <li>File a complaint with your local data protection authority</li>
            </ul>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>Cookies and Tracking</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Our website uses cookies and similar technologies to:
            </p>
            <ul className={`list-disc pl-6 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Enhance user experience</li>
              <li>Analyze site traffic and usage</li>
              <li>Enable secure and personalized interactions</li>
            </ul>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              You can manage cookie settings through your browser preferences.
            </p>

            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#8338EC]' : 'text-[#343A40]'} mb-4`}>Contact Us</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              If you have questions or concerns about this Privacy Policy or how your information is handled, please{' '}
              <Link to="/contact" className={`${isDarkMode ? 'text-[#8338EC] hover:text-[#6a25c2]' : 'text-[#343A40] hover:text-[#4a2a1f]'}`}>
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

export default Privacy; 