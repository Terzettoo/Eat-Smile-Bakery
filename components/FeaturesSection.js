'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Fish, Star, Cake, Clock, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Fish,
    title: "FISH FRIDAY",
    description: "Deep Fried White Fish and Shrimp are available from about 8:30 AM every Friday until it's gone. You can make sure to get yours by calling ahead and placing your order. Call the day before or early Friday and tell us what time you would like to pick up your order.",
    color: "bg-blue-500"
  },
  {
    icon: Star,
    title: "SPECIALTY ITEMS",
    description: "We are famous for our Kringles! Eat Smile Bakery Kringles are a unique, any time gift. Their tender, flaky crust and flavorful fillings make them ideal for Anniversaries, Weddings, Office Gathering, Holidays and more!",
    color: "bg-yellow-500"
  },
  {
    icon: Cake,
    title: "CAKES",
    description: "From basic to custom Eat Smile can help you with your next cake order. Order online or give us a call, we would love to help in any way we can.",
    color: "bg-pink-500"
  },
  {
    icon: Clock,
    title: "HISTORY",
    description: "For the past 70 years, Eat Smile bakery has been Brooklyn's hometown bakery, and our store on Main Street is a well known landmark in the community. Over the years we have had the privilege of serving and building relationships with our customers. Being Sweet to You Is What We Do!",
    color: "bg-red-500"
  }
];

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-red-50 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-red-100 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Our Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-red-900 mb-6">
            A few things we're great at
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 text-center pb-2 sm:pb-4">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    hoveredCard === index ? 'bg-red-600 scale-110' : 'bg-red-100'
                  }`}>
                    <IconComponent className={`h-10 w-10 transition-colors duration-500 ${
                      hoveredCard === index ? 'text-white' : 'text-red-600'
                    }`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-red-900 mb-2 group-hover:text-red-700 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0 px-4 sm:px-6">
                  <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Hover arrow */}
                  <div className={`flex justify-center mt-4 transition-all duration-300 ${
                    hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <ArrowRight className="h-5 w-5 text-red-600" />
                  </div>
                </CardContent>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-600 opacity-5 transform rotate-45 translate-x-8 -translate-y-8 group-hover:opacity-10 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}