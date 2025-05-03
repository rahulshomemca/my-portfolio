import { NextResponse } from "next/server";
import type { Project } from "@/types/projects";

const projects: Project[] = [
  {
    title: "Sequential Chauffeur",
    period: "February 2023 - Present",
    category: "Full Stack",
    description:
      "Built back-end architecture using FastAPI, Golang, gRPC, Docker, Redis, MySQL, Kafka and MongoDB. Built front-end architecture using React, TypeScript, Recoil, JWT and Tailwind CSS.",
    highlights: [
      "Implemented microservices architecture with gRPC for inter-service communication",
      "Built event-based microservices using Kafka for message processing",
      "Deployed on AWS ECS service, S3 and Cloudfront",
      "Implemented SSO using Keycloak and JWT tokens",
      "Set up monitoring using AWS CloudWatch",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Recoil",
      "Tailwind CSS",
      "Golang",
      "gRPC",
      "FastAPI",
      "Kafka",
      "MySQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    title: "Authentication Microservice (Single sign-on)",
    period: "November 2022 - January 2023",
    category: "Full Stack",
    description:
      "Built authentication microservice enabling single sign-on across multiple applications with enhanced security features.",
    highlights: [
      "Implemented Google CAPTCHA for enhanced security",
      "Added 2FA using Google Authenticator",
      "Built support agent interface with OTP verification",
      "Deployed on AWS ECS service, S3 and Cloudfront",
      "Enabled backend API authentication and authorization",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Keycloak",
      "Flask",
      "MySQL",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "UI Component Library",
    period: "January 2023 - Present",
    category: "Frontend",
    description:
      "Built a reusable UI component library to maintain consistency across all applications.",
    highlights: [
      "Published on NPM for easy integration",
      "Implemented comprehensive unit testing",
      "Open-sourced for community use",
      "Continuous updates with new components",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Recoil",
      "Tailwind CSS",
      "Jest",
      "NPM",
    ],
  },
  {
    title: "Service Centre Payout Microservice",
    period: "May 2022 - November 2022",
    category: "Full Stack",
    description:
      "Built a microservice for calculating and managing service centre payouts with real-time updates.",
    highlights: [
      "Implemented event-based architecture using AWS SQS and SNS",
      "Added real-time progress updates using WebSockets",
      "Automated invoice generation",
      "Integrated with Keycloak for SSO",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Django",
      "Celery",
      "Redis",
      "MySQL",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Mishap Management",
    period: "April 2022 - May 2022",
    category: "Full Stack",
    description:
      "Built a microservice for managing mishaps with image uploads, estimates, and automatic credit note generation.",
    highlights: [
      "Implemented image upload functionality",
      "Added automatic credit note generation",
      "Integrated real-time email updates using SendGrid",
      "Deployed using AWS Fargate and ALB",
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "FastAPI",
      "Pandas",
      "MySQL",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "OEM Dashboard",
    period: "March 2022 - June 2022",
    category: "Full Stack",
    description:
      "Built a web application for manufacturers to view reports of their service centres across the country.",
    highlights: [
      "Implemented comprehensive reporting system",
      "Added AWS Cognito for authentication",
      "Integrated Cube.js for analytics",
      "Deployed using AWS ECS and ECR",
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Cube.js",
      "Flask",
      "MySQL",
      "Docker",
      "AWS",
    ],
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
