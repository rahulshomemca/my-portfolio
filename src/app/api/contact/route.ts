import { NextResponse } from "next/server";
import type { ContactInfo } from "@/types/contact";

const contactInfo: Omit<ContactInfo, "icon">[] = [
  {
    title: "Email",
    value: "rahulshome8@gmail.com",
  },
  {
    title: "Location",
    value: "Bangalore, India",
  },
  {
    title: "Phone",
    value: "+91 9876543210",
  },
];

export async function GET() {
  return NextResponse.json(contactInfo);
}
