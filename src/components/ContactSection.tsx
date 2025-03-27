
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading text-center">Contact Me</h2>

        <div className="mt-10">
          <div className="glass-card rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-white/80 mb-8 text-center">
              Please feel free to contact me at any time. I'll try to get back
              to you as soon as possible!
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={<Mail size={18} />}
                label="Email"
                value="kabirbose04@gmail.com"
                href="mailto:kabirbose04@gmail.com"
              />
              <ContactItem
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                value="Kabir Bose"
                href="https://www.linkedin.com/in/kabirbose/"
              />
              <ContactItem
                icon={<Github size={18} />}
                label="GitHub"
                value="kabirbose"
                href="https://github.com/kabirbose"
              />
              <ContactItem
                icon={<MapPin size={18} />}
                label="Location"
                value="Toronto, ON, Canada"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <>
      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
        <span className="text-accent">{icon}</span>
      </div>
      <div>
        <p className="text-sm text-white/60">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </>
  );

  return (
    <div className="flex items-center gap-4">
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 hover:text-accent transition-colors"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default ContactSection;
