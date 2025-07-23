import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedCard from '../components/animations/AnimatedCard';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How can I track my shipment?",
      answer: "You can track your pet's journey in real time using the tracking link provided after booking. We offer regular status updates throughout the travel process."
    },
    {
      question: "What shipping services do you offer?",
      answer: "PetXpress provides a range of pet transport services, including:\n• Domestic and international pet relocation\n• Airport-to-door and door-to-door delivery\n• Customized travel arrangements for various species\n• Veterinary and documentation support"
    },
    {
      question: "How are shipping rates calculated?",
      answer: "Rates are based on factors including destination, pet size and breed, crate dimensions, required documentation, and additional services like health checks or airport pickup."
    },
    {
      question: "What is the estimated delivery time?",
      answer: "Delivery times depend on the origin and destination, flight availability, and customs clearance. We provide estimated timelines at the time of booking, but actual transit may vary due to unforeseen delays."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! PetXpress specializes in global pet transport, covering over 150 countries. We handle customs, veterinary requirements, and international travel regulations."
    },
    {
      question: "What items are prohibited for shipping?",
      answer: "We do not transport:\n• Sedated animals\n• Wild or endangered species without proper permits\n• Animals with incomplete documentation\n• Non-compliant carriers/crates\nPlease consult with our team for a complete list."
    },
    {
      question: "How do I prepare my package for shipping?",
      answer: "Ensure your pet is healthy, has all necessary vaccinations, and is accustomed to its travel crate. We'll guide you through documentation, crate sizing, and comfort tips to make the journey safe and smooth."
    },
    {
      question: "What if my package is lost or damaged?",
      answer: "Although rare, if an issue arises, contact us immediately. We will coordinate with airlines and partners to locate your pet and resolve any problems. Insurance options are also available for added peace of mind."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative ${isDarkMode ? 'bg-[#1a0e0a]' : 'bg-[#351c15]'} py-16`}>
        <div className="absolute inset-0">
          <div className={`w-full h-full ${isDarkMode ? 'opacity-20' : 'opacity-30'} bg-pattern`}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about pet transportation
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <AnimatedCard key={index} animation="fade" delay={`${index * 100}ms`}>
              <div 
                className={`rounded-lg overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-white hover:bg-gray-50'
                } shadow-lg transition-colors duration-200`}
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className={`text-left font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {item.question}
                  </h3>
                  <span className={`ml-4 flex-shrink-0 ${isDarkMode ? 'text-[#ffbe03]' : 'text-[#351c15]'}`}>
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className={`px-6 pb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <p className="whitespace-pre-line">{item.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Contact Section */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-12`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Still have questions?
            </h2>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our customer service team is here to help you with any questions you may have.
            </p>
            <a
              href="/contact"
              className={`inline-flex items-center px-6 py-3 rounded-md text-base font-medium ${
                isDarkMode 
                  ? 'bg-[#ffbe03] text-gray-900 hover:bg-[#e6a902]' 
                  : 'bg-[#351c15] text-white hover:bg-[#4a2a1f]'
              } transition-colors duration-200`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 