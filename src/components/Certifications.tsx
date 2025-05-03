"use client";

import Image from "next/image";
import { useData } from "@/hooks/useData";
import type { Certification } from "@/types/certifications";
import { Skeleton } from "@/components/ui/skeleton";

export default function Certifications() {
  const {
    data: certifications,
    isLoading,
    error,
  } = useData<Certification[]>("/api/certifications");

  if (error) return <div>Error loading certifications</div>;

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {isLoading ? (
            <>
              <CertificationSkeleton />
              <CertificationSkeleton />
              <CertificationSkeleton />
            </>
          ) : (
            certifications?.map((cert) => (
              <div
                key={cert.id}
                className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-700"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={cert.badgeUrl}
                    alt={`${cert.title} badge`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 96px) 100vw, 96px"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  {cert.id}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function CertificationSkeleton() {
  return (
    <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
      <Skeleton className="w-24 h-24 mx-auto mb-4 rounded-lg" />
      <Skeleton className="h-7 w-full max-w-xs mx-auto mb-2" />
      <Skeleton className="h-5 w-40 mx-auto mb-2" />
      <Skeleton className="h-5 w-24 mx-auto" />
    </div>
  );
}
