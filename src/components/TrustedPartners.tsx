import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Shield, Building2, Cross, Stethoscope, Ambulance, Award, Users, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const TrustedPartners = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 500);
    return () => clearTimeout(timer);
  }, []);

  const partners = [
    { name: "Red Cross", icon: Cross, verified: true, color: "text-blood" },
    { name: "Mayo Clinic", icon: Building2, verified: true, color: "text-primary" },
    { name: "Health Ministry", icon: Shield, verified: true, color: "text-success" },
    { name: "Johns Hopkins", icon: Stethoscope, verified: true, color: "text-emergency" },
    { name: "Emergency Services", icon: Ambulance, verified: true, color: "text-warning" },
  ];

  const metrics = [
    { value: "99.8%", label: "Uptime", trend: "+0.2%" },
    { value: "50,000+", label: "Lives Saved", trend: "+2,500" },
    { value: "< 15min", label: "Response Time", trend: "-30%" },
    { value: "10,000+", label: "Active Users", trend: "+45%" }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blood to-success"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Badge variant="secondary" className="bg-success/10 text-success border-success/20 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Industry Leading
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Trusted by <span className="bg-gradient-to-r from-primary to-blood bg-clip-text text-transparent">Healthcare Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnership with world-class medical institutions ensures the highest standards of safety and reliability
          </p>
        </div>

        {/* Live Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border shadow-soft hover:shadow-medium transition-all duration-medium group">
              <div className="flex items-start justify-between mb-2">
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {metric.value}
                </div>
                <Badge 
                  variant="secondary" 
                  className="text-xs bg-success/10 text-success border-success/20"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {metric.trend}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
              <div className="mt-3">
                <Progress value={progress} className="h-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border shadow-soft hover:shadow-medium transition-all duration-medium hover:scale-105 text-center relative">
                {/* Verification badge */}
                {partner.verified && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-medium">
                    <Shield className="w-3 h-3 text-success-foreground" />
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-medium shadow-soft`}>
                    <partner.icon className={`h-8 w-8 ${partner.color} group-hover:scale-110 transition-transform duration-medium`} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{partner.name}</span>
                  {partner.verified && (
                    <span className="text-xs text-success mt-1">Verified Partner</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-primary/5 via-blood/5 to-success/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Real-Time Impact
            </h3>
            <p className="text-muted-foreground">
              Live data from our platform showing the difference we're making
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                50,000+
              </div>
              <div className="text-muted-foreground font-medium">Lives Impacted</div>
              <div className="mt-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  <Users className="w-3 h-3 mr-1" />
                  Growing daily
                </Badge>
              </div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-blood to-blood-glow bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-muted-foreground font-medium">Active Donors</div>
              <div className="mt-2">
                <Badge variant="secondary" className="bg-blood/10 text-blood">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +15% this month
                </Badge>
              </div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-success to-success-glow bg-clip-text text-transparent mb-2">
                250+
              </div>
              <div className="text-muted-foreground font-medium">Partner Hospitals</div>
              <div className="mt-2">
                <Badge variant="secondary" className="bg-success/10 text-success">
                  <Building2 className="w-3 h-3 mr-1" />
                  Nationwide
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t">
          <Badge variant="outline" className="px-4 py-2 bg-background/80">
            <Shield className="w-4 h-4 mr-2 text-success" />
            HIPAA Compliant
          </Badge>
          <Badge variant="outline" className="px-4 py-2 bg-background/80">
            <Award className="w-4 h-4 mr-2 text-primary" />
            ISO 27001 Certified
          </Badge>
          <Badge variant="outline" className="px-4 py-2 bg-background/80">
            <Building2 className="w-4 h-4 mr-2 text-emergency" />
            FDA Approved Process
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;