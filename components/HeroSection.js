'use client';

import { ChevronDown, Star, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('welcome-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
         style={{
           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")'
         }}>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-red-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-fade-in-up">
          <Award className="h-5 w-5 text-red-300" />
          <span className="text-xs sm:text-sm font-medium">Brooklyn's Premier Bakery Since 1955</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 sm:mb-6 animate-fade-in-up stagger-1 leading-tight">
          <span className="block">Eat Smile</span>
          <span className="block text-red-300 text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 sm:mt-2">Bakery</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light leading-relaxed animate-fade-in-up stagger-2 max-w-3xl mx-auto px-4">
          Where every bite brings joy and every creation tells a story of 
          <span className="text-red-300 font-medium"> 70 years of tradition</span>
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12 animate-fade-in-up stagger-3 px-4">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-red-300" />
            <span className="font-medium text-sm sm:text-base">Open 24/7</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
            <span className="font-medium text-sm sm:text-base">70+ Years</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-red-300" />
            <span className="font-medium text-sm sm:text-base">Family Owned</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up stagger-4 px-4">
          <Button 
            onClick={scrollToNext}
            size="lg" 
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium transition-all duration-300 btn-hover-lift shadow-2xl"
          >
            Discover Our Story
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-2 border-black bg-black text-white hover:bg-red-600 hover:border-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium transition-all duration-300 btn-hover-lift"
            onClick={() => window.location.href = '/online-orders'}
          >
            Order Now
          </Button>
        </div>
      </div>

      {/* Scroll Arrow */}
      <Button
        onClick={scrollToNext}
        variant="ghost"
        size="lg"
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-red-300 hover:bg-white/10 rounded-full p-3 sm:p-4 animate-bounce transition-all duration-300"
      >
        <ChevronDown className="h-8 w-8" />
      </Button>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </div>
  );
}