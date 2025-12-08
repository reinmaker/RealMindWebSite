import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "נבחנים הצליחו" },
  { icon: Award, value: "90%", label: "אחוז הצלחה" },
  { icon: Target, value: "1000+", label: "שעות תרגול" }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              אודות Real Mind
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              סימולטור מבחנים מתקדם עם AI שמתאים את ההכנה לצרכים האישיים שלך
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
                  <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">המשימה שלנו</h3>
            <p className="text-white/90 leading-relaxed text-lg">
              אנחנו מאמינים שכל אחד יכול לעבור את מבחן התיווך בהצלחה עם ההכנה הנכונה. 
              הטכנולוגיה שלנו מנתחת את נקודות החוזק והחולשה שלך, מתאימה את התרגול 
              לצרכים שלך, ומלווה אותך עד להצלחה במבחן.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
              onClick={() => window.location.href = 'https://app.realmind.co.il'}
            >
              אין מה לחכות הרשמו עכשיו והתחילו ללמוד
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
