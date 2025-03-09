export default function Resume() {
  return (
    <section id="resume" className="mb-12">
      <h2 className="text-2xl md:text-4xl mb-4">$ cat resume.pdf 📜</h2>
      <p className="mb-4 text-xl md:text-2xl">
        Here&apos;s a brief overview of my professional experience and skills:
      </p>
      <ul className="list-disc list-inside mb-4 text-xl md:text-2xl">
        <li>1 year of professional experience in a data centre environment</li>
        <li>
          Strong understanding of Cisco devices, configurations, and protocols
        </li>
        <li>
          Proficient in JavaScript, C++, Python, and respective frameworks
        </li>
        <li>
          Experience with Jira, Confluence, Git, and project management tools
        </li>
      </ul>
      <a
        href="https://drive.google.com/file/d/1gGzEfeKjPOom64R2Tsqumk2_mt10rQmG/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-white p-2 invert-colors text-xl md:text-2xl"
      >
        Download Resumé
      </a>
    </section>
  );
}
