import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { CheckCircle2, Circle, BookOpen, Target, TrendingUp } from "lucide-react";

interface MyPlanPageProps {
  selectedInterests: string[];
  savedCareer: any | null;
}

export function MyPlanPage({ selectedInterests, savedCareer }: MyPlanPageProps) {
  const interestLabels: Record<string, string> = {
    tech: "Technology",
    design: "Design",
    business: "Business",
    healthcare: "Healthcare",
    finance: "Finance",
    marketing: "Marketing",
    media: "Media & Arts",
    engineering: "Engineering",
  };

  if (!savedCareer && selectedInterests.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              My Career Plan
            </h1>
            <p className="text-lg text-muted-foreground">
              Your personalized career roadmap and progress tracker
            </p>
          </div>

          <Card className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-cyan-600" />
            </div>
            <h2 className="text-2xl mb-4">Start Your Career Journey</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              You haven't started exploring careers yet. Take our interest quiz to get personalized 
              career recommendations and create your learning roadmap.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white"
            >
              Start Exploring Careers
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            My Career Plan
          </h1>
          <p className="text-lg text-muted-foreground">
            Track your progress and stay motivated on your journey
          </p>
        </div>

        {/* Interests Section */}
        <Card className="p-6 mb-6">
          <h2 className="text-2xl mb-4">Your Interests</h2>
          <div className="flex flex-wrap gap-2">
            {selectedInterests.map((interest) => (
              <Badge
                key={interest}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2"
              >
                {interestLabels[interest] || interest}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Current Career Path */}
        {savedCareer && (
          <Card className="p-6 mb-6 bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="bg-green-100 text-green-700 mb-2">Active Path</Badge>
                <h2 className="text-3xl mb-2">{savedCareer.title}</h2>
                <p className="text-muted-foreground">{savedCareer.description}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Target Salary</p>
                <p>{savedCareer.salaryRange}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Time to Learn</p>
                <p>{savedCareer.timeToLearn}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Job Demand</p>
                <p>{savedCareer.demand}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm">Overall Progress</p>
                <p className="text-sm">8% Complete</p>
              </div>
              <Progress value={8} className="h-2" />
            </div>
          </Card>
        )}

        {/* Current Learning */}
        <Card className="p-6 mb-6">
          <h2 className="text-2xl mb-4">📚 Currently Learning</h2>
          <div className="space-y-3">
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="mb-1">HTML & CSS Basics</h4>
                  <p className="text-sm text-muted-foreground mb-2">Foundation Module</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <span>Completed</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 border-2 border-cyan-200">
              <div className="flex items-start gap-3">
                <Circle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="mb-1">JavaScript Fundamentals</h4>
                  <p className="text-sm text-muted-foreground mb-2">Foundation Module</p>
                  <Progress value={35} className="h-2 mb-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-600">35% Complete</span>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-start gap-3">
                <Circle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="mb-1">Git & Version Control</h4>
                  <p className="text-sm text-muted-foreground mb-2">Foundation Module</p>
                  <Button size="sm" variant="outline">
                    Start Learning
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-3xl mb-1">3</p>
            <p className="text-sm text-muted-foreground">Skills Learning</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-3xl mb-1">1</p>
            <p className="text-sm text-muted-foreground">Milestones Completed</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-3xl mb-1">7</p>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </Card>
        </div>


      </div>
    </div>
  );
}
