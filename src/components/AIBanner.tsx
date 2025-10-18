import { Sparkles } from "lucide-react";

export function AIBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-center">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <p className="text-sm md:text-base">
            <span>🎓 Welcome to InternHub</span>
            <span className="hidden sm:inline"> - Your AI-powered career companion for internships and placements</span>
          </p>
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
