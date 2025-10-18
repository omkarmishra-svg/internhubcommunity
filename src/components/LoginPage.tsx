import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Mail, Lock, Building2, Star, Quote, School } from "lucide-react";
import logoImage from "figma:asset/1daa135f4290d86cac69d18bda4c6fb0b8d02bb8.png";

type UserType = "student" | "hr" | "placement";

interface LoginPageProps {
  onLogin: (email: string, type: UserType, additionalInfo?: any) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [activeTab, setActiveTab] = useState<"student" | "company" | "placement">("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeId, setCollegeId] = useState("");

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, "student");
    }
  };

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyEmail && companyPassword) {
      onLogin(companyEmail, "hr");
    }
  };

  const handlePlacementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (collegeName && collegeId) {
      onLogin(`placement_${collegeId}@${collegeName}`, "placement", { collegeName, collegeId });
    }
  };

  const handleGoogleLogin = () => {
    onLogin("student@gmail.com", "student");
  };

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Got internship at Google",
      college: "BPUT, Batch 2024",
      image: "",
      rating: 5,
      text: "InternHub's gamification kept me motivated! The skill gap analyzer helped me focus on what matters. Landed my dream internship in 3 months! 🚀",
    },
    {
      name: "Priya Patel",
      role: "SDE at Amazon",
      college: "IIT Delhi, Batch 2023",
      image: "",
      rating: 5,
      text: "The mock interview feature was a game-changer. I practiced 50+ times before my actual Amazon interview. AI Guru's feedback was spot-on!",
    },
    {
      name: "Amit Kumar",
      role: "Data Analyst at Microsoft",
      college: "NIT Trichy, Batch 2024",
      image: "",
      rating: 5,
      text: "From confusion to clarity! InternHub showed me exactly which skills I needed. The application tracker helped me stay organized with 15+ applications.",
    },
    {
      name: "Sneha Reddy",
      role: "UI/UX Designer at Flipkart",
      college: "BITS Pilani, Batch 2023",
      image: "",
      rating: 5,
      text: "Love the alumni network feature! Connected with 3 seniors at Flipkart who guided me. The resume builder saved me hours of work. Highly recommended! ⭐",
    },
  ];

  const companyStats = [
    { label: "Companies Hiring", value: "500+", icon: "🏢" },
    { label: "Active Internships", value: "2,000+", icon: "💼" },
    { label: "Students Placed", value: "50,000+", icon: "🎓" },
    { label: "Success Rate", value: "85%", icon: "📈" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Reviews */}
          <div className="space-y-8">
            {/* Logo and Header */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <img src={logoImage} alt="InternHub Logo" className="h-20 w-auto" />
              </div>
              <h1 className="text-5xl md:text-6xl mb-4 font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  InternHub
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-2">
                India's #1 AI-Powered Career Platform
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  🏆 Gamified Learning
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  🤖 AI Guru Assistant
                </Badge>
                <Badge className="bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  📊 Career Analytics
                </Badge>
              </div>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 gap-4">
              {companyStats.map((stat, index) => (
                <Card key={index} className="p-4 bg-gray-800/50 border-gray-700 text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl mb-1 text-white font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <h3 className="text-xl text-white font-bold">Success Stories 🌟</h3>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-700 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <p className="text-xs text-cyan-400 font-semibold">{testimonial.role}</p>
                        <p className="text-xs text-gray-400">{testimonial.college}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 italic">
                      <Quote className="w-4 h-4 inline mr-1 text-cyan-400" />
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Login Forms */}
          <div>
            <Card className="p-8 bg-gray-800/80 border-gray-700 backdrop-blur-sm shadow-2xl">
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-700/50">
                  <TabsTrigger 
                    value="student" 
                    className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-300"
                  >
                    <span className="text-white font-semibold">🎓 Student</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="company"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300"
                  >
                    <span className="text-white font-semibold">🏢 Company</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="placement"
                    className="data-[state=active]:bg-pink-600 data-[state=active]:text-white text-gray-300"
                  >
                    <span className="text-white font-semibold">🎯 Placement</span>
                  </TabsTrigger>
                </TabsList>

                {/* Student Login */}
                <TabsContent value="student">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl mb-2 text-white font-bold">Student Login</h2>
                      <p className="text-sm text-gray-400">
                        Access your personalized career dashboard
                      </p>
                    </div>

                    <form onSubmit={handleStudentSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white font-semibold">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-cyan-400 z-10" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="student@college.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-12 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-cyan-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-white font-semibold">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-cyan-400 z-10" />
                          <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-12 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-cyan-500"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-semibold h-12"
                      >
                        <span className="text-white">Sign In</span>
                      </Button>
                    </form>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                      </div>
                    </div>

                    <Button
                      onClick={handleGoogleLogin}
                      variant="outline"
                      className="w-full border-gray-600 text-white hover:bg-gray-700 h-12"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="text-white font-semibold">Sign in with Google</span>
                    </Button>
                  </div>
                </TabsContent>

                {/* Company Login */}
                <TabsContent value="company">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl mb-2 text-white font-bold">Employer Portal</h2>
                      <p className="text-sm text-gray-400">
                        Post internships & discover talent
                      </p>
                    </div>

                    <form onSubmit={handleCompanySubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-email" className="text-white font-semibold">Company Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-400 z-10" />
                          <Input
                            id="company-email"
                            type="email"
                            placeholder="hr@company.com"
                            value={companyEmail}
                            onChange={(e) => setCompanyEmail(e.target.value)}
                            className="pl-12 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company-password" className="text-white font-semibold">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-400 z-10" />
                          <Input
                            id="company-password"
                            type="password"
                            placeholder="••••••••"
                            value={companyPassword}
                            onChange={(e) => setCompanyPassword(e.target.value)}
                            className="pl-12 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold h-12"
                      >
                        <span className="text-white">Sign In as Employer</span>
                      </Button>
                    </form>

                    <div className="text-center">
                      <p className="text-sm text-gray-400">
                        New company?{" "}
                        <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                          Register here
                        </a>
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Placement Cell Login */}
                <TabsContent value="placement">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl mb-2 text-white font-bold">Placement Cell Portal</h2>
                      <p className="text-sm text-gray-400">
                        Access placement analytics & reports
                      </p>
                    </div>

                    <form onSubmit={handlePlacementSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="college-name" className="text-white font-semibold">College Name</Label>
                        <div className="relative">
                          <School className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-pink-400 z-10" />
                          <Input
                            id="college-name"
                            type="text"
                            placeholder="Enter your college name"
                            value={collegeName}
                            onChange={(e) => setCollegeName(e.target.value)}
                            className="pl-12 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-pink-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="college-id" className="text-white font-semibold">College ID</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-pink-400 z-10" />
                          <Input
                            id="college-id"
                            type="text"
                            placeholder="Enter your college ID"
                            value={collegeId}
                            onChange={(e) => setCollegeId(e.target.value)}
                            className="pl-12 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-pink-500"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-semibold h-12"
                      >
                        <span className="text-white">Access Placement Dashboard</span>
                      </Button>
                    </form>

                    <Card className="p-4 bg-pink-500/10 border-pink-500/30">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <span>📊</span>
                        <span>What you'll get:</span>
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400">✓</span>
                          <span>Real-time placement statistics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400">✓</span>
                          <span>Student skill gap analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400">✓</span>
                          <span>Company hiring trends</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400">✓</span>
                          <span>Alumni network insights</span>
                        </li>
                      </ul>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
