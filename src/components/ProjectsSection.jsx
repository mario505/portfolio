import {
  ArrowRight,
  ExternalLink,
  GitBranchIcon,
  Github,
  Link2,
} from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 4,
    title: "Project Manager",
    description: "Basic Project + Tasks Manager with React",
    image: "/projects/project4.png",
    tags: ["React", "TailwindCSS", "git"],
    demoUrl: "https://proj-man-6nbn.vercel.app/",
    gitUrl: "https://github.com/mario505/projman2",
  },
  {
    id: 1,
    title: "Almost Final Countdown",
    description: "Test your timing skill!",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "git"],
    demoUrl: "https://portals-ochre.vercel.app/",
    gitUrl: "https://github.com/mario505/portals",
  },
  {
    id: 2,
    title: "Music Player",
    description: "Basic Music Player, let's you create Playlists",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "git"],
    demoUrl: "https://m-player-orcin.vercel.app/",
    gitUrl: "https://github.com/mario505/m-player",
  },
  {
    id: 3,
    title: "Memory Game",
    description: "Classic Memory card game.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "git"],
    demoUrl: "https://mem-card-plum.vercel.app/",
    gitUrl: "https://github.com/mario505/m-player",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          attention to detail, performance and user experience.
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
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-9 ">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Link2 size={20} />
                      Go to Page
                    </a>
                    <a
                      href={project.gitUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <GitBranchIcon size={20} />
                      See Git Repo
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
            Check my git repos on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
