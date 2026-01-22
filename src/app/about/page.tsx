export default function About() {
  return (
    <div className="min-h-screen text-white px-6 md:px-16 lg:px-30 py-10 pb-20 md:pb-10">
      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-neutral-400 text-base md:text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptate quod dolorum quas exercitationem quidem voluptatibus.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-3 mb-8">
          {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"].map((skill) => (
            <li key={skill} className="px-4 py-2 bg-neutral-800 rounded-md text-sm">
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-neutral-700 pl-4">
            <h3 className="font-medium">Frontend Developer</h3>
            <p className="text-neutral-500 text-sm">Company Name • 2023 - Present</p>
          </div>
        </div>
      </section>
    </div>
  );
}
