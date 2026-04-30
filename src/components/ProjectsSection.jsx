import {
  ArrowRight,
  ExternalLink,
  GitBranchIcon,
  Github,
  Link2,
} from "lucide-react";
import { cn } from "../lib/utils";
import { CONTENT } from "../content";
import { useLang } from "../contexts/LangContext";

const projects = [
  {
    id: 6,
    title: "React Quiz",
    description: [
      "Check how much you know about React",
      "Test para validar cuanto sabes sobre React",
    ],

    image: "/projects/project6.png",
    tags: ["React", "CSS", "git"],
    demoUrl: "https://quiz1-olive.vercel.app/",
    gitUrl: "https://github.com/mario505/quiz1",
  },
  {
    id: 5,
    title: "Place Picker",
    description: [
      "Choose a place you'd like to visit, the list is ordered from closest to fartest from your location!",
      "Escoge un lugar que te gustaria visitar, los lugares a escoger estan ordenados en base a la cercania a tu ubicacion!",
    ],

    image: "/projects/project5.png",
    tags: ["React", "CSS", "git"],
    demoUrl: "https://place-picker-ebon-five.vercel.app/",
    gitUrl: "https://github.com/mario505/placePicker",
  },
  {
    id: 4,
    title: "Project Manager",
    description: [
      "Basic Project + Tasks Manager with React",
      "Crea Projectos + Tareas, hecho con React",
    ],
    image: "/projects/project4.png",
    tags: ["React", "TailwindCSS", "git"],
    demoUrl: "https://proj-man-6nbn.vercel.app/",
    gitUrl: "https://github.com/mario505/projman2",
  },
  {
    id: 1,
    title: "Almost Final Countdown",
    description: ["Test your timing skill!", "Prueba tu timing!"],
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "git"],
    demoUrl: "https://portals-ochre.vercel.app/",
    gitUrl: "https://github.com/mario505/portals",
  },
  {
    id: 2,
    title: "Music Player",
    description: [
      "Basic Music Player, let's you create Playlists",
      "Reproductos basico de musica, permite crear Playlists.",
    ],
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "git"],
    demoUrl: "https://m-player-orcin.vercel.app/",
    gitUrl: "https://github.com/mario505/m-player",
  },
  {
    id: 3,
    title: "Memory Game",
    description: ["Classic Memory card game.", "Clasico juego de memoria"],
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "git"],
    demoUrl: "https://mem-card-plum.vercel.app/",
    gitUrl: "https://github.com/mario505/m-player",
  },
];

export default function ProjectsSection() {
  const { langIndex, handleSetLangIndex } = useLang();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {CONTENT[langIndex].proj1}{" "}
          <span className="text-primary">{CONTENT[langIndex].proj2}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {CONTENT[langIndex].proj3}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <a href={project.demoUrl} target="_blank">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover transition-transform",
                      "duration-500 group-hover:scale-110",
                    )}
                  />
                </a>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      className={cn(
                        "px-2 py-1 text-xs font-medium",
                        "rounded-full bg-primary/20 text-secondary-foreground",
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description[langIndex]}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-9 ">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Link2 size={20} />
                      {CONTENT[langIndex].proj4}
                    </a>
                    <a
                      href={project.gitUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <GitBranchIcon size={20} />
                      {CONTENT[langIndex].proj5}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/mario505?tab=repositories"
            target="_blank"
          >
            {CONTENT[langIndex].proj6}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
