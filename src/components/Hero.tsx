"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Hey there 👋
            </p>
            <h1 className="text-4xl md:text-6xl font-bold">
              I create{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Enterprise Solutions
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg">
              Full Stack Developer with 5+ years of experience in crafting
              resilient and scalable applications. Specializing in cloud
              technologies and innovative problem-solving.
            </p>
            <div className="flex gap-4">
              <Link
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="#projects"
                className="border border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400 px-6 py-3 rounded-lg transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/profile.jpeg"
                alt="Rahul Shome"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
