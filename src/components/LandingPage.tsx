import { ArrowRight, Target, TrendingUp, Award, Users, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface LandingPageProps {
  onStartExploring: () => void;
}

export function LandingPage({ onStartExploring }: LandingPageProps) {
  const features = [
    {
      icon: Target,
      title: "AI Skill Gap Analysis",
      description: "Know exactly what skills you need to land your dream job",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Award,
      title: "Gamification System",
      description: "Earn XP, unlock badges, and compete on leaderboards",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Mock Interviews",
      description: "Practice with AI-powered interview simulator",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Application Tracker",
      description: "Manage all your internship applications in one place",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-140px)]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm">
              ✨ Powered by AI Guru
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Find Your Perfect Career Path
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore careers that match your interests, get personalized roadmaps, and plan your journey to success. 
              Perfect for students ready to shape their future.
            </p>
            <Button
              size="lg"
              onClick={onStartExploring}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              Start Exploring
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">How InternHub Helps You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We make career exploration simple, personalized, and actionable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-purple-200 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 text-cyan-50 max-w-2xl mx-auto">
            Join thousands of students who have already discovered their dream careers
          </p>
          <Button
            size="lg"
            onClick={onStartExploring}
            className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
