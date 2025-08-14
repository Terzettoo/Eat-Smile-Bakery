import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Phone, Navigation, Car, Accessibility } from 'lucide-react';

export default function HoursLocation() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")'
           }}>
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Visit Our Bakery
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Always open, always fresh, always welcoming
          </p>
        </div>
      </div>

      <main className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Hours Card */}
            <Card className="shadow-xl border-0 card-hover">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-3 text-2xl font-display">
                  <Clock className="h-8 w-8" />
                  <span>Store Hours</span>
                </CardTitle>
                <CardDescription className="text-red-100">
                  We're here whenever you need us!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl mb-6">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-red-900 mb-2">Open 24/7</h3>
                  <p className="text-red-700 text-lg font-medium">Every Single Day</p>
                  <p className="text-red-600 mt-2">365 days a year, including holidays</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700">Monday - Sunday</span>
                    <span className="text-red-600 font-semibold">24 Hours</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700">Holidays</span>
                    <span className="text-red-600 font-semibold">24 Hours</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 text-sm text-center">
                    <strong>Never closed!</strong> We're always here to serve you fresh baked goods, 
                    day or night.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <Card className="shadow-xl border-0 card-hover">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-3 text-2xl font-display">
                  <MapPin className="h-8 w-8" />
                  <span>Visit Us</span>
                </CardTitle>
                <CardDescription className="text-red-100">
                  Come visit our historic bakery in the heart of Brooklyn
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
                    <h3 className="font-display font-semibold text-red-900 mb-3 text-lg">Address</h3>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                      <div className="text-gray-700">
                        <p className="font-medium">45 Main Street</p>
                        <p>Brooklyn, NY 11201</p>
                        <p>United States</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm border border-red-100">
                      <div className="flex items-center space-x-3 mb-2">
                        <Car className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-900">Parking</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Street parking available on Main Street</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm border border-red-100">
                      <div className="flex items-center space-x-3 mb-2">
                        <Accessibility className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-900">Accessibility</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Wheelchair accessible with step-free entry</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-red-600 text-white rounded-lg">
                    <Phone className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Call us for directions</p>
                      <a href="tel:+17185552311" className="text-red-200 hover:text-white transition-colors">
                        +1 (718) 555-2311
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-2xl font-display">
                <Navigation className="h-8 w-8" />
                <span>Find Us on the Map</span>
              </CardTitle>
              <CardDescription className="text-red-100">
                Located in the heart of Brooklyn, we're easy to find!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-b-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2726683531924!2d-73.99668268459434!3d40.69149597933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316fe31c27%3A0x5b89f8b6e4c0a1c0!2s45%20Main%20St%2C%20Brooklyn%2C%20NY%2011201%2C%20USA!5e0!3m2!1sen!2sus!4v1642694857123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eat Smile Bakery Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-red-900 mb-4">
                Brooklyn's Landmark Bakery
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                For over 70 years, our bakery has been a beloved landmark in Brooklyn. 
                Located on the famous Main Street, we've been serving generations of families 
                with our fresh baked goods, custom cakes, and warm hospitality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+17185552311"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 btn-hover-lift"
                >
                  Call for Directions
                </a>
                <a 
                  href="/online-orders"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 btn-hover-lift"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}