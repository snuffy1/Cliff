"use client";
import React, { useState, useEffect, MouseEvent } from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

interface MousePosition {
  x: number;
  y: number;
}

interface SocialIcon {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  color: string;
}

interface NavItem {
  name: string;
  href: string;
}

const CreativeSlothulFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 50, // Default static value
    y: 50, // Default static value
  });
  const [particles, setParticles] = useState<
    { left: string; top: string; delay: string; duration: string }[]
  >(
    Array.from({ length: 15 }, () => ({
      left: "50%",
      top: "50%",
      delay: "0s",
      duration: "2s",
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize particles with random positions on client side
    setParticles(
      Array.from({ length: 15 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 2}s`,
      }))
    );
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: NavItem[] = [
    { name: "Homepage", href: "#" },
    { name: "Products", href: "#" },
    { name: "Services", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const socialIcons: SocialIcon[] = [
    { Icon: Facebook, label: "Facebook", color: "hover:text-blue-400" },
    { Icon: Twitter, label: "Twitter", color: "hover:text-sky-400" },
    { Icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
    { Icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
  ];

  const currentYear: number = new Date().getFullYear();

  return (
    <footer
      className="relative bg-black text-white py-16 px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }}
        />
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`grid-line-${i}`}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent animate-pulse"
            style={{
              left: `${(i + 1) * 5}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto">
        {/* Logo Section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center mb-6 group cursor-pointer">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-2xl">
                <span className="text-white font-bold text-2xl transform transition-transform duration-300 group-hover:scale-125">
                  <a
                    href="#"
                    className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
                    style={{ color: "#e1aa12" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="106"
                      height="33"
                      viewBox="0 0 106 33"
                      fill="white"
                    >
                      <path
                        d="M15.5938 6.19486L25.8391 16.4402C26.4047 17.0058 26.4049 17.9231 25.8391 18.4891C25.2733 19.0552 24.3558 19.0555 23.79 18.4894L14.57 9.26994L5.34606 18.4928C4.77999 19.0589 3.86243 19.0589 3.29662 18.4928C2.73055 17.9267 2.73055 17.0094 3.29662 16.4434L13.5446 6.19486C14.1104 5.62906 15.0277 5.62906 15.5935 6.19486H15.5938Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M29.9363 14.3917C29.3703 14.9575 28.4527 14.9575 27.8869 14.3917L17.6423 4.1471C17.0763 3.58104 17.0763 2.66347 17.6423 2.0974C18.2084 1.53133 19.126 1.53133 19.692 2.0974L29.9366 12.342C30.5027 12.908 30.5027 13.8259 29.9366 14.3917H29.9363Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M29.9392 20.537C30.5053 21.103 30.5053 22.0211 29.9392 22.5872L23.7875 28.7389C23.2217 29.3047 22.3044 29.3047 21.7386 28.7389L15.5908 22.5911C15.0244 22.0248 15.0244 21.1064 15.5908 20.5401C16.1571 19.9738 17.0752 19.9738 17.6415 20.5401L22.7647 25.6615L27.8895 20.537C28.4556 19.9709 29.3734 19.9706 29.9397 20.537H29.9392Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M15.5954 14.391C16.1609 14.9565 16.1609 15.8738 15.5951 16.4393L10.4711 21.562L15.5936 26.6844C16.1602 27.251 16.1602 28.1699 15.5936 28.7365C15.027 29.3031 14.1084 29.3031 13.5418 28.7365L7.39502 22.5898C6.83367 22.0284 6.82921 21.1208 7.38216 20.554L7.40866 20.5275L8.42275 19.5136L13.547 14.391C14.1126 13.8254 15.0296 13.8254 15.5954 14.391Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M45.2691 25.8995C42.957 25.8995 41.194 25.3747 39.9803 24.3249C38.7666 23.259 38.1602 21.693 38.1602 19.6265V14.3624C38.1602 12.2963 38.767 10.7381 39.9803 9.68868C41.194 8.62279 42.9567 8.08984 45.2691 8.08984C46.8761 8.08984 48.188 8.36042 49.205 8.90158C50.238 9.42631 51.058 10.2216 51.6648 11.2875L49.1803 13.0095C48.672 12.2224 48.1391 11.6566 47.5815 11.3121C47.0403 10.9677 46.2697 10.7956 45.2691 10.7956C44.0065 10.7956 43.0798 11.099 42.4894 11.7059C41.9154 12.2963 41.6284 13.1819 41.6284 14.3624V19.6265C41.6284 20.8074 41.9154 21.7008 42.4894 22.3077C43.0798 22.8981 44.0061 23.1933 45.2691 23.1933C46.3514 23.1933 47.1878 23.0131 47.7782 22.6522C48.385 22.2748 48.9262 21.6766 49.4016 20.8563L51.8615 22.6764C51.3367 23.4307 50.7956 24.0375 50.238 24.4966C49.6804 24.9556 48.9997 25.3083 48.1962 25.5542C47.4091 25.7838 46.4335 25.8987 45.2691 25.8987V25.8995ZM59.8243 25.6043C57.7254 25.6043 56.2165 25.1452 55.298 24.2267C54.3959 23.3083 53.9451 21.98 53.9451 20.242V8.38543H57.4134V20.242C57.4134 21.144 57.6104 21.8162 58.0038 22.2588C58.3971 22.685 59.004 22.8985 59.8239 22.8985H65.334V25.6043H59.8239H59.8243ZM68.0364 8.38543H71.5047V25.6043H68.0364V8.38543ZM75.0603 13.7477C75.0603 12.0093 75.5357 10.681 76.487 9.76295C77.438 8.84448 79.0044 8.38543 81.1854 8.38543H86.9414V11.0912H81.1854C80.2834 11.0912 79.6112 11.3043 79.1682 11.7309C78.742 12.1571 78.5285 12.8296 78.5285 13.7481V16.134H85.8587V18.8398H78.5285V25.6043H75.0603V13.7477ZM89.2811 13.7477C89.2811 12.0093 89.7566 10.681 90.7079 9.76295C91.6592 8.84448 93.2252 8.38543 95.4062 8.38543H101.162V11.0912H95.4062C94.5042 11.0912 93.8316 11.3043 93.389 11.7309C92.9628 12.1571 92.7493 12.8296 92.7493 13.7481V16.134H100.08V18.8398H92.7493V25.6043H89.2811V13.7477Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-lg font-light max-w-md mx-auto">
            Innovating tomorrows solutions with creative excellence
          </p>
        </div>

        {/* Navigation */}
        <nav
          className={`mb-12 transition-all duration-1200 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {navItems.map((item: NavItem, index: number) => (
              <li
                key={item.name}
                className={`transition-all duration-300`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={item.href}
                  className="relative text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 group px-2 py-1"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3b3a3a] to-[#313030] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#726a6a] to-[#726a6a] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div
          className={`flex justify-center items-center gap-6 mb-8 transition-all duration-1400 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {socialIcons.map(
            ({ Icon, label, color }: SocialIcon, index: number) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`relative p-3 bg-gray-800/50 rounded-xl ${color} transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon
                  size={24}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            )
          )}
        </div>

        {/* Divider */}
        <div
          className={`w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8 transition-all duration-1600 delay-600 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm transition-all duration-1800 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-4 md:mb-0">
            © {currentYear}. All rights reserved. Made with ❤️ and innovation.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-br from-[#c1a7a7] to-[#dddd] text-black rounded-full shadow-lg hover:shadow-purple-500/25 hover:scale-110 transition-all duration-300 z-50 backdrop-blur-sm border border-purple-400/30 cursor-pointer"
        aria-label="Scroll to top"
        type="button"
      >
        <ArrowUp size={20} className="animate-bounce" />
      </button>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
};

export default CreativeSlothulFooter;
