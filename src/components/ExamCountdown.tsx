import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

// תאריכי בחינות מהאתר של משרד הממשלה
const examDates2025 = [
  { date: new Date("2026-02-22"), name: "מועד חורף 2026", registrationEnd: "22.1.2026" },
  { date: new Date("2026-04-19"), name: "מועד אביב 2026", registrationEnd: "19.3.2026" },
  { date: new Date("2026-06-21"), name: "מועד קיץ 2026", registrationEnd: "21.5.2026" },
  { date: new Date("2026-08-23"), name: "מועד קיץ נוסף 2026", registrationEnd: "23.7.2026" },
  { date: new Date("2026-10-18"), name: "מועד סתיו 2026", registrationEnd: "18.9.2026" },
  { date: new Date("2026-12-20"), name: "מועד חורף 2027", registrationEnd: "20.11.2026" },
];

interface ExamDate {
  date: Date;
  name: string;
  registrationEnd: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ExamCountdown = () => {
  const [nextExam, setNextExam] = useState<ExamDate | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // מצא את המבחן הקרוב ביותר
    const now = new Date();
    const upcomingExam = examDates2025.find(exam => exam.date > now);
    
    if (upcomingExam) {
      setNextExam(upcomingExam);
    }
  }, []);

  useEffect(() => {
    if (!nextExam) return;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const examTime = nextExam.date.getTime();
      const difference = examTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // המבחן עבר, מצא את המבחן הבא
        const now = new Date();
        const upcomingExam = examDates2025.find(exam => exam.date > now);
        if (upcomingExam) {
          setNextExam(upcomingExam);
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [nextExam]);

  if (!nextExam) return null;

  const formattedDate = nextExam.date.toLocaleDateString('he-IL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/20">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Calendar className="h-5 w-5 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">{nextExam.name}</h3>
      </div>
      
      <p className="text-center text-sm text-muted-foreground mb-4">
        תאריך בחינה: {formattedDate}
      </p>
      
      <div className="text-center mb-2">
        <p className="text-xs text-muted-foreground mb-3">נותרו עד הבחינה:</p>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-background rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
          <div className="text-xs text-muted-foreground">שניות</div>
        </div>
        <div className="bg-background rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
          <div className="text-xs text-muted-foreground">דקות</div>
        </div>
        <div className="bg-background rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
          <div className="text-xs text-muted-foreground">שעות</div>
        </div>
        <div className="bg-background rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
          <div className="text-xs text-muted-foreground">ימים</div>
        </div>
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-4">
        סיום הרשמה: {nextExam.registrationEnd}
      </p>
    </div>
  );
};

export default ExamCountdown;
