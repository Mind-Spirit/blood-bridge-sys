import { Shield, Building2, Cross, Stethoscope, Ambulance } from "lucide-react";

const TrustedPartners = () => {
  const partners = [
    { name: "Red Cross", icon: Cross },
    { name: "City Hospital", icon: Building2 },
    { name: "Health Ministry", icon: Shield },
    { name: "Medical Center", icon: Stethoscope },
    { name: "Emergency Services", icon: Ambulance },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Organizations</h2>
          <div className="flex items-center justify-center text-muted-foreground space-x-2 text-sm">
            <span>10,000+ lives impacted</span>
            <span>•</span>
            <span>1,000+ active donors</span>
            <span>•</span>
            <span>50+ trusted partners</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-card rounded-full shadow-sm group-hover:shadow-md transition-shadow mb-3">
                <partner.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;