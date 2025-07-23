import React from 'react';
import { FaUsers, FaChartLine, FaShieldAlt, FaHandshake, FaHeadset, FaGlobe, FaTrophy, FaAward, FaCheckCircle, FaStar, FaStarHalf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Icon from '../components/icons/Icon';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedCard from '../components/animations/AnimatedCard';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="min-h-screen bg-neutral-white dark:bg-slate-800">
      {/* Hero Section */}
      <div className="relative bg-primary-blue dark:bg-neutral-slate py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern logistics facility"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-neutral-white dark:text-accent-lavender max-w-3xl mx-auto">
            From humble beginnings to global logistics leader, we've been revolutionizing the shipping industry since 2020.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 bg-neutral-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white sm:text-4xl">
                Our Journey
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-grey-300 dark:text-accent-lavender">
                Founded in 2020, PetXpress began with a simple mission: to make shipping and tracking accessible to everyone. What started as a small tracking service has grown into a comprehensive logistics platform serving customers worldwide.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-blue dark:bg-primary-purple text-neutral-white">
                      <Icon icon={FaGlobe} size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Global Expansion</h3>
                    <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                      From our first office in New York, we've expanded to serve over 150 countries with local expertise and global standards.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-blue dark:bg-primary-purple text-neutral-white">
                      <Icon icon={FaChartLine} size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Innovation</h3>
                    <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                      We've continuously invested in technology to provide real-time tracking and seamless shipping experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Logistics operations"
                className="rounded-lg shadow-md dark:shadow-primary-purple"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-neutral-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">Our Values</h2>
            <p className="mt-4 text-lg text-grey-300 dark:text-accent-lavender">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaShieldAlt} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Reliability</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                We're committed to delivering on our promises with consistent, dependable service.
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaHandshake} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Trust</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Building lasting relationships through transparency and honest communication.
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="text-primary-blue dark:text-primary-purple mb-4">
                <Icon icon={FaHeadset} size={32} />
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Customer Focus</h3>
              <p className="mt-2 text-base text-grey-300 dark:text-accent-lavender">
                Your satisfaction is our priority, with dedicated support and personalized solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-neutral-white dark:bg-primary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">Our Achievements</h2>
            <p className="mt-4 text-lg text-grey-300 dark:text-accent-lavender">
              Recognition for our commitment to excellence
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="text-4xl font-bold text-primary-blue dark:text-neutral-white">150+</div>
              </div>
              <div className="mt-2 text-sm text-grey-300 dark:text-accent-lavender">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="text-4xl font-bold text-primary-blue dark:text-neutral-white">50k+</div>
              </div>
              <div className="mt-2 text-sm text-grey-300 dark:text-accent-lavender">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="text-4xl font-bold text-primary-blue dark:text-neutral-white">99%</div>
              </div>
              <div className="mt-2 text-sm text-grey-300 dark:text-accent-lavender">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="text-4xl font-bold text-primary-blue dark:text-neutral-white">24/7</div>
              </div>
              <div className="mt-2 text-sm text-grey-300 dark:text-accent-lavender">Support Available</div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-blue dark:bg-primary-purple text-neutral-white">
                  <Icon icon={FaTrophy} size={32} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white text-center">Best Logistics Provider 2023</h3>
              <p className="mt-2 text-sm text-grey-300 dark:text-accent-lavender text-center">
                Awarded by Global Logistics Association
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-blue dark:bg-primary-purple text-neutral-white">
                  <Icon icon={FaAward} size={32} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white text-center">Innovation Excellence</h3>
              <p className="mt-2 text-sm text-grey-300 dark:text-accent-lavender text-center">
                Recognized for technological advancement
              </p>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-blue dark:bg-primary-purple text-neutral-white">
                  <Icon icon={FaUsers} size={32} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white text-center">Customer Satisfaction</h3>
              <p className="mt-2 text-sm text-grey-300 dark:text-accent-lavender text-center">
                Highest rated customer service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-neutral-white dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-grey-300 dark:text-accent-lavender">
              Real experiences from our valued customers
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 1 */}
            <AnimatedCard animation="slide" delay="0ms">
              <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple p-8 h-full">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Sarah Johnson</h3>
                    <p className="text-sm text-grey-300 dark:text-accent-lavender">Pet Owner, USA</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-grey-300 dark:text-accent-lavender">5.0</span>
                </div>
                <p className="text-grey-200 dark:text-neutral-300">
                  "My dog flew from NYC to Paris safely. I watched him travel the entire way! This team genuinely cares."
                </p>
              </div>
            </AnimatedCard>
            {/* 2 */}
            <AnimatedCard animation="slide" delay="200ms">
              <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple p-8 h-full">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="David Chen" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">David Chen</h3>
                    <p className="text-sm text-grey-300 dark:text-accent-lavender">Animal Rescue Director</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStarHalf className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-grey-300 dark:text-accent-lavender">3.5</span>
                </div>
                <p className="text-grey-200 dark:text-neutral-300">
                  "We've transported over 80 rescue pets with PetXpress. Reliable, friendly, and totally transparent."
                </p>
              </div>
            </AnimatedCard>
            {/* 3 */}
            <AnimatedCard animation="slide" delay="400ms">
              <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple p-8 h-full">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emily Martinez" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Emily Martinez</h3>
                    <p className="text-sm text-grey-300 dark:text-accent-lavender">Breeder & Trainer</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-grey-300 dark:text-accent-lavender">4.0</span>
                </div>
                <p className="text-grey-200 dark:text-neutral-300">
                  "Their boarding and documentation support took away all my stress. I recommend them to all breeders."
                </p>
              </div>
            </AnimatedCard>
            {/* 4 */}
            <AnimatedCard animation="slide" delay="600ms">
              <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple p-8 h-full">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Carlos Rivera" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Carlos Rivera</h3>
                    <p className="text-sm text-grey-300 dark:text-accent-lavender">Pet Parent, Spain</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-grey-300 dark:text-accent-lavender">5.0</span>
                </div>
                <p className="text-grey-200 dark:text-neutral-300">
                  "PetXpress made our move from Madrid to Sydney stress-free for both us and our cat. The live tracking was a game changer!"
                </p>
              </div>
            </AnimatedCard>
            {/* 5 */}
            <AnimatedCard animation="slide" delay="800ms">
              <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple p-8 h-full">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/22.jpg" alt="Priya Singh" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">Priya Singh</h3>
                    <p className="text-sm text-grey-300 dark:text-accent-lavender">Pet Parent, India</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStarHalf className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-grey-300 dark:text-accent-lavender">4.5</span>
                </div>
                <p className="text-grey-200 dark:text-neutral-300">
                  "The team handled all the paperwork and kept me updated at every step. My puppy arrived happy and healthy!"
                </p>
              </div>
            </AnimatedCard>
            {/* 6 */}
            <AnimatedCard animation="slide" delay="1000ms">
              <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple p-8 h-full">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/77.jpg" alt="James Lee" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white">James Lee</h3>
                    <p className="text-sm text-grey-300 dark:text-accent-lavender">Pet Owner, Australia</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                    <FaStar className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-grey-300 dark:text-accent-lavender">5.0</span>
                </div>
                <p className="text-grey-200 dark:text-neutral-300">
                  "I was nervous about sending my dog overseas, but PetXpress made it easy and safe. Highly recommend for international moves!"
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Strategic Partnerships Section */}
      <div className="py-16 bg-neutral-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">Strategic Partnerships</h2>
            <p className="mt-4 text-lg text-grey-300 dark:text-accent-lavender">
              Building a global network of trusted partners to deliver excellence
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary-blue dark:text-neutral-white mb-4">Global Carrier Network</h3>
              <p className="text-grey-300 dark:text-accent-lavender mb-6">
                Our partnerships with major carriers like FedEx, UPS, DHL, and USPS enable us to provide comprehensive shipping solutions worldwide. These strategic alliances ensure reliable delivery services and real-time tracking capabilities across the globe.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['FedEx', 'UPS', 'DHL', 'USPS'].map((carrier, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon icon={FaCheckCircle} size={16} className="text-primary-blue dark:text-primary-purple" />
                    <span className="text-sm text-grey-300 dark:text-accent-lavender">{carrier}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary-blue dark:text-neutral-white mb-4">Technology Integration</h3>
              <p className="text-grey-300 dark:text-accent-lavender mb-6">
                We've integrated with leading tracking technology providers like AfterShip, 17TRACK, and TrackingMore to offer advanced tracking features and analytics. This enables us to provide detailed shipment insights and enhanced customer experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['AfterShip', '17TRACK', 'TrackingMore', 'ParcelPanel'].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon icon={FaCheckCircle} size={16} className="text-primary-blue dark:text-primary-purple" />
                    <span className="text-sm text-grey-300 dark:text-accent-lavender">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary-blue dark:text-neutral-white mb-4">Asian Market Coverage</h3>
              <p className="text-grey-300 dark:text-accent-lavender mb-6">
                Our partnerships with China Post, 4PX, and Beijing Yanwen Logistics provide extensive coverage in the Asian market, ensuring reliable shipping and tracking services throughout the region.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['China Post', '4PX', 'Beijing Yanwen', 'China Postal Express'].map((partner, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon icon={FaCheckCircle} size={16} className="text-primary-blue dark:text-primary-purple" />
                    <span className="text-sm text-grey-300 dark:text-accent-lavender">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary-blue dark:text-neutral-white mb-4">Innovation Partners</h3>
              <p className="text-grey-300 dark:text-accent-lavender mb-6">
                Working with innovative companies like Detrack Systems, Sendcloud, and FreightPOP to bring cutting-edge logistics solutions and automation to our customers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Detrack Systems', 'Sendcloud', 'FreightPOP'].map((partner, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon icon={FaCheckCircle} size={16} className="text-primary-blue dark:text-primary-purple" />
                    <span className="text-sm text-grey-300 dark:text-accent-lavender">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 