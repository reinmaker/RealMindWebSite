import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.svg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://mp.astria.ai/mrr0ueoh57x80kc2xhk76lx0w95p)` }}
      ></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            תגיעו מוכנים למבחן תיווך
            <br />
            <span style={{ color: 'hsl(205 100% 50%)' }}>עם בינה מלאכותית</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed animate-fade-in">
            פיתחנו את הפלטפורמה המתקדמת ביותר להכנה למבחני תיווך בישראל.<br />
            באמצעות בינה מלאכותית מתקדמת, אנחנו מספקים חוויית למידה מותאמת אישית שמבטיחה את ההצלחה שלך במבחן.
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in">
            אתם רוצים לעבור את המבחן על הפעם הראשונה בבטחון?<br />
            לא לשלם עוד אגרה?<br />
            או לחכות עוד שלושה חודשים עד המבחן הבא?<br /><br />
            <strong>אנחנו נביא אתכם לשם, ואפילו תהנו מהדרך!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group hover-scale"
              onClick={() => window.location.href = 'https://realmind.netlify.app/login'}
            >
              להצלחה במבחן
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300 hover-scale"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ראה מחירים
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
