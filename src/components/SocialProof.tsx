import { Button } from "@/components/ui/button";

const SocialProof = () => {
  return (
    <section className="px-4 py-12 bg-secondary/30">
      <div className="container mx-auto max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-navy-dark">
          Join millions earning with Swagbucks
        </h2>
        
        {/* Social proof stats */}
        <div className="text-center space-y-3 mb-8">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="text-muted-foreground">4.5 stars - Trusted since 2008</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button size="lg" className="btn-hero mb-4 w-full">
            START EARNING NOW
          </Button>
          <p className="text-xs text-muted-foreground">
            Must be 18+. Earnings vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;