const AppleFooter = () => {
  return (
    <footer className="bg-secondary/30 py-6 mt-12 md:mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-muted-foreground">
          <a 
            href="https://www.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Terms of Use
          </a>
          <span>|</span>
          <a 
            href="https://www.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a 
            href="https://www.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Apple.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppleFooter;
