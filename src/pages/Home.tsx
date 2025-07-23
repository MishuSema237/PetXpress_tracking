import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaShip, FaTruck, FaWarehouse, FaUser, FaCheckCircle, FaBox, FaCreditCard, FaShippingFast, FaCheckDouble, FaStar, FaStarHalf, FaGlobe, FaAward, FaCertificate, FaMedal, FaHandshake, FaSearch, FaMapMarker, FaEnvelope, FaCalendar, FaBarcode, FaPhone, FaHome, FaPaw, FaMoneyBillWave, FaArrowRight, FaShieldAlt, FaHeadset, FaChartLine, FaClipboardCheck } from 'react-icons/fa';
import AnimatedCard from '../components/animations/AnimatedCard';
import Marquee from '../components/animations/Marquee';
import heroImage from '../assets/home_hero_image.jpg';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-white to-accent-lavender dark:from-neutral-slate dark:to-primary-purple">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-blue to-primary-purple dark:from-neutral-slate dark:to-primary-purple">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-neutral-slate opacity-50 dark:opacity-70"></div>
          <img
            src={heroImage}
            alt="Global Pet Transport"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-neutral-white sm:text-5xl md:text-6xl">
              Global Pet Transport & Tracking Solutions
            </h1>
            <p className="mt-3 max-w-xl mx-auto text-base text-neutral-white sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
              Compassionate, secure, and real-time pet delivery services across the globe. Whether it’s a tiny kitten or a large dog, we ensure every pet arrives safe, healthy, and on time.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/track"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-blue dark:text-neutral-white dark:hover:text-primary-purple bg-neutral-white dark:bg-primary-purple hover:bg-grey-300 dark:hover:bg-accent-lavender md:py-4 md:text-lg md:px-10"
                >
                  <FaPaw className="mr-2" /> Track Pet
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral-white bg-primary-blue dark:bg-transparent hover:bg-primary-purple dark:border-grey-300 dark:border-2 dark:hover:bg-grey-300 md:py-4 md:text-lg md:px-10"
                >
                  <FaHome className="mr-2" /> Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Marquee */}
      <div className="bg-primary-blue dark:bg-neutral-slate text-neutral-white py-2">
        <Marquee 
          text="🌟 Special Offer: 20% off your first international pet delivery! | Live GPS Pet Tracking | Certified Animal Handlers | 24/7 Support"
          className="text-lg font-medium"
        />
      </div>

      {/* Statistics Section */}
      <div className="py-12 bg-gradient-to-r from-primary-blue to-primary-purple dark:from-neutral-slate dark:to-primary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedCard animation="fade" delay="0ms">
              <div className="text-center text-neutral-white">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-xl">Countries Served</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="fade" delay="200ms">
              <div className="text-center text-neutral-white">
                <div className="text-4xl font-bold mb-2">19+</div>
                <div className="text-xl">Years of Pet Logistics Experience</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="fade" delay="400ms">
              <div className="text-center text-neutral-white">
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-xl">Pets Delivered</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="fade" delay="600ms">
              <div className="text-center text-neutral-white">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-xl">Pet Parent Satisfaction</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-neutral-white  dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedCard animation="slide" delay="0ms">
              <div className="relative p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple hover:shadow-md dark:hover:shadow-accent-lavender transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Global network"
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <div className="text-primary-blue dark:text-primary-purple mb-4 flex flex-row items-center">
                  <FaGlobe className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white uppercase">Global Reach</h3>

                </div>
                <p className="mt-2 text-grey-300 dark:text-accent-lavender">
                PetXpress connects families, breeders, and pet lovers across 150+ countries with trusted, worldwide pet transportation solutions.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="slide" delay="200ms">
              <div className="relative p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple hover:shadow-md dark:hover:shadow-accent-lavender transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Quality service"
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <div className="text-primary-blue dark:text-primary-purple mb-4 flex flex-row items-center">
                  <FaCheckCircle className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white uppercase">Safety First</h3>
                </div>
                <p className="mt-2 text-grey-300 dark:text-accent-lavender">
                Your pet’s well-being is our priority. We ensure secure, stress-free travel with the highest standards in care, safety, and punctuality.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="slide" delay="400ms">
              <div className="relative p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple hover:shadow-md dark:hover:shadow-accent-lavender transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Full service support"
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <div className="text-primary-blue dark:text-primary-purple mb-4 flex flex-row items-center">
                  <FaBox className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white uppercase">FULL-SERVICE SUPPORT</h3>
                </div>
                <p className="mt-2 text-grey-300 dark:text-accent-lavender">
                From international documentation to final delivery, we handle every detail of your pet’s journey — so you don’t have to.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="slide" delay="600ms">
              <div className="relative p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple hover:shadow-md dark:hover:shadow-accent-lavender transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Expert team"
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <div className="text-primary-blue dark:text-primary-purple mb-4 flex flex-row items-center">
                  <FaCheckDouble className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white uppercase">EXPERT TEAM</h3>
                </div>
                <p className="mt-2 text-grey-300 dark:text-accent-lavender">
                Our compassionate logistics specialists are trained in global pet travel to ensure every journey is handled with expertise and heart.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-neutral-white  dark:bg-primary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fade">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-grey-300 dark:text-accent-lavender">
                Comprehensive logistics solutions for all your shipping needs
              </p>
            </div>
          </AnimatedCard>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedCard animation="hover">
              <div className="relative p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-lg dark:shadow-primary-purple hover:shadow-xl dark:hover:shadow-accent-lavender transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-purple rounded-t-lg"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-primary-blue dark:bg-primary-purple bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <FaPlane className="h-10 w-10 text-primary-blue dark:text-primary-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-blue dark:text-neutral-white mb-3">Air Transport</h3>
                  <p className="text-grey-300 dark:text-accent-lavender">
                    Fast, airline-approved pet transport for international and time-sensitive moves.
                  </p>
                  <Link to="/services" className="mt-6 inline-flex items-center text-primary-blue dark:text-primary-purple font-medium hover:underline">
                    Learn More <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="hover">
              <div className="relative p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-lg dark:shadow-primary-purple hover:shadow-xl dark:hover:shadow-accent-lavender transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-purple rounded-t-lg"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-primary-blue dark:bg-primary-purple bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <FaShip className="h-10 w-10 text-primary-blue dark:text-primary-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-blue dark:text-neutral-white mb-3">Sea Relocation</h3>
                  <p className="text-grey-300 dark:text-accent-lavender">
                    Secure ocean-based transport for long-distance moves when time allows.
                  </p>
                  <Link to="/services" className="mt-6 inline-flex items-center text-primary-blue dark:text-primary-purple font-medium hover:underline">
                    Learn More <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="hover">
              <div className="relative p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-lg dark:shadow-primary-purple hover:shadow-xl dark:hover:shadow-accent-lavender transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-purple rounded-t-lg"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-primary-blue dark:bg-primary-purple bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <FaTruck className="h-10 w-10 text-primary-blue dark:text-primary-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-blue dark:text-neutral-white mb-3">Ground Transfer</h3>
                  <p className="text-grey-300 dark:text-accent-lavender">
                    Door-to-door van and shuttle services for pets traveling within the country.
                  </p>
                  <Link to="/services" className="mt-6 inline-flex items-center text-primary-blue dark:text-primary-purple font-medium hover:underline">
                    Learn More <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="hover">
              <div className="relative p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-lg dark:shadow-primary-purple hover:shadow-xl dark:hover:shadow-accent-lavender transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-purple rounded-t-lg"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-primary-blue dark:bg-primary-purple bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <FaHome className="h-10 w-10 text-primary-blue dark:text-primary-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-blue dark:text-neutral-white mb-3">Pet Boarding</h3>
                  <p className="text-grey-300 dark:text-accent-lavender">
                    Comfortable pre-flight boarding and trusted quarantine solutions at certified facilities.
                  </p>
                  <Link to="/services" className="mt-6 inline-flex items-center text-primary-blue dark:text-primary-purple font-medium hover:underline">
                    Learn More <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Why Pet Owners Choose Us Section */}
      <div className="py-16 bg-primary-blue dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-neutral-white dark:text-neutral-white sm:text-4xl">
              Why Pet Owners Choose Us
              </h2>
            </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedCard animation="slide" delay="0ms">
              <div className="flex flex-col items-center text-center">
                <FaPaw className="h-10 w-10 text-neutral-white dark:text-primary-purple mb-4" />
                <h3 className="text-xl font-bold text-neutral-white dark:text-neutral-white text-center">Live GPS Tracking</h3>
                <p className="mt-2 text-white dark:text-accent-lavender text-center">See where your pet is in real-time—peace of mind from start to snuggle.</p>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slide" delay="200ms">
              <div className="flex flex-col items-center text-center">
                <FaShieldAlt className="h-10 w-10 text-neutral-white dark:text-primary-purple mb-4" />
                <h3 className="text-xl font-bold text-neutral-white dark:text-neutral-white text-center">Veterinary-Approved Safety Standards</h3>
                <p className="mt-2 text-white dark:text-accent-lavender text-center">From crate size to hydration and feeding, everything is pet-optimized.</p>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slide" delay="400ms">
              <div className="flex flex-col items-center text-center">
                <FaGlobe className="h-10 w-10 text-neutral-white dark:text-primary-purple mb-4" />
                <h3 className="text-xl font-bold text-neutral-white dark:text-neutral-white text-center">Global Pet Network</h3>
                <p className="mt-2 text-white dark:text-accent-lavender text-center">Hundreds of partner airports and customs agents worldwide.</p>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slide" delay="600ms">
              <div className="flex flex-col items-center text-center">
                <FaHeadset className="h-10 w-10 text-neutral-white dark:text-primary-purple mb-4" />
                <h3 className="text-xl font-bold text-neutral-white dark:text-neutral-white text-center">24/7 Support</h3>
                <p className="mt-2 text-white dark:text-accent-lavender text-center">We’re with you every paw-step of the way.</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* How Pet Express Works Section */}
      <div className="py-16 bg-primary-blue dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white dark:text-neutral-white sm:text-4xl">
              How Pet Express Works
              </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedCard animation="slide" delay="0ms">
              <div className="flex flex-col items-center text-center">
                <FaSearch className="h-10 w-10 text-white dark:text-primary-purple mb-4" />
                <h3 className="text-xl font-bold text-white dark:text-neutral-white text-center">Request a Quote</h3>
                <p className="mt-2 text-white dark:text-accent-lavender text-center">Tell us about your pet, and we’ll suggest the best travel options.</p>
                  </div>
                </AnimatedCard>
            <AnimatedCard animation="slide" delay="200ms">
              <div className="flex flex-col items-center text-center">
                <FaClipboardCheck className="h-10 w-10 text-white dark:text-primary-purple mb-4" />
                <h3 className="text-xl font-bold text-white dark:text-neutral-white text-center">Book & Prepare</h3>
                <p className="mt-2 text-white dark:text-accent-lavender text-center">We guide you through vaccination and documentation.</p>
                  </div>
                </AnimatedCard>
            <AnimatedCard animation="slide" delay="400ms">
              <div className="flex flex-col items-center text-center">
                <FaHome className="h-10 w-10 text-white dark:text-primary-purple mb-4" />
                <h3 className="text-xl font-bold text-white dark:text-neutral-white text-center">Pick-up or Drop-off</h3>
                <p className="mt-2 text-white dark:text-accent-lavender text-center">We arrange transport from your home or preferred vet.</p>
                  </div>
                </AnimatedCard>
            <AnimatedCard animation="slide" delay="600ms">
              <div className="flex flex-col items-center text-center">
                <FaPaw className="h-10 w-10 text-white dark:text-primary-purple mb-4" />
                <h3 className="text-xl font-bold text-white dark:text-neutral-white text-center">Live Tracking</h3>
                <p className="mt-2 text-white dark:text-accent-lavender text-center">Stay updated until your furry friend arrives safely.</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Certifications & Pet Logistics Partnerships Section */}
      <div className="py-12 bg-neutral-white dark:bg-primary-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white sm:text-4xl">
              Certifications & Pet Logistics Partnerships
              </h2>
            </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedCard animation="slide" delay="0ms">
              <div className="flex flex-col items-center p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-lg dark:shadow-primary-purple hover:shadow-xl dark:hover:shadow-accent-lavender transition-shadow duration-300">
                <FaAward className="h-5 w-5 text-primary-blue dark:text-primary-purple mb-2" />
                <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white text-center">IPATA Member</h3>
                <p className="mt-2 text-grey-300 dark:text-accent-lavender text-center">International Pet and Animal Transportation Association</p>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slide" delay="200ms">
              <div className="flex flex-col items-center p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-lg dark:shadow-primary-purple hover:shadow-xl dark:hover:shadow-accent-lavender transition-shadow duration-300">
                <FaCertificate className="h-5 w-5 text-primary-blue dark:text-primary-purple mb-2" />
                <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white text-center">USDA Certified</h3>
                <p className="mt-2 text-grey-300 dark:text-accent-lavender text-center">United States Department of Agriculture</p>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slide" delay="400ms">
              <div className="flex flex-col items-center p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-lg dark:shadow-primary-purple hover:shadow-xl dark:hover:shadow-accent-lavender transition-shadow duration-300">
                <FaMedal className="h-5 w-5 text-primary-blue dark:text-primary-purple mb-2" />
                <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white text-center">IATA LAR Compliant</h3>
                <p className="mt-2 text-grey-300 dark:text-accent-lavender text-center">IATA Live Animals Regulations</p>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slide" delay="600ms">
              <div className="flex flex-col items-center p-6 bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-lg dark:shadow-primary-purple hover:shadow-xl dark:hover:shadow-accent-lavender transition-shadow duration-300">
                <FaHandshake className="h-5 w-5 text-primary-blue dark:text-primary-purple mb-2" />
                <h3 className="text-lg font-medium text-primary-blue dark:text-neutral-white text-center">Veterinary-Approved Partners</h3>
                <p className="mt-2 text-grey-300 dark:text-accent-lavender text-center">Trusted animal care and logistics professionals</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-neutral-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fade">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white sm:text-4xl">
                Happy Tails from Our Clients
              </h2>
              <p className="mt-4 text-lg text-grey-300 dark:text-accent-lavender">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
          </AnimatedCard>

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
          <div className="mt-16 flex justify-center">
            <div className="bg-neutral-white dark:bg-neutral-slate rounded-lg shadow-md dark:shadow-primary-purple px-8 py-6">
              <h3 className="text-2xl font-bold text-primary-blue dark:text-neutral-white text-center">Customer Rating: 4.5/5</h3>
              <div className="flex items-center justify-center mt-4">
                <div className="flex text-yellow-400">
                  <FaStar className="h-6 w-6" />
                  <FaStar className="h-6 w-6" />
                  <FaStar className="h-6 w-6" />
                  <FaStar className="h-6 w-6" />
                  <FaStarHalf className="h-6 w-6" />
                </div>
                <span className="ml-4 text-3xl font-bold text-primary-blue dark:text-neutral-white">4.5</span>
              </div>
              <p className="mt-2 text-grey-300 dark:text-accent-lavender text-center">Based on 1,482 verified reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-purple dark:from-neutral-slate dark:to-primary-purple py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fade">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-neutral-white sm:text-4xl">
                Ready to Move Your Pet?
              </h2>
              <p className="mt-4 text-xl text-neutral-white">
                Experience the safest, most loving way to relocate your furry friend.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-blue dark:text-neutral-white dark:hover:text-primary-purple bg-neutral-white dark:bg-primary-purple hover:bg-grey-300 dark:hover:bg-accent-lavender"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-neutral-white text-base font-medium rounded-md text-neutral-white hover:bg-primary-purple dark:hover:bg-primary-purple"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default Home; 