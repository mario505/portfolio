import { Mail, MapIcon, Phone } from "lucide-react";
import { cn } from "../lib/utils";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex items-center w-full justify-center">
          <div className="flex-col items-center w-full space-y-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex items-center w-full space-x-10 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    /*  href="mail:m505dp23@gmail.com" */
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
                  <h4 className="font-medium">Phone</h4>
                  <a
                    /*                     href="tel: 12345311" */
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
                  <h4 className="font-medium">Location</h4>
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
