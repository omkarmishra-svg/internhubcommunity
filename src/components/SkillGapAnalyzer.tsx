import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Target, TrendingUp, CheckCircle2, X, BookOpen, Zap, AlertTriangle, Award, Building2, Briefcase, Plus, Trash2, Map, ArrowRight } from "lucide-react";

interface SkillGapAnalyzerProps {
  studentProfile: any;
}

export function SkillGapAnalyzer({ studentProfile }: SkillGapAnalyzerProps) {
  const [selectedRole, setSelectedRole] = useState("Web Developer");
  const [customMode, setCustomMode] = useState(false);
  const [customCompany, setCustomCompany] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [customSkills, setCustomSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [showResults, setShowResults] = useState(false);

  const jobRoles = [
    { id: 1, title: "Web Developer", company: "Google", matchScore: 78 },
    { id: 2, title: "Data Analyst", company: "Amazon", matchScore: 65 },
    { id: 3, title: "UI/UX Designer", company: "Microsoft", matchScore: 82 },
    { id: 4, title: "Full Stack Engineer", company: "Meta", matchScore: 72 },
  ];

  const skillAnalysis: Record<string, {
    matchScore: number;
    hasSkills: string[];
    missingSkills: { name: string; importance: string; estimatedTime: string }[];
    optionalSkills: string[];
    recommendations: { title: string; platform: string; duration: string; xp: number }[];
  }> = {
    "Web Developer": {
      matchScore: 78,
      hasSkills: ["JavaScript", "React", "HTML/CSS", "Git"],
      missingSkills: [
        { name: "TypeScript", importance: "High", estimatedTime: "2-3 weeks" },
        { name: "Node.js", importance: "High", estimatedTime: "3-4 weeks" },
        { name: "AWS", importance: "Medium", estimatedTime: "4-6 weeks" },
        { name: "Docker", importance: "Medium", estimatedTime: "2-3 weeks" },
      ],
      optionalSkills: ["GraphQL", "Redis", "Kubernetes"],
      recommendations: [
        { 
          title: "Complete TypeScript Fundamentals", 
          platform: "InternHub Academy",
          duration: "3 weeks",
          xp: 200
        },
        { 
          title: "Backend Development with Node.js", 
          platform: "InternHub Academy",
          duration: "4 weeks",
          xp: 250
        },
        { 
          title: "AWS Cloud Practitioner", 
          platform: "External",
          duration: "6 weeks",
          xp: 300
        },
      ],
    },
    "Data Analyst": {
      matchScore: 65,
      hasSkills: ["Excel", "SQL", "Python"],
      missingSkills: [
        { name: "Power BI", importance: "High", estimatedTime: "3-4 weeks" },
        { name: "Tableau", importance: "High", estimatedTime: "3-4 weeks" },
        { name: "R Programming", importance: "Medium", estimatedTime: "4-6 weeks" },
        { name: "Statistics", importance: "High", estimatedTime: "6-8 weeks" },
      ],
      optionalSkills: ["Machine Learning", "Big Data", "Apache Spark"],
      recommendations: [
        { 
          title: "Data Visualization with Power BI", 
          platform: "InternHub Academy",
          duration: "4 weeks",
          xp: 250
        },
        { 
          title: "Statistical Analysis Fundamentals", 
          platform: "InternHub Academy",
          duration: "6 weeks",
          xp: 300
        },
        { 
          title: "Advanced SQL for Analytics", 
          platform: "External",
          duration: "3 weeks",
          xp: 200
        },
      ],
    },
    "UI/UX Designer": {
      matchScore: 82,
      hasSkills: ["Figma", "Adobe XD", "User Research", "Wireframing"],
      missingSkills: [
        { name: "Prototyping", importance: "Medium", estimatedTime: "2-3 weeks" },
        { name: "Design Systems", importance: "High", estimatedTime: "3-4 weeks" },
        { name: "Usability Testing", importance: "Medium", estimatedTime: "2-3 weeks" },
      ],
      optionalSkills: ["Motion Design", "3D Design", "AR/VR Design"],
      recommendations: [
        { 
          title: "Advanced Figma Prototyping", 
          platform: "InternHub Academy",
          duration: "3 weeks",
          xp: 200
        },
        { 
          title: "Building Design Systems", 
          platform: "InternHub Academy",
          duration: "4 weeks",
          xp: 250
        },
        { 
          title: "UX Research Methods", 
          platform: "External",
          duration: "4 weeks",
          xp: 250
        },
      ],
    },
    "Full Stack Engineer": {
      matchScore: 72,
      hasSkills: ["JavaScript", "React", "Node.js", "MongoDB"],
      missingSkills: [
        { name: "TypeScript", importance: "High", estimatedTime: "2-3 weeks" },
        { name: "PostgreSQL", importance: "High", estimatedTime: "3-4 weeks" },
        { name: "DevOps", importance: "Medium", estimatedTime: "4-6 weeks" },
        { name: "Microservices", importance: "Medium", estimatedTime: "5-6 weeks" },
      ],
      optionalSkills: ["Kubernetes", "Redis", "GraphQL"],
      recommendations: [
        { 
          title: "TypeScript for Full Stack", 
          platform: "InternHub Academy",
          duration: "3 weeks",
          xp: 200
        },
        { 
          title: "PostgreSQL Advanced Concepts", 
          platform: "InternHub Academy",
          duration: "4 weeks",
          xp: 250
        },
        { 
          title: "Microservices Architecture", 
          platform: "External",
          duration: "6 weeks",
          xp: 300
        },
      ],
    },
  };

  const currentAnalysis = skillAnalysis[selectedRole] || skillAnalysis["Web Developer"];

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "High": return "bg-red-500/20 text-red-300 border border-red-500/50";
      case "Medium": return "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50";
      case "Low": return "bg-green-500/20 text-green-300 border border-green-500/50";
      default: return "bg-gray-700/50 text-gray-200 border border-gray-600";
    }
  };

  const getMatchColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const estimatedTimeToReady = () => {
    const totalWeeks = currentAnalysis.missingSkills.reduce((acc, skill) => {
      const weeks = parseInt(skill.estimatedTime.split("-")[1]);
      return acc + weeks;
    }, 0);
    return `${Math.floor(totalWeeks / 4)} months`;
  };

  const addSkill = () => {
    if (newSkill.trim() && !customSkills.includes(newSkill.trim())) {
      setCustomSkills([...customSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setCustomSkills(customSkills.filter(s => s !== skill));
  };

  const calculateCustomScore = () => {
    // Simple algorithm: each skill adds weight
    const baseScore = 40;
    const skillScore = Math.min(customSkills.length * 8, 50);
    return Math.min(baseScore + skillScore, 95);
  };

  const handleCustomAnalysis = () => {
    if (customCompany && customRole && customSkills.length > 0) {
      setShowResults(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              AI Skill Gap Analyzer
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Get personalized insights on what skills you need to land your dream job
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={() => { setCustomMode(false); setShowResults(false); }}
            className={`px-6 py-3 font-bold ${
              !customMode
                ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <Target className="w-5 h-5 mr-2" />
            <span className="text-white">Quick Analysis</span>
          </Button>
          <Button
            onClick={() => { setCustomMode(true); setShowResults(false); }}
            className={`px-6 py-3 font-bold ${
              customMode
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <Building2 className="w-5 h-5 mr-2" />
            <span className="text-white">Custom Analysis</span>
          </Button>
        </div>

        {/* Custom Input Form */}
        {customMode && !showResults && (
          <Card className="p-8 mb-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-2xl mb-6 text-white font-bold flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-purple-400" />
              <span className="text-white">Enter Your Target Details</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white font-semibold">Target Company</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <Input
                    id="company"
                    placeholder="e.g., Google, Amazon, Microsoft"
                    value={customCompany}
                    onChange={(e) => setCustomCompany(e.target.value)}
                    className="pl-11 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-white font-semibold">Target Role</Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <Input
                    id="role"
                    placeholder="e.g., Software Engineer, Data Analyst"
                    value={customRole}
                    onChange={(e) => setCustomRole(e.target.value)}
                    className="pl-11 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <Label className="text-white font-semibold">Your Current Skills</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter a skill (e.g., Python, React, SQL)"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  className="flex-1 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                />
                <Button
                  onClick={addSkill}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  <span className="text-white">Add</span>
                </Button>
              </div>

              {customSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                  {customSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-purple-500/30 text-purple-200 border border-purple-500/50 px-3 py-1.5 flex items-center gap-2"
                    >
                      <span className="text-white font-semibold">{skill}</span>
                      <button
                        onClick={() => removeSkill(skill)}
                        className="hover:bg-red-500/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3 text-red-400" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <Button
              onClick={handleCustomAnalysis}
              disabled={!customCompany || !customRole || customSkills.length === 0}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold h-12 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Target className="w-5 h-5 mr-2" />
              <span className="text-white">Analyze Career Readiness</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        )}

        {/* Custom Results */}
        {customMode && showResults && (
          <div className="space-y-6 mb-8">
            {/* Career Readiness Score */}
            <Card className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-4 text-white font-bold">
                  Career Readiness Score
                </h2>
                <p className="text-gray-300 mb-6">
                  For <span className="text-purple-400 font-bold">{customRole}</span> at{" "}
                  <span className="text-pink-400 font-bold">{customCompany}</span>
                </p>
                <div className="inline-block">
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                      <div className="text-7xl text-white font-bold">{calculateCustomScore()}%</div>
                    </div>
                    <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-purple-600 px-6 py-2 text-lg font-bold shadow-lg">
                      {calculateCustomScore() >= 75 ? "Ready!" : calculateCustomScore() >= 50 ? "Almost There" : "Keep Learning"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-purple-500/20 border-purple-500/50">
                  <div className="text-center">
                    <div className="text-3xl mb-2">💪</div>
                    <div className="text-2xl text-white font-bold mb-1">{customSkills.length}</div>
                    <div className="text-sm text-gray-300 font-semibold">Skills Listed</div>
                  </div>
                </Card>
                <Card className="p-4 bg-pink-500/20 border-pink-500/50">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📚</div>
                    <div className="text-2xl text-white font-bold mb-1">{Math.max(5 - customSkills.length, 0)}</div>
                    <div className="text-sm text-gray-300 font-semibold">More Skills Needed</div>
                  </div>
                </Card>
                <Card className="p-4 bg-cyan-500/20 border-cyan-500/50">
                  <div className="text-center">
                    <div className="text-3xl mb-2">⏱️</div>
                    <div className="text-2xl text-white font-bold mb-1">2-3</div>
                    <div className="text-sm text-gray-300 font-semibold">Months to Ready</div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Personalized Roadmap */}
            <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm">
              <h2 className="text-2xl mb-6 text-white font-bold flex items-center gap-2">
                <Map className="w-7 h-7 text-cyan-400" />
                <span className="text-white">Your Personalized Roadmap</span>
              </h2>

              <div className="space-y-4">
                {/* Phase 1 */}
                <Card className="p-6 bg-blue-500/20 border-blue-500/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-white font-bold mb-2">Foundation (Weeks 1-4)</h3>
                      <p className="text-gray-300 mb-3">Strengthen your current skills and fill critical gaps</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-500/30 text-blue-200 border-blue-500/50">Data Structures</Badge>
                        <Badge className="bg-blue-500/30 text-blue-200 border-blue-500/50">Algorithms</Badge>
                        <Badge className="bg-blue-500/30 text-blue-200 border-blue-500/50">System Design Basics</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Phase 2 */}
                <Card className="p-6 bg-purple-500/20 border-purple-500/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-white font-bold mb-2">Specialization (Weeks 5-8)</h3>
                      <p className="text-gray-300 mb-3">Deep dive into role-specific technologies</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-500/30 text-purple-200 border-purple-500/50">Advanced React</Badge>
                        <Badge className="bg-purple-500/30 text-purple-200 border-purple-500/50">Backend APIs</Badge>
                        <Badge className="bg-purple-500/30 text-purple-200 border-purple-500/50">Cloud Services</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Phase 3 */}
                <Card className="p-6 bg-green-500/20 border-green-500/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-white font-bold mb-2">Practice & Polish (Weeks 9-12)</h3>
                      <p className="text-gray-300 mb-3">Build projects, practice interviews, and network</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-500/30 text-green-200 border-green-500/50">Portfolio Projects</Badge>
                        <Badge className="bg-green-500/30 text-green-200 border-green-500/50">Mock Interviews</Badge>
                        <Badge className="bg-green-500/30 text-green-200 border-green-500/50">Networking</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-6 flex gap-4">
                <Button
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="flex-1 border-gray-600 text-white hover:bg-gray-700 font-bold"
                >
                  <span className="text-white">Edit Details</span>
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span className="text-white">Start Learning</span>
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Quick Analysis Mode (existing) */}
        {!customMode && (
          <>
            {/* Job Role Selection */}
            <Card className="p-6 mb-8 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h2 className="text-xl mb-4 text-white font-bold">Select a Target Role to Analyze</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {jobRoles.map((role) => (
                  <Card
                    key={role.id}
                    onClick={() => setSelectedRole(role.title)}
                    className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                      selectedRole === role.title
                        ? "border-2 border-cyan-500 bg-cyan-500/20 shadow-lg shadow-cyan-500/30"
                        : "bg-gray-700/50 border-gray-600 hover:border-cyan-500/50"
                    }`}
                  >
                    <h3 className="text-sm mb-1 text-white font-bold">{role.title}</h3>
                    <p className="text-xs text-gray-400 mb-3 font-semibold">{role.company}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-300 font-semibold">Match Score</span>
                      <Badge className={`${getMatchColor(role.matchScore)} bg-transparent border-0 font-bold`}>
                        {role.matchScore}%
                      </Badge>
                    </div>
                    <Progress value={role.matchScore} className="h-1 mt-2 bg-gray-600" />
                  </Card>
                ))}
              </div>
            </Card>

            {/* Analysis Results */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Match Score */}
              <Card className="p-6 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-cyan-500/30 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/30 transition-all">
                <div className="text-center">
                  <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-7xl mb-2 font-bold text-white">
                    {currentAnalysis.matchScore}%
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 font-semibold">Match Score</p>
                  <Badge className="bg-cyan-500 text-white mb-4 border-0 px-4 py-1 text-sm font-bold">
                    Good Match!
                  </Badge>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg border border-cyan-500/30">
                    <p className="text-xs text-gray-300 font-semibold">
                      You're <span className="text-orange-400 font-bold">{100 - currentAnalysis.matchScore}%</span> away from being job-ready
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <h3 className="mb-4 text-white font-bold text-xl">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-white font-semibold">Skills You Have</span>
                    </div>
                    <Badge className="bg-green-500/30 text-green-300 border-green-500/50 font-bold">
                      {currentAnalysis.hasSkills.length}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-red-400" />
                      <span className="text-sm text-white font-semibold">Skills Needed</span>
                    </div>
                    <Badge className="bg-red-500/30 text-red-300 border-red-500/50 font-bold">
                      {currentAnalysis.missingSkills.length}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm text-white font-semibold">Estimated Time</span>
                    </div>
                    <Badge className="bg-yellow-500/30 text-yellow-300 border-yellow-500/50 font-bold">
                      {estimatedTimeToReady()}
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Compatibility */}
              <Card className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm">
                <h3 className="mb-4 text-white font-bold text-xl">Role Compatibility</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-semibold">Technical Skills</span>
                      <span className="text-cyan-400 font-bold">75%</span>
                    </div>
                    <Progress value={75} className="h-2 bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-semibold">Experience Level</span>
                      <span className="text-yellow-400 font-bold">65%</span>
                    </div>
                    <Progress value={65} className="h-2 bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-semibold">Education Match</span>
                      <span className="text-green-400 font-bold">90%</span>
                    </div>
                    <Progress value={90} className="h-2 bg-gray-700" />
                  </div>
                  <div className="pt-3 border-t border-purple-500/30">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-bold">Overall Fit</span>
                      <span className={`${getMatchColor(currentAnalysis.matchScore)} font-bold text-lg`}>
                        {currentAnalysis.matchScore}%
                      </span>
                    </div>
                    <Progress value={currentAnalysis.matchScore} className="h-3 bg-gray-700" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Skills You Have */}
            <Card className="p-6 mt-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl mb-4 flex items-center gap-2 text-white font-bold">
                <CheckCircle2 className="w-7 h-7 text-green-400" />
                <span className="text-white">Skills You Already Have</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {currentAnalysis.hasSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-green-500/30 text-green-300 border-2 border-green-500/50 px-4 py-2 text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white font-bold">{skill}</span>
                    </div>
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Missing Skills */}
            <Card className="p-6 mt-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl mb-4 flex items-center gap-2 text-white font-bold">
                <X className="w-7 h-7 text-red-400" />
                <span className="text-white">Skills You Need to Learn</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentAnalysis.missingSkills.map((skill, index) => (
                  <Card key={index} className="p-5 bg-red-500/20 border-red-500/50 hover:shadow-lg hover:shadow-red-500/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-red-500/30 rounded-full flex items-center justify-center border-2 border-red-500/50">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                        <h4 className="text-white font-bold">{skill.name}</h4>
                      </div>
                      <Badge className={getImportanceColor(skill.importance)}>
                        <span className="font-bold">{skill.importance}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-300 mb-3 font-semibold">
                      ⏱️ Estimated time to learn: <span className="text-orange-400 font-bold">{skill.estimatedTime}</span>
                    </p>
                    <Button size="sm" className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 font-semibold">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span className="text-white">Start Learning</span>
                    </Button>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Learning Recommendations */}
            <Card className="p-6 mt-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm">
              <h2 className="text-2xl mb-6 flex items-center gap-2 text-white font-bold">
                <BookOpen className="w-7 h-7 text-cyan-400" />
                <span className="text-white">Recommended Learning Resources</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentAnalysis.recommendations.map((rec, index) => (
                  <Card
                    key={index}
                    className="p-5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-105"
                  >
                    <Badge className="mb-3 bg-cyan-500/30 text-cyan-300 border-cyan-500/50 font-semibold">
                      {rec.platform}
                    </Badge>
                    <h3 className="text-lg mb-3 text-white font-bold">{rec.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300 font-semibold">Duration:</span>
                        <span className="text-white font-bold">{rec.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300 font-semibold">Reward:</span>
                        <Badge className="bg-yellow-500/30 text-yellow-300 border-yellow-500/50 font-bold">
                          +{rec.xp} XP
                        </Badge>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 font-semibold">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-white">Enroll Now</span>
                    </Button>
                  </Card>
                ))}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
