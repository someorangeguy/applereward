import { useEffect } from "react";
import AppleNavBar from "@/components/AppleNavBar";
import AppleHero from "@/components/AppleHero";
import AppleHowToClaim from "@/components/AppleHowToClaim";
import AppleFooter from "@/components/AppleFooter";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Get your $700 Apple Gift Card";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get your $700 Apple Gift Card. Quick and easy to complete.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <AppleNavBar />
      <AppleHero />
      <AppleHowToClaim />
      <AppleFooter />
    </div>
  );
};

export default Index;
