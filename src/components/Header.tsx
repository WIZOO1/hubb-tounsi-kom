import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-romantic rounded-xl animate-float-heart">
            <Heart className="w-6 h-6 text-accent-foreground" fill="currentColor" />
          </div>
          <span className="text-2xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
            LoveYuu
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            الأسعار
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            أسئلة شائعة
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            كيف يعمل
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-secondary font-semibold">
            🇹🇳 TN
          </Button>
          <Button variant="outline" size="sm">
            EN
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;