import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Shield, Clock, Users } from "lucide-react";
import testerUpLogo from "@/assets/testerup-logo.png";

const SwagbucksFooter = () => {
  return (
    <footer className="bg-white border-t-2 border-primary/20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Trust Signals */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border-2 border-primary/20">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-navy-dark">Secure & Trusted</h4>
              <p className="text-sm text-muted-foreground">Your data is protected</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border-2 border-primary/20">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-navy-dark">10M+ Members</h4>
              <p className="text-sm text-muted-foreground">Join our community</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border-2 border-primary/20">
            <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h4 className="font-semibold text-navy-dark">Earn Daily</h4>
              <p className="text-sm text-muted-foreground">Multiple ways to earn</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-primary/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            © 2024 Swagbucks. Earn rewards for everyday online activities. Must be 18+ to participate.
          </p>
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
            <strong>Important:</strong> Swagbucks is a rewards program for earning gift cards and cash back. 
            This is not a job or primary income source. Earnings vary based on participation and available 
            activities. Results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SwagbucksFooter;