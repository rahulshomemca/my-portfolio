"use client";

import { useData } from "@/hooks/useData";
import type { Skill } from "@/types/skills";
import { Skeleton } from "@/components/ui/skeleton";

export default function Skills() {
  const { data: skills, isLoading, error } = useData<Skill[]>("/api/skills");

  if (error) return <div>Error loading skills</div>;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Technical skills and professional expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {isLoading ? (
            <>
              <SkillSkeleton />
              <SkillSkeleton />
              <SkillSkeleton />
              <SkillSkeleton />
            </>
          ) : (
            skills?.map((skill) => (
              <div
                key={skill.title}
                className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function SkillSkeleton() {
  return (
    <div className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <Skeleton className="h-7 w-48 mb-3" />
      <Skeleton className="h-16 w-full mb-4" />
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-6 w-20" />
        ))}
      </div>
    </div>
  );
}
