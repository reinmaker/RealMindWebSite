const steps = [
  {
    title: "למידה מותאמת אישית",
    description: "ה-AI הוא המורה הפרטי שלך, הוא יודע לזהות את נקודות החוזק והחולשה שלך ומתאים את החומר בהתאם והמבחנים בהתאם שתגיעו למבחן הכי מוכנים שאפשר",
    image: "https://arhoasurtfurjgfohlgt.supabase.co/storage/v1/object/public/Materials/Screenshot%202025-11-21%20at%2013.20.53.png",
    imageAlt: "ניתוח AI"
  },
  {
    title: "סימולטורים חכמים",
    description: "מבחנים מתקדמים שמדמים את המבחן האמיתי עם הסברים מפורטים והפניות לספר, שתדעו איפה לחפש, מהר, ברגע האמת.",
    image: "https://arhoasurtfurjgfohlgt.supabase.co/storage/v1/object/public/Materials/Screenshot%202025-11-21%20at%2013.23.18.png",
    imageAlt: "סימולטור מבחנים"
  },
  {
    title: "מעקב והתקדמות",
    description: "המערכת עוקבת אחרי ההתקדמות האישית שלכם, עוזרת לכם לבנות ממונטום ומשקפת לכם כמה אתם באמת מוכנים לעבור את מבחו התיווך בהצלחה.",
    image: "https://arhoasurtfurjgfohlgt.supabase.co/storage/v1/object/public/Materials/Screenshot%202025-11-21%20at%2019.37.04.png",
    imageAlt: "מעקב התקדמות"
  },
  {
    title: "הכנה מושלמת למבחן",
    description: "המערכת לא רק בוחנת אתכם, היא גם מלמדת, הבינה המלאכותית תדע איזה שאלות לשאול בכדי לחזק כל נושא שאתם מתקשים בו עם הכרטיסות החכמות.",
    image: "https://arhoasurtfurjgfohlgt.supabase.co/storage/v1/object/public/Materials/Screenshot%202025-11-21%20at%2013.45.24.png",
    imageAlt: "הכנה למבחן"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            איך זה עובד?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            פלטפורמת ההכנה החכמה שתלווה אותך עד להצלחה במבחן
          </p>
        </div>
        
        <div className="space-y-24 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section - First on mobile, alternating on desktop */}
                <div className={`order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative">
                    <img 
                      src={step.image} 
                      alt={step.imageAlt}
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
                
                {/* Text Section - Second on mobile, alternating on desktop */}
                <div className={`order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#0095ff" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[1.35rem] text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
