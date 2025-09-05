import { Button } from "@/components/ui/button";
import { Heart, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background to-secondary/50">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blood bg-clip-text text-transparent">
            Connecting Blood Donors with Patients in Urgent Need
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Save lives by donating blood or find donors quickly and easily. Every donation can save up to 3 lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blood hover:bg-blood/90" asChild>
              <Link to="/role-selection">Donate Blood</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/role-selection">Request Blood</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="h-8 w-8 text-blood" />
              </div>
              <div className="text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">1,000+</div>
              <div className="text-muted-foreground">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground">15 min</div>
              <div className="text-muted-foreground">Average Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;