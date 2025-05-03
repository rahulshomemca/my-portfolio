import { NextResponse } from "next/server";
import type { Certification } from "@/types/certifications";

const certifications: Certification[] = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    id: "DVA-C02",
    issueDate: "2023",
    validUntil: "2026",
    badgeUrl:
      "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    id: "SAA-C03",
    issueDate: "2023",
    validUntil: "2026",
    badgeUrl:
      "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    title: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services (AWS)",
    id: "SOA-C02",
    issueDate: "2023",
    validUntil: "2026",
    badgeUrl:
      "https://images.credly.com/size/680x680/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    id: "AZ-900",
    issueDate: "2023",
    validUntil: "2026",
    badgeUrl:
      "https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    id: "AI-900",
    issueDate: "2023",
    validUntil: "2026",
    badgeUrl:
      "https://images.credly.com/size/680x680/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
  },
];

export async function GET() {
  return NextResponse.json(certifications);
}
