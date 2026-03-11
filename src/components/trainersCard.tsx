import Image from "next/image";
import Link from "next/link";

type Trainer = {
  id: string;
  name: string;
  speciality: string;
  rating: number;
  email: string;
  city: string;
  country: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  coverImg: string;
  verified: boolean;
  tags: string[];
};

export default function TrainersCard({ trainer }: { trainer: Trainer }) {
  return (
    <div
      key={trainer.id}
      className="bg-zinc-800/50 backdrop-blur rounded-2xl overflow-hidden border border-zinc-700 hover:border-lime-400 transition-all"
    >
      <div className="p-4 flex items-center gap-3">
        <Image
          src={trainer.avatar}
          alt={trainer.name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold flex items-center gap-2">
            {trainer.name}
            {trainer.verified && (
              <span className="text-xs bg-lime-400 hover:bg-lime-500 text-black px-2 py-1 rounded-full">
                Verified
              </span>
            )}
          </div>
          <div className="text-sm text-white/60">{trainer.speciality}</div>
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
          <span className="text-xs bg-cyan-400/20   text-cyan-400 px-3 py-1 rounded-full">
            {trainer.tags[0]}
          </span>
          <div className="flex gap-2">
            <button className="text-white/60 hover:text-lime-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
            <button className="text-white/60 hover:text-red-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
          <span className="text-sm text-white/60">{trainer.city}</span>
        </div>
        <button className="w-full py-2 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition-colors">
          Start Training
        </button>
      </div>
    </div>
  );
}
