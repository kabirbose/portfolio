import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SQL Translator",
      description:
        "Connects directly to your database and queries it using plain English statements.",
      tags: ["LangChain", "SQL", "TypeScript", "Next.js"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format",
      github: "https://github.com/username/portfolio",
      demo: "https://tasks.example.com",
    },
    {
      title: "File Manager",
      description:
        "File-manager that significantly speeds up lookup times compared to Windows File Explorer.",
      tags: ["C++", "Qt"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format",
      github: "https://github.com/username/task-manager",
      demo: "https://tasks.example.com",
    },
    {
      title: "CCNA Mega Lab",
      description:
        "Completed CCNA Lab created by Jeremy's IT Lab. Used for studying for my CCNA.",
      tags: ["Packet Tracer", "Cisco IOS"],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format",
      github: "https://github.com/username/ecommerce",
      demo: "https://shop.example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardDescription className="text-white/70">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>

                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
