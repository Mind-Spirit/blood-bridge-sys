import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blood rounded-full">
                <Heart className="h-5 w-5 text-blood-foreground fill-current" />
              </div>
              <span className="text-xl font-bold">LifeLine</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Connecting blood donors with patients in urgent need. Join our community and help save lives.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="secondary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/role-selection" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Donate Blood
                </Link>
              </li>
              <li>
                <Link to="/role-selection" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Request Blood
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">help@lifeline.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">123 Health St, Medical City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 LifeLine. All rights reserved. Made with ❤️ for saving lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;