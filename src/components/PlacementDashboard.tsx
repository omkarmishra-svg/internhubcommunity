import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  School,
  Users,
  Briefcase,
  TrendingUp,
  TrendingDown,
  Award,
  Building2,
  DollarSign,
  GraduationCap,
  Target,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  LogOut,
  Star,
  CheckCircle2
} from "lucide-react";
import logoImage from "figma:asset/1daa135f4290d86cac69d18bda4c6fb0b8d02bb8.png";

interface PlacementDashboardProps {
  collegeName: string;
  collegeId: string;
  onLogout: () => void;
}

export function PlacementDashboard({ collegeName, collegeId, onLogout }: PlacementDashboardProps) {
  const [selectedYear, setSelectedYear] = useState("2024");

  const placementStats = {
    totalStudents: 450,
    placed: 378,
    placementRate: 84,
    averagePackage: 8.5,
    highestPackage: 42,
    companiesVisited: 87,
    offersReceived: 425,
    studentsWithMultipleOffers: 112,
  };

  const stats = [
    { 
      label: "Placement Rate", 
      value: `${placementStats.placementRate}%`, 
      icon: Target, 
      color: "text-green-400", 
      bgColor: "bg-green-500/20",
      trend: "+5% from last year"
    },
    { 
      label: "Average Package", 
      value: `₹${placementStats.averagePackage} LPA`, 
      icon: DollarSign, 
      color: "text-cyan-400", 
      bgColor: "bg-cyan-500/20",
      trend: "+12% from last year"
    },
    { 
      label: "Companies Visited", 
      value: placementStats.companiesVisited.toString(), 
      icon: Building2, 
      color: "text-purple-400", 
      bgColor: "bg-purple-500/20",
      trend: "+15 new companies"
    },
    { 
      label: "Offers Received", 
      value: placementStats.offersReceived.toString(), 
      icon: Award, 
      color: "text-yellow-400", 
      bgColor: "bg-yellow-500/20",
      trend: "1.12 offers/student"
    },
  ];

  const topCompanies = [
    {
      name: "Google",
      logo: "",
      studentsPlaced: 12,
      averagePackage: 42,
      roles: ["SDE", "ML Engineer"],
      color: "from-blue-500/20 to-green-500/20",
      borderColor: "border-blue-500/50",
    },
    {
      name: "Microsoft",
      logo: "",
      studentsPlaced: 15,
      averagePackage: 38,
      roles: ["SDE", "Data Scientist"],
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/50",
    },
    {
      name: "Amazon",
      logo: "",
      studentsPlaced: 18,
      averagePackage: 28,
      roles: ["SDE", "PM"],
      color: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/50",
    },
    {
      name: "Flipkart",
      logo: "",
      studentsPlaced: 10,
      averagePackage: 24,
      roles: ["SDE", "Product Analyst"],
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/50",
    },
  ];

  const departmentWise = [
    { department: "Computer Science", total: 120, placed: 108, rate: 90, avgPackage: 12.5 },
    { department: "Electronics", total: 90, placed: 76, rate: 84, avgPackage: 9.2 },
    { department: "Mechanical", total: 100, placed: 82, rate: 82, avgPackage: 7.8 },
    { department: "Civil", total: 80, placed: 64, rate: 80, avgPackage: 6.5 },
    { department: "IT", total: 60, placed: 48, rate: 80, avgPackage: 10.8 },
  ];

  const packageWise = [
    { range: "20+ LPA", count: 28, percentage: 7.4, color: "bg-green-500" },
    { range: "15-20 LPA", count: 45, percentage: 11.9, color: "bg-cyan-500" },
    { range: "10-15 LPA", count: 89, percentage: 23.5, color: "bg-blue-500" },
    { range: "5-10 LPA", count: 156, percentage: 41.3, color: "bg-purple-500" },
    { range: "Below 5 LPA", count: 60, percentage: 15.9, color: "bg-yellow-500" },
  ];

  const skillGapAnalysis = [
    { skill: "Data Structures & Algorithms", proficient: 75, needsImprovement: 25 },
    { skill: "System Design", proficient: 45, needsImprovement: 55 },
    { skill: "Web Development", proficient: 68, needsImprovement: 32 },
    { skill: "Machine Learning", proficient: 38, needsImprovement: 62 },
    { skill: "Cloud Computing", proficient: 42, needsImprovement: 58 },
  ];

  const topPerformers = [
    {
      name: "Rahul Sharma",
      department: "CSE",
      cgpa: 9.5,
      company: "Google",
      package: 42,
      offers: 5,
    },
    {
      name: "Priya Patel",
      department: "CSE",
      cgpa: 9.3,
      company: "Microsoft",
      package: 38,
      offers: 4,
    },
    {
      name: "Amit Kumar",
      department: "IT",
      cgpa: 9.1,
      company: "Amazon",
      package: 32,
      offers: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="InternHub Logo" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl text-white font-bold">Placement Cell Portal</h1>
                <p className="text-sm text-gray-400">Analytics & Reports Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white font-semibold">{collegeName}</p>
                <p className="text-xs text-gray-400">ID: {collegeId}</p>
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
        {/* Year Selector */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl text-white font-bold mb-2">Placement Report {selectedYear}</h2>
            <p className="text-gray-400">Comprehensive analysis of placement statistics</p>
          </div>
          <div className="flex gap-2">
            {["2024", "2023", "2022"].map((year) => (
              <Button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`${
                  selectedYear === year
                    ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <span className="text-white">{year}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
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
                <p className="text-sm text-gray-300 font-semibold mb-2">{stat.label}</p>
                <p className="text-xs text-green-400 font-semibold">{stat.trend}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Recruiters */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-7 h-7 text-cyan-400" />
                <span className="text-white">Top Recruiters</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topCompanies.map((company, index) => (
                  <Card key={index} className={`p-5 bg-gradient-to-r ${company.color} ${company.borderColor} border-2`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl text-white font-bold mb-1">{company.name}</h3>
                        <p className="text-sm text-gray-300 font-semibold">
                          {company.studentsPlaced} students placed
                        </p>
                      </div>
                      <Badge className="bg-green-500/30 text-green-300 border-green-500/50 font-bold">
                        ₹{company.averagePackage} LPA
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {company.roles.map((role, i) => (
                        <Badge key={i} className="bg-gray-700/50 text-gray-200 border-gray-600 text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Department-wise Analysis */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-7 h-7 text-purple-400" />
                <span className="text-white">Department-wise Placement</span>
              </h2>
              <div className="space-y-4">
                {departmentWise.map((dept, index) => (
                  <div key={index} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-1">{dept.department}</h4>
                        <p className="text-sm text-gray-400">
                          {dept.placed} of {dept.total} students placed
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-green-400 font-bold">{dept.rate}%</div>
                        <p className="text-xs text-gray-400">₹{dept.avgPackage} LPA avg</p>
                      </div>
                    </div>
                    <Progress value={dept.rate} className="h-2 bg-gray-800" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Package Distribution */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-7 h-7 text-green-400" />
                <span className="text-white">Package Distribution</span>
              </h2>
              <div className="space-y-4">
                {packageWise.map((pkg, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{pkg.range}</span>
                      <div className="text-right">
                        <span className="text-white font-bold">{pkg.count} students</span>
                        <span className="text-sm text-gray-400 ml-2">({pkg.percentage}%)</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`${pkg.color} h-3 rounded-full transition-all`}
                        style={{ width: `${pkg.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skill Gap Analysis */}
            <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm">
              <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-400" />
                <span className="text-white">Skill Gap Analysis</span>
              </h3>
              <p className="text-sm text-gray-300 mb-4 font-semibold">
                Areas where students need improvement
              </p>
              <div className="space-y-4">
                {skillGapAnalysis.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white font-semibold">{skill.skill}</span>
                      <span className="text-sm text-cyan-400 font-bold">{skill.proficient}%</span>
                    </div>
                    <div className="flex gap-1 h-2">
                      <div
                        className="bg-green-500 rounded-l-full"
                        style={{ width: `${skill.proficient}%` }}
                      ></div>
                      <div
                        className="bg-red-500 rounded-r-full"
                        style={{ width: `${skill.needsImprovement}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Performers */}
            <Card className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 backdrop-blur-sm">
              <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-white">Top Performers</span>
              </h3>
              <div className="space-y-4">
                {topPerformers.map((student, index) => (
                  <Card key={index} className="p-4 bg-gray-700/50 border-gray-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white font-bold">
                          {student.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-white font-bold">{student.name}</h4>
                        <p className="text-xs text-gray-400">{student.department} • CGPA: {student.cgpa}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg text-yellow-400 font-bold">{index + 1}</div>
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mx-auto" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">Placed at</p>
                        <p className="text-sm text-cyan-400 font-bold">{student.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Package</p>
                        <p className="text-sm text-green-400 font-bold">₹{student.package} LPA</p>
                      </div>
                    </div>
                    <Badge className="mt-2 w-full justify-center bg-purple-500/20 text-purple-300 border-purple-500/50">
                      {student.offers} offers received
                    </Badge>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-xl text-white font-bold mb-4">Export Reports</h3>
              <div className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-white">Full Placement Report</span>
                </Button>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-white">Department-wise Data</span>
                </Button>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-white">Company-wise Report</span>
                </Button>
              </div>
            </Card>

            {/* Summary Stats */}
            <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 backdrop-blur-sm">
              <h3 className="text-xl text-white font-bold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <span className="text-white font-semibold">Total Students</span>
                  <span className="text-cyan-400 font-bold text-xl">{placementStats.totalStudents}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <span className="text-white font-semibold">Students Placed</span>
                  <span className="text-green-400 font-bold text-xl">{placementStats.placed}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <span className="text-white font-semibold">Highest Package</span>
                  <span className="text-yellow-400 font-bold text-xl">₹{placementStats.highestPackage} LPA</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <span className="text-white font-semibold">Multiple Offers</span>
                  <span className="text-purple-400 font-bold text-xl">{placementStats.studentsWithMultipleOffers}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
