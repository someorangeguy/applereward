
import { Button } from "@/components/ui/button";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="px-4 py-6 text-center bg-transparent">
      <div className="container mx-auto max-w-md">
        <h1 className="text-4xl font-bold mb-2 leading-tight text-navy-dark">
          Test apps and get paid!
        </h1>
        <p className="text-2xl font-semibold mb-8 text-navy-dark">
          Earn up to <span className="text-primary">$150+/day</span> with Swagbucks
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg w-full">
          START EARNING NOW
        </Button>
      </div>
    </section>
  );
};

// How It Works Component
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign up for free",
      description: "Create your Swagbucks account in seconds - no credit card required.",
      emoji: "📱"
    },
    {
      number: "2", 
      title: "Complete activities",
      description: "Shop online, take surveys, watch videos, play games, and test apps to earn.",
      emoji: "🎮"
    },
    {
      number: "3",
      title: "Redeem your rewards", 
      description: "Cash out to PayPal or choose from hundreds of gift cards.",
      emoji: "💰"
    }
  ];

  return (
    <section className="px-4 py-8 bg-transparent">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold text-navy-dark text-center mb-8">
          How Swagbucks Works
        </h2>
        
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="swagbucks-card">
              <div className="flex items-center gap-4">
                <div className="text-3xl flex-shrink-0">
                  {step.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy-dark mb-1">{step.title}</h3>
                  {step.description && (
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="mt-8 bg-warning/10 border-2 border-primary rounded-lg p-4">
          <h4 className="text-primary font-bold mb-2">💡 Pro tip:</h4>
          <p className="text-navy-dark text-sm">
            Use Swagbucks on all purchases so you earn more cashback at your favorite stores!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg w-full">
            START EARNING NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
export { HeroSection };