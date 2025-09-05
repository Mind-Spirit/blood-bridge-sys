import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      message: "I found a donor in just 15 minutes! The app was so easy to use during an emergency. Thank you LifeLine!",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Blood Donor",
      message: "This app made donating blood so easy and impactful. I can see exactly who I'm helping and it feels amazing.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Patient Family",
      message: "When my father needed blood urgently, LifeLine connected us with donors immediately. It saved his life.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground">
            Real stories from donors and patients who've used LifeLine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.message}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;