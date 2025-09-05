import { Button } from "@/components/ui/button";
import { Heart, Bell, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-medium ${
      scrolled 
        ? 'bg-card/80 backdrop-blur-xl border-b shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-blood rounded-2xl shadow-blood group-hover:animate-blood-pulse transition-all duration-medium">
                <Heart className="h-6 w-6 text-blood-foreground fill-current" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-blood bg-clip-text text-transparent">
              LifeLine
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-all duration-fast font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-medium group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-all duration-fast font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-medium group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-muted-foreground hover:text-foreground transition-all duration-fast font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-medium group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            size="sm" 
            variant="ghost" 
            className="relative hidden md:flex"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-blood rounded-full"></span>
          </Button>
          
          <Button 
            variant="outline" 
            className="hidden md:inline-flex hover:shadow-soft transition-all duration-medium" 
            asChild
          >
            <Link to="/role-selection">Login</Link>
          </Button>
          
          <Button 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-medium font-semibold" 
            asChild
          >
            <Link to="/role-selection">Get Started</Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;