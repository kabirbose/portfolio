
import { useState } from "react";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: "TechCorp",
      title: "Senior Front-end Developer",
      period: "2021 - Present",
      description: [
        "Led the development of a React-based dashboard that increased user engagement by 40%",
        "Implemented performance optimizations that reduced page load times by 60%",
        "Collaborated with designers to create a component library used across multiple projects",
        "Mentored junior developers and conducted code reviews to ensure code quality",
      ],
      tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      company: "WebSolutions Inc.",
      title: "UI Developer",
      period: "2019 - 2021",
      description: [
        "Developed and maintained multiple client websites using Vue.js",
        "Created responsive layouts that provided seamless experiences across devices",
        "Integrated RESTful APIs to provide dynamic content updates",
        "Established testing protocols that reduced production bugs by 35%",
      ],
      tech: ["Vue.js", "JavaScript", "SCSS", "Jest"],
    },
    {
      company: "Creative Digital",
      title: "Front-end Intern",
      period: "2018 - 2019",
      description: [
        "Assisted in developing UI components for client websites",
        "Converted design mockups into functional web pages",
        "Collaborated with the design team to ensure pixel-perfect implementation",
        "Participated in daily stand-ups and sprint planning meetings",
      ],
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Work Experience</h2>

        <div className="mt-10 flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/4">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-none">
              {jobs.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-4 py-3 text-left whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-200",
                    activeTab === index
                      ? "border-accent text-accent"
                      : "border-white/10 text-white/60 hover:text-white/90 hover:border-white/30"
                  )}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-3/4">
            <div className="animate-fade-in">
              <h3 className="text-xl font-medium text-white">
                {jobs[activeTab].title}{" "}
                <span className="text-accent">@ {jobs[activeTab].company}</span>
              </h3>
              <p className="text-sm text-white/60 mt-1">
                {jobs[activeTab].period}
              </p>

              <ul className="mt-6 space-y-3">
                {jobs[activeTab].description.map((item, index) => (
                  <li
                    key={index}
                    className="flex text-white/80 before:content-['▹'] before:text-accent before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {jobs[activeTab].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
