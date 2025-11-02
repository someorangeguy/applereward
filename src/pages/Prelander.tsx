import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Prelander = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Continue to Apple Gift Card";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Continue to claim your Apple Gift Card reward');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-md text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
          Do you wish to continue?
        </h1>
        <Button 
          size="lg" 
          className="w-full md:w-auto px-12 py-6 text-lg font-semibold rounded-xl"
          onClick={() => navigate('/claim')}
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default Prelander;
