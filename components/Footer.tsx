import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-semibold">Awake</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Awake Nepal is dedicated to empowering individuals through mindful
              living, education, and community support.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Stay updated with our latest news, articles, and resources.
            </p>
            <button className="w-full bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-100 transition-colors font-medium text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © All Rights Reserved | Awake Nepal Pvt. Ltd.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm mr-2">
              Design & Developed by:
            </span>
            <span className="text-white font-semibold">web</span>
            <span className="text-blue-400 font-semibold">x</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
