import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SmallBannerSlider() {
  // Banner data
  const banners = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Up to 70% off on summer collections",
      image: "https://picsum.photos/600/300?random=101",
      link: "#summer-sale"
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Check out our latest products",
      image: "https://picsum.photos/600/300?random=102",
      link: "#new-arrivals"
    },
    {
      id: 3,
      title: "Weekend Special",
      description: "Limited time offers this weekend only",
      image: "https://picsum.photos/600/300?random=103",
      link: "#weekend-special"
    },
    {
      id: 4,
      title: "Exclusive Collection",
      description: "Premium products for a premium lifestyle",
      image: "https://picsum.photos/600/300?random=104",
      link: "#exclusive-collection"
    },
    {
      id: 5,
      title: "Flash Sale",
      description: "24 hours only - don't miss out!",
      image: "https://picsum.photos/600/300?random=105",
      link: "#flash-sale"
    },
    {
      id: 6,
      title: "Clearance Sale",
      description: "Everything must go - up to 80% off",
      image: "https://picsum.photos/600/300?random=106",
      link: "#clearance"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const bannersPerView = 2;
  const totalSlides = Math.ceil(banners.length / bannersPerView);
  const autoPlayInterval = 5000; // 5 seconds

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < banners.length - bannersPerView) {
        return prevIndex + bannersPerView;
      } else {
        return 0; // Loop back to the beginning
      }
    });
  }, [banners.length, bannersPerView]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= bannersPerView) {
        return prevIndex - bannersPerView;
      } else {
        return Math.max(0, banners.length - bannersPerView); // Go to the last slide
      }
    });
  };

  // Go to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex * bannersPerView);
  };

  // Auto play functionality
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  // Pause auto play when hovering over the slider
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Calculate visible banners
  const visibleBanners = banners.slice(currentIndex, currentIndex + bannersPerView);

  return (
    <div 
      className="relative w-full max-w-8xl mx-auto py-6 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div 
  className="flex transition-transform duration-700 ease-in-out"
  style={{ transform: `translateX(-${currentIndex * (100 / bannersPerView)}%)` }}
>

          {banners.map((banner) => (
            <div key={banner.id} className="w-1/2 flex-shrink-0 relative px-2">
              <a href={banner.link} className="block group">
                <div className="relative overflow-hidden">
                  <img 
                    src={banner.image} 
                    alt={banner.title} 
                    className="w-full rounded-md h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-90 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-bold">{banner.title}</h3>
                    <p className="text-white/90 text-sm mt-1">{banner.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      {/* <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none opacity-70 hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none opacity-70 hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button> */}
      
      {/* Indicator Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-6 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / bannersPerView) === index 
                ? 'bg-blue-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Auto Play Toggle */}
      {/* <div className="absolute bottom-6 right-4 z-10">
        <button 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
          className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
            isAutoPlaying 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div> */}
    </div>
  );
}