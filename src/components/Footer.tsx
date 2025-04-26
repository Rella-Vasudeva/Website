import React from 'react';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-6 w-6 text-primary-400" />
              <span className="text-xl font-display font-semibold">Ganjam Biofertilizers</span>
            </div>
            <p className="text-primary-200">
              Premium organic fertilizers for better crop yield. State certified and sustainably produced.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-primary-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-primary-200 hover:text-white transition-colors">Products</a></li>
              <li><a href="#benefits" className="text-primary-200 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#process" className="text-primary-200 hover:text-white transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-primary-200">+91 9777070749</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-primary-200">pabitra125@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span className="text-primary-200">
                  Sita Nagar 3rd Lane,<br />
                  New Korapalli,<br />
                  Near Berhampur University,<br />
                  Ganjam, Odisha - 760007
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="text-primary-200">Monday - Saturday: 9am - 6pm</li>
              <li className="text-primary-200">Sunday: 9am - 1pm</li>
              <li className="text-primary-200">Holidays: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-primary-200">
            <p>&copy; {new Date().getFullYear()} Ganjam Biofertilizers. All rights reserved.</p>
            <div className="flex items-center">
              <span className="hidden md:inline mx-2">•</span>
              <p className="hover:text-white transition-colors">Designed By R Vasudeva</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;