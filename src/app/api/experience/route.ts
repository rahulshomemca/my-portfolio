import { NextResponse } from "next/server";
import type { Experience } from "@/types/experience";

const experiences: Experience[] = [
  {
    title: "Software Engineer 2",
    company: "Deloitte",
    period: "June 2023 - Present",
    description:
      "Worked on building new dashboards with React Js, Cube JS, Flask APIs. Also worked on PHP and Angular 8.",
    technologies: ["React", "Cube.js", "Flask", "PHP", "Angular", "MySQL"],
  },
  {
    title: "Full Stack Developer",
    company: "21North",
    period: "July 2020 - June 2023",
    description:
      "21North is a B2B product-based company that provides driver services to service centers for vehicle pickup and drop-off. Their services include PnD, Chauffeur, Selfinspection, and Subscription-based options. The team coordinates with service centers and customers to ensure timely and efficient delivery of services, while maintaining accurate records and performing administrative duties.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "Golang",
      "gRPC",
      "Docker",
      "Kubernetes",
      "AWS",
      "MySQL",
      "MongoDB",
      "Redis",
      "Kafka",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "21North",
    period: "Jan 2020 - July 2020",
    description:
      "Worked on building new dashboards with React Js, Cube JS, Flask APIs. Also worked on PHP and Angular 8.",
    technologies: ["React", "Cube.js", "Flask", "PHP", "Angular", "MySQL"],
  },
];

export async function GET() {
  return NextResponse.json(experiences);
}
