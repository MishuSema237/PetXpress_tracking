import React, { useEffect } from 'react';
import { FaTruck, FaPlane, FaShip, FaBox, FaGlobe, FaShieldAlt, FaClock, FaMapMarkerAlt, FaShippingFast, FaCheckCircle, FaWarehouse, FaChartLine, FaHandshake, FaAward, FaChevronLeft, FaChevronRight, FaHome, FaDochub, FaFile, FaFileAlt } from 'react-icons/fa';
import Icon from '../components/icons/Icon';
import AnimatedCard from '../components/animations/AnimatedCard';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/animations.css';

const Services: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [activeCard, setActiveCard] = React.useState<string | null>(null);

  useEffect(() => {
    // Check for hash in URL and scroll to the corresponding service
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setActiveCard(id);
          element.classList.add('animate-pulse');
          setTimeout(() => {
            element.classList.remove('animate-pulse');
          }, 2000);
        }
      }, 500);
    }
  }, []);

  const handleCardHover = (id: string) => {
    setActiveCard(id);
  };

  return (
    <div className="min-h-screen bg-neutral-white dark:bg-slate-800">
      {/* Hero Section */}
      <div className="relative bg-primary-blue dark:bg-neutral-slate py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern logistics facility"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-neutral-white dark:text-accent-lavender max-w-3xl mx-auto">
            We offer complete pet logistics solutions tailored for international and domestic travel. Whether you're relocating or shipping a pet commercially, we provide reliability and peace of mind.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-neutral-white dark:bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue dark:text-primary-purple">24/7</div>
              <div className="mt-2 text-sm text-grey-300 dark:text-accent-lavender">Support Available</div>
              <div className="mt-1 text-xs text-grey-300 dark:text-accent-lavender">We're always here for you — day or night.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue dark:text-primary-purple">150+</div>
              <div className="mt-2 text-sm text-grey-300 dark:text-accent-lavender">Countries Served</div>
              <div className="mt-1 text-xs text-grey-300 dark:text-accent-lavender">Global coverage with local expertise and trusted partners.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue dark:text-primary-purple">99%</div>
              <div className="mt-2 text-sm text-grey-300 dark:text-accent-lavender">On-Time Delivery</div>
              <div className="mt-1 text-xs text-grey-300 dark:text-accent-lavender">Reliable, efficient transport for your beloved companions.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue dark:text-primary-purple">50k+</div>
              <div className="mt-2 text-sm text-grey-300 dark:text-accent-lavender">Happy Clients</div>
              <div className="mt-1 text-xs text-grey-300 dark:text-accent-lavender">Trusted by families, breeders, and businesses worldwide.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-16 bg-neutral-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-grey-300 dark:text-accent-lavender">
                We offer complete pet logistics solutions tailored for international and domestic travel. Whether you're relocating or shipping a pet commercially, we provide reliability and peace of mind.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-blue dark:bg-primary-purple text-neutral-white">
                      <Icon icon={FaGlobe} size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Global Network</h3>
                    <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                      Our reach spans 150+ countries, supported by trusted local partners and global compliance expertise.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-blue dark:bg-primary-purple text-neutral-white">
                      <Icon icon={FaShippingFast} size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Fast & Reliable</h3>
                    <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                      We use advanced tracking and time-sensitive routing to ensure pets arrive safely and on schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Logistics operations"
                className="rounded-lg shadow-md dark:shadow-primary-purple"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="bg-neutral-white dark:bg-primary-purple py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">Our Service Offerings</h2>
            <p className="mt-4 text-lg text-grey-300 dark:text-accent-lavender">
              Explore our full range of tailored transport solutions:
            </p>
          </div>
          <div className="mt-12 relative">
            {/* Mobile Slideshow */}
            <div className="lg:hidden">
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  <AnimatedCard animation="slide" delay="0ms" className="w-full flex-shrink-0">
                                          <div
                        id="freight-mode-air-freight-mobile"
                        className={`bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 transition-all duration-300 transform hover:shadow-xl ${
                          activeCard === 'freight-mode-air-freight-mobile' ? 'ring-2 ring-primary-purple shadow-lg' : ''
                        }`}
                        onTouchStart={() => handleCardHover('freight-mode-air-freight-mobile')}
                        onTouchEnd={() => handleCardHover('')}
                      >
                      <div className="text-primary-blue dark:text-primary-purple mb-4">
                        <Icon icon={FaPlane} size={32} />
                      </div>
                      <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Air Freight</h3>
                      <p className="mt-2 text-base text-grey-600 dark:text-accent-lavender">
                        Fast and secure pet air transport with premium care.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                          alt="Air Freight"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-grey-600 dark:text-accent-lavender">
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Express delivery for urgent travel
                        </li>
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Worldwide coverage
                        </li>
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Real-time journey tracking
                        </li>
                      </ul>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard animation="slide" delay="200ms" className="w-full flex-shrink-0">
                                          <div
                        id="freight-mode-sea-freight-mobile"
                        className={`bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 transition-all duration-300 transform hover:shadow-xl ${
                          activeCard === 'freight-mode-sea-freight-mobile' ? 'ring-2 ring-primary-purple shadow-lg' : ''
                        }`}
                        onTouchStart={() => handleCardHover('freight-mode-sea-freight-mobile')}
                        onTouchEnd={() => handleCardHover('')}
                      >
                      <div className="text-primary-blue dark:text-primary-purple mb-4">
                        <Icon icon={FaShip} size={32} />
                      </div>
                      <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Sea Freight (for supporting pet supplies)</h3>
                      <p className="mt-2 text-base text-grey-600 dark:text-accent-lavender">
                        Affordable shipping for large or non-urgent items such as crates, food, or accessories.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                          alt="Sea Freight"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-grey-600 dark:text-accent-lavender">
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          FCL and LCL options
                        </li>
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Port-to-port logistics
                        </li>
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Full customs support
                        </li>
                      </ul>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard animation="slide" delay="400ms" className="w-full flex-shrink-0">
                                          <div
                        id="freight-mode-land-freight-mobile"
                        className={`bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 transition-all duration-300 transform hover:shadow-xl ${
                          activeCard === 'freight-mode-land-freight-mobile' ? 'ring-2 ring-primary-purple shadow-lg' : ''
                        }`}
                        onTouchStart={() => handleCardHover('freight-mode-land-freight-mobile')}
                        onTouchEnd={() => handleCardHover('')}
                      >
                      <div className="text-primary-blue dark:text-primary-purple mb-4">
                        <Icon icon={FaTruck} size={32} />
                      </div>
                      <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Ground Transport</h3>
                      <p className="mt-2 text-base text-grey-600 dark:text-accent-lavender">
                        Safe, door-to-door delivery from airport to home — or anywhere in between.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                          alt="Ground Transport"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-grey-600 dark:text-accent-lavender">
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Scheduled pickups and drop-offs
                        </li>
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Local and long-distance routes
                        </li>
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          GPS-enabled tracking
                        </li>
                      </ul>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard animation="slide" delay="600ms" className="w-full flex-shrink-0">
                                          <div
                        id="freight-mode-warehousing-mobile"
                        className={`bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 transition-all duration-300 transform hover:shadow-xl ${
                          activeCard === 'freight-mode-warehousing-mobile' ? 'ring-2 ring-primary-purple shadow-lg' : ''
                        }`}
                        onTouchStart={() => handleCardHover('freight-mode-warehousing-mobile')}
                        onTouchEnd={() => handleCardHover('')}
                      >
                      <div className="text-primary-blue dark:text-primary-purple mb-4">
                        <Icon icon={FaHome} size={32} />
                      </div>
                      <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Warehousing & Holding</h3>
                      <p className="mt-2 text-base text-grey-600 dark:text-accent-lavender">
                        Short-term secure storage for pets or supplies awaiting transfer or clearance.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                          alt="Warehousing"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-grey-600 dark:text-accent-lavender">
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Climate-controlled holding areas
                        </li>
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Health monitoring and feeding schedules
                        </li>
                        <li className="flex items-center">
                          <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                          Real-time inventory status
                        </li>
                      </ul>
                    </div>
                  </AnimatedCard>
                </div>
              </div>
              {/* Navigation Buttons */}
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 3))}
                  className="p-2 rounded-full bg-primary-blue dark:bg-primary-purple text-neutral-white hover:bg-grey-300 dark:hover:bg-accent-lavender transition-colors"
                  aria-label="Previous slide"
                >
                  <Icon icon={FaChevronLeft} size={20} />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 0))}
                  className="p-2 rounded-full bg-primary-blue dark:bg-primary-purple text-neutral-white hover:bg-grey-300 dark:hover:bg-accent-lavender transition-colors"
                  aria-label="Next slide"
                >
                  <Icon icon={FaChevronRight} size={20} />
                </button>
              </div>
              {/* Slide Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index
                        ? 'bg-primary-blue dark:bg-primary-purple'
                        : 'bg-neutral-gray-300 dark:bg-neutral-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-8">
              <AnimatedCard animation="slide" delay="0ms">
                <div
                  id="freight-mode-air-freight"
                  className={`bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    activeCard === 'freight-mode-air-freight' ? 'ring-2 ring-primary-purple shadow-lg' : ''
                  }`}
                  onMouseEnter={() => handleCardHover('freight-mode-air-freight')}
                  onMouseLeave={() => handleCardHover('')}
                >
                  <div className="text-primary-blue dark:text-primary-purple mb-4">
                    <Icon icon={FaPlane} size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Air Freight</h3>
                  <p className="mt-2 text-base text-grey-600 dark:text-accent-lavender">
                    Fast and secure pet air transport with premium care.
                  </p>
                  <div className="mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Air Freight"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-grey-600 dark:text-accent-lavender">
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Express delivery for urgent travel
                    </li>
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Worldwide coverage
                    </li>
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Real-time journey tracking
                    </li>
                  </ul>
                </div>
              </AnimatedCard>
              <AnimatedCard animation="slide" delay="200ms">
                <div
                  id="freight-mode-sea-freight"
                  className={`bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    activeCard === 'freight-mode-sea-freight' ? 'ring-2 ring-primary-purple shadow-lg' : ''
                  }`}
                  onMouseEnter={() => handleCardHover('freight-mode-sea-freight')}
                  onMouseLeave={() => handleCardHover('')}
                >
                  <div className="text-primary-blue dark:text-primary-purple mb-4">
                    <Icon icon={FaShip} size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Sea Freight (for supporting pet supplies)</h3>
                  <p className="mt-2 text-base text-grey-600 dark:text-accent-lavender">
                    Affordable shipping for large or non-urgent items such as crates, food, or accessories.
                  </p>
                  <div className="mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Sea Freight"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-grey-600 dark:text-accent-lavender">
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      FCL and LCL options
                    </li>
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Port-to-port logistics
                    </li>
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Full customs support
                    </li>
                  </ul>
                </div>
              </AnimatedCard>
              <AnimatedCard animation="slide" delay="400ms">
                <div
                  id="freight-mode-land-freight"
                  className={`bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    activeCard === 'freight-mode-land-freight' ? 'ring-2 ring-primary-purple shadow-lg' : ''
                  }`}
                  onMouseEnter={() => handleCardHover('freight-mode-land-freight')}
                  onMouseLeave={() => handleCardHover('')}
                >
                  <div className="text-primary-blue dark:text-primary-purple mb-4">
                    <Icon icon={FaTruck} size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Ground Transport</h3>
                  <p className="mt-2 text-base text-grey-600 dark:text-accent-lavender">
                    Safe, door-to-door delivery from airport to home — or anywhere in between.
                  </p>
                  <div className="mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Ground Transport"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-grey-600 dark:text-accent-lavender">
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Scheduled pickups and drop-offs
                    </li>
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Local and long-distance routes
                    </li>
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      GPS-enabled tracking
                    </li>
                  </ul>
                </div>
              </AnimatedCard>
              <AnimatedCard animation="slide" delay="600ms">
                <div
                  id="freight-mode-warehousing"
                  className={`bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    activeCard === 'freight-mode-warehousing' ? 'ring-2 ring-primary-purple shadow-lg' : ''
                  }`}
                  onMouseEnter={() => handleCardHover('freight-mode-warehousing')}
                  onMouseLeave={() => handleCardHover('')}
                >
                  <div className="text-primary-blue dark:text-primary-purple mb-4">
                    <Icon icon={FaHome} size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Warehousing & Holding</h3>
                  <p className="mt-2 text-base text-grey-600 dark:text-accent-lavender">
                    Short-term secure storage for pets or supplies awaiting transfer or clearance.
                  </p>
                  <div className="mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Warehousing"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-grey-600 dark:text-accent-lavender">
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Climate-controlled holding areas
                    </li>
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Health monitoring and feeding schedules
                    </li>
                    <li className="flex items-center">
                      <Icon icon={FaCheckCircle} size={16} className="dark:text-primary-purple text-primary-blue mr-2 " />
                      Real-time inventory status
                    </li>
                  </ul>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-neutral-white dark:bg-neutral-slate py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">Our Global Partners</h2>
            <p className="mt-4 text-lg text-grey-600 dark:text-accent-lavender">
              We collaborate with the world's leading logistics and shipping companies to provide comprehensive tracking solutions
            </p>
          </div>
          <div className="mt-12">
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {[
                  { name: 'FedEx', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/fedex.svg' },
                  { name: 'Aramex', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/aramex.svg' },
                  { name: 'Japan Post', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/japan-post.jpg' },
                  { name: 'DTDC', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/Others/dtdc.svg' },
                  { name: 'USPS', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/usps-usa.svg' },
                  { name: 'Poste Italiane', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/Others/poste-italiane.svg' },
                  { name: 'La Poste', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/la-poste-colissimo-france.svg' },
                  { name: 'UPS', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/ups.svg' },
                  { name: 'DPD', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/dpd.svg' },
                  { name: 'GLS', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/gls.svg' },
                  { name: 'PostNL', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/postnl-parcel-service-tracking.png' },
                ].map((partner, index) => (
                  <div key={index} className="flex-shrink-0 mx-8">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless scrolling */}
                {[
                  { name: 'FedEx', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/fedex.svg' },
                  { name: 'Aramex', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/aramex.svg' },
                  { name: 'Japan Post', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/japan-post.jpg' },
                  { name: 'DTDC', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/Others/dtdc.svg' },
                  { name: 'USPS', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/usps-usa.svg' },
                  { name: 'Poste Italiane', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/Others/poste-italiane.svg' },
                  { name: 'La Poste', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/la-poste-colissimo-france.svg' },
                  { name: 'UPS', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/ups.svg' },
                  { name: 'DPD', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/dpd.svg' },
                  { name: 'GLS', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/gls.svg' },
                  { name: 'PostNL', logo: 'https://cdn.ship24.com/assets/images/db/couriers/legacy-logo/postnl-parcel-service-tracking.png' },
                ].map((partner, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-grey-600 dark:text-accent-lavender">
              Our partnerships enable us to provide real-time tracking and shipping solutions across the globe
            </p>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-neutral-white dark:bg-neutral-slate py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">Additional Services</h2>
            <p className="mt-4 text-lg text-grey-600 dark:text-accent-lavender">
              To support your complete logistics journey:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaShippingFast} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Express Delivery</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Urgent transport options for short timelines
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaGlobe} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">International Shipping</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Expert customs and compliance handling
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaFileAlt} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Documentation Support</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Pet passports, health certificates, and permits
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-neutral-white dark:bg-neutral-slate py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">Why Choose Us</h2>
            <p className="mt-4 text-lg text-grey-600 dark:text-accent-lavender">
              We're more than a logistics company — we're pet care specialists on a mission to deliver with heart.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaShieldAlt} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Secure Shipping</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                We ensure pets are handled with care, compassion, and advanced safety protocols throughout the journey.
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaClock} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">24/7 Customer Support</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Questions or concerns? Our dedicated support team is always just a call or click away.
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaMapMarkerAlt} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Global Coverage</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Wherever your pet needs to go, we've got the route and the right partners to get them there.
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaChartLine} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Advanced Logistics Tools</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Stay informed with analytics and tracking to monitor your pet's travel in real-time.
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaHandshake} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Custom Transport Solutions</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Whether it's a rare breed, a family pet, or a commercial transport — we tailor the solution to your needs.
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaAward} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Industry Expertise</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                With years of global pet transport experience, we know how to navigate even the most complex journeys.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-blue dark:bg-neutral-slate">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-white sm:text-4xl">
                Ready to Ship?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-neutral-slate dark:text-accent-lavender">
                Get started with our comprehensive shipping solutions today.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-blue dark:text-neutral-slate bg-neutral-white hover:bg-grey-300 dark:bg-primary-purple dark:hover:bg-accent-lavender"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 