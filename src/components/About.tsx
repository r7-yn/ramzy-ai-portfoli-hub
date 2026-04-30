import { useLang } from "@/contexts/LangContext";
import { GraduationCap, Globe2, Sparkles } from "lucide-react";

export function About() {
  const { t } = useLang();

  const highlights = [
    { icon: GraduationCap, label: "BSc IT — University of Science & Tech, Ibb", value: "Excellent" },
    { icon: Sparkles, label: "AI / ML, Full Stack & Cybersecurity", value: "Specialized" },
    { icon: Globe2, label: "Arabic · English · Chinese (learning)", value: "Trilingual" },
  ];

  return (
    <section id="about" className="section-pad">
      <div className="container max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">{t.about.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient mb-6">
            {t.about.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t.about.body}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 transition hover:border-primary/40 hover:-translate-y-1"
            >
              <h.icon className="h-7 w-7 text-primary mb-3" />
              <div className="font-display font-semibold text-sm mb-1">{h.value}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
