import { Card } from "@/components/ui/card";
import { Heart, CreditCard, Mail, Sparkles } from "lucide-react";
import heartIcon from "@/assets/heart-icon.jpg";
import formMockup from "@/assets/form-mockup.jpg";
import coinIcon from "@/assets/coin-icon.jpg";
import emailPhone from "@/assets/email-phone.jpg";
import phoneFinal from "@/assets/phone-final.jpg";

const steps = [
  {
    number: "1",
    title: "املأ التفاصيل",
    description: "أضف أسماءكم، تاريخ بداية العلاقة، والصور الرومانسية",
    icon: Heart,
    image: formMockup,
    color: "from-primary to-primary/80"
  },
  {
    number: "2", 
    title: "ادفع المبلغ",
    description: "اختر الباقة المناسبة وادفع بأمان كامل",
    icon: CreditCard,
    image: coinIcon,
    color: "from-secondary to-secondary/80"
  },
  {
    number: "3",
    title: "استلم موقعك + QR Code",
    description: "سيصلك الموقع والكود على الإيميل فوراً",
    icon: Mail,
    image: emailPhone,
    color: "from-accent to-accent/80"
  },
  {
    number: "4",
    title: "فاجئ حبيبك",
    description: "اعرض الـ QR Code وشاهد سعادة حبيبك اللا محدودة",
    icon: Sparkles,
    image: phoneFinal,
    color: "from-primary to-secondary"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-love opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <img src={heartIcon} alt="Heart" className="w-16 h-16 rounded-full shadow-romantic" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-romantic bg-clip-text text-transparent">
              كيف يعمل
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أربع خطوات بسيطة لتصنع أجمل مفاجأة رومانسية لحبيبك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="group relative overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:shadow-romantic transition-all duration-500 hover:scale-105"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold text-white shadow-romantic`}>
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Step Image */}
                <div className="mt-6 rounded-xl overflow-hidden shadow-warm">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-romantic opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* New Feature Highlight */}
        <Card className="mt-16 bg-gradient-romantic text-accent-foreground shadow-glow">
          <div className="p-8 text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-3xl font-bold mb-4">ميزة جديدة</h3>
            <p className="text-xl mb-2">
              صورك بتتحول لـ <span className="font-bold">Ghibli Style Images</span> بالذكاء الاصطناعي
            </p>
            <p className="text-lg opacity-90">
              اضغط على الصورة وشوف السحر يحصل
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorks;