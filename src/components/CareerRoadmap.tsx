import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  CheckCircle2,
  Circle,
  BookOpen,
  Video,
  Award,
  Users,
  ArrowLeft,
  Download,
} from "lucide-react";

interface Career {
  id: string;
  title: string;
  description: string;
  skills: string[];
  salaryRange: string;
  timeToLearn: string;
  demand: "High" | "Medium" | "Growing";
  gradient: string;
}

interface CareerRoadmapProps {
  career: Career;
  onBack: () => void;
}

export function CareerRoadmap({ career, onBack }: CareerRoadmapProps) {
  const roadmapData = {
    "web-dev": {
      phases: [
        {
          title: "Foundation (Month 1-2)",
          status: "current",
          milestones: [
            {
              title: "Learn HTML & CSS Basics",
              completed: true,
              resources: ["freeCodeCamp", "MDN Web Docs", "CSS-Tricks"],
            },
            {
              title: "JavaScript Fundamentals",
              completed: false,
              resources: ["JavaScript.info", "Eloquent JavaScript", "The Odin Project"],
            },
            {
              title: "Git & Version Control",
              completed: false,
              resources: ["GitHub Learning Lab", "Git Documentation", "Atlassian Git Tutorial"],
            },
          ],
        },
        {
          title: "Intermediate (Month 3-6)",
          status: "upcoming",
          milestones: [
            {
              title: "Master React.js",
              completed: false,
              resources: ["React Documentation", "Scrimba React Course", "React TypeScript Cheatsheet"],
            },
            {
              title: "Learn Backend with Node.js",
              completed: false,
              resources: ["Node.js Docs", "Express.js Guide", "MongoDB University"],
            },
            {
              title: "Build 3-5 Portfolio Projects",
              completed: false,
              resources: ["Frontend Mentor", "DevChallenges", "100 Days of Code"],
            },
          ],
        },
        {
          title: "Advanced (Month 7-12)",
          status: "upcoming",
          milestones: [
            {
              title: "TypeScript & Advanced Patterns",
              completed: false,
              resources: ["TypeScript Handbook", "Advanced React Patterns", "Clean Code"],
            },
            {
              title: "Testing & Deployment",
              completed: false,
              resources: ["Jest Documentation", "Cypress", "Vercel/Netlify Guides"],
            },
            {
              title: "Job Applications & Interviews",
              completed: false,
              resources: ["LeetCode", "Interview Cake", "STAR Method Guide"],
            },
          ],
        },
      ],
    },
    "data-analyst": {
      phases: [
        {
          title: "Foundation (Month 1-2)",
          status: "current",
          milestones: [
            {
              title: "Excel & Spreadsheet Mastery",
              completed: true,
              resources: ["Excel Tutorial", "Google Sheets Training", "DataCamp Excel"],
            },
            {
              title: "SQL Fundamentals",
              completed: false,
              resources: ["SQLBolt", "Mode SQL Tutorial", "W3Schools SQL"],
            },
            {
              title: "Statistics Basics",
              completed: false,
              resources: ["Khan Academy Statistics", "StatQuest", "Crash Course Statistics"],
            },
          ],
        },
        {
          title: "Intermediate (Month 3-6)",
          status: "upcoming",
          milestones: [
            {
              title: "Python for Data Analysis",
              completed: false,
              resources: ["Python.org", "Pandas Documentation", "DataCamp Python"],
            },
            {
              title: "Data Visualization (Tableau/PowerBI)",
              completed: false,
              resources: ["Tableau Public", "PowerBI Docs", "Storytelling with Data"],
            },
            {
              title: "Real-world Data Projects",
              completed: false,
              resources: ["Kaggle", "Data.gov", "Google Dataset Search"],
            },
          ],
        },
        {
          title: "Advanced (Month 7-8)",
          status: "upcoming",
          milestones: [
            {
              title: "Advanced Analytics & Machine Learning Basics",
              completed: false,
              resources: ["Scikit-learn", "Google ML Crash Course", "Fast.ai"],
            },
            {
              title: "Build Portfolio & Apply",
              completed: false,
              resources: ["LinkedIn", "GitHub", "Indeed/Glassdoor"],
            },
          ],
        },
      ],
    },
    "ui-ux": {
      phases: [
        {
          title: "Foundation (Month 1-3)",
          status: "current",
          milestones: [
            {
              title: "Design Fundamentals",
              completed: true,
              resources: ["Refactoring UI", "Design Principles", "Color Theory"],
            },
            {
              title: "Learn Figma",
              completed: false,
              resources: ["Figma Tutorial", "Figma Community", "Design System Guide"],
            },
            {
              title: "User Research Basics",
              completed: false,
              resources: ["Nielsen Norman Group", "UX Research Methods", "Google UX Course"],
            },
          ],
        },
        {
          title: "Intermediate (Month 4-7)",
          status: "upcoming",
          milestones: [
            {
              title: "Wireframing & Prototyping",
              completed: false,
              resources: ["Balsamiq", "Sketch", "Adobe XD"],
            },
            {
              title: "Build 5+ Design Projects",
              completed: false,
              resources: ["Daily UI Challenge", "Behance", "Dribbble"],
            },
            {
              title: "Portfolio Development",
              completed: false,
              resources: ["Webflow", "Framer", "Portfolio Examples"],
            },
          ],
        },
        {
          title: "Advanced (Month 8-10)",
          status: "upcoming",
          milestones: [
            {
              title: "Advanced Prototyping & Animation",
              completed: false,
              resources: ["Principle", "ProtoPie", "After Effects"],
            },
            {
              title: "Job Applications",
              completed: false,
              resources: ["LinkedIn", "AngelList", "Authentic Jobs"],
            },
          ],
        },
      ],
    },
    "digital-marketer": {
      phases: [
        {
          title: "Foundation (Month 1-2)",
          status: "current",
          milestones: [
            {
              title: "Marketing Fundamentals",
              completed: true,
              resources: ["HubSpot Academy", "Google Digital Garage", "Marketing 101"],
            },
            {
              title: "SEO Basics",
              completed: false,
              resources: ["Moz Beginner's Guide", "Ahrefs Academy", "Google Search Central"],
            },
            {
              title: "Social Media Marketing",
              completed: false,
              resources: ["Facebook Blueprint", "Hootsuite Academy", "Buffer Blog"],
            },
          ],
        },
        {
          title: "Intermediate (Month 3-5)",
          status: "upcoming",
          milestones: [
            {
              title: "Content Marketing & Copywriting",
              completed: false,
              resources: ["Copyblogger", "Content Marketing Institute", "Hemingway App"],
            },
            {
              title: "Google Ads & PPC",
              completed: false,
              resources: ["Google Ads Certification", "WordStream PPC University", "AdEspresso"],
            },
            {
              title: "Analytics & Reporting",
              completed: false,
              resources: ["Google Analytics Academy", "Data Studio", "Tableau Public"],
            },
          ],
        },
        {
          title: "Advanced (Month 6)",
          status: "upcoming",
          milestones: [
            {
              title: "Campaign Management & Strategy",
              completed: false,
              resources: ["Marketing Strategy Courses", "Case Studies", "Industry Blogs"],
            },
            {
              title: "Build Portfolio & Apply",
              completed: false,
              resources: ["Personal Brand", "LinkedIn", "Marketing Jobs Boards"],
            },
          ],
        },
      ],
    },
    "product-manager": {
      phases: [
        {
          title: "Foundation (Month 1-4)",
          status: "current",
          milestones: [
            {
              title: "Product Management Fundamentals",
              completed: true,
              resources: ["Product School", "Lean Product Playbook", "Inspired by Marty Cagan"],
            },
            {
              title: "Agile & Scrum Methodology",
              completed: false,
              resources: ["Scrum Guide", "Atlassian Agile Coach", "Product Board"],
            },
            {
              title: "User Research & Customer Discovery",
              completed: false,
              resources: ["The Mom Test", "Jobs to Be Done", "User Interviews"],
            },
          ],
        },
        {
          title: "Intermediate (Month 5-10)",
          status: "upcoming",
          milestones: [
            {
              title: "Product Strategy & Roadmapping",
              completed: false,
              resources: ["Product Roadmap Guide", "OKRs Framework", "ProductPlan"],
            },
            {
              title: "Data Analysis & Metrics",
              completed: false,
              resources: ["Mixpanel", "Amplitude", "SQL for PMs"],
            },
            {
              title: "Technical Understanding",
              completed: false,
              resources: ["Learn to Code Basics", "API Fundamentals", "Tech for PMs"],
            },
          ],
        },
        {
          title: "Advanced (Month 11-18)",
          status: "upcoming",
          milestones: [
            {
              title: "Leadership & Communication",
              completed: false,
              resources: ["Crucial Conversations", "Radical Candor", "Leadership Training"],
            },
            {
              title: "Build PM Portfolio",
              completed: false,
              resources: ["Case Studies", "Product Teardowns", "PM Exercises"],
            },
            {
              title: "PM Job Applications",
              completed: false,
              resources: ["PM Interview Prep", "Cracking the PM Interview", "PM Network"],
            },
          ],
        },
      ],
    },
  };

  const currentRoadmap =
    roadmapData[career.id as keyof typeof roadmapData] || roadmapData["web-dev"];

  const totalMilestones = currentRoadmap.phases.reduce(
    (acc, phase) => acc + phase.milestones.length,
    0
  );
  const completedMilestones = currentRoadmap.phases.reduce(
    (acc, phase) =>
      acc + phase.milestones.filter((m) => m.completed).length,
    0
  );
  const progressPercentage = (completedMilestones / totalMilestones) * 100;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Career Paths
        </Button>

        {/* Header */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200">
          <div
            className={`w-full h-2 bg-gradient-to-r ${career.gradient} rounded-full mb-6`}
          ></div>
          <h1 className="text-4xl mb-3">{career.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">
            {career.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span>💰</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Salary Range</p>
                <p>{career.salaryRange}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span>⏱️</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time to Learn</p>
                <p>{career.timeToLearn}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span>📈</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Job Demand</p>
                <p>{career.demand}</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">Your Progress</p>
              <p className="text-sm">{Math.round(progressPercentage)}% Complete</p>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <Button className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Download Full Roadmap
          </Button>
        </Card>

        {/* Roadmap Timeline */}
        <div className="space-y-6">
          {currentRoadmap.phases.map((phase, phaseIndex) => (
            <Card key={phaseIndex} className="p-6 border-2">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    phase.status === "current"
                      ? "bg-cyan-500 text-white"
                      : phase.status === "completed"
                      ? "bg-green-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {phaseIndex + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-2">{phase.title}</h2>
                  {phase.status === "current" && (
                    <Badge className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">In Progress</Badge>
                  )}
                </div>
              </div>

              <div className="space-y-4 ml-16">
                {phase.milestones.map((milestone, milestoneIndex) => (
                  <Card
                    key={milestoneIndex}
                    className={`p-4 ${
                      milestone.completed ? "bg-green-50 border-green-200" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {milestone.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <h4 className="mb-2">{milestone.title}</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {milestone.resources.map((resource, resIndex) => (
                            <Badge
                              key={resIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              <BookOpen className="w-3 h-3 mr-1" />
                              {resource}
                            </Badge>
                          ))}
                        </div>
                        {!milestone.completed && (
                          <Button size="sm" variant="outline">
                            Start Learning
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <h3 className="text-2xl mb-4">📚 Recommended Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Video className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4>Online Courses</h4>
                <p className="text-sm text-muted-foreground">
                  Coursera, Udemy, Pluralsight
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4>Communities</h4>
                <p className="text-sm text-muted-foreground">
                  Discord, Reddit, Dev.to
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4>Certifications</h4>
                <p className="text-sm text-muted-foreground">
                  Industry-recognized credentials
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
