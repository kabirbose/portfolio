import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Information Technology (Honours)",
      school: "Ontario Tech University",
      period: "Sep 2022 - Apr 2027",
      description: "Specializing in network engineering and cybersecurity.",
    },
    {
      degree: "Ontario Secondary School Diploma (OSSD)",
      school: "Lester B. Pearson Collegiate Institute",
      period: "Sep 2019 - Jun 2022",
<<<<<<< HEAD
      description: "Received my high-school diploma.",
=======
      description: "Achieved my high-school diploma.",
>>>>>>> 9c6a7ee (minor wording changes)
    },
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Education</h2>

        <div className="mt-10 space-y-12">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-10 before:content-[''] before:absolute before:left-3 before:top-4 before:w-px before:h-[calc(100%-20px)] before:bg-white/10"
            >
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center z-10">
                <GraduationCap size={14} className="text-accent" />
              </div>

              <div className="glass-card rounded-lg p-6">
                <h3 className="text-lg font-medium text-white">
                  {item.degree}
                </h3>
                <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <p className="text-accent font-medium">{item.school}</p>
                  <span className="hidden sm:block text-white/30">•</span>
                  <p className="text-sm text-white/60">{item.period}</p>
                </div>
                <p className="mt-4 text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
