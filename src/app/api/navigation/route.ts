import { NextResponse } from "next/server";
import type { NavItem } from "@/types/navigation";

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export async function GET() {
  return NextResponse.json(navItems);
}
