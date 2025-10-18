import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Trophy, Zap, Target, Award, TrendingUp, Star, Flame, Crown, CheckCircle2 } from "lucide-react";

interface GamificationDashboardProps {
  studentProfile: any;
}

export function GamificationDashboard({ studentProfile }: GamificationDashboardProps) {
  // Gamification data
  const level = 8;
  const xp = 2340;
  const xpToNextLevel = 3000;
  const xpProgress = (xp / xpToNextLevel) * 100;
  const streak = 7;
  const totalPoints = 8450;

  const badges = [
    { id: 1, name: "First Step", icon: "🎯", description: "Completed profile", earned: true, rarity: "Common" },
    { id: 2, name: "Skill Collector", icon: "⚡", description: "Added 10+ skills", earned: true, rarity: "Common" },
    { id: 3, name: "Project Master", icon: "🚀", description: "Uploaded 3 projects", earned: true, rarity: "Rare" },
    { id: 4, name: "Resume Pro", icon: "📄", description: "Created resume", earned: true, rarity: "Common" },
    { id: 5, name: "Career Explorer", icon: "🗺️", description: "Explored 5 careers", earned: true, rarity: "Rare" },
    { id: 6, name: "Application Ace", icon: "✨", description: "Applied to 5 internships", earned: false, rarity: "Epic" },
    { id: 7, name: "Interview Ready", icon: "🎤", description: "Completed mock interview", earned: false, rarity: "Epic" },
    { id: 8, name: "Course Champion", icon: "📚", description: "Completed 3 courses", earned: false, rarity: "Legendary" },
  ];

  const recentActivities = [
    { text: "Completed Web Dev Course", xp: 100, time: "2 hours ago" },
    { text: "Applied to Google Internship", xp: 50, time: "5 hours ago" },
    { text: "Updated Resume", xp: 30, time: "1 day ago" },
    { text: "7-Day Login Streak! 🔥", xp: 70, time: "Today" },
  ];

  const challenges = [
    { id: 1, title: "Apply to 3 Internships", reward: 150, progress: 1, total: 3, icon: "🎯" },
    { id: 2, title: "Complete a Course Module", reward: 100, progress: 2, total: 5, icon: "📖" },
    { id: 3, title: "Update Your Profile", reward: 50, progress: 1, total: 1, icon: "✅" },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-gray-600/30 text-gray-300 border border-gray-500/50";
      case "Rare": return "bg-blue-500/30 text-blue-300 border border-blue-400/50";
      case "Epic": return "bg-purple-500/30 text-purple-300 border border-purple-400/50";
      case "Legendary": return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0";
      default: return "bg-gray-600/30 text-gray-300 border border-gray-500/50";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-2 font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Your Progress & Achievements
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Level up your career journey! 🚀
          </p>
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 border-0 animate-scale-in">
            <div className="flex items-center justify-between mb-2">
              <Crown className="w-8 h-8 text-white" />
              <span className="text-4xl font-bold text-white">{level}</span>
            </div>
            <p className="text-sm text-white font-semibold opacity-90">Current Level</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 border-0 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8 text-white" />
              <span className="text-4xl font-bold text-white">{streak}</span>
            </div>
            <p className="text-sm text-white font-semibold opacity-90">Day Streak</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-500 to-blue-500 text-white hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 border-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-white" />
              <span className="text-4xl font-bold text-white">{xp}</span>
            </div>
            <p className="text-sm text-white font-semibold opacity-90">Total XP</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-teal-500 text-white hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 border-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-8 h-8 text-white" />
              <span className="text-4xl font-bold text-white">{badges.filter(b => b.earned).length}</span>
            </div>
            <p className="text-sm text-white font-semibold opacity-90">Badges Earned</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Level Progress */}
            <Card className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-3xl mb-1 text-white font-bold">Level {level}</h2>
                  <p className="text-sm text-gray-300 font-semibold">Career Pathfinder</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl text-white font-bold">{xp} / {xpToNextLevel}</p>
                  <p className="text-xs text-gray-400 font-semibold">XP to Level {level + 1}</p>
                </div>
              </div>
              <Progress value={xpProgress} className="h-4 mb-2 bg-gray-700" />
              <p className="text-sm text-center text-gray-300 font-semibold">
                {xpToNextLevel - xp} XP needed to reach Level {level + 1}
              </p>
            </Card>

            {/* Daily Challenges */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl flex items-center gap-2 text-white font-bold">
                  <Target className="w-6 h-6 text-orange-400" />
                  <span className="text-white">Daily Challenges</span>
                </h2>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 font-semibold">
                  Resets in 12h
                </Badge>
              </div>

              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <Card key={challenge.id} className="p-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{challenge.icon}</div>
                        <div>
                          <h4 className="text-white font-bold">{challenge.title}</h4>
                          <p className="text-sm text-gray-300 font-semibold">
                            Reward: +{challenge.reward} XP
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0 font-bold">
                        {challenge.progress}/{challenge.total}
                      </Badge>
                    </div>
                    <Progress 
                      value={(challenge.progress / challenge.total) * 100} 
                      className="h-2 bg-gray-700"
                    />
                  </Card>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h2 className="text-2xl mb-6 flex items-center gap-2 text-white font-bold">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-white">Recent Activity</span>
              </h2>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors border border-gray-600"
                  >
                    <div>
                      <p className="text-sm text-white font-semibold">{activity.text}</p>
                      <p className="text-xs text-gray-400 font-semibold">{activity.time}</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30 font-bold">
                      +{activity.xp} XP
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Badges */}
          <div className="space-y-6">
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h2 className="text-2xl mb-6 flex items-center gap-2 text-white font-bold">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-white">Achievements</span>
              </h2>

              <div className="space-y-3">
                {badges.map((badge) => (
                  <Card
                    key={badge.id}
                    className={`p-4 ${
                      badge.earned
                        ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30"
                        : "bg-gray-700/30 opacity-50 grayscale border border-gray-600"
                    } transition-all cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{badge.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm text-white font-bold">{badge.name}</h4>
                          <Badge className={getRarityColor(badge.rarity)} variant="secondary">
                            <span className={badge.rarity === "Legendary" ? "text-white font-bold" : ""}>{badge.rarity}</span>
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-300 font-semibold">
                          {badge.description}
                        </p>
                        {badge.earned && (
                          <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-500/30 text-xs font-semibold">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            <span className="text-green-300">Unlocked</span>
                          </Badge>
                        )}
                        {!badge.earned && (
                          <Badge className="mt-2 bg-gray-600/30 text-gray-400 border-gray-500/30 text-xs">
                            🔒 Locked
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Leaderboard Preview */}
            <Card className="p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 backdrop-blur-sm">
              <h3 className="text-xl mb-4 flex items-center gap-2 text-white font-bold">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-white">Leaderboard</span>
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded border border-yellow-500/30">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🥇</span>
                    <span className="text-sm text-white font-bold">Rahul Sharma</span>
                  </div>
                  <span className="text-sm font-bold text-yellow-300">12,450 XP</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded border border-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🥈</span>
                    <span className="text-sm text-white font-bold">Priya Patel</span>
                  </div>
                  <span className="text-sm font-bold text-gray-300">10,230 XP</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-500/20 rounded border border-orange-500/30">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🥉</span>
                    <span className="text-sm text-white font-bold">Amit Kumar</span>
                  </div>
                  <span className="text-sm font-bold text-orange-300">8,890 XP</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-cyan-500/20 rounded border border-cyan-500/30 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-white font-bold">#12</span>
                    <span className="text-sm text-white font-bold">You ({studentProfile?.name?.split(" ")[0]})</span>
                  </div>
                  <span className="text-sm font-bold text-cyan-300">{totalPoints} XP</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
