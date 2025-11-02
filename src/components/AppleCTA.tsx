import { Button } from "@/components/ui/button";

const AppleCTA = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-md text-center">
        <a 
          href="https://glitchy.go2cloud.org/aff_c?offer_id=2596&aff_id=9593"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            size="lg" 
            className="w-full md:w-auto px-12 py-6 text-lg font-semibold rounded-xl"
          >
            Claim your Apple Reward
          </Button>
        </a>
      </div>
    </section>
  );
};

export default AppleCTA;
