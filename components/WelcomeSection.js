'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Users, Clock, Award } from 'lucide-react';

export default function WelcomeSection() {
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
    <section 
      id="welcome-section" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-warm relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-200 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4" />
                <span>Welcome to Our Family</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-red-900 leading-tight">
                A Legacy of Love,
                <span className="block text-red-600">Baked Fresh Daily</span>
              </h2>
              
              <div className="w-24 h-1 bg-red-600 rounded-full"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                We would like to thank you for your business during these trying times and hope you continue to support us as other businesses reopen. We have proudly served this community for over 70 years, and with your support, we hope to see another 70.
              </p>
              <p>
                Eat Smile Bakery is a locally owned small business with the flexibility to cater to your personal needs. If you don't see what you are looking for, give us a call and we will see if we can help you out.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/online-orders">
                <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium transition-all duration-300 btn-hover-lift shadow-lg">
                  Order Your Cake
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium transition-all duration-300 btn-hover-lift"
                onClick={() => window.location.href = 'tel:+17185552311'}
              >
                Call Us Today
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={`grid grid-cols-2 gap-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg card-hover text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-2">70+</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">Years of Excellence</p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg card-hover text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">Always Open</p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg card-hover text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-2">1000+</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">Happy Families</p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg card-hover text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-2">Local</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">Family Owned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}