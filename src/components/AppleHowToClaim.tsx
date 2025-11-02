import { User, CheckSquare, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const AppleHowToClaim = () => {
  const [claimsCount, setClaimsCount] = useState(75);

  useEffect(() => {
    const interval = setInterval(() => {
      setClaimsCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        return Math.max(65, Math.min(85, newCount));
      });
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: User,
      iconColor: "#0071e3",
      title: "Enter your basic info",
      highlightColor: "#0071e3",
      description: "Register quick and easy with just your name and email"
    },
    {
      icon: CheckSquare,
      iconColor: "#00d4aa",
      title: "Answer a quick survey",
      highlightColor: "#00d4aa",
      description: "Answer all survey prompted questions about your user experience"
    },
    {
      icon: Handshake,
      iconColor: "#ff9500",
      title: "Complete partner-assigned deals",
      highlightColor: "#ff9500",
      description: "Complete 3-5 deals to increase your reward"
    }
  ];

  return (
    <section className="px-4 py-4 md:py-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
          How to Claim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-secondary/50 rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <Icon 
                    className="w-10 h-10 md:w-12 md:h-12" 
                    strokeWidth={2} 
                    style={{ color: step.iconColor }}
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                  <span style={{ color: step.highlightColor }}>
                    {step.title}
                  </span>
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a 
            href="https://glitchy.go2cloud.org/aff_c?offer_id=2596&aff_id=9593"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button 
              size="lg" 
              className="w-full md:w-auto px-12 py-6 text-base md:text-lg font-semibold rounded-xl mb-3"
            >
              Claim Your Apple Reward
            </Button>
          </a>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>{claimsCount} successful claims today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleHowToClaim;
