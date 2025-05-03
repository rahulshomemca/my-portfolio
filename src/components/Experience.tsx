"use client";

import { useData } from "@/hooks/useData";
import type { Experience } from "@/types/experience";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorBoundary } from "@/components/ui/error-boundary";

export default function Experience() {
  const {
    data: experiences,
    isLoading,
    error,
  } = useData<Experience[]>("/api/experience");

  if (error) {
    return (
      <ErrorBoundary>
        <div className="text-center py-12">
          <p className="text-red-500">Error loading experience data</p>
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            My journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <>
              <ExperienceSkeleton />
              <ExperienceSkeleton />
            </>
          ) : (
            experiences?.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 mb-6 last:mb-0"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                    {exp.title} at {exp.company}
                  </h3>
                  <span className="text-purple-600 dark:text-purple-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string) => (
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

function ExperienceSkeleton() {
  return (
    <div className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <Skeleton className="h-7 w-64" />
        <Skeleton className="h-5 w-32 mt-2 md:mt-0" />
      </div>
      <Skeleton className="h-20 w-full mb-4" />
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-6 w-20" />
        ))}
      </div>
    </div>
  );
}
