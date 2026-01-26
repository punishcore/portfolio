import { StaticImageData } from "next/image";
import portfolioImg from "../assets/portfolio.png";
import dinamisImg from "../assets/dinamis.png";
import portScannerImg from "../assets/port_scanner.png";
import threatImg from "../assets/threat_detection.png";

export type ProjectType = {
  id: string;
  img: StaticImageData;
  title: string;
  desc: string;
  category: string;
  links: { label: string; url: string }[];
};

export const projects: ProjectType[] = [
  {
    id: "portfolio",
    img: portfolioImg,
    title: "Portfolio Website",
    desc: "Personal portfolio website built with Next.js and Tailwind CSS.",
    category: "Web",
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "dinamis",
    img: dinamisImg,
    title: "Dinamis App",
    desc: "Fullstack web application with Laravel and Vue.js.",
    category: "Web",
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "port-scanner",
    img: portScannerImg,
    title: "Port Scanner",
    desc: "Network port scanning tool for security analysis.",
    category: "Security",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "threat-detection",
    img: threatImg,
    title: "Threat Detection",
    desc: "Security threat detection and monitoring system.",
    category: "Security",
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
      { label: "Docs", url: "#" },
    ],
  },
];
