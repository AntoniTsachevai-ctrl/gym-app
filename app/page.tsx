import Image from "next/image";
import Link from "next/link";
import { trainers } from "../src/mocks/trainers";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-lime-400">FitGym</div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#explore"
              className="text-white/80 hover:text-lime-400 transition-colors"
            >
              Explore
            </Link>
            <Link
              href="#instructors"
              className="text-white/80 hover:text-lime-400 transition-colors"
            >
              Instructors
            </Link>
            <Link
              href="#pricing"
              className="text-white/80 hover:text-lime-400 transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
            The Stage for Instructors.
            <br />
            The Results for You.
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Stop scrolling, start sweating. Hire the world's best instructors
            directly from their feed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#wall"
              className="px-8 py-4 bg-lime-400 text-black font-bold rounded-full hover:bg-lime-300 transition-all transform hover:scale-105"
            >
              Find Your Trainer
            </Link>
            <Link
              href="#instructors"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all"
            >
              Join as Instructor
            </Link>
          </div>
        </div>
      </section>

      {/* The Wall Preview */}
      <section
        id="wall"
        className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-lime-400">
            The Wall
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-zinc-800/50 backdrop-blur rounded-2xl overflow-hidden border border-zinc-700 hover:border-lime-400 transition-all"
              >
                <div className="p-4 flex items-center gap-3">
                  <img
                    src={trainer.avatar}
                    alt={trainer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      {trainer.name}
                      {trainer.verified && (
                        <span className="text-xs bg-lime-400 text-black px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-white/60">
                      {trainer.speciality}
                    </div>
                  </div>
                </div>
                <div className="h-48 bg-zinc-700 flex items-center justify-center">
                  {trainer.coverImg ? (
                    <Image
                      src={trainer.coverImg}
                      alt={`${trainer.name} workout`}
                      className="w-full h-full object-cover"
                      width={800}
                      height={400}
                    />
                  ) : (
                    <div className="text-white/40">Workout Preview</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full">
                      {trainer.tags[0]}
                    </span>
                    <div className="flex gap-2">
                      <button className="text-white/60 hover:text-lime-400 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                      </button>
                      <button className="text-white/60 hover:text-cyan-400 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-yellow-400">⭐ {trainer.rating}</span>
                    <span className="text-sm text-white/60">
                      {trainer.city}
                    </span>
                  </div>
                  <button className="w-full py-2 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition-colors">
                    Start Training
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
            Why Choose FitGym
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dynamic Profiles</h3>
              <p className="text-white/70">
                Deep dives into trainer stats, certifications, and
                transformation galleries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4z" />
                  <path d="M8 8h4v4H8V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Hiring</h3>
              <p className="text-white/70">
                One-click booking and payments within the platform.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Content</h3>
              <p className="text-white/70">
                A 'Wall' where trainers publish premium routines for
                subscribers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-lime-400">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-6 border border-zinc-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-lime-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 mb-4">
                "FitGym transformed my fitness journey. The trainers are
                incredible and the platform makes everything so easy!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full"></div>
                <div>
                  <div className="font-semibold">Alex Johnson</div>
                  <div className="text-sm text-white/60">
                    Lost 30 lbs in 3 months
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-6 border border-zinc-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-lime-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 mb-4">
                "As an instructor, FitGym gave me the platform to grow my
                business and reach more clients. Game changer!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-sm text-white/60">
                    Certified HIIT Trainer
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-6 border border-zinc-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-lime-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 mb-4">
                "The Wall feature is amazing! I discovered trainers I never
                would have found otherwise. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                <div>
                  <div className="font-semibold">Mike Torres</div>
                  <div className="text-sm text-white/60">
                    Fitness Enthusiast
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Join thousands who are already training with the best instructors in
            the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#wall"
              className="px-8 py-4 bg-lime-400 text-black font-bold rounded-full hover:bg-lime-300 transition-all transform hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
