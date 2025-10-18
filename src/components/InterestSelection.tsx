import { Code, Palette, Briefcase, Heart, TrendingUp, Megaphone, Camera, Wrench } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

interface InterestSelectionProps {
  onComplete: (interests: string[]) => void;
}

export function InterestSelection({ onComplete }: InterestSelectionProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    {
      id: "tech",
      label: "Technology",
      icon: Code,
      description: "Build software, apps, and websites",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "design",
      label: "Design",
      icon: Palette,
      description: "Create beautiful visual experiences",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "business",
      label: "Business",
      icon: Briefcase,
      description: "Strategy, management, and operations",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "healthcare",
      label: "Healthcare",
      icon: Heart,
      description: "Help people live healthier lives",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: "finance",
      label: "Finance",
      icon: TrendingUp,
      description: "Manage money and investments",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: Megaphone,
      description: "Promote brands and connect with people",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: "media",
      label: "Media & Arts",
      icon: Camera,
      description: "Create content and tell stories",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: "engineering",
      label: "Engineering",
      icon: Wrench,
      description: "Build and design solutions",
      gradient: "from-gray-600 to-slate-600",
    },
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            What Interests You?
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Select one or more areas that excite you
          </p>
          <p className="text-sm text-muted-foreground">
            {selectedInterests.length} selected
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {interests.map((interest) => {
            const Icon = interest.icon;
            const isSelected = selectedInterests.includes(interest.id);
            
            return (
              <Card
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                  isSelected
                    ? "border-2 border-cyan-500 bg-cyan-50 scale-105"
                    : "border-2 border-transparent hover:border-gray-200"
                }`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${interest.gradient} rounded-xl flex items-center justify-center mb-4 transition-transform ${
                    isSelected ? "scale-110" : ""
                  }`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-2">{interest.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {interest.description}
                </p>
                {isSelected && (
                  <div className="mt-3 text-cyan-600 text-sm flex items-center gap-1">
                    ✓ Selected
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={() => onComplete(selectedInterests)}
            disabled={selectedInterests.length === 0}
            className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Career Paths
          </Button>
        </div>
      </div>
    </div>
  );
}
