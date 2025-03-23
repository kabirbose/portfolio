import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setFormState({ name: "", email: "", message: "" });
    alert("Thank you for your message!");
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Contact Me</h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <p className="text-white/80">
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

          <div className="glass-card rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="glass-button px-6 py-3 rounded-md text-white font-medium flex items-center gap-2"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
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
