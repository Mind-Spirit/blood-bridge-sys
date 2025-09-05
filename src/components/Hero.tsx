import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Clock, Zap, Shield, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: Heart, value: "50,000+", label: "Lives Saved", color: "text-blood" },
    { icon: Users, value: "10,000+", label: "Active Donors", color: "text-primary" },
    { icon: Clock, value: "< 15 min", label: "Avg Response", color: "text-success" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blood/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-success/5 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="container relative z-10 text-center pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <div className={`inline-flex items-center mb-8 transition-all duration-slow ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}>
            <Badge 
              variant="secondary" 
              className="px-4 py-2 text-sm font-medium bg-card/80 border shadow-soft backdrop-blur-sm"
            >
              <Activity className="w-4 h-4 mr-2 text-success animate-pulse" />
              Live Platform • 24/7 Active
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className={`text-6xl md:text-8xl font-display font-bold mb-8 leading-tight transition-all duration-slow delay-200 ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-primary via-blood to-primary bg-clip-text text-transparent">
              Save Lives.
            </span>
            <br />
            <span className="text-foreground">
              Connect Instantly.
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-slow delay-300 ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}>
            Revolutionary blood donation platform connecting donors with patients in 
            <span className="text-blood font-semibold"> real-time</span>. 
            AI-powered matching ensures every donation saves lives faster than ever.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-slow delay-400 ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}>
            <Button 
              size="lg" 
              className="bg-gradient-blood hover:shadow-blood text-lg px-8 py-6 font-semibold transition-all duration-medium hover:scale-105" 
              asChild
            >
              <Link to="/role-selection">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Donate Blood
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 font-semibold border-2 hover:bg-card hover:shadow-medium transition-all duration-medium hover:scale-105" 
              asChild
            >
              <Link to="/role-selection">
                <Zap className="w-5 h-5 mr-2" />
                Request Blood
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className={`flex items-center justify-center gap-8 mb-12 transition-all duration-slow delay-500 ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-success" />
              HIPAA Compliant
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="w-4 h-4 text-primary" />
              Real-time Matching
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-blood" />
              24/7 Emergency Support
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-slow delay-600 ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
              >
                <div className="bg-card/60 backdrop-blur-sm border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-medium hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-4 p-3 rounded-2xl bg-gradient-to-br from-background to-secondary group-hover:scale-110 transition-transform duration-medium`}>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-4xl font-display font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;