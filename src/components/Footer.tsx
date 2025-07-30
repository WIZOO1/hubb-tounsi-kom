import { Heart, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-love opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-romantic rounded-xl animate-float-heart">
                <Heart className="w-7 h-7 text-accent-foreground" fill="currentColor" />
              </div>
              <span className="text-3xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
                LoveYuu
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              اصنع مفاجآت رومانسية لا تُنسى مع حبيبك. لأن الحب يستحق أن يُحتفل به كل يوم.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" fill="currentColor" />
              صُنع بحب في تونس 🇹🇳
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">روابط سريعة</h3>
            <div className="space-y-3">
              <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">
                كيف يعمل
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                الأسعار
              </a>
              <a href="#faq" className="block text-muted-foreground hover:text-foreground transition-colors">
                أسئلة شائعة
              </a>
              <a href="#examples" className="block text-muted-foreground hover:text-foreground transition-colors">
                أمثلة
              </a>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">support@loveyuu.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">متوفر بالعربية والإنجليزية</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">تابعنا على:</div>
              <div className="flex gap-4 text-2xl">
                <span className="cursor-pointer hover:scale-110 transition-transform">📱</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">📸</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">💬</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">📘</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © 2024 LoveYuu. جميع الحقوق محفوظة.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-foreground transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#terms" className="hover:text-foreground transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;