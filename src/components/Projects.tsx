"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useData } from "@/hooks/useData";
import type { Project } from "@/types/projects";
import { Skeleton } from "@/components/ui/skeleton";

export default function Projects() {
  const {
    data: projects,
    isLoading,
    error,
  } = useData<Project[]>("/api/projects");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (error) return <div>Error loading projects</div>;

  const categories = projects
    ? ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
    : ["All"];

  const filteredProjects = projects
    ? selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Showcasing innovative solutions and technical expertise
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {isLoading ? (
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          ) : (
            filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl border border-gray-300 dark:border-gray-700 p-6 transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-purple-600 dark:text-purple-400 ml-4">
                      {project.period}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1">⚡️</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-5 w-24 ml-4" />
        </div>
        <Skeleton className="h-6 w-32" />
      </div>

      <Skeleton className="h-20 w-full mb-6" />

      <div className="mb-6">
        <Skeleton className="h-5 w-32 mb-3" />
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start">
              <Skeleton className="h-5 w-full" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Skeleton className="h-5 w-40 mb-3" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-6 w-20" />
          ))}
        </div>
      </div>
    </div>
  );
}
