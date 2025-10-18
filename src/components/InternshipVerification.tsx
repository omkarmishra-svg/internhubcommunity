import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Shield, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Search, 
  Building2, 
  Mail, 
  Link as LinkIcon, 
  TrendingUp,
  Users,
  Calendar,
  Award,
  Star,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Info
} from "lucide-react";

export function InternshipVerification() {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [stipend, setStipend] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [verificationScore, setVerificationScore] = useState(0);

  const handleVerify = () => {
    // Calculate verification score based on inputs
    let score = 0;
    
    // Check company name
    if (companyName.trim().length > 0) score += 20;
    
    // Check email domain
    if (companyEmail.includes("@") && !companyEmail.includes("@gmail") && !companyEmail.includes("@yahoo")) {
      score += 30;
    } else if (companyEmail.includes("@gmail") || companyEmail.includes("@yahoo")) {
      score += 5;
    }
    
    // Check website
    if (companyWebsite.includes("http") && !companyWebsite.includes("wix") && !companyWebsite.includes("blogspot")) {
      score += 25;
    }
    
    // Check stipend reasonability
    const stipendNum = parseInt(stipend);
    if (stipendNum > 0 && stipendNum <= 100000) {
      score += 25;
    } else if (stipendNum > 100000) {
      score += 5; // Too good to be true
    }
    
    setVerificationScore(score);
    setShowResults(true);
  };

  const getVerificationLevel = () => {
    if (verificationScore >= 80) return { label: "Highly Trustworthy", color: "text-green-400", icon: CheckCircle2 };
    if (verificationScore >= 60) return { label: "Likely Genuine", color: "text-yellow-400", icon: AlertTriangle };
    if (verificationScore >= 40) return { label: "Needs Verification", color: "text-orange-400", icon: AlertCircle };
    return { label: "High Risk - Verify Carefully", color: "text-red-400", icon: XCircle };
  };

  const successStories = [
    {
      name: "Rahul Sharma",
      company: "Google",
      role: "SDE Intern",
      stipend: "₹80,000/month",
      duration: "3 months",
      outcome: "Got PPO with ₹28 LPA",
      rating: 5,
      review: "Amazing learning experience! Worked on real production code. The team was super supportive. Got full-time offer after internship.",
      skills: ["React", "Node.js", "System Design"],
      helpful: true,
    },
    {
      name: "Priya Patel",
      company: "Microsoft",
      role: "Data Analyst Intern",
      stipend: "₹60,000/month",
      duration: "2 months",
      outcome: "Joined as FTE at ₹22 LPA",
      rating: 5,
      review: "Best decision ever! Learned Power BI, Azure, and SQL at scale. Mentor was excellent. The work was challenging and impactful.",
      skills: ["Power BI", "SQL", "Azure"],
      helpful: true,
    },
    {
      name: "Amit Kumar",
      company: "Flipkart",
      role: "Full Stack Intern",
      stipend: "₹40,000/month",
      duration: "6 months",
      outcome: "PPO at ₹18 LPA",
      rating: 5,
      review: "Hands-on experience with microservices. Built actual features used by millions. Great networking opportunity.",
      skills: ["Java", "Spring Boot", "React"],
      helpful: true,
    },
    {
      name: "Sneha Reddy",
      company: "Startup XYZ",
      role: "UI/UX Intern",
      stipend: "₹15,000/month",
      duration: "3 months",
      outcome: "Gained portfolio projects",
      rating: 4,
      review: "Lower pay but amazing learning. Designed 5+ features from scratch. Added strong projects to portfolio. Led to better opportunities.",
      skills: ["Figma", "User Research", "Prototyping"],
      helpful: true,
    },
    {
      name: "Karan Singh",
      company: "InfoTech Ltd",
      role: "Developer Intern",
      stipend: "₹10,000/month",
      duration: "2 months",
      outcome: "Average experience",
      rating: 3,
      review: "Mostly bug fixes and documentation. Limited mentorship. But learned version control and team collaboration basics.",
      skills: ["Git", "Testing", "Documentation"],
      helpful: false,
    },
    {
      name: "Ananya Desai",
      company: "TechCorp",
      role: "Marketing Intern",
      stipend: "₹8,000/month",
      duration: "3 months",
      outcome: "Certificate only",
      rating: 2,
      review: "Mostly coffee runs and admin work. Minimal real marketing tasks. But did get a certificate for resume.",
      skills: ["Social Media", "Email"],
      helpful: false,
    },
  ];

  const redFlags = [
    { icon: XCircle, text: "Asks for money/fees upfront", severity: "high" },
    { icon: XCircle, text: "Gmail/Yahoo email address", severity: "high" },
    { icon: AlertTriangle, text: "Too high stipend (₹1L+ for freshers)", severity: "medium" },
    { icon: AlertTriangle, text: "Immediate offer without interview", severity: "high" },
    { icon: XCircle, text: "No company website or social media", severity: "high" },
    { icon: AlertTriangle, text: "Vague job description", severity: "medium" },
    { icon: AlertCircle, text: "Pressure to accept quickly", severity: "medium" },
    { icon: AlertTriangle, text: "Poor grammar in communications", severity: "medium" },
  ];

  const greenFlags = [
    { icon: CheckCircle2, text: "Official company email domain", value: "+30 points" },
    { icon: CheckCircle2, text: "Professional website with careers page", value: "+25 points" },
    { icon: CheckCircle2, text: "Active LinkedIn company page", value: "+20 points" },
    { icon: CheckCircle2, text: "Multiple interview rounds", value: "+15 points" },
    { icon: CheckCircle2, text: "Clear job description & expectations", value: "+10 points" },
    { icon: CheckCircle2, text: "Employee reviews on Glassdoor", value: "+10 points" },
    { icon: CheckCircle2, text: "Reasonable stipend range", value: "+10 points" },
    { icon: CheckCircle2, text: "Listed on recognized platforms", value: "+10 points" },
  ];

  const stats = [
    { label: "Internships Lead to Jobs", value: "70%", icon: TrendingUp, color: "text-green-400" },
    { label: "Skill Improvement", value: "85%", icon: Award, color: "text-cyan-400" },
    { label: "Network Building", value: "92%", icon: Users, color: "text-purple-400" },
    { label: "Resume Boost", value: "95%", icon: Star, color: "text-yellow-400" },
  ];

  const level = getVerificationLevel();
  const Icon = level.icon;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Internship Verification Center
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Verify if your internship opportunity is genuine & beneficial
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-700 text-center hover:scale-105 transition-all">
                <StatIcon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className={`text-3xl mb-2 ${stat.color} font-bold`}>{stat.value}</div>
                <div className="text-sm text-white font-semibold">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Verification Form */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 backdrop-blur-sm">
          <h2 className="text-2xl mb-6 text-white font-bold flex items-center gap-2">
            <Shield className="w-7 h-7 text-green-400" />
            <span className="text-white">Verify Your Opportunity</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-white font-semibold">Company Name</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                <Input
                  id="company-name"
                  placeholder="e.g., Google, Microsoft, Startup XYZ"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="pl-11 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-email" className="text-white font-semibold">Recruiter Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                <Input
                  id="company-email"
                  type="email"
                  placeholder="recruiter@company.com"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  className="pl-11 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-website" className="text-white font-semibold">Company Website</Label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                <Input
                  id="company-website"
                  placeholder="https://company.com"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                  className="pl-11 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stipend" className="text-white font-semibold">Stipend Offered (₹/month)</Label>
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                <Input
                  id="stipend"
                  type="number"
                  placeholder="e.g., 15000"
                  value={stipend}
                  onChange={(e) => setStipend(e.target.value)}
                  className="pl-11 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleVerify}
            disabled={!companyName || !companyEmail}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold h-12 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="w-5 h-5 mr-2" />
            <span className="text-white">Verify Internship</span>
          </Button>
        </Card>

        {/* Verification Results */}
        {showResults && (
          <Card className="p-8 mb-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 backdrop-blur-sm animate-scale-in">
            <div className="text-center mb-8">
              <div className="inline-block relative mb-6">
                <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${
                  verificationScore >= 80 ? "from-green-600 to-emerald-600" :
                  verificationScore >= 60 ? "from-yellow-600 to-orange-600" :
                  "from-red-600 to-orange-600"
                } flex items-center justify-center shadow-2xl`}>
                  <div className="text-6xl text-white font-bold">{verificationScore}</div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Badge className={`${level.color} bg-white px-6 py-2 text-base font-bold shadow-lg`}>
                    {level.label}
                  </Badge>
                </div>
              </div>
              
              <h3 className="text-2xl text-white font-bold mb-2 mt-8">Verification Score</h3>
              <p className="text-gray-300 mb-6">
                Based on the information provided, here's our analysis
              </p>

              <Progress value={verificationScore} className="h-4 mb-4 bg-gray-700" />

              <div className="flex items-center justify-center gap-2 mt-4">
                <Icon className={`w-6 h-6 ${level.color}`} />
                <span className={`text-xl ${level.color} font-bold`}>{level.label}</span>
              </div>
            </div>

            {/* Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-green-500/20 border-green-500/50">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-white">Green Flags Found</span>
                </h4>
                <ul className="space-y-3">
                  {!companyEmail.includes("@gmail") && !companyEmail.includes("@yahoo") && (
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-semibold">Professional email domain</span>
                    </li>
                  )}
                  {companyWebsite && (
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-semibold">Company website provided</span>
                    </li>
                  )}
                  {parseInt(stipend) > 0 && parseInt(stipend) <= 100000 && (
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-semibold">Reasonable stipend range</span>
                    </li>
                  )}
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white font-semibold">Using InternHub verification</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-orange-500/20 border-orange-500/50">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  <span className="text-white">Next Steps</span>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">1.</span>
                    <span className="text-white font-semibold">Research company on LinkedIn & Glassdoor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">2.</span>
                    <span className="text-white font-semibold">Verify recruiter's LinkedIn profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">3.</span>
                    <span className="text-white font-semibold">Ask detailed questions in interview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">4.</span>
                    <span className="text-white font-semibold">Never pay any fees upfront</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">5.</span>
                    <span className="text-white font-semibold">Get written offer letter before joining</span>
                  </li>
                </ul>
              </Card>
            </div>
          </Card>
        )}

        {/* Red Flags */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30 backdrop-blur-sm">
          <h2 className="text-2xl mb-6 text-white font-bold flex items-center gap-2">
            <AlertTriangle className="w-7 h-7 text-red-400" />
            <span className="text-white">🚩 Red Flags to Watch Out For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {redFlags.map((flag, index) => {
              const FlagIcon = flag.icon;
              return (
                <Card
                  key={index}
                  className={`p-4 ${
                    flag.severity === "high"
                      ? "bg-red-500/20 border-red-500/50"
                      : "bg-orange-500/20 border-orange-500/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <FlagIcon
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        flag.severity === "high" ? "text-red-400" : "text-orange-400"
                      }`}
                    />
                    <span className="text-white font-semibold">{flag.text}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>

        {/* Green Flags */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 backdrop-blur-sm">
          <h2 className="text-2xl mb-6 text-white font-bold flex items-center gap-2">
            <CheckCircle2 className="w-7 h-7 text-green-400" />
            <span className="text-white">✅ Green Flags (Trustworthy Signs)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {greenFlags.map((flag, index) => {
              const FlagIcon = flag.icon;
              return (
                <Card key={index} className="p-4 bg-green-500/20 border-green-500/50">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <FlagIcon className="w-5 h-5 mt-0.5 text-green-400 flex-shrink-0" />
                      <span className="text-white font-semibold">{flag.text}</span>
                    </div>
                    <Badge className="bg-green-500/30 text-green-200 border-green-500/50 whitespace-nowrap">
                      {flag.value}
                    </Badge>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>

        {/* Success Stories */}
        <div className="mb-8">
          <h2 className="text-3xl mb-6 text-white font-bold text-center">
            Are Internships Really Helpful? 🤔
          </h2>
          <p className="text-center text-gray-300 mb-8 text-lg">
            Real student experiences - See how internships transformed careers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className={`p-6 ${
                  story.helpful
                    ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30"
                    : "bg-gradient-to-br from-gray-700/50 to-gray-600/50 border-gray-600"
                } hover:scale-105 transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{story.name}</h3>
                    <p className="text-cyan-400 text-sm font-semibold">{story.role}</p>
                    <p className="text-gray-400 text-xs font-semibold">{story.company}</p>
                  </div>
                  {story.helpful ? (
                    <ThumbsUp className="w-6 h-6 text-green-400" />
                  ) : (
                    <ThumbsDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < story.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-semibold">Stipend:</span>
                    <span className="text-green-400 font-bold">{story.stipend}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-semibold">Duration:</span>
                    <span className="text-white font-bold">{story.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-semibold">Outcome:</span>
                    <Badge
                      className={
                        story.helpful
                          ? "bg-green-500/30 text-green-200 border-green-500/50"
                          : "bg-gray-600 text-gray-300"
                      }
                    >
                      {story.outcome}
                    </Badge>
                  </div>
                </div>

                <p className="text-white text-sm mb-4 italic font-semibold">"{story.review}"</p>

                <div className="flex flex-wrap gap-2">
                  {story.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Verdict */}
        <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm">
          <h2 className="text-3xl mb-6 text-white font-bold text-center flex items-center justify-center gap-3">
            <Info className="w-8 h-8 text-cyan-400" />
            <span className="text-white">The Verdict: Are Internships Worth It?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-green-400 font-bold mb-4 flex items-center gap-2">
                <ThumbsUp className="w-6 h-6" />
                <span className="text-white">Yes, if you choose wisely!</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">70% of interns get job offers from their internship company</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Hands-on experience with real-world projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Build professional network and get mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Add impressive projects to your portfolio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Learn industry tools and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Get referrals for future job applications</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-yellow-400 font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                <span className="text-white">But watch out for...</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Companies that ask for money or "training fees"</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Internships with only menial tasks (coffee runs, filing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">No proper mentorship or learning opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Fake companies with no online presence</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Too-good-to-be-true offers (₹1L+ for freshers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Unpaid internships lasting more than 2 months</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/50">
            <h4 className="text-xl text-white font-bold mb-3 text-center">💡 Pro Tip</h4>
            <p className="text-white text-center font-semibold text-lg">
              Even a modest-paying internship at a genuine company is more valuable than a high-paying fake one. 
              Focus on learning, not just earning. The experience and connections you gain will pay dividends throughout your career!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
