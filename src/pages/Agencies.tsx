import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Code, Users, BarChart, Shield, Zap, ArrowLeft, Mail, Phone } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "הטמעה קלה",
    description: "הטמעה פשוטה ומהירה באתר שלכם או בפלטפורמה שלכם עם API מתקדם"
  },
  {
    icon: Users,
    title: "ניהול סוכנים",
    description: "מערכת ניהול מתקדמת למעקב אחר התקדמות הסוכנים שלכם והצלחתם במבחן"
  },
  {
    icon: BarChart,
    title: "דוחות ואנליטיקה",
    description: "דוחות מפורטים על ביצועי הסוכנים, שיעורי הצלחה, וניתוחים מעמיקים"
  },
  {
    icon: Shield,
    title: "מותג מותאם אישית",
    description: "התאמה מלאה למותג שלכם - לוגו, צבעים, וזהות ויזואלית מותאמת אישית"
  },
  {
    icon: Zap,
    title: "תמיכה טכנית",
    description: "צוות תמיכה מקצועי זמין 24/7 לעזרה בהטמעה ותחזוקה שוטפת"
  },
  {
    icon: Check,
    title: "עדכונים שוטפים",
    description: "גישה לעדכונים האחרונים, חומרי לימוד חדשים, ושיפורים בפלטפורמה"
  }
];

const benefits = [
  "הגדלת שיעור ההצלחה של הסוכנים שלכם במבחן התיווך",
  "חיסכון בזמן ובמשאבים על הכשרה פנימית",
  "שיפור איכות הסוכנים והגברת המקצועיות",
  "מעקב אחר התקדמות כל סוכן בנפרד",
  "דוחות מפורטים לניהול והחלטות אסטרטגיות",
  "תמיכה טכנית מלאה לאורך כל התהליך"
];

const Agencies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://mp.astria.ai/49w2w5jg6fi8m74hnfk1hzjzto4n)' }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              שותפות עם Real Mind
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in">
              הטמיעו את הפלטפורמה המתקדמת ביותר להכנה למבחני תיווך בסוכנות שלכם
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in">
              גם אם יש לכם קורס למעבר הבחינה וגם אם לא, המערכת שלנו תעזור לכם למשוך סוכנים לסוכנות שלכם.<br />
              ותתן לסוכנים הפוטנצאילים את הערך המוסף ישירות דרכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => window.location.href = 'mailto:contact@realmind.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                שלחו לנו אימייל
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
                onClick={() => window.location.href = 'tel:+972545936560'}
              >
                <Phone className="mr-2 h-5 w-5" />
                התקשרו אלינו
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              למה לבחור ב-Real Mind?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              פתרון מקיף להכשרת סוכנים והצלחתם במבחן התיווך
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                היתרונות עבור הסוכנות שלכם
              </h2>
              <p className="text-xl text-muted-foreground">
                מה תקבלו כשתשתפו פעולה איתנו
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="bg-accent/10 rounded-full p-2">
                      <Check className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <Card className="border-2 border-accent/30 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  מוכנים להתחיל?
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  צרו איתנו קשר כדי לדון באפשרויות השותפות והטמעת הפלטפורמה בסוכנות שלכם
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:contact@realmind.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    שלחו לנו אימייל
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 rounded-full border-2 transition-all duration-300"
                    onClick={() => window.location.href = 'tel:+972545936560'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    התקשרו אלינו
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              בואו נדבר על שותפות
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              נשמח לשמוע מכם ולעזור לכם להטמיע את הפלטפורמה בסוכנות שלכם
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.location.href = 'mailto:contact@realmind.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              צרו קשר עכשיו
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Agencies;

