import { Mail, MapIcon, Phone } from "lucide-react";
import { cn } from "../lib/utils";
import { CONTENT } from "../content";
import { useLang } from "../contexts/LangContext";

export default function ContactSection() {
  const { langIndex, handleSetLangIndex } = useLang();

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {CONTENT[langIndex].cont1}{" "}
          <span className="text-primary">{CONTENT[langIndex].cont2}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {CONTENT[langIndex].cont3}
        </p>

        <div className="flex items-center w-full justify-center">
          <div className="flex-col items-center w-full space-y-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">
              {CONTENT[langIndex].cont4}
            </h3>

            <div className="flex items-center w-full space-x-10 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{CONTENT[langIndex].cont5}</h4>
                  <a
                    className={cn(
                      "text-muted-foreground hover:text-primary",
                      "transitions-colors",
                    )}
                  >
                    m505dp23@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{CONTENT[langIndex].cont6}</h4>
                  <a
                    className={cn(
                      "text-muted-foreground hover:text-primary",
                      "transitions-colors",
                    )}
                  >
                    +51 980757083
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{CONTENT[langIndex].cont7}</h4>
                  <a
                    className={cn(
                      "text-muted-foreground hover:text-primary",
                      "transitions-colors",
                    )}
                  >
                    Lima, Peru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
