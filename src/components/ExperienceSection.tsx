import { useState } from "react";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: "CBC",
      title: "Network Engineering Intern",
      period: "Sep 2024 - Sep 2025",
      description: [
        "Developed a Python program utilizing PyNetbox API to automate bulk creation of connections and devices in Netbox, significantly reducing Cisco DNAC configuration times for 1000+ nodes",
        "Led cross-functional coordination with installers, CAD specialists, and engineers to successfully migrate 4 sites to Software Defined Access (SDA) network, enhancing security and scalability",
        "Streamlined project management by utilizing Jira API integrations to manage engineering team epics, maintaining Agile workflow integrity and ensuring 100% on-time delivery between sprints",
        "Executed comprehensive inventory management of 1000+ enterprise networking devices, including Cisco and Arista switches, WTIs, fiber, and SFPs, optimizing deployment workflows",
        "Delivered strategic consulting for media-production network infrastructure requirements, directly contributing to 2026 Milan Winter Olympics broadcast planning",
      ],
      tech: ["Python", "JavaScript", "Cisco IOS", "Jira", "Google Workspace"],
    },
    {
      company: "City of Toronto",
      title: "Camp Counselor",
      period: "Jul 2022 - Aug 2024",
      description: [
        "Built strong communication skills working with diverse groups of campers and staff, developing the ability to explain complex concepts in simple terms",
        "Oversaw the safety and engagement of 60-70 campers daily, maintaining a secure environment while creating memorable summer experiences",
      ],
      tech: ["Microsoft Office"],
    },
    {
      company: "Canadian Armed Forces",
      title: "Naval Communicator",
      period: "Oct 2020 - Jun 2022",
      description: [
        "Executed precise technical procedures including rifle handling, basic firefighting, and gas training under high-pressure conditions at Canadian Forces Base (CFB) Valcartier, reflecting exceptional discipline and composure",
        "Led a team through challenging tactical exercises during Basic Military Qualification (BMQ), developing strong problem-solving and leadership skills",
      ],
      tech: ["Microsoft Office"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Experience</h2>

        <div className="mt-10 flex flex-col md:flex-row gap-8">
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
