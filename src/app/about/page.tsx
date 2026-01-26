import Image, { StaticImageData } from "next/image";
import reactImg from "../assets/logo_fm/react.svg";
import nextImg from "../assets/logo_fm/faviconNext.ico";
import nuxtImg from "../assets/logo_fm/faviconNuxt.ico";
import vueImg from "../assets/logo_fm/faviconVuue.ico";
import laravelImg from "../assets/logo_fm/faviconLaravel.ico";
import inertiaImg from "../assets/logo_fm/faviconInertia.ico";
import tailwindImg from "../assets/logo_fm/faviconTailwind.ico";
import axiosImg from "../assets/logo_fm/faviconAxios.ico";
import mysqlImg from "../assets/logo_fm/faviconMysql.png";

const skills: { name: string; image: StaticImageData }[] = [
  { name: "React", image: reactImg },
  { name: "Next.js", image: nextImg },
  { name: "Nuxt", image: nuxtImg },
  { name: "Vue", image: vueImg },
  { name: "Laravel", image: laravelImg },
  { name: "Inertia", image: inertiaImg },
  { name: "Tailwind CSS", image: tailwindImg },
  { name: "Axios", image: axiosImg },
  { name: "MySQL", image: mysqlImg },
];

const experiences = [
  {
    title: "Freelancer",
    company: "Self-employed",
    description: "Working on various web development projects for clients, from company profile websites, landing pages, to fullstack web applications. Responsible from requirement gathering, design, development, to deployment.",
  },
  {
    title: "IT Intern",
    company: "BPR Cahaya Fajar",
    description: "Learning and developing web applications using Vue.js as frontend framework and Laravel as backend. Understanding RESTful API concepts, database integration, and development workflow in banking environment.",
  },
  {
    title: "IT Intern",
    company: "Master Media",
    description: "Learning computer hardware troubleshooting, Windows and Linux OS installation and configuration, and PC, laptop, and monitor component assembly. Gaining hands-on experience in IT device maintenance and repair.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-30 py-10 pb-20 md:pb-10">
      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="dark:text-neutral-400 text-neutral-600 text-base md:text-lg mb-8">
          I&apos;m a web developer with a strong passion for building modern, responsive, and user-friendly applications. I believe every challenge is an opportunity to grow, and I&apos;m always eager to learn new technologies and improve my craft.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-3 mb-8">
          {skills.map((skill) => (
            <li key={skill.name} className="px-4 py-2 dark:bg-neutral-800 bg-neutral-200 rounded-md text-sm flex items-center gap-2">
              <Image src={skill.image} alt={skill.name} width={20} height={20} />
              {skill.name}
            </li>
          ))}
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.company} className="border-l-2 dark:border-neutral-700 border-neutral-300 pl-4">
              <h3 className="font-medium">{exp.title}</h3>
              <p className="dark:text-neutral-500 text-neutral-500 text-sm">{exp.company}</p>
              <p className="dark:text-neutral-400 text-neutral-600 text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
