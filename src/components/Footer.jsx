import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-red-500 mb-2">ShopVerse</h2>
              <div className="w-16 h-1 bg-red-500 mb-4"></div>
              <p className="text-gray-300 mb-4">
                Your one-stop destination for fashion, electronics, and more. Shop smart, live better.
              </p>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Customer Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Help Center", to: "/help" },
                { label: "Track Order", to: "/track-order" },
                { label: "Returns & Refunds", to: "/returns" },
                { label: "Shipping Info", to: "/shipping" },
                { label: "How to Order", to: "/how-to-order" },
                { label: "Contact Support", to: "/contact" }
              ].map(({ label, to }, index) => (
                <li key={index} className="flex items-center group">
                  <ArrowRight size={16} className="text-red-500 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  <Link to={to} className="text-gray-300 hover:text-red-400 transition-colors duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Shop", to: "/shop" },
                { label: "My Account", to: "/account" },
                { label: "Wishlist", to: "/wishlist" },
                { label: "Blog", to: "/blog" },
                { label: "Offers", to: "/offers" },
                { label: "FAQs", to: "/faq" }
              ].map(({ label, to }, index) => (
                <li key={index} className="flex items-center group">
                  <ArrowRight size={16} className="text-red-500 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  <Link to={to} className="text-gray-300 hover:text-red-400 transition-colors duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex">
                <MapPin size={20} className="text-red-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  789 Market Street, Mumbai, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-red-500 mr-3 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-red-500 mr-3 flex-shrink-0" />
                <a href="mailto:support@shopverse.com" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  support@shopverse.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-200 mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 px-4 py-2 rounded-l-md focus:outline-none flex-grow text-gray-300"
                />
                <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 px-4 py-2 rounded-r-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ShopVerse. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li><Link to="/terms" className="hover:text-red-400 transition-colors duration-300">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-red-400 transition-colors duration-300">Privacy</Link></li>
                <li><Link to="/cookies" className="hover:text-red-400 transition-colors duration-300">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
