import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AnimatedCard from './animations/AnimatedCard';

interface Review {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  backgroundImage: string;
  backgroundVideo?: string;
  proofImage?: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Yuki Tanaka",
    role: "Pet Parent",
    location: "Tokyo, Japan",
    rating: 5.0,
    text: "My little Shih Tzu Luna traveled safely from Japan to California. PetXpress made the journey so smooth - Luna was comfortable in her carrier and arrived happy! The team kept me updated throughout the entire process.",
    backgroundImage: "https://drive.google.com/thumbnail?id=1HZVFpBmqlCvcOeTfR2_FXx1lwPhuOS9E&sz=w800",
    proofImage: "https://drive.google.com/thumbnail?id=1HZVFpBmqlCvcOeTfR2_FXx1lwPhuOS9E&sz=w400",
    verified: true
  },
  {
    id: 2,
    name: "Robert & Sarah Wilson",
    role: "Pet Parents",
    location: "Seattle, Washington",
    rating: 5.0,
    text: "We were so nervous about moving our Yorkshire Terrier puppy across the country. PetXpress handled everything perfectly - from the paperwork to the safe delivery. Our little Yorkie arrived healthy and happy!",
    backgroundImage: "https://drive.google.com/thumbnail?id=1e-CbrebqA93ars_BQfBPjt7HPRJf3xEa&sz=w800",
    proofImage: "https://drive.google.com/thumbnail?id=1e-CbrebqA93ars_BQfBPjt7HPRJf3xEa&sz=w400",
    verified: true
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Veterinarian",
    location: "Sunset Animal Hospital, LA",
    rating: 4.5,
    text: "As a veterinarian, I recommend PetXpress to all my clients. They transported this German Shepherd puppy safely and professionally. The care they show for animals is exceptional.",
    backgroundImage: "https://drive.google.com/thumbnail?id=1V84q7U6sWczlXOJTLJ5WmGT9c76Tui0c&sz=w800",
    proofImage: "https://drive.google.com/thumbnail?id=1V84q7U6sWczlXOJTLJ5WmGT9c76Tui0c&sz=w400",
    verified: true
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    role: "Pet Parent",
    location: "Miami International Airport",
    rating: 5.0,
    text: "My dog Dutton flew from Miami to New York with PetXpress. The airport pickup was seamless and the team made sure he was comfortable throughout the journey. Highly recommend!",
    backgroundImage: "https://drive.google.com/thumbnail?id=1I7UNoOepiFYBgdrwLngdBiRqxumgl14g&sz=w800",
    proofImage: "https://drive.google.com/thumbnail?id=1I7UNoOepiFYBgdrwLngdBiRqxumgl14g&sz=w400",
    verified: true
  },
  {
    id: 5,
    name: "Michael & Lisa Thompson",
    role: "Pet Parents",
    location: "Denver, Colorado",
    rating: 4.5,
    text: "We adopted this adorable Yorkshire Terrier puppy and PetXpress helped us bring him home safely. The team was professional and caring throughout the entire process.",
    backgroundImage: "https://drive.google.com/thumbnail?id=1LEMHzFzQ2o7vomX8ZNIFhsy4pxOSpGak&sz=w800",
    proofImage: "https://drive.google.com/thumbnail?id=1LEMHzFzQ2o7vomX8ZNIFhsy4pxOSpGak&sz=w400",
    verified: true
  },
  {
    id: 6,
    name: "Carlos & Maria Rodriguez",
    role: "Pet Parents",
    location: "Madrid Airport Terminal",
    rating: 5.0,
    text: "PetXpress helped us emigrate with our two dogs from Spain to Canada. The process was smooth and our terriers arrived safely. The team at Pet World Travel made everything easy!",
    backgroundImage: "https://drive.google.com/thumbnail?id=1knX5xRrt8Y1Qug9EbhbwNzw0lkvivBAu&sz=w800",
    proofImage: "https://drive.google.com/thumbnail?id=1knX5xRrt8Y1Qug9EbhbwNzw0lkvivBAu&sz=w400",
    verified: true
  },
  {
    id: 7,
    name: "The Johnson Family",
    role: "Pet Parents",
    location: "Austin, Texas",
    rating: 5.0,
    text: "Our family welcomed these two beautiful Goldendoodle puppies with PetXpress's help. The team handled everything perfectly - from the adoption process to safe delivery. Our new family members arrived happy and healthy!",
    backgroundImage: "https://drive.google.com/thumbnail?id=1yLgOnfbt_C3CYEw6N3SUbbu5A0F3wSrB&sz=w800",
    proofImage: "https://drive.google.com/thumbnail?id=1yLgOnfbt_C3CYEw6N3SUbbu5A0F3wSrB&sz=w400",
    verified: true
  },
  {
    id: 8,
    name: "Michelle Ebuka",
    role: "Pet Parent",
    location: "Miami, Florida",
    rating: 4.5,
    text: "I adopted these two precious Yorkshire Terrier puppies and PetXpress made the entire process so smooth. The team was professional and caring, ensuring my little Yorkies arrived safely and happy!",
    backgroundImage: "https://drive.google.com/thumbnail?id=19i2UeTcrcoj8PH06e6V5i8p2pFnAlSVV&sz=w800",
    proofImage: "https://drive.google.com/thumbnail?id=19i2UeTcrcoj8PH06e6V5i8p2pFnAlSVV&sz=w400",
    verified: true
  }
];

const EnhancedReviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Automatic scroll functionality (no user control)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array means it runs once and continues

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="h-4 w-4 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" className="h-4 w-4 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-neutral-white dark:bg-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary-blue dark:text-neutral-white">
            Verified Customer Reviews
          </h2>
          <p className="mt-4 text-lg text-grey-300 dark:text-accent-lavender">
            Real experiences with proof from our valued customers
          </p>
        </div>

        {/* Main Review Display */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatedCard animation="slide" delay="0ms">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl dark:shadow-primary-purple bg-neutral-white dark:bg-slate-700">
              {/* Mobile Layout - Image with Text Overlay */}
              <div className="lg:hidden relative h-96 md:h-[500px]">
                <img
                  src={reviews[currentReview].backgroundImage}
                  alt="Review background"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a default image if Google Drive fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Navigation Buttons Overlay */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={prevReview}
                    className="p-3 rounded-full bg-black bg-opacity-50 text-neutral-white hover:bg-opacity-70 transition-all duration-200 backdrop-blur-sm"
                    aria-label="Previous review"
                  >
                    <FaChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={nextReview}
                    className="p-3 rounded-full bg-black bg-opacity-50 text-neutral-white hover:bg-opacity-70 transition-all duration-200 backdrop-blur-sm"
                    aria-label="Next review"
                  >
                    <FaChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="text-neutral-white">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold">{reviews[currentReview].name}</h3>
                      <p className="text-sm opacity-90">{reviews[currentReview].role}, {reviews[currentReview].location}</p>
                      {reviews[currentReview].verified && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                          ✓ Verified Customer
                        </span>
                      )}
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {renderStars(reviews[currentReview].rating)}
                      </div>
                      <span className="ml-3 text-base font-bold">{reviews[currentReview].rating}</span>
                    </div>

                    <blockquote className="text-base md:text-lg italic leading-relaxed">
                      "{reviews[currentReview].text}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:grid lg:grid-cols-2 h-96 md:h-[500px]">
                {/* Image Side */}
                <div className="relative overflow-hidden">
                  <img
                    src={reviews[currentReview].backgroundImage}
                    alt="Review background"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a default image if Google Drive fails
                      e.currentTarget.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  
                  {/* Navigation Buttons Overlay */}
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                      onClick={prevReview}
                      className="p-3 rounded-full bg-black bg-opacity-50 text-neutral-white hover:bg-opacity-70 transition-all duration-200 backdrop-blur-sm"
                      aria-label="Previous review"
                    >
                      <FaChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      onClick={nextReview}
                      className="p-3 rounded-full bg-black bg-opacity-50 text-neutral-white hover:bg-opacity-70 transition-all duration-200 backdrop-blur-sm"
                      aria-label="Next review"
                    >
                      <FaChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-neutral-black dark:text-neutral-white">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold">{reviews[currentReview].name}</h3>
                      <p className="text-sm opacity-90 text-grey-300 dark:text-accent-lavender">{reviews[currentReview].role}, {reviews[currentReview].location}</p>
                      {reviews[currentReview].verified && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                          ✓ Verified Customer
                        </span>
                      )}
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {renderStars(reviews[currentReview].rating)}
                      </div>
                      <span className="ml-3 text-lg font-bold">{reviews[currentReview].rating}</span>
                    </div>

                    <blockquote className="text-lg md:text-xl italic leading-relaxed text-grey-300 dark:text-accent-lavender">
                      "{reviews[currentReview].text}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Review Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue dark:text-neutral-white">4.8</div>
            <div className="text-sm text-grey-300 dark:text-accent-lavender">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue dark:text-neutral-white">1,482</div>
            <div className="text-sm text-grey-300 dark:text-accent-lavender">Verified Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue dark:text-neutral-white">99%</div>
            <div className="text-sm text-grey-300 dark:text-accent-lavender">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedReviews; 