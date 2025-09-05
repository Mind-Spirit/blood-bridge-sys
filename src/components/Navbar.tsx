import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blood rounded-full">
              <Heart className="h-5 w-5 text-blood-foreground fill-current" />
            </div>
            <span className="text-xl font-bold text-foreground">LifeLine</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/role-selection">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/role-selection">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;