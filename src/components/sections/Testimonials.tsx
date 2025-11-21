import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "שרה כהן",
    role: "מתווכת מוסמכת",
    content: "הפלטפורמה הכי טובה להכנה למבחן! ה-AI עזר לי לזהות בדיוק את הנושאים שהיו לי קשיים בהם והתמקדתי בהם. עברתי את המבחן בפעם הראשונה!",
    rating: 5
  },
  {
    name: "יוסי מאירי",
    role: "מתווך מוסמך",
    content: "הסימולטורים היו זהים למבחן האמיתי והתרגול עם הבינה המלאכותית באמת עשה את ההבדל. ההשקעה הכי משתלמת שעשיתי, והייתי עושה שוב בלי לחשוב פעמים.",
    rating: 5
  },
  {
    name: "מיכל אברהם",
    role: "מתווכת מוסמכת",
    content: "ההסברים המפורטים וההתאמה האישית עזרו לי להבין את החומר לעומק. הרגשתי הרבה יותר בטוחה ביום המבחן, והיום אני מתווכת מוסמכת.",
    rating: 5
  }
];

import instructorOk from "@/assets/instructor-ok.png";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ביקורות מנבחנים שהצליחו במבחן בזכות Real Mind
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center mb-12">
          {/* Instructor Image */}
          <div className="flex justify-center animate-scale-in">
            <img 
              src={instructorOk} 
              alt="מדריך מקצועי" 
              className="w-full max-w-md drop-shadow-2xl" 
            />
          </div>
          
          {/* Success Message */}
          <div className="text-center lg:text-right animate-fade-in">
            <div className="bg-card rounded-3xl p-12 shadow-2xl border-2 border-accent/20">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                איתנו תגיעו מוכנים למבחן
              </h3>
              <div className="text-5xl md:text-6xl font-bold text-accent mb-6">
                עם 90% הצלחה
              </div>
              <p className="text-2xl text-muted-foreground">
                אתם יודעים שאתם בידיים טובות!
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
