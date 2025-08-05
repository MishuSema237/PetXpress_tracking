import React from 'react';
import { FaStar, FaStarHalf, FaPlay, FaPause } from 'react-icons/fa';
import AnimatedCard from './animations/AnimatedCard';

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    role: string;
    location: string;
    rating: number;
    text: string;
    avatar: string;
    backgroundImage: string;
    backgroundVideo?: string;
    proofImage?: string;
    verified: boolean;
  };
  isActive?: boolean;
  animation?: string;
  delay?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ 
  review, 
  isActive = false, 
  animation = "slide", 
  delay = "0ms" 
}) => {
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
    <AnimatedCard animation={animation} delay={delay}>
      <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${
        isActive ? 'scale-105 ring-4 ring-primary-purple' : 'scale-100'
      }`}>
        {/* Background Image/Video */}
        <div className="absolute inset-0">
          {review.backgroundVideo ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={review.backgroundVideo} type="video/mp4" />
            </video>
          ) : (
            <img
              src={review.backgroundImage}
              alt={`${review.name} background`}
              className="h-full w-full object-cover"
            />
          )}
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 text-neutral-white">
          {/* Header with Avatar and Info */}
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-16 w-16 rounded-full border-4 border-neutral-white shadow-lg"
              />
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold text-neutral-white">
                  {review.name}
                </h3>
                {review.verified && (
                  <div className="ml-2 flex items-center bg-primary-purple px-2 py-1 rounded-full">
                    <span className="text-xs font-medium">✓ Verified</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-neutral-200">
                {review.role} • {review.location}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">{renderStars(review.rating)}</div>
            <span className="ml-2 text-sm font-medium text-neutral-200">
              {review.rating.toFixed(1)}
            </span>
          </div>

          {/* Review Text */}
          <blockquote className="text-lg leading-relaxed mb-6">
            "{review.text}"
          </blockquote>

          {/* Proof Image */}
          {review.proofImage && (
            <div className="mt-6">
              <div className="bg-neutral-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-medium mb-2 text-neutral-200">
                  📸 Proof of Service
                </p>
                <img
                  src={review.proofImage}
                  alt="Service proof"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ReviewCard; 