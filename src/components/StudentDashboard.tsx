import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  User,
  Linkedin,
  Github,
  Mail,
  Award,
  BookOpen,
  Briefcase,
  TrendingUp,
  ExternalLink,
  Plus,
  Edit,
  Zap,
  Target,
} from "lucide-react";

interface StudentDashboardProps {
  studentProfile: any;
  onNavigate: (page: string) => void;
}

export function StudentDashboard({ studentProfile, onNavigate }: StudentDashboardProps) {
  // Mock projects data - in real app, this would come from GitHub API
  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      stars: 24,
      link: "https://github.com/user/ecommerce",
    },
    {
      name: "Task Management App",
      description: "Real-time collaborative task manager with authentication",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      stars: 15,
      link: "https://github.com/user/taskmanager",
    },
    {
      name: "Weather Dashboard",
      description: "Interactive weather forecast app with charts",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      stars: 8,
      link: "https://github.com/user/weather-app",
    },
  ];

  // Recommended courses based on skills
  const recommendedCourses = [
    {
      title: "Advanced React & TypeScript",
      platform: "InternHub Academy",
      duration: "8 weeks",
      level: "Intermediate",
      skills: ["React", "TypeScript"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Full-Stack Development Bootcamp",
      platform: "InternHub Academy",
      duration: "12 weeks",
      level: "Advanced",
      skills: ["Node.js", "MongoDB", "React"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Data Structures & Algorithms",
      platform: "InternHub Academy",
      duration: "10 weeks",
      level: "Intermediate",
      skills: ["JavaScript", "Python"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text font-bold">
            <span className="text-white">Welcome back, </span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {studentProfile?.name?.split(" ")[0] || "Student"}! 👋
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Here's your personalized career dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Stats */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="p-6 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onNavigate("profileView")}
                  className="border-cyan-500/50 text-white hover:bg-cyan-500/20"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  <span className="text-white">Edit</span>
                </Button>
              </div>

              <h3 className="text-xl mb-1 text-white font-bold">{studentProfile?.name || "Student Name"}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {studentProfile?.college || "College Name"}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">
                    {studentProfile?.email || "student@gmail.com"}
                  </span>
                </div>

                {studentProfile?.linkedinUrl && (
                  <a
                    href={studentProfile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-blue-400">View LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {studentProfile?.githubUrl && (
                  <a
                    href={studentProfile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-gray-300">View GitHub Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-cyan-500/30">
                <p className="text-sm mb-2 text-white font-semibold">Your Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {studentProfile?.skills?.map((skill: string, index: number) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-0 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <h3 className="mb-4 text-white font-bold text-xl">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white font-semibold">Profile Completion</span>
                    <span className="text-sm text-cyan-400 font-bold">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white font-semibold">Learning Progress</span>
                    <span className="text-sm text-cyan-400 font-bold">35%</span>
                  </div>
                  <Progress value={35} className="h-2 bg-gray-700" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                  <p className="text-3xl mb-1 text-white font-bold">3</p>
                  <p className="text-xs text-gray-300 font-semibold">Projects</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg border border-cyan-500/30">
                  <p className="text-3xl mb-1 text-white font-bold">12</p>
                  <p className="text-xs text-gray-300 font-semibold">Skills</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h3 className="mb-4 text-white font-bold text-xl">Quick Actions</h3>
              <div className="space-y-2">
                <Button
                  onClick={() => onNavigate("gamification")}
                  className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-white font-semibold">View Achievements</span>
                </Button>
                <Button
                  onClick={() => onNavigate("skillgap")}
                  className="w-full justify-start bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white border-0 shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <Target className="w-4 h-4 mr-2" />
                  <span className="text-white font-semibold">Analyze Skills</span>
                </Button>
                <Button
                  onClick={() => onNavigate("mockinterview")}
                  className="w-full justify-start bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-0 shadow-lg hover:shadow-orange-500/50 transition-all"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-white font-semibold">Practice Interview</span>
                </Button>
              </div>
            </Card>
          </div>

          {/* Middle & Right Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recommended Courses */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-white font-bold flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                  Recommended Courses
                </h2>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onNavigate("courses")}
                  className="border-cyan-500/50 text-white hover:bg-cyan-500/20"
                >
                  <span className="text-white">View All</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedCourses.slice(0, 2).map((course, index) => (
                  <Card
                    key={index}
                    className={`p-6 bg-gradient-to-br ${course.gradient} bg-opacity-10 border-0 hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    <Badge className="mb-3 bg-white/20 text-white border-0">{course.level}</Badge>
                    <h3 className="text-lg mb-2 text-white font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{course.platform}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white font-semibold">⏱️ {course.duration}</span>
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                        <span className="text-white">Enroll</span>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* GitHub Projects */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-white font-bold flex items-center gap-2">
                  <Github className="w-6 h-6 text-gray-300" />
                  Your Projects
                </h2>
                <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-700">
                  <Plus className="w-4 h-4 mr-2" />
                  <span className="text-white">Add Project</span>
                </Button>
              </div>

              <div className="space-y-4">
                {projects.map((project, index) => (
                  <Card key={index} className="p-4 bg-gray-700/50 border-gray-600 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="mb-1 text-white font-bold">{project.name}</h4>
                        <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Trending Internships */}
            <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-white font-bold flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  Trending Internships
                </h2>
                <Button
                  onClick={() => onNavigate("internships")}
                  className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white border-0"
                >
                  <span className="text-white">Explore All</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Frontend Developer", company: "Google", applicants: 234, match: 85 },
                  { title: "Data Analyst", company: "Amazon", applicants: 189, match: 72 },
                ].map((job, index) => (
                  <Card key={index} className="p-4 bg-gray-800/70 border-gray-700 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                    <h4 className="mb-1 text-white font-bold">{job.title}</h4>
                    <p className="text-sm text-cyan-400 mb-3 font-semibold">{job.company}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">{job.applicants} applicants</span>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                        {job.match}% Match
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
