import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Users } from "lucide-react";

const testimonials = [
  {
    platform: "TikTok",
    username: "@ahmad_tn",
    content: "والله حاجة روعة! حبيبتي بكات من الفرحة لما شافت الموقع. 10/10 🥹💕",
    likes: "2.3M",
    icon: "🎵"
  },
  {
    platform: "Instagram", 
    username: "@fatma_tunis",
    content: "أحلى مفاجأة عملتها لخطيبي! الـ QR Code كان فكرة عبقرية والموقع طلع رهيب ✨",
    likes: "847K", 
    icon: "📸"
  },
  {
    platform: "Reddit",
    username: "u/TunisianLover",
    content: "نصيحة لكل واحد يحب: جربوا الموقع هذا. مش مجرد هدية، دي ذكرى للأبد ❤️",
    likes: "15.2K",
    icon: "💬"
  }
];

const stats = [
  { number: "+4516", label: "زوج سعيد", icon: Heart },
  { number: "+2.8M", label: "مشاهدة", icon: Play },
  { number: "98%", label: "رضا العملاء", icon: Users }
];

const SocialProof = () => {
  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-love opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-romantic bg-clip-text text-transparent">
              مفاجآت أصبحت viral
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            شوف كيف المحبين حول العالم استخدموا LoveYuu لصنع مفاجآت لا تُنسى
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-romantic transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-romantic mb-4 group-hover:animate-float-heart">
                <stat.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="text-4xl font-bold bg-gradient-romantic bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-semibold">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-romantic transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              {/* Platform Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="bg-gradient-romantic text-accent-foreground font-semibold">
                  {testimonial.icon} {testimonial.platform}
                </Badge>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Heart className="w-4 h-4 text-primary" fill="currentColor" />
                  {testimonial.likes}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-romantic flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">
                      {testimonial.username.charAt(1).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-muted-foreground font-medium">
                    {testimonial.username}
                  </span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-romantic opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Platform Logos */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-8">تم النشر في:</p>
          <div className="flex items-center justify-center gap-12 text-4xl opacity-60">
            <span>📱 TikTok</span>
            <span>📸 Instagram</span>
            <span>💬 Reddit</span>
            <span>📘 Facebook</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;