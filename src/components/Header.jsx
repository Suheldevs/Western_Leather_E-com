import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBagsDropdownOpen, setIsBagsDropdownOpen] = useState(false);
  const [isAccessoriesDropdownOpen, setIsAccessoriesDropdownOpen] =
    useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "HATS", link: "#", hasDropdown: false },
    { name: "BELTS", link: "#", hasDropdown: false },
    { name: "BOOTS", link: "#", hasDropdown: false },
    {
      name: "BAGS",
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "ALL", link: "#" },
        { name: "BRIEFCASE", link: "#" },
        { name: "BACKPACKS", link: "#" },
      ],
    },
    { name: "JACKETS", link: "#", hasDropdown: false },
    {
      name: "ACCESSORIES",
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "ALL", link: "#" },
        { name: "COWHIDE", link: "#" },
        { name: "JOURNALS", link: "#" },
      ],
    },
    { name: "SPECIALS", link: "#", hasDropdown: false },
    { name: "ABOUT US", link: "#", hasDropdown: false },
    { name: "CONTACT US", link: "#", hasDropdown: false },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (itemName) => {
    if (itemName === "BAGS") setIsBagsDropdownOpen(true);
    if (itemName === "ACCESSORIES") setIsAccessoriesDropdownOpen(true);
  };

  const handleMouseLeave = (itemName) => {
    if (itemName === "BAGS") setIsBagsDropdownOpen(false);
    if (itemName === "ACCESSORIES") setIsAccessoriesDropdownOpen(false);
  };

  const renderNavItems = () => {
    return navItems.map((item) => (
      <div
        key={item.name}
        className="relative group"
        onMouseEnter={() => handleMouseEnter(item.name)}
        onMouseLeave={() => handleMouseLeave(item.name)}
      >
        <a
          href={item.link}
          className="px-3 py-2 text-amber-100 hover:text-yellow-500 transition-colors duration-300 relative group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {item.hasDropdown && (
          <div
            className={`absolute z-10 bg-gray-900 border border-gray-800 rounded shadow-lg mt-1 py-2 w-40 transition-opacity duration-300 ${
              (item.name === "BAGS" && isBagsDropdownOpen) ||
              (item.name === "ACCESSORIES" && isAccessoriesDropdownOpen)
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            {item.dropdownItems.map((dropdownItem) => (
              <a
                key={dropdownItem.name}
                href={dropdownItem.link}
                className="block px-4 py-2 text-amber-100 hover:bg-gray-800 hover:text-yellow-500 transition-colors duration-200"
              >
                {dropdownItem.name}
              </a>
            ))}
          </div>
        )}
      </div>
    ));
  };

  const renderMobileMenuItems = () => {
    return navItems.map((item) => (
      <div key={item.name} className="mb-2">
        <div className="flex justify-between items-center">
          <a
            href={item.link}
            className="text-amber-100 hover:text-yellow-500 transition-colors duration-300 text-lg py-2"
          >
            {item.name}
          </a>
        </div>

        {item.hasDropdown && (
          <div className="ml-4 mt-1 border-l-2 border-gray-700 pl-4">
            {item.dropdownItems.map((dropdownItem) => (
              <a
                key={dropdownItem.name}
                href={dropdownItem.link}
                className="block text-amber-100 hover:text-yellow-500 transition-colors duration-300 py-2"
              >
                {dropdownItem.name}
              </a>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-amber-100 hover:text-yellow-500 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <a
              href="/"
              className="flex items-center justify-center lg:justify-start"
            >
              <img
                src="/api/placeholder/180/60"
                alt="Western Leather"
                className="h-12"
              />
            </a>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <a
              href="/account"
              className="text-amber-100 hover:text-yellow-500 transition-colors duration-300"
            >
              <User size={22} />
            </a>
            <a
              href="/search"
              className="text-amber-100 hover:text-yellow-500 transition-colors duration-300"
            >
              <Search size={22} />
            </a>
            <a
              href="/cart"
              className="text-amber-100 hover:text-yellow-500 transition-colors duration-300"
            >
              <ShoppingBag size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-around">
            <div className="flex justify-center items-center">
              <button
                onClick={toggleMenu}
                className="text-amber-100 hover:text-yellow-500 focus:outline-none"
              >
                <Menu size={24} className="inline-block" /> ALL
              </button>
            </div>
            <div className="flex justify-center space-x-2 py-3">
                {renderNavItems()}
                </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 lg:w-1/4 h-full bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="p-4 border-b border-gray-800 flex justify-b
        etween"
        >
          <a href="/" className="flex items-center">
            <img
              src="/api/placeholder/120/40"
              alt="Western Leather"
              className="h-8"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="text-amber-100 hover:text-yellow-500 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4">{renderMobileMenuItems()}</div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50  z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

// import { useState, useEffect } from "react";
// import { Menu, X, ShoppingBag, User, Search, ChevronDown, ChevronUp } from "lucide-react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdowns, setOpenDropdowns] = useState({
//     desktop: {},
//     mobile: {}
//   });
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       if (window.innerWidth >= 1024) {
//         setIsMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const navItems = [
//     { name: "HATS", link: "#", hasDropdown: false },
//     { name: "BELTS", link: "#", hasDropdown: false },
//     { name: "BOOTS", link: "#", hasDropdown: false },
//     {
//       name: "BAGS",
//       link: "#",
//       hasDropdown: true,
//       dropdownItems: [
//         { name: "ALL", link: "#" },
//         { name: "BRIEFCASE", link: "#" },
//         { name: "BACKPACKS", link: "#" }
//       ]
//     },
//     { name: "JACKETS", link: "#", hasDropdown: false },
//     {
//       name: "ACCESSORIES",
//       link: "#",
//       hasDropdown: true,
//       dropdownItems: [
//         { name: "ALL", link: "#" },
//         { name: "COWHIDE", link: "#" },
//         { name: "JOURNALS", link: "#" }
//       ]
//     },
//     { name: "SPECIALS", link: "#", hasDropdown: false },
//     { name: "ABOUT US", link: "#", hasDropdown: false },
//     { name: "CONTACT US", link: "#", hasDropdown: false }
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = (itemName, type) => {
//     setOpenDropdowns(prev => ({
//       ...prev,
//       [type]: {
//         ...prev[type],
//         [itemName]: !prev[type][itemName]
//       }
//     }));
//   };

//   const renderDesktopNavItems = () => {
//     return navItems.map((item) => (
//       <div key={item.name} className="relative">
//         <div
//           className="flex items-center cursor-pointer px-4 py-2 text-gray-200 hover:text-white"
//           onClick={() => item.hasDropdown && toggleDropdown(item.name, 'desktop')}
//         >
//           <span>{item.name}</span>
//           {item.hasDropdown && (
//             <span className="ml-1">
//               {openDropdowns.desktop[item.name] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </span>
//           )}
//         </div>

//         {item.hasDropdown && openDropdowns.desktop[item.name] && (
//           <div className="absolute z-10 bg-gray-800 border border-gray-700 w-40 shadow-lg">
//             {item.dropdownItems.map((dropdownItem) => (
//               <a
//                 key={dropdownItem.name}
//                 href={dropdownItem.link}
//                 className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
//               >
//                 {dropdownItem.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     ));
//   };

//   const renderMobileMenuItems = () => {
//     return navItems.map((item) => (
//       <div key={item.name} className="border-b border-gray-700">
//         <div
//           className="flex justify-between items-center py-3 px-4 cursor-pointer"
//           onClick={() => item.hasDropdown && toggleDropdown(item.name, 'mobile')}
//         >
//           <span className="text-gray-200 hover:text-white">{item.name}</span>
//           {item.hasDropdown && (
//             <span className="text-gray-400">
//               {openDropdowns.mobile[item.name] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </span>
//           )}
//         </div>

//         {item.hasDropdown && openDropdowns.mobile[item.name] && (
//           <div className="bg-gray-900">
//             {item.dropdownItems.map((dropdownItem) => (
//               <a
//                 key={dropdownItem.name}
//                 href={dropdownItem.link}
//                 className="block py-2 px-8 text-gray-300 hover:text-white border-t border-gray-800"
//               >
//                 {dropdownItem.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     ));
//   };

//   return (
//     <header>
//       {/* Top bar */}
//       <div className="bg-gray-900 border-b border-gray-800">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <div className="flex items-center">
//               <a href="/" className="mr-6">
//                 <img src="/api/placeholder/150/40" alt="Western Leather" className="h-8" />
//               </a>

//               {/* Desktop - All button with hamburger */}
//               <div className="hidden lg:flex items-center">
//                 <button
//                   onClick={toggleMenu}
//                   className="flex items-center space-x-2 text-gray-200 hover:text-white focus:outline-none"
//                 >
//                   <Menu size={20} />
//                   <span className="font-medium">All</span>
//                 </button>

//                 {/* Other top level items */}
//                 <a href="#" className="ml-5 text-gray-200 hover:text-white">Verify</a>
//                 <a href="#" className="ml-5 text-gray-200 hover:text-white">TRENDING</a>
//               </div>

//               {/* Mobile hamburger */}
//               <button
//                 onClick={toggleMenu}
//                 className="lg:hidden text-gray-200 hover:text-white focus:outline-none"
//               >
//                 <Menu size={24} />
//                 <span className="sr-only">Menu</span>
//               </button>
//             </div>

//             {/* Right icons */}
//             <div className="flex items-center space-x-6">
//               <div className="hidden md:flex items-center">
//                 <a href="/search" className="flex items-center text-gray-200 hover:text-white">
//                   <Search size={18} className="mr-1" />
//                   <span>Search</span>
//                 </a>
//               </div>
//               <a href="/account" className="flex items-center text-gray-200 hover:text-white">
//                 <User size={18} className="mr-1" />
//                 <span className="hidden md:inline">My Account</span>
//               </a>
//               <a href="/cart" className="text-gray-200 hover:text-white relative">
//                 <ShoppingBag size={20} />
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="bg-gray-800 border-b border-gray-700">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center h-12">
//             {renderDesktopNavItems()}
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar - works for both mobile and desktop */}
//       <div
//         className={`fixed top-0 left-0 w-full md:w-72 h-full bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-800">
//           <h2 className="text-xl font-bold text-white">Trending</h2>
//           <button
//             onClick={toggleMenu}
//             className="text-gray-400 hover:text-white focus:outline-none"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="py-2">
//           <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-800">Verify</a>
//           <div className="px-4 py-2 text-gray-400 font-semibold text-sm border-b border-gray-800">TRENDING BESTSELLERS</div>
//           {renderMobileMenuItems()}

//           <div className="border-t border-gray-800 mt-4 pt-4">
//             <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-800">Help & Settings</a>
//           </div>
//         </div>
//       </div>

//       {/* Overlay when menu is open */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={toggleMenu}
//         ></div>
//       )}
//     </header>
//   );
// }
