import React, { useState, useEffect, useCallback } from 'react';
import image2 from '../../assets/image2.jpg'
import image8 from '../../assets/travel.jpg'
import image6 from '../../assets/image6.jpg'


const Banner= () => {
  // Using placeholder images since we can't import external images
  const images = [
    image2,image6,image8
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create an array with cloned items for smooth infinite scroll
  const extendedImages = [...images, ...images, ...images];
  const moveToNextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }
  }, [isTransitioning]);
  // Handle the transition end
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // If we've reached the end of the second set, jump back to the first set
    if (currentIndex >= images.length * 2) {
      setCurrentIndex(currentIndex - images.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(moveToNextSlide,2000);
    return () => clearInterval(interval);
  }, [moveToNextSlide]);

  return (
    <div className="relative w-full h-32 xs:h-64 lg:h-96 overflow-hidden mt-5 ">
      <div
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{
          transform: `translateX(-${(currentIndex * 100) / extendedImages.length}%)`,
          width: `${(extendedImages.length * 100)}%`
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <div key={index}
            className="relative h-full flex-shrink-0 bg-white p-0.3 rounded-lg"
            style={{ width: `${100 / extendedImages.length}%` }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;