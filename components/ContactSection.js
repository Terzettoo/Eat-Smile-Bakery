'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-50 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-100 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-red-900 mb-6">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Have a question or want to place a special order? We'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="text-xl sm:text-2xl font-display">Send us a message</CardTitle>
                <CardDescription className="text-red-100">
                  We'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <form action="https://formsubmit.co/hello@eatsmilebakery.com" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                        placeholder="+1 (718) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 text-base sm:text-lg rounded-lg font-medium transition-all duration-300 btn-hover-lift shadow-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-red-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-2">Call Us</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Ready to take your order</p>
                    <a 
                      href="tel:+17185552311" 
                      className="text-sm sm:text-base text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                    >
                      +1 (718) 555-2311
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-red-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-2">Email Us</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">We'll respond within 24 hours</p>
                    <a 
                      href="mailto:hello@eatsmilebakery.com" 
                      className="text-sm sm:text-base text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                    >
                      hello@eatsmilebakery.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-red-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-2">Visit Us</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Open 24/7 for your convenience</p>
                    <address className="text-sm sm:text-base text-red-600 not-italic">
                      45 Main Street<br />
                      Brooklyn, NY 11201, USA
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">Follow Our Journey</h3>
              <p className="text-sm sm:text-base text-red-100 mb-6">
                Stay updated with our latest creations and special offers
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}