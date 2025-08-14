import { Cake, Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-700 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-600 rounded-full opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Cake className="h-10 w-10 text-red-300" />
                <div className="absolute -inset-1 bg-red-300/20 rounded-full blur"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold">Eat Smile</span>
                <span className="text-sm font-medium text-red-300 -mt-1">BAKERY</span>
              </div>
            </div>
            <p className="text-red-100 leading-relaxed max-w-md">
              Proudly serving Brooklyn for over 70 years with fresh baked goods, custom cakes, and specialty items. 
              Being Sweet to You Is What We Do!
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-red-300 mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-red-100">
                  <p>45 Main Street</p>
                  <p>Brooklyn, NY 11201, USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a 
                  href="tel:+17185552311" 
                  className="text-red-100 hover:text-white transition-colors duration-300"
                >
                  +1 (718) 555-2311
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a 
                  href="mailto:hello@eatsmilebakery.com" 
                  className="text-red-100 hover:text-white transition-colors duration-300"
                >
                  hello@eatsmilebakery.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-red-300 mb-4">Hours</h3>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div className="text-red-100">
                <p className="font-semibold text-lg">Open 24/7</p>
                <p className="text-sm">Every day of the week</p>
                <p className="text-sm">Always here for you</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-red-200 text-sm">
              &copy; 2025 Eat Smile Bakery. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-red-200">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="/online-orders" className="hover:text-white transition-colors duration-300">Order Online</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}