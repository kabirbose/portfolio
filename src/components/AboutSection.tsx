import { Briefcase, GraduationCap, User } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Kabir Bose
            </h1>
            <p className="mt-4 text-xl text-white/80">
              Networking Engineer & Student
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <ProfileChip
              icon={<Briefcase size={16} />}
              text="Network Engineering Intern at CBC"
            />
            <ProfileChip
              icon={<GraduationCap size={16} />}
              text="Networking & IT Security at Ontario Tech"
            />
            <ProfileChip
              icon={<User size={16} />}
              text="Based in Toronto, ON, Canada"
            />
          </div>

          <div className="space-y-6">
            <h2 className="section-heading">About Me</h2>
            <div className="space-y-4 text-white/80">
              <p>
                I'm a dedicated network engineer with hands-on experience in
                Cisco and Arista environments. Over the past year, I've worked
                in a data center planning, designing, configuring, and
                troubleshooting LANs. Currently in my third year of university,
                I specialize in Networking and IT Security, with a strong grasp
                of CCNA and CCNP concepts.
              </p>
              <p>
                Beyond networking, I'm skilled in C++, Python, JavaScript,
                TypeScript, and SQL, along with frameworks like Qt for C++,
                LangChain for Python, PostgreSQL for SQL, and Next.js for
                TypeScript. With three years of project-driven experience, I
                specialize in developing practical, high-impact applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileChip = ({
  icon,
  text,
  className,
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10",
        className
      )}
    >
      <span className="text-accent">{icon}</span>
      <span className="text-sm text-white/90">{text}</span>
    </div>
  );
};

export default AboutSection;
