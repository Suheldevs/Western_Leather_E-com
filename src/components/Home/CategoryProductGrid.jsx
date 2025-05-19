import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryProductGrid() {
  // Categories data with nested products
  const categories = [
    {
      id: 1,
      title: "Appliances for your home | Up to 55% off",
      products: [
        { id: 101, name: "Air conditioners", image: "https://picsum.photos/400/320?random=1" },
        { id: 102, name: "Refrigerators", image: "https://picsum.photos/400/320?random=2" },
        { id: 103, name: "Microwaves", image: "https://picsum.photos/400/320?random=3" },
        { id: 104, name: "Washing machines", image: "https://picsum.photos/400/320?random=4" }
      ],
      link: "#appliances",
      action: "See more"
    },
    {
      id: 2,
      title: "Revamp your home in style",
      products: [
        { id: 201, name: "Cushion covers, bedsheets & more", image: "https://picsum.photos/400/320?random=5" },
        { id: 202, name: "Figurines, vases & more", image: "https://picsum.photos/400/320?random=6" },
        { id: 203, name: "Home storage", image: "https://picsum.photos/400/320?random=7" },
        { id: 204, name: "Lighting solutions", image: "https://picsum.photos/400/320?random=8" }
      ],
      link: "#home-decor",
      action: "Explore all"
    },
    {
      id: 3,
      title: "Starting ₹149 | Headphones",
      products: [
        { id: 301, name: "Starting ₹249 | boAt", image: "https://picsum.photos/400/320?random=9" },
        { id: 302, name: "Starting ₹349 | boult", image: "https://picsum.photos/400/320?random=10" },
        { id: 303, name: "Starting ₹649 | Noise", image: "https://picsum.photos/400/320?random=11" },
        { id: 304, name: "Starting ₹149 | Zebronics", image: "https://picsum.photos/400/320?random=12" }
      ],
      link: "#headphones",
      action: "See all offers"
    },
    {
      id: 4,
      title: "Automotive essentials | Up to 60% off",
      products: [
        { id: 401, name: "Cleaning accessories", image: "https://picsum.photos/400/320?random=13" },
        { id: 402, name: "Tyre & rim care", image: "https://picsum.photos/400/320?random=14" },
        { id: 403, name: "Helmets", image: "https://picsum.photos/400/320?random=15" },
        { id: 404, name: "Vacuum cleaner", image: "https://picsum.photos/400/320?random=16" }
      ],
      link: "#automotive",
      action: "See more"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const totalSlides = Math.ceil(categories.length / cardsPerView);

  const nextSlide = () => {
    if (currentIndex < categories.length - cardsPerView) {
      setCurrentIndex(currentIndex + cardsPerView);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentIndex >= cardsPerView) {
      setCurrentIndex(currentIndex - cardsPerView);
    } else {
      setCurrentIndex(Math.max(0, categories.length - cardsPerView)); // Go to the last slide
    }
  };

  const visibleCategories = categories.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8 px-4">
      {/* Navigation controls for category cards */}
      {totalSlides > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
      
      {/* Category cards grid */}
      <div className="flex transition-transform duration-500 ease-in-out space-x-4">
        {visibleCategories.map((category) => (
          <div key={category.id} className="w-1/4 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md p-4">
            {/* Category Title */}
            <h2 className="text-lg font-bold mb-4">{category.title}</h2>
            
            {/* Product Grid - 2x2 layout */}
            <div className="grid grid-cols-2 gap-4">
              {category.products.map((product) => (
                <a href={`#${product.name.toLowerCase().replace(/\s+/g, '-')}`} key={product.id} className="block group">
                  <div className="overflow-hidden mb-2">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm">{product.name}</p>
                </a>
              ))}
            </div>
            
            {/* Action Link */}
            <div className="mt-4">
              <a 
                href={category.link} 
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
              >
                {category.action}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slider Indicator Dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / cardsPerView) === index 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}