import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ArrowLeft } from "lucide-react";
import ExamCountdown from "@/components/ExamCountdown";

const features = [
  "גישה מלאה לכל הסימולטורים",
  "אימון מותאם אישית עם AI",
  "הסברים מפורטים לכל שאלה",
  "מעקב אחר התקדמות",
  "חומרי לימוד מקיפים",
  "תמיכה טכנית",
  "עדכונים שוטפים",
  "גישה עד יום המבחן"
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto mb-12">
          <ExamCountdown />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            מחיר אחד, הכל כלול
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            תשלום חד פעמי עד יום המבחן, ללא הגבלות
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            וכל זה במחיר נמוך מהדפסת הספרים
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-accent shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary-light to-accent"></div>
            
            <CardHeader className="text-center pb-8 pt-12">
              <div className="mb-4">
                <span className="text-5xl font-bold text-foreground">₪129</span>
              </div>
              <p className="text-muted-foreground text-lg">תשלום חד פעמי</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => window.location.href = 'https://realmind.netlify.app/login'}
                >
                  הירשם עכשיו
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
