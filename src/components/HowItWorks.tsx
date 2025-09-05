import { UserPlus, Search, Heart, Smartphone, MapPin, Bell } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: UserPlus,
      title: "Smart Registration",
      description: "Quick onboarding with medical verification. Choose donor or patient role with secure profile creation.",
      features: ["Biometric verification", "Medical history integration", "Location-based matching"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Search,
      title: "AI-Powered Matching",
      description: "Advanced algorithms instantly connect patients with compatible donors within optimal distance.",
      features: ["Real-time availability", "Blood type compatibility", "Emergency prioritization"],
      gradient: "from-emergency to-warning"
    },
    {
      icon: Heart,
      title: "Life-Saving Connection",
      description: "Secure communication and tracking throughout the donation process with complete transparency.",
      features: ["GPS tracking", "Status updates", "Post-donation follow-up"],
      gradient: "from-blood to-blood-glow"
    }
  ];

  const processFlow = [
    { icon: Smartphone, label: "Register" },
    { icon: MapPin, label: "Match" },
    { icon: Bell, label: "Notify" },
    { icon: Heart, label: "Donate" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blood/5 rounded-full blur-2xl"></div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            How It <span className="bg-gradient-to-r from-primary to-blood bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our intelligent platform revolutionizes blood donation with cutting-edge technology 
            and seamless user experience
          </p>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <div className="flex justify-center items-center space-x-8 mb-12">
            {processFlow.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-medium ${
                    index <= activeStep 
                      ? 'bg-gradient-primary shadow-glow scale-110' 
                      : 'bg-muted/50'
                  }`}>
                    <item.icon className={`w-8 h-8 transition-colors duration-medium ${
                      index <= activeStep ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                  {index < processFlow.length - 1 && (
                    <div className={`absolute top-8 left-full w-8 h-0.5 transition-colors duration-medium ${
                      index < activeStep ? 'bg-primary' : 'bg-muted'
                    }`}></div>
                  )}
                </div>
                <span className="text-sm font-medium mt-3 text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer transition-all duration-medium ${
                activeStep === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`relative h-full bg-card rounded-3xl p-8 border transition-all duration-medium ${
                activeStep === index 
                  ? 'shadow-strong border-primary/20' 
                  : 'shadow-soft hover:shadow-medium border-border'
              }`}>
                {/* Active indicator */}
                {activeStep === index && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                )}

                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-medium shadow-medium`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-card text-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold border shadow-soft">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-medium`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to save lives?</p>
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;