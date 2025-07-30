import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-romantic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with romantic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-love opacity-60"></div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-primary/20 animate-float-heart w-6 h-6`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i}s`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-romantic bg-clip-text text-transparent">
                  فاجئ حبيبك
                </span>
                <br />
                <span className="text-foreground">بهدية رومانسية</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                اصنع عداد زمني ديناميكي لعلاقتكم العاطفية.
                <br />
                شاركه مع حبيبك واصنع{" "}
                <span className="text-secondary font-semibold">مفاجأة لا تُنسى</span>.
                <br />
                <span className="text-primary font-semibold">وجه الكاميرا على الـ QR Code وشوف السحر 💕</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center">
              <Button variant="hero" size="xl" className="animate-glow-pulse group">
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                اصنع موقعي الآن
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg">
                شوف الأمثلة
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-end gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">+4516</div>
                <div className="text-sm text-muted-foreground">زوج سعيد</div>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="text-sm">تم النشر في:</span>
                <div className="flex gap-3">
                  <span className="text-lg">TikTok</span>
                  <span className="text-lg">Instagram</span>
                  <span className="text-lg">Reddit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Romantic surprise with QR code"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-romantic opacity-20"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold animate-float-heart">
              ✨ مجاني للدائماً
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold animate-float-heart" style={{ animationDelay: '2s' }}>
              💕 مشاركة فورية
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;