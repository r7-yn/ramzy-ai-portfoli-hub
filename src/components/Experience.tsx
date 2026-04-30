import { useLang } from "@/contexts/LangContext";
import { Briefcase, GraduationCap } from "lucide-react";

const work = [
  { role: { en: "System Developer (AI)", ar: "مطوّر أنظمة (ذكاء اصطناعي)", zh: "系统开发者 (AI)" }, org: "National Blood Research Center, Ibb", period: "Nov 2024 – Jan 2025" },
  { role: { en: "Full Stack Developer", ar: "مطوّر Full Stack", zh: "全栈开发者" }, org: "24 Academy, Ibb", period: "2023 – Present" },
  { role: { en: "College Instructor", ar: "محاضر جامعي", zh: "大学讲师" }, org: "Universities in Ibb", period: "2025 – Present" },
  { role: { en: "Mobile App Developer (Freelance)", ar: "مطوّر تطبيقات جوال (Freelance)", zh: "移动应用开发者 (自由职业)" }, org: "Ongoing client project", period: "2025 – Present" },
];

const education = [
  { degree: { en: "BSc Information Technology", ar: "بكالوريوس تقنية المعلومات", zh: "信息技术学士" }, org: "University of Science & Technology, Ibb", period: "2022 – 2025" },
  { degree: { en: "Mikrotik Network Management", ar: "إدارة الشبكات بـ Mikrotik", zh: "Mikrotik 网络管理" }, org: "Modern College, Ibb", period: "2024" },
  { degree: { en: "Python for Networks & Cybersecurity", ar: "بايثون للشبكات والأمن السيبراني", zh: "Python 网络与网络安全" }, org: "Modern College, Ibb", period: "2022" },
  { degree: { en: "TOEFL Preparation + High Diploma in English", ar: "تحضير TOEFL + دبلوم عالي إنجليزي", zh: "TOEFL 备考 + 英语高级文凭" }, org: "Speak Now Institute, Ibb", period: "2018 – 2019" },
];

export function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experience" className="section-pad">
      <div className="container max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">{t.experience.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient">{t.experience.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Timeline icon={Briefcase} title={t.experience.work} items={work.map(w => ({ title: w.role[lang], org: w.org, period: w.period }))} />
          <Timeline icon={GraduationCap} title={t.experience.education} items={education.map(e => ({ title: e.degree[lang], org: e.org, period: e.period }))} />
        </div>
      </div>
    </section>
  );
}

function Timeline({ icon: Icon, title, items }: { icon: typeof Briefcase; title: string; items: { title: string; org: string; period: string }[] }) {
  return (
    <div className="glass-strong rounded-3xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-display font-semibold text-lg">{title}</h3>
      </div>
      <div className="relative ps-6 space-y-6">
        <span className="absolute start-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
        {items.map((it, i) => (
          <div key={i} className="relative">
            <span className="absolute -start-[22px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-background" />
            <h4 className="font-semibold text-sm md:text-base">{it.title}</h4>
            <p className="text-xs text-muted-foreground mt-0.5">{it.org}</p>
            <p className="text-[11px] uppercase tracking-wider text-primary mt-1 font-semibold">{it.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
