import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent h-[100vh] backdrop-blur-sm text-white flex items-end ">
      <div className="w-7xl mx-auto px-4 py-12">
        {/* Bottom Section */}
        <div className="border-t border-gray-800 flex w-full justify-between">
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
