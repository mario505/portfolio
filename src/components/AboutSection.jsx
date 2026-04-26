import { Code, User, Briefcase } from "lucide-react";
import { cn } from "../lib/utils";
import { useLang } from "../contexts/LangContext";
import { CONTENT } from "../content";

export default function AboutSection() {
  const { langIndex, handleSetLangIndex } = useLang();

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {CONTENT[langIndex].about}{" "}
          <span className="text-primary"> {CONTENT[langIndex].aboutN}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {CONTENT[langIndex].about1}
            </h3>

            <p className="text-muted-foreground">{CONTENT[langIndex].about2}</p>

            <p className="text-muted-foreground">{CONTENT[langIndex].about3}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {CONTENT[langIndex].aboutb1}
              </a>

              <a
                href={CONTENT[langIndex].resume}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary",
                  "text-primary hover:bg-primary/10 transition-cololor duration-300",
                )}
              >
                {CONTENT[langIndex].aboutb2}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left ">
                  <h4 className="font-semibold text-lg">
                    {CONTENT[langIndex].aboutI1}
                  </h4>
                  <p className="text-muted-foreground">
                    {CONTENT[langIndex].aboutI2}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left ">
                  <h4 className="font-semibold text-lg">
                    {CONTENT[langIndex].aboutI3}
                  </h4>
                  <p className="text-muted-foreground">
                    {CONTENT[langIndex].aboutI4}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left ">
                  <h4 className="font-semibold text-lg">
                    {CONTENT[langIndex].aboutI5}
                  </h4>
                  <p className="text-muted-foreground">
                    {CONTENT[langIndex].aboutI6}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
