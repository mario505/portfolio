import { useState } from "react";
import { cn } from "../lib/utils";
import { useLang } from "../contexts/LangContext";
import { CONTENT } from "../content";

const skills = [
  { name: "JavaScript", level: 80, Category: "frontend" },
  { name: "React", level: 80, Category: "frontend" },
  { name: "CSS", level: 75, Category: "frontend" },
  { name: "Tailwind CSS", level: 70, Category: "frontend" },

  // Backend
  { name: "Nodejs", level: 90, Category: "backend" },
  { name: "DB2", level: 85, Category: "backend" },
  { name: "Express", level: 80, Category: "backend" },
  { name: "PostgreSQL", level: 80, Category: "backend" },
  { name: "Oracle", level: 65, Category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 85, Category: "tools" },
  { name: "Linux", level: 85, Category: "tools" },
  { name: "VS Code", level: 80, Category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection() {
  const { langIndex, handleSetLangIndex } = useLang();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.Category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {CONTENT[langIndex].skills1}{" "}
          <span className="text-primary">{CONTENT[langIndex].skills2}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors",
                "duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary",
              )}
            >
              {CONTENT[langIndex].categories[key]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "bg-primary h-2 rounded-full origin-left",
                    "animate-[grow_1.5s_ease_out",
                  )}
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <div className="text-sm text-muted-foreground">
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
