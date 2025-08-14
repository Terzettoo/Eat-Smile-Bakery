'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Cake, Clock, Phone, AlertCircle, Upload, Send } from 'lucide-react';

export default function OnlineOrders() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    cakeSize: '',
    cakeFlavor: '',
    filling: '',
    decorations: '',
    frosting: '',
    decorationColor: '',
    writing: '',
    specialInstructions: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")'
           }}>
        <div className="text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Cake className="h-12 w-12 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Order Your Cake
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-light">
            Custom creations made with love, just for you
          </p>
        </div>
      </div>

      <main className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
              <CardTitle className="text-3xl font-display font-bold flex items-center space-x-3">
                <Cake className="h-8 w-8" />
                <span>Online Cake Order Form</span>
              </CardTitle>
              <CardDescription className="text-red-100 text-lg">
                Create your perfect cake with our easy-to-use order form
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* Important Notice */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Important Information</h3>
                    <ul className="text-red-800 space-y-1 text-sm">
                      <li>• Please allow 24-48 hours processing for all online orders</li>
                      <li>• If you haven't received a phone call within 24 hours, please call us to confirm</li>
                      <li>• We close at 2:00 PM Monday & Tuesday, 3:00 PM Wednesday & Thursday, 5:00 PM Friday, and 3:00 PM Saturday</li>
                    </ul>
                  </div>
                </div>
              </div>

              <form action="https://formsubmit.co/hello@eatsmilebakery.com" method="POST" encType="multipart/form-data" className="space-y-8">
                {/* Hidden FormSubmit fields */}
                <input type="hidden" name="_subject" value="New Cake Order Submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_template" value="table" />

                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <h3 className="text-xl font-display font-semibold text-red-900">Personal Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (718) 555-0123"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Pickup Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <h3 className="text-xl font-display font-semibold text-red-900">Pickup Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="pickupDate" className="text-gray-700 font-medium">Pickup Date *</Label>
                      <Input
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pickupTime" className="text-gray-700 font-medium">Pickup Time *</Label>
                      <Select onValueChange={(value) => handleSelectChange('pickupTime', value)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg">
                          <SelectValue placeholder="Select pickup time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8:00 AM">8:00 AM</SelectItem>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="pickupTime" value={formData.pickupTime} />
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <Clock className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-yellow-800 text-sm">
                        <strong>Store Hours:</strong> Please remember we close at 2:00 PM Monday & Tuesday, 
                        3:00 PM Wednesday & Thursday, 5:00 PM on Friday and 3:00 PM on Saturday. 
                        Please plan your pickup time accordingly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cake Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <h3 className="text-xl font-display font-semibold text-red-900">Cake Details</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="cakeSize" className="text-gray-700 font-medium">Cake Size *</Label>
                      <Select onValueChange={(value) => handleSelectChange('cakeSize', value)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg">
                          <SelectValue placeholder="Select cake size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6 inch">6 inch</SelectItem>
                          <SelectItem value="8 inch">8 inch</SelectItem>
                          <SelectItem value="9 inch">9 inch</SelectItem>
                          <SelectItem value="10 inch">10 inch</SelectItem>
                          <SelectItem value="12 inch">12 inch</SelectItem>
                          <SelectItem value="1/4 sheet">1/4 sheet</SelectItem>
                          <SelectItem value="1/2 sheet">1/2 sheet</SelectItem>
                          <SelectItem value="full sheet">Full sheet</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="cakeSize" value={formData.cakeSize} />
                    </div>

                    <div>
                      <Label htmlFor="cakeFlavor" className="text-gray-700 font-medium">Cake Flavor *</Label>
                      <Select onValueChange={(value) => handleSelectChange('cakeFlavor', value)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg">
                          <SelectValue placeholder="Select cake flavor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Chocolate">Chocolate</SelectItem>
                          <SelectItem value="White">White</SelectItem>
                          <SelectItem value="Marble">Marble</SelectItem>
                          <SelectItem value="Danish Torte">Danish Torte</SelectItem>
                          <SelectItem value="Red Velvet">Red Velvet</SelectItem>
                          <SelectItem value="Carrot">Carrot</SelectItem>
                          <SelectItem value="Lemon">Lemon</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="cakeFlavor" value={formData.cakeFlavor} />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> Chocolate, White & Marble Cakes are NOT FILLED
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="filling" className="text-gray-700 font-medium">Select Filling</Label>
                      <Select onValueChange={(value) => handleSelectChange('filling', value)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg">
                          <SelectValue placeholder="Select filling (Danish Tortes only)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="None">None</SelectItem>
                          <SelectItem value="Raspberry">Raspberry</SelectItem>
                          <SelectItem value="Strawberry">Strawberry</SelectItem>
                          <SelectItem value="Cherry">Cherry</SelectItem>
                          <SelectItem value="Blueberry">Blueberry</SelectItem>
                          <SelectItem value="Custard">Custard</SelectItem>
                          <SelectItem value="Chocolate">Chocolate</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="filling" value={formData.filling} />
                      <p className="text-gray-500 text-sm mt-1">
                        Filling is available on Danish Tortes ONLY
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="frosting" className="text-gray-700 font-medium">Frosting</Label>
                      <Select onValueChange={(value) => handleSelectChange('frosting', value)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg">
                          <SelectValue placeholder="Select frosting" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Buttercream">Buttercream</SelectItem>
                          <SelectItem value="Cream Cheese">Cream Cheese</SelectItem>
                          <SelectItem value="Whipped Cream">Whipped Cream</SelectItem>
                          <SelectItem value="Fondant">Fondant</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="frosting" value={formData.frosting} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="decorations" className="text-gray-700 font-medium">Decorations</Label>
                    <Select onValueChange={(value) => handleSelectChange('decorations', value)}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg">
                        <SelectValue placeholder="Select decorations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="None">None</SelectItem>
                        <SelectItem value="Roses">Roses</SelectItem>
                        <SelectItem value="Flowers">Flowers</SelectItem>
                        <SelectItem value="Borders">Borders</SelectItem>
                        <SelectItem value="Balloons">Balloons</SelectItem>
                        <SelectItem value="Custom Design">Custom Design</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="decorations" value={formData.decorations} />
                  </div>

                  <div>
                    <Label htmlFor="decorationColor" className="text-gray-700 font-medium">Color of Decorations</Label>
                    <Input
                      type="text"
                      id="decorationColor"
                      name="decorationColor"
                      placeholder="e.g., Pink and White"
                      value={formData.decorationColor}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialImage" className="text-gray-700 font-medium">Special Image</Label>
                    <div className="mt-2 flex items-center space-x-3">
                      <Upload className="h-5 w-5 text-gray-400" />
                      <Input
                        type="file"
                        id="specialImage"
                        name="specialImage"
                        accept="image/*"
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="writing" className="text-gray-700 font-medium">Writing or Message on cake</Label>
                    <Input
                      type="text"
                      id="writing"
                      name="writing"
                      placeholder="e.g., Happy Birthday John!"
                      value={formData.writing}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialInstructions" className="text-gray-700 font-medium">Special Instructions</Label>
                    <Textarea
                      id="specialInstructions"
                      name="specialInstructions"
                      rows={4}
                      placeholder="Please include any special instructions here..."
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg"
                    />
                  </div>
                </div>

                {/* Final Notice */}
                <div className="bg-red-600 text-white rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Phone className="h-6 w-6" />
                    <h3 className="text-xl font-display font-bold">PLEASE CALL FOR CONFIRMATION!</h3>
                  </div>
                  <p className="text-red-100 mb-2">
                    <strong>Phone:</strong> +1 (718) 555-2311
                  </p>
                  <p className="text-red-100 text-sm">
                    Please allow 24-48 hours processing for all online orders!
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-4 rounded-lg font-medium transition-all duration-300 btn-hover-lift shadow-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Order
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}