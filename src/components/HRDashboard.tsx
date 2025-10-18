import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Eye,
  Heart,
  Send,
  Plus,
  Search,
  Filter,
  Download,
  Star,
  CheckCircle2,
  LogOut
} from "lucide-react";
import logoImage from "figma:asset/1daa135f4290d86cac69d18bda4c6fb0b8d02bb8.png";

interface HRDashboardProps {
  companyEmail: string;
  onLogout: () => void;
}

export function HRDashboard({ companyEmail, onLogout }: HRDashboardProps) {
  const [showPostForm, setShowPostForm] = useState(false);
  const [newInternship, setNewInternship] = useState({
    title: "",
    location: "",
    duration: "",
    stipend: "",
    description: "",
    requirements: "",
  });

  const companyData = {
    name: "Tech Solutions Inc",
    logo: "",
    activeInternships: 5,
    totalApplicants: 248,
    shortlisted: 42,
    hired: 8,
  };

  const stats = [
    { label: "Active Posts", value: "5", icon: Briefcase, color: "text-cyan-400", bgColor: "bg-cyan-500/20" },
    { label: "Total Applicants", value: "248", icon: Users, color: "text-purple-400", bgColor: "bg-purple-500/20" },
    { label: "Shortlisted", value: "42", icon: CheckCircle2, color: "text-green-400", bgColor: "bg-green-500/20" },
    { label: "Hired", value: "8", icon: Star, color: "text-yellow-400", bgColor: "bg-yellow-500/20" },
  ];

  const postedInternships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      location: "Bangalore, India",
      type: "Full-time",
      duration: "6 months",
      stipend: "₹50,000/month",
      applicants: 89,
      views: 432,
      shortlisted: 15,
      postedDate: "3 days ago",
      status: "Active",
    },
    {
      id: 2,
      title: "Data Science Intern",
      location: "Remote",
      type: "Part-time",
      duration: "4 months",
      stipend: "₹40,000/month",
      applicants: 67,
      views: 289,
      shortlisted: 12,
      postedDate: "1 week ago",
      status: "Active",
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      location: "Mumbai, India",
      type: "Full-time",
      duration: "3 months",
      stipend: "₹35,000/month",
      applicants: 45,
      views: 198,
      shortlisted: 8,
      postedDate: "2 weeks ago",
      status: "Active",
    },
  ];

  const recentApplicants = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineering Intern",
      college: "IIT Delhi",
      cgpa: "8.9",
      skills: ["React", "Node.js", "Python"],
      appliedDate: "2 hours ago",
      status: "New",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Data Science Intern",
      college: "BITS Pilani",
      cgpa: "9.2",
      skills: ["Python", "ML", "TensorFlow"],
      appliedDate: "5 hours ago",
      status: "Reviewed",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Software Engineering Intern",
      college: "NIT Trichy",
      cgpa: "8.7",
      skills: ["Java", "Spring Boot", "AWS"],
      appliedDate: "1 day ago",
      status: "Shortlisted",
    },
  ];

  const handlePostInternship = () => {
    // In a real app, this would send to backend
    console.log("Posting internship:", newInternship);
    setShowPostForm(false);
    setNewInternship({
      title: "",
      location: "",
      duration: "",
      stipend: "",
      description: "",
      requirements: "",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-500/30 text-blue-300 border-blue-500/50";
      case "Reviewed": return "bg-yellow-500/30 text-yellow-300 border-yellow-500/50";
      case "Shortlisted": return "bg-green-500/30 text-green-300 border-green-500/50";
      default: return "bg-gray-500/30 text-gray-300 border-gray-500/50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="InternHub Logo" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl text-white font-bold">Employer Portal</h1>
                <p className="text-sm text-gray-400">Manage your internship postings</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white font-semibold">{companyData.name}</p>
                <p className="text-xs text-gray-400">{companyEmail}</p>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="text-white">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`p-6 ${stat.bgColor} border-gray-700 backdrop-blur-sm`}>
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-4xl text-white font-bold mb-1">{stat.value}</div>
                <p className="text-sm text-gray-300 font-semibold">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post New Internship */}
            <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-white font-bold">Post New Internship</h2>
                <Button
                  onClick={() => setShowPostForm(!showPostForm)}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  <span className="text-white">{showPostForm ? "Cancel" : "New Post"}</span>
                </Button>
              </div>

              {showPostForm && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white font-semibold">Job Title</Label>
                      <Input
                        placeholder="e.g., Software Engineering Intern"
                        value={newInternship.title}
                        onChange={(e) => setNewInternship({...newInternship, title: e.target.value})}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white font-semibold">Location</Label>
                      <Input
                        placeholder="e.g., Bangalore or Remote"
                        value={newInternship.location}
                        onChange={(e) => setNewInternship({...newInternship, location: e.target.value})}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white font-semibold">Duration</Label>
                      <Input
                        placeholder="e.g., 6 months"
                        value={newInternship.duration}
                        onChange={(e) => setNewInternship({...newInternship, duration: e.target.value})}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white font-semibold">Monthly Stipend</Label>
                      <Input
                        placeholder="e.g., ₹50,000"
                        value={newInternship.stipend}
                        onChange={(e) => setNewInternship({...newInternship, stipend: e.target.value})}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white font-semibold">Job Description</Label>
                    <Textarea
                      placeholder="Describe the role, responsibilities, and what the intern will learn..."
                      value={newInternship.description}
                      onChange={(e) => setNewInternship({...newInternship, description: e.target.value})}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white font-semibold">Requirements</Label>
                    <Textarea
                      placeholder="List required skills, qualifications, and experience..."
                      value={newInternship.requirements}
                      onChange={(e) => setNewInternship({...newInternship, requirements: e.target.value})}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 min-h-[100px]"
                    />
                  </div>
                  <Button
                    onClick={handlePostInternship}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold h-12"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    <span className="text-white">Post Internship</span>
                  </Button>
                </div>
              )}
            </Card>

            {/* Active Internships */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h2 className="text-2xl text-white font-bold mb-6">Your Active Internships</h2>
              <div className="space-y-4">
                {postedInternships.map((internship) => (
                  <Card key={internship.id} className="p-5 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border-gray-600 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl text-white font-bold mb-2">{internship.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span className="font-semibold">{internship.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-purple-400" />
                            <span className="font-semibold">{internship.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="font-semibold">{internship.stipend}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-500/30 text-green-300 border-green-500/50 font-semibold">
                        {internship.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30 text-center">
                        <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                        <div className="text-2xl text-white font-bold">{internship.applicants}</div>
                        <p className="text-xs text-gray-300 font-semibold">Applicants</p>
                      </div>
                      <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30 text-center">
                        <Eye className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                        <div className="text-2xl text-white font-bold">{internship.views}</div>
                        <p className="text-xs text-gray-300 font-semibold">Views</p>
                      </div>
                      <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto mb-1" />
                        <div className="text-2xl text-white font-bold">{internship.shortlisted}</div>
                        <p className="text-xs text-gray-300 font-semibold">Shortlisted</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-white">View Applicants</span>
                      </Button>
                      <Button variant="outline" className="flex-1 border-gray-600 text-white hover:bg-gray-700 font-semibold">
                        <span className="text-white">Edit Post</span>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Applicants */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <span className="text-white">Recent Applicants</span>
              </h3>
              <div className="space-y-4">
                {recentApplicants.map((applicant) => (
                  <Card key={applicant.id} className="p-4 bg-gray-700/50 border-gray-600 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white font-bold">
                          {applicant.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-white font-bold">{applicant.name}</h4>
                        <p className="text-xs text-cyan-400 font-semibold">{applicant.college}</p>
                        <p className="text-xs text-gray-400">CGPA: {applicant.cgpa}</p>
                      </div>
                      <Badge className={getStatusColor(applicant.status)}>
                        {applicant.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-300 mb-2 font-semibold">{applicant.role}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {applicant.skills.map((skill, i) => (
                        <Badge key={i} className="bg-purple-500/20 text-purple-300 border-purple-500/50 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                        <span className="text-white">Shortlist</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-gray-600 text-white hover:bg-gray-700">
                        <span className="text-white">View</span>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-xl text-white font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-white">Download Applications</span>
                </Button>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  <span className="text-white">Search Candidates</span>
                </Button>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-white">Schedule Interviews</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
