import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomeCardSlide() {
  // Sample product data with multiple images
  const products = [
    {
      id: 1,
      title: "Rifle Scabbard",
      slug: "rifle-scabbard",
      images: [
        "https://picsum.photos/400/320?random=1",
        "https://picsum.photos/400/320?random=12",
        "https://picsum.photos/400/320?random=13"
      ],
      link: "#rifle-scabbard"
    },
    {
      id: 2,
      title: "Bridles",
      slug: "bridles",
      images: [
        "https://picsum.photos/400/320?random=14",
        "https://picsum.photos/400/320?random=15",
        "https://picsum.photos/400/320?random=11"
      ],
      link: "#bridles"
    },
    {
      id: 3,
      title: "Axe Holder",
      slug: "axe-holder",
      images: [
        "https://picsum.photos/400/320?random=16",
        "https://picsum.photos/400/320?random=17",
        "https://picsum.photos/400/320?random=18"
      ],
      link: "#axe-holder"
    },
    {
      id: 4,
      title: "Leather Bag",
      slug: "leather-bag",
      images: [
        "https://picsum.photos/400/320?random=10",
        "https://picsum.photos/400/320?random=29",
        "https://picsum.photos/400/320?random=21"
      ],
      link: "#leather-bag"
    },
    {
      id: 5,
      title: "Saddle",
      slug: "saddle",
      images: [
        "https://picsum.photos/400/320?random=31",
        "https://picsum.photos/400/320?random=20",
        "https://picsum.photos/400/320?random=11"
      ],
      link: "#saddle"
    },
    {
      id: 6,
      title: "Leather Wallet",
      slug: "leather-wallet",
      images: [
        "https://picsum.photos/400/320?random=41",
        "https://picsum.photos/400/320?random=11",
        "https://picsum.photos/400/320?random=11"
      ],
      link: "#leather-wallet"
    },
    {
      id: 7,
      title: "Knife Sheath",
      slug: "knife-sheath",
      images: [
        "https://picsum.photos/400/320?random=51",
        "https://picsum.photos/400/320?random=11",
        "https://picsum.photos/400/320?random=11"
      ],
      link: "#knife-sheath"
    },
    {
      id: 8,
      title: "Belt",
      slug: "belt",
      images: [
        "https://picsum.photos/400/320?random=18",
        "https://picsum.photos/400/320?random=11",
        "https://picsum.photos/400/320?random=11"
      ],
      link: "#belt"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const totalSlides = Math.ceil(products.length / cardsPerView);

  // Used to track hover state for each product card
  const [hoveredCards, setHoveredCards] = useState({});

  const nextSlide = () => {
    if (currentIndex < products.length - cardsPerView) {
      setCurrentIndex(currentIndex + cardsPerView);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentIndex >= cardsPerView) {
      setCurrentIndex(currentIndex - cardsPerView);
    } else {
      setCurrentIndex(Math.max(0, products.length - cardsPerView)); // Go to the last slide
    }
  };

  const handleMouseEnter = (productId) => {
    setHoveredCards({
      ...hoveredCards,
      [productId]: true
    });
  };

  const handleMouseLeave = (productId) => {
    setHoveredCards({
      ...hoveredCards,
      [productId]: false
    });
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <div className="relative w-full max-w-8xl mx-auto py-4 px-4">
      {/* <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2> */}
      
      {/* Card Slider Container */}
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleProducts.map((product) => (
            <a 
              href={product.link} 
              key={product.id}
              className="w-1/4 px-2 group"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={() => handleMouseLeave(product.id)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Title above image */}
                <div className="p-3">
                  <h3 className="text-lg font-semibold text-center">{product.title}</h3>
                </div>
                
                {/* Image that changes on hover */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={hoveredCards[product.id] ? product.images[1] : product.images[0]} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
                
                {/* Simple Shop Now button */}
                <div className="p-3 text-cente">
                  {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300">
                    Shop Now
                  </button> */}
                  <button className='text-blue-500 hover:underline'>
                    Shop Now
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slider Indicator Dots */}
      {/* <div className="flex justify-center mt-6 space-x-2">
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
      </div> */}
    </div>
  );
}