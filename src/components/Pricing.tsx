import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Heart, Zap } from "lucide-react";

const plans = [
  {
    name: "الأساسية",
    originalPrice: null,
    price: "15 دت",
    period: "سنة واحدة",
    description: "للمحبين البادئين",
    icon: Heart,
    color: "from-muted to-muted/80",
    popular: false,
    features: [
      "وصول لمدة سنة واحدة",
      "صورة واحدة فقط", 
      "صور Ghibli بالذكاء الاصطناعي",
      "بدون موسيقى خلفية"
    ]
  },
  {
    name: "المتميزة",
    originalPrice: "30 دت",
    price: "20 دت", 
    period: "مدى الحياة",
    description: "الأكثر اختياراً",
    icon: Zap,
    color: "from-primary to-secondary",
    popular: true,
    features: [
      "وصول مدى الحياة",
      "3 صور رومانسية",
      "صور Ghibli بالذكاء الاصطناعي", 
      "مع موسيقى رومانسية خلفية",
      "تحديثات مجانية للأبد",
      "دعم فني متميز"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-love opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-romantic bg-clip-text text-transparent">
              الأسعار
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر الباقة المناسبة لك واصنع مفاجأة رومانسية لا تُنسى
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-card/80 to-card shadow-glow border-primary/50' 
                  : 'bg-card/50 backdrop-blur border-border/50 hover:shadow-romantic'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0">
                  <div className="bg-gradient-romantic text-accent-foreground text-center py-2 font-semibold">
                    <Star className="inline w-4 h-4 mr-2" />
                    الأكثر اختياراً
                  </div>
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mb-4 shadow-romantic`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {plan.originalPrice && (
                      <span className="text-2xl text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-5xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {plan.period}
                  </p>
                  
                  {plan.originalPrice && (
                    <Badge variant="secondary" className="mt-2 text-secondary-foreground font-semibold">
                      وفر 10 دت
                    </Badge>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.popular ? "romantic" : "outline"} 
                  size="lg" 
                  className="w-full text-lg font-semibold"
                >
                  اصنع موقعي الآن
                </Button>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-romantic opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            📱 دفع عبر D17: 23456789 | 🔄 ضمان الاسترداد خلال 30 يوم
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            أرسل المبلغ عبر تطبيق D17 إلى الرقم 23456789 مع ذكر اسمك في الرسالة. جميع المدفوعات آمنة ويمكنك طلب استرداد المبلغ خلال 30 يوماً.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;