import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "מה כולל המנוי?",
    answer: "המנוי כולל גישה מלאה לכל הסימולטורים, אימון מותאם אישית עם AI, הסברים מפורטים, מעקב אחר התקדמות, חומרי לימוד מקיפים ותמיכה טכנית. הגישה תקפה עד יום המבחן שלך."
  },
  {
    question: "איך ה-AI עוזר בהכנה למבחן?",
    answer: "ה-AI מנתח את התשובות שלך, מזהה נקודות חוזק וחולשה, ומתאים את התרגולים בהתאם. הוא מספק הסברים מפורטים לכל שאלה ועוזר להבין את החומר לעומק."
  },
  {
    question: "עד מתי תקפה הגישה למערכת?",
    answer: "הגישה תקפה עד יום המבחן האמיתי שלך. תוכל להתאמן ללא הגבלה עד למועד המבחן."
  },
  {
    question: "האם יש תקופת ניסיון חינם?",
    answer: "כרגע לא מציעים תקופת ניסיון, אבל המחיר שלנו משתלם במיוחד והשקעה קטנה ביחס לערך שתקבל. אנחנו בטוחים שתראה תוצאות."
  },
  {
    question: "האם הסימולטורים דומים למבחן האמיתי?",
    answer: "כן! הסימולטורים שלנו מדמים את המבחן האמיתי במדויק - גם מבחינת סוג השאלות וגם מבחינת הפורמט והזמן. זה יעזור לך להיות מוכן בצורה הטובה ביותר."
  },
  {
    question: "מה קורה אם לא אעבור את המבחן?",
    answer: "המערכת שלנו נועדה לעזור לך להצליח, אבל אם לא תעבור - תוכל להמשיך להשתמש במערכת עד למועד המבחן הבא שלך."
  },
  {
    question: "אני ממש לא טכנולוגי, אני לא יודע איך להשתמש במערכת",
    answer: "אל תדאג! המערכת שלנו תוכננה במיוחד להיות פשוטה ואינטואיטיבית לשימוש. כל מה שצריך זה להיכנס, לבחור מבחן ולהתחיל. המערכת מנחה אותך בכל שלב, והכל מוסבר בצורה ברורה. בנוסף, יש לנו צוות תמיכה זמין שמוכן לעזור לך בכל שאלה או בעיה. אם אתה יכול להשתמש בוואטסאפ או באימייל - אתה יכול להשתמש במערכת שלנו!"
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            כל מה שרצית לדעת על Real Mind
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow ${
                  index === faqs.length - 1 ? 'bg-white border-accent/20' : ''
                }`}
              >
                <AccordionTrigger className="text-right text-lg font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
