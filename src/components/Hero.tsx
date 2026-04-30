import { useLang } from "@/contexts/LangContext";
import { ArrowRight, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import ramzyPhoto from "@/assets/ramzy.png";

export function Hero() {
  const { t, lang } = useLang();

  const stats = [
    { value: "20+", label: t.hero.stats.projects },
    { value: "5+", label: t.hero.stats.years },
    { value: "100%", label: t.hero.stats.satisfaction },
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-32 md:pt-40 pb-16">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-accent-cyan/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>Open for freelance & full-time roles</span>
            </div>

            <p className="text-muted-foreground text-lg mb-3 font-medium">{t.hero.greeting}</p>
            <h1 className={`font-display font-bold leading-[1.05] tracking-tight mb-5 ${lang === "ar" ? "text-5xl md:text-6xl lg:text-7xl" : "text-5xl md:text-6xl lg:text-7xl"}`}>
              <span className="text-gradient">{t.hero.name}</span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-primary mb-5">
              {t.hero.title}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {t.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-elegant hover:scale-[1.03]"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:bg-primary/10"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mb-10">
              <a href="https://github.com/r7-yn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="glass grid h-10 w-10 place-items-center rounded-full transition hover:border-primary/50 hover:text-primary">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/ramzy-albazel-47795b289" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="glass grid h-10 w-10 place-items-center rounded-full transition hover:border-primary/50 hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:ramzyalbazel700@gmail.com" aria-label="Email" className="glass grid h-10 w-10 place-items-center rounded-full transition hover:border-primary/50 hover:text-primary">
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 max-w-md">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl animate-glow" />
              <div className="relative glass-strong rounded-[2rem] p-3 shadow-elegant animate-float">
                <img
                  src={ramzyPhoto}
                  alt="Ramzy Albazel"
                  className="w-full rounded-[1.5rem] object-cover aspect-[3/4]"
                  loading="eager"
                />
                <div className="absolute -bottom-4 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 glass-strong rounded-2xl px-4 py-2 shadow-glow flex items-center gap-2 whitespace-nowrap">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-semibold">Available now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
