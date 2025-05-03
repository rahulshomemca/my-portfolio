import { NextResponse } from "next/server";
import type { Skill } from "@/types/skills";

const skills: Skill[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend Development",
    description: "Designing scalable server-side applications",
    technologies: ["Python", "FastAPI", "Flask", "Node.js", "Golang", "gRPC"],
  },
  {
    title: "Cloud & DevOps",
    description: "Managing cloud infrastructure and deployment",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Azure",
    ],
  },
  {
    title: "Databases",
    description: "Working with various database systems",
    technologies: ["MySQL", "MongoDB", "Redis", "PostgreSQL", "Kafka"],
  },
];

export async function GET() {
  return NextResponse.json(skills);
}
