export const siteConfig = {
  name: "Rahul's Portfolio",
  description: "Personal portfolio website showcasing my work and experience",
  url: "https://rahulshome.com",
  ogImage: "https://rahulshome.com/og.jpg",
  links: {
    github: "https://github.com/rahulshome",
    linkedin: "https://linkedin.com/in/rahulshome",
  },
  nav: {
    home: "/",
    about: "/#about",
    skills: "/#skills",
    projects: "/#projects",
    contact: "/#contact",
  },
} as const;

export type SiteConfig = typeof siteConfig;
