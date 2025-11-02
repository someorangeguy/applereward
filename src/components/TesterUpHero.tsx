import { Badge } from "@/components/ui/badge";
import swagbucksLogo from "@/assets/swagbucks-logo-new.png";

const SwagbucksHero = () => {
  return (
    <header className="py-4 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3">
          <img 
            src={swagbucksLogo} 
            alt="Swagbucks - Get Paid for What You Do Online" 
            className="h-24 w-auto"
          />
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
              10M+ Members
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
              Must be 18+
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
              4.5⭐ Trusted Rewards
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SwagbucksHero;