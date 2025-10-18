import { Card } from "./ui/card";
import { Target, Heart, Zap, Users } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Career Clarity",
      description: "We help students find careers that truly match their interests and goals.",
    },
    {
      icon: Heart,
      title: "Student-First",
      description: "Everything we build is designed with students' needs and success in mind.",
    },
    {
      icon: Zap,
      title: "Action-Oriented",
      description: "We provide clear, actionable roadmaps to help you achieve your career goals.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join thousands of students on their journey to finding their dream careers.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            About InternHub
          </h1>
          <p className="text-lg text-muted-foreground">
            Empowering students to discover and pursue their ideal careers
          </p>
        </div>

        <Card className="p-8 mb-8 bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200">
          <h2 className="text-3xl mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-4">
            InternHub was created to solve a common problem: students often feel lost when it comes 
            to choosing a career path. With so many options available, it's hard to know where to start.
          </p>
          <p className="text-lg text-muted-foreground">
            We provide a simple, intuitive platform that helps you explore careers based on your interests, 
            understand what skills you need to learn, and create a clear roadmap to achieve your goals.
          </p>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 text-white">
          <div className="text-center">
            <h2 className="text-3xl mb-4">AI-Powered Career Guidance</h2>
            <p className="text-lg mb-4 text-cyan-50">
              InternHub uses AI Guru to provide personalized career recommendations based on your 
              unique skills, experiences, and aspirations.
            </p>
            <p className="text-cyan-50">
              Get intelligent answers to all your career questions, discover opportunities you never 
              knew existed, and create customized learning paths tailored just for you.
            </p>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-3xl mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Connect with us and other students on their career exploration journey
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-2xl mb-2">📧</p>
              <p className="text-sm">Email</p>
              <p className="text-xs text-muted-foreground">hello@internhub.com</p>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-2xl mb-2">💬</p>
              <p className="text-sm">Discord</p>
              <p className="text-xs text-muted-foreground">Join our server</p>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-2xl mb-2">🐦</p>
              <p className="text-sm">Twitter</p>
              <p className="text-xs text-muted-foreground">@internhub</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
