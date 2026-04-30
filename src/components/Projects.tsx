import { useLang } from "@/contexts/LangContext";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="section-pad">
      <div className="container max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">{t.projects.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient">{t.projects.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="group glass relative overflow-hidden rounded-3xl p-6 transition hover:border-primary/50 hover:-translate-y-1 hover:shadow-elegant"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`absolute -top-20 -end-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.gradient} blur-3xl opacity-60 transition group-hover:opacity-90`} />
              {p.featured && (
                <span className="absolute top-4 end-4 z-10 rounded-full bg-gradient-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-glow">
                  {t.projects.featured}
                </span>
              )}

              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl glass-strong text-3xl mb-4 shadow-card">
                  {p.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{p.category}</p>
                <h3 className="font-display text-xl font-semibold mb-3 leading-tight">
                  {p.title[lang]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-4">
                  {p.description[lang]}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted/60 px-2 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2">
                  {t.projects.view}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
