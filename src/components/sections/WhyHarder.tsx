import { X, CheckCircle, Clock, BookOpen, AlertCircle, FileText, Book, Zap, Layout, Infinity, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  {
    icon: Clock,
    title: "תהליך ארוך ומייגע",
    description: "ההכנה לוקחת זמן רב - צריך לחפש חומר, לקרוא ספרים, לארגן תרגולים, ולנהל הכל בעצמכם"
  },
  {
    icon: AlertCircle,
    title: "בלבול וחוסר מבנה",
    description: "אין מבנה ברור - לא יודעים מאיפה להתחיל, מה חשוב יותר, ואיך לארגן את הלמידה בצורה יעילה"
  },
  {
    icon: FileText,
    title: "כמות מוגבלת של שאלות ותרגולים",
    description: "יש רק מספר מוגבל של שאלות ותרגולים זמינים - אחרי כמה פעמים כבר מכירים הכל ולא מתקדמים"
  },
  {
    icon: Book,
    title: "צריך את הספר והחומרים כל הזמן",
    description: "חייבים לשאת את הספר, החומרים והמחברות איתכם - לא יכולים לתרגל בכל מקום ובכל זמן"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "למידה מהירה ויעילה",
    description: "הכל במקום אחד - חומר, תרגולים, ומעקב. ה-AI מנהל את הלמידה שלכם ומתאים את התרגול, כך שאתם מתקדמים מהר יותר"
  },
  {
    icon: Layout,
    title: "מבנה ברור ומסודר",
    description: "תוכנית לימודים מובנית ומותאמת אישית - יודעים בדיוק מאיפה להתחיל, מה ללמוד, ואיך להתכונן בצורה מסודרת"
  },
  {
    icon: Infinity,
    title: "שאלות ותרגולים בלתי מוגבלים",
    description: "מאות שאלות ותרגולים עם AI שיוצר שאלות חדשות כל פעם - לא נגמרים התרגולים ותמיד יש מה ללמוד"
  },
  {
    icon: Smartphone,
    title: "נגיש מכל מקום ובכל זמן",
    description: "תרגלו מהטלפון, הטאבלט או המחשב - הכל דיגיטלי, בלי צורך בספרים או חומרים פיזיים"
  }
];

const WhyHarder = () => {
  return (
    <section id="why-harder" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            למה קשה יותר לעבור בלי הפלטפורמה?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            בלי Real Mind, ההכנה למבחן הופכת לקשה יותר, יקרה יותר, וארוכה יותר
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16 items-stretch">
          {/* Without Platform - Challenges */}
          <div className="animate-fade-in flex">
            <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8 border-2 border-red-200 dark:border-red-900 w-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <X className="h-8 w-8 text-red-600 dark:text-red-400" />
                <h3 className="text-3xl font-bold text-red-900 dark:text-red-100">
                  בלי Real Mind
                </h3>
              </div>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-2">
                        <challenge.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-red-900 dark:text-red-100 mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-red-800 dark:text-red-200 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* With Platform - Benefits */}
          <div className="animate-fade-in flex" style={{ animationDelay: "0.1s" }}>
            <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-900 w-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                <h3 className="text-3xl font-bold text-green-900 dark:text-green-100">
                  עם Real Mind
                </h3>
              </div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2">
                        <benefit.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-green-900 dark:text-green-100 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-green-800 dark:text-green-200 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Card className="border-2 border-accent/30 shadow-xl" style={{ backgroundColor: '#f1f5f9' }}>
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                אל תקחו סיכון מיותר
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                המבחן עולה כסף, לוקח זמן, ואם לא עוברים - צריך לחכות 3 חודשים למבחן הבא.<br />
                עם Real Mind, אתם מגיעים מוכנים עם 90% הצלחה - בלי כאב ראש.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://realmind.netlify.app/login"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  התחילו עכשיו
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyHarder;

