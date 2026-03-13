import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            About FitFinder
          </h1>

          <div className="max-w-2xl space-y-6">
            <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
              Welcome to FitGym, your premier destination for fitness and
              wellness. We're committed to helping you achieve your health goals
              with state-of-the-art equipment, expert trainers, and a supportive
              community.
            </p>

            <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
              Founded in 2020, FitGym has grown from a small local gym to a
              comprehensive fitness center serving thousands of members. Our
              mission is to make fitness accessible, enjoyable, and effective
              for everyone, regardless of their experience level or fitness
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-3xl">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                Modern Equipment
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                Latest fitness technology and premium equipment
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                Expert Trainers
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                Certified professionals to guide your fitness journey
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <svg
                  className="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                Community
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                Supportive environment to achieve your goals
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <Link
              className="flex h-12 items-center justify-center rounded-full bg-black px-8 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              href="/contact"
            >
              Get Started
            </Link>
            <Link
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              href="/"
            >
              Back Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
