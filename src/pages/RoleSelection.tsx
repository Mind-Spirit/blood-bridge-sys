import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, User, UserPlus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RoleSelection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blood rounded-full">
              <Heart className="h-7 w-7 text-blood-foreground fill-current" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Join LifeLine</h1>
          <p className="text-xl text-muted-foreground">Choose your role to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donor Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">I'm a Donor</CardTitle>
              <CardDescription className="text-lg">
                Ready to save lives by donating blood
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-left space-y-2 mb-6 text-muted-foreground">
                <li>• Toggle your availability</li>
                <li>• See nearby blood requests</li>
                <li>• Track your donation history</li>
                <li>• Get notified of urgent needs</li>
              </ul>
              <Button className="w-full" size="lg" asChild>
                <Link to="/donor-dashboard">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Sign Up as Donor
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Patient Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blood cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center w-20 h-20 bg-blood/10 rounded-full mx-auto mb-4 group-hover:bg-blood/20 transition-colors">
                <User className="h-10 w-10 text-blood" />
              </div>
              <CardTitle className="text-2xl">I Need Blood</CardTitle>
              <CardDescription className="text-lg">
                Looking for blood donors in urgent need
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-left space-y-2 mb-6 text-muted-foreground">
                <li>• Request blood quickly</li>
                <li>• Find nearby donors</li>
                <li>• Track request status</li>
                <li>• Emergency priority support</li>
              </ul>
              <Button className="w-full bg-blood hover:bg-blood/90" size="lg" asChild>
                <Link to="/patient-dashboard">
                  <User className="h-5 w-5 mr-2" />
                  Request Blood
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;