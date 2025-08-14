'use client';

import { useState, useEffect, useRef } from 'react';

export default function ImageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative h-[60vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")'
      }}
    >
      {/* Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")',
          transform: isVisible ? 'scale(1.1)' : 'scale(1)'
        }}
      ></div>
      
      {/* Overlay with content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className={`text-center text-white max-w-4xl mx-auto px-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Crafted with Passion
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Every creation is a masterpiece, made with the finest ingredients and decades of expertise
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}