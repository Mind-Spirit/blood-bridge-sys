import { UserPlus, Search, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register as Donor or Patient",
      description: "Sign up and choose your role. Donors can toggle availability, patients can request blood."
    },
    {
      icon: Search,
      title: "Get Matched Instantly",
      description: "Our system instantly matches patients with nearby available donors based on blood type and location."
    },
    {
      icon: Heart,
      title: "Save a Life 🩸",
      description: "Connect with your match, coordinate the donation, and help save a life in your community."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple 3-step process makes blood donation and finding donors easier than ever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blood text-blood-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;