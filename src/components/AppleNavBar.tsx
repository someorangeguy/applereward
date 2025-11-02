import { Search, ShoppingBag, Menu } from "lucide-react";
import appleLogo from "@/assets/apple-logo-white.png";

const AppleNavBar = () => {
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 h-12 flex items-center justify-between">
        <a 
          href="https://www.apple.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <img src={appleLogo} alt="Apple" className="w-5 h-5 object-contain" />
        </a>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://www.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Search className="w-5 h-5" />
          </a>
          <a 
            href="https://www.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5" />
          </a>
          <a 
            href="https://www.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Menu className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AppleNavBar;
