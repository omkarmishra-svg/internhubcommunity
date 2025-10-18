import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Building2, MapPin, Calendar, Briefcase, Search, ExternalLink, Users, Linkedin } from "lucide-react";
import { useState } from "react";

interface Company {
  name: string;
  type: string;
  description: string;
  logo: string;
  logoUrl: string;
  locations: string[];
  openings: number;
  gradient: string;
  alumni: Array<{
    name: string;
    role: string;
    year: string;
    linkedinUrl: string;
  }>;
  requiredSkills: string[];
  selectionCriteria: {
    minCGPA: string;
    eligibleBranches: string[];
    rounds: string[];
    duration: string;
    stipend: string;
  };
}

export function InternshipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const companies: Company[] = [
    {
      name: "TCS (Tata Consultancy Services)",
      type: "Recruiter / Campus Placement",
      description: "Frequently mentioned as campus recruiter for BPUT. One of India's largest IT services companies.",
      logo: "💼",
      logoUrl: "https://logo.clearbit.com/tcs.com",
      locations: ["Bangalore", "Hyderabad", "Mumbai", "Bhubaneswar"],
      openings: 150,
      gradient: "from-blue-500 to-indigo-600",
      requiredSkills: ["Java", "Python", "SQL", "Data Structures", "Problem Solving", "Communication"],
      selectionCriteria: {
        minCGPA: "6.0",
        eligibleBranches: ["CSE", "IT", "ECE", "EEE", "Mech"],
        rounds: ["Aptitude Test", "Technical Interview", "HR Interview"],
        duration: "6 months",
        stipend: "₹15,000 - ₹20,000/month",
      },
      alumni: [
        { name: "Rahul Sharma", role: "Senior Developer", year: "2020", linkedinUrl: "#" },
        { name: "Priya Patel", role: "Project Manager", year: "2019", linkedinUrl: "#" },
        { name: "Amit Kumar", role: "Tech Lead", year: "2018", linkedinUrl: "#" },
      ],
    },
    {
      name: "Infosys",
      type: "Top Recruiter",
      description: "One of the top recruiters visiting BPUT. Global leader in next-generation digital services.",
      logo: "🌐",
      logoUrl: "https://logo.clearbit.com/infosys.com",
      locations: ["Bangalore", "Pune", "Chennai", "Bhubaneswar"],
      openings: 120,
      gradient: "from-cyan-500 to-blue-600",
      requiredSkills: ["C++", "Java", "DBMS", "OOP", "Algorithms", "Logical Reasoning"],
      selectionCriteria: {
        minCGPA: "6.5",
        eligibleBranches: ["CSE", "IT", "ECE", "EEE"],
        rounds: ["Online Test", "Technical Round", "HR Round"],
        duration: "5-6 months",
        stipend: "₹18,000 - ₹25,000/month",
      },
      alumni: [
        { name: "Sneha Reddy", role: "Systems Engineer", year: "2021", linkedinUrl: "#" },
        { name: "Rohan Verma", role: "Senior Consultant", year: "2019", linkedinUrl: "#" },
      ],
    },
    {
      name: "Wipro",
      type: "Campus Recruiter",
      description: "Mentioned as placing students from affiliated colleges. Leading technology services company.",
      logo: "⚡",
      logoUrl: "https://logo.clearbit.com/wipro.com",
      locations: ["Bangalore", "Hyderabad", "Kolkata"],
      openings: 100,
      gradient: "from-orange-500 to-red-600",
      requiredSkills: ["Java", "Spring Boot", "REST APIs", "MySQL", "Git", "Agile"],
      selectionCriteria: {
        minCGPA: "6.0",
        eligibleBranches: ["CSE", "IT", "ECE"],
        rounds: ["Coding Test", "Technical Interview", "Managerial Round"],
        duration: "6 months",
        stipend: "₹15,000 - ₹22,000/month",
      },
      alumni: [
        { name: "Vikram Singh", role: "Software Engineer", year: "2020", linkedinUrl: "#" },
      ],
    },
    {
      name: "Amazon",
      type: "Placement / Recruiter",
      description: "Cited among notable recruiters. Global technology and e-commerce giant.",
      logo: "📦",
      logoUrl: "https://logo.clearbit.com/amazon.com",
      locations: ["Bangalore", "Hyderabad", "Chennai"],
      openings: 45,
      gradient: "from-yellow-500 to-orange-600",
      requiredSkills: ["DSA", "System Design", "Java/Python/C++", "AWS", "Problem Solving", "Leadership"],
      selectionCriteria: {
        minCGPA: "7.0",
        eligibleBranches: ["CSE", "IT"],
        rounds: ["Online Assessment", "Technical Rounds (2-3)", "Bar Raiser", "HR"],
        duration: "6 months",
        stipend: "₹50,000 - ₹80,000/month",
      },
      alumni: [
        { name: "Aditya Gupta", role: "SDE-1", year: "2021", linkedinUrl: "#" },
        { name: "Neha Jain", role: "SDE-2", year: "2019", linkedinUrl: "#" },
      ],
    },
    {
      name: "Google",
      type: "Top Placement Partner",
      description: "Listed among big recruiters. World's leading technology company.",
      logo: "🔍",
      logoUrl: "https://logo.clearbit.com/google.com",
      locations: ["Bangalore", "Hyderabad", "Gurgaon"],
      openings: 25,
      gradient: "from-green-500 to-teal-600",
      requiredSkills: ["Advanced DSA", "System Design", "C++/Java/Python", "Algorithms", "Computer Science Fundamentals"],
      selectionCriteria: {
        minCGPA: "8.0",
        eligibleBranches: ["CSE", "IT"],
        rounds: ["Online Assessment", "Phone Screen", "Onsite (4-5 rounds)", "Team Matching"],
        duration: "3-6 months",
        stipend: "₹80,000 - ₹1,00,000/month",
      },
      alumni: [
        { name: "Arjun Mehta", role: "Software Engineer", year: "2020", linkedinUrl: "#" },
      ],
    },
    {
      name: "Accenture",
      type: "Frequent Recruiter",
      description: "Frequently appears in placement lists for BPUT. Global professional services company.",
      logo: "💡",
      logoUrl: "https://logo.clearbit.com/accenture.com",
      locations: ["Bangalore", "Pune", "Mumbai", "Bhubaneswar"],
      openings: 90,
      gradient: "from-purple-500 to-pink-600",
      requiredSkills: ["Java", "SQL", "Business Analysis", "Consulting Skills", "Communication", "Teamwork"],
      selectionCriteria: {
        minCGPA: "6.5",
        eligibleBranches: ["All Branches"],
        rounds: ["Cognitive Assessment", "Technical Interview", "HR Interview"],
        duration: "6 months",
        stipend: "₹20,000 - ₹30,000/month",
      },
      alumni: [
        { name: "Divya Nair", role: "Analyst", year: "2021", linkedinUrl: "#" },
        { name: "Karan Sharma", role: "Senior Analyst", year: "2019", linkedinUrl: "#" },
      ],
    },
    {
      name: "Tata Steel BSL",
      type: "Industrial Recruiter",
      description: "One of the industrial recruiters tied with BPUT. Leading steel manufacturing company.",
      logo: "🏭",
      logoUrl: "https://logo.clearbit.com/tatasteel.com",
      locations: ["Bhubaneswar", "Jamshedpur", "Mumbai"],
      openings: 30,
      gradient: "from-gray-600 to-slate-700",
      requiredSkills: ["Mechanical Design", "AutoCAD", "Manufacturing Process", "Quality Control", "Safety Standards"],
      selectionCriteria: {
        minCGPA: "6.5",
        eligibleBranches: ["Mech", "Production", "Metallurgy"],
        rounds: ["Written Test", "Technical Interview", "HR Round"],
        duration: "6 months",
        stipend: "₹18,000 - ₹25,000/month",
      },
      alumni: [
        { name: "Sanjay Mohanty", role: "Mechanical Engineer", year: "2020", linkedinUrl: "#" },
      ],
    },
    {
      name: "Robert Bosch",
      type: "Campus Recruiter",
      description: "Mentioned in BPUT placement context. Global engineering and technology company.",
      logo: "🔧",
      logoUrl: "https://logo.clearbit.com/bosch.com",
      locations: ["Bangalore", "Pune", "Chennai"],
      openings: 40,
      gradient: "from-red-500 to-rose-600",
      requiredSkills: ["Embedded Systems", "C/C++", "Electronics", "IoT", "Automotive Technology"],
      selectionCriteria: {
        minCGPA: "7.0",
        eligibleBranches: ["ECE", "EEE", "CSE", "Mech"],
        rounds: ["Aptitude Test", "Technical Interview", "HR Interview"],
        duration: "6 months",
        stipend: "₹25,000 - ₹35,000/month",
      },
      alumni: [
        { name: "Deepak Rao", role: "Engineer", year: "2021", linkedinUrl: "#" },
      ],
    },
    {
      name: "Alkem Laboratories",
      type: "Pharma Recruiter",
      description: "Part of 2023 BPUT placements. Leading pharmaceutical company.",
      logo: "💊",
      logoUrl: "https://logo.clearbit.com/alkemlabs.com",
      locations: ["Mumbai", "Bhubaneswar"],
      openings: 20,
      gradient: "from-teal-500 to-cyan-600",
      requiredSkills: ["Pharmaceutical Chemistry", "Quality Assurance", "Research Methods", "Lab Techniques"],
      selectionCriteria: {
        minCGPA: "6.0",
        eligibleBranches: ["Pharma", "Chemistry", "Biotech"],
        rounds: ["Written Test", "Technical Discussion", "HR Interview"],
        duration: "6 months",
        stipend: "₹12,000 - ₹18,000/month",
      },
      alumni: [],
    },
    {
      name: "Sun Pharma",
      type: "Pharma Recruiter",
      description: "Listed in 2023 BPUT placements. India's largest pharmaceutical company.",
      logo: "☀️",
      logoUrl: "https://logo.clearbit.com/sunpharma.com",
      locations: ["Mumbai", "Vadodara", "Bhubaneswar"],
      openings: 25,
      gradient: "from-amber-500 to-orange-600",
      requiredSkills: ["Drug Development", "Quality Control", "Regulatory Affairs", "R&D"],
      selectionCriteria: {
        minCGPA: "6.5",
        eligibleBranches: ["Pharma", "Chemistry", "Biotech"],
        rounds: ["Aptitude Test", "Technical Round", "HR Round"],
        duration: "6 months",
        stipend: "₹15,000 - ₹20,000/month",
      },
      alumni: [
        { name: "Pooja Das", role: "Research Associate", year: "2021", linkedinUrl: "#" },
      ],
    },
    {
      name: "Texus (Textiles)",
      type: "Placement Partner",
      description: "In 2023 listing for BPUT placements. Textile manufacturing and technology.",
      logo: "🧵",
      logoUrl: "",
      locations: ["Bhubaneswar", "Surat"],
      openings: 15,
      gradient: "from-pink-500 to-rose-600",
      requiredSkills: ["Textile Technology", "Quality Management", "Production Planning", "CAD"],
      selectionCriteria: {
        minCGPA: "6.0",
        eligibleBranches: ["Textile", "Production", "Mech"],
        rounds: ["Interview", "Plant Visit", "Final Discussion"],
        duration: "6 months",
        stipend: "₹10,000 - ₹15,000/month",
      },
      alumni: [],
    },
    {
      name: "Kemsys Technologies",
      type: "Internship Partner",
      description: "Specialized internship programs for students. Technology solutions provider.",
      logo: "🚀",
      logoUrl: "",
      locations: ["Bhubaneswar", "Bangalore"],
      openings: 50,
      gradient: "from-indigo-500 to-purple-600",
      requiredSkills: ["Python", "React", "Node.js", "MongoDB", "Git", "Agile"],
      selectionCriteria: {
        minCGPA: "6.0",
        eligibleBranches: ["CSE", "IT", "MCA"],
        rounds: ["Coding Assignment", "Technical Interview", "HR Round"],
        duration: "3-6 months",
        stipend: "₹8,000 - ₹15,000/month",
      },
      alumni: [
        { name: "Rajesh Panda", role: "Intern", year: "2023", linkedinUrl: "#" },
      ],
    },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.locations.some((loc) => loc.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Internship Opportunities
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explore internships and placements from top companies recruiting at BPUT
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by company, type, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <p className="text-3xl mb-1 text-white">12</p>
              <p className="text-sm text-gray-400">Companies</p>
            </Card>
            <Card className="p-4 text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <p className="text-3xl mb-1 text-white">710+</p>
              <p className="text-sm text-gray-400">Openings</p>
            </Card>
            <Card className="p-4 text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <p className="text-3xl mb-1 text-white">15+</p>
              <p className="text-sm text-gray-400">Locations</p>
            </Card>
            <Card className="p-4 text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <p className="text-3xl mb-1 text-cyan-400">NEW</p>
              <p className="text-sm text-gray-400">Updated Daily</p>
            </Card>
          </div>
        </div>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all border-2 border-gray-700 hover:border-cyan-500 group cursor-pointer bg-gray-800/50 backdrop-blur-sm"
              onClick={() => setSelectedCompany(company)}
            >
              <div
                className={`w-full h-2 bg-gradient-to-r ${company.gradient} rounded-full mb-4`}
              ></div>

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {company.logoUrl ? (
                      <Avatar className="w-14 h-14 border-2 border-gray-200">
                        <AvatarImage src={company.logoUrl} alt={company.name} />
                        <AvatarFallback className="text-2xl">{company.logo}</AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                        {company.logo}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{company.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {company.type}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {company.description}
              </p>

              {/* Required Skills Preview */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Required Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {company.requiredSkills.slice(0, 3).map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {company.requiredSkills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{company.requiredSkills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span className="text-muted-foreground">
                    {company.locations.slice(0, 2).join(", ")}
                    {company.locations.length > 2 && ` +${company.locations.length - 2} more`}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-green-600" />
                  <span>{company.openings}+ Openings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-xs">💰</span>
                  <span className="text-xs text-muted-foreground">{company.selectionCriteria.stipend}</span>
                </div>
              </div>

              {company.alumni.length > 0 && (
                <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{company.alumni.length} Alumni Working Here</span>
                  </div>
                  <p className="text-xs text-blue-300">Click to see alumni connections</p>
                </div>
              )}

              <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white group-hover:shadow-lg transition-all">
                View Details & Apply
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              No companies found matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Company Detail Modal */}
        {selectedCompany && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCompany(null)}>
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700" onClick={(e) => e.stopPropagation()}>
              <div className={`h-32 bg-gradient-to-r ${selectedCompany.gradient} p-6 flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  {selectedCompany.logoUrl ? (
                    <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                      <AvatarImage src={selectedCompany.logoUrl} alt={selectedCompany.name} />
                      <AvatarFallback className="text-3xl">{selectedCompany.logo}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                      {selectedCompany.logo}
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl text-white mb-1">{selectedCompany.name}</h2>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                      {selectedCompany.type}
                    </Badge>
                  </div>
                </div>
                <Button
                  onClick={() => setSelectedCompany(null)}
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="openings">Openings ({selectedCompany.openings}+)</TabsTrigger>
                    <TabsTrigger value="alumni">Alumni ({selectedCompany.alumni.length})</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4 mt-4">
                    <div>
                      <h3 className="text-lg mb-2">About the Company</h3>
                      <p className="text-muted-foreground">{selectedCompany.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg mb-2 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-cyan-600" />
                        Locations
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCompany.locations.map((loc, i) => (
                          <Badge key={i} variant="secondary">{loc}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg mb-2 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-green-600" />
                        Available Positions
                      </h3>
                      <p className="text-muted-foreground">{selectedCompany.openings}+ internship and placement opportunities</p>
                    </div>

                    {/* Required Skills */}
                    <Card className="p-4 bg-blue-900/20 border-blue-800">
                      <h3 className="text-lg mb-3 flex items-center gap-2 text-white">
                        <span>🎯</span>
                        Required Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCompany.requiredSkills.map((skill, i) => (
                          <Badge key={i} className="bg-blue-600 text-white hover:bg-blue-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>

                    {/* Selection Criteria */}
                    <Card className="p-4 bg-purple-900/20 border-purple-800">
                      <h3 className="text-lg mb-3 flex items-center gap-2 text-white">
                        <span>📋</span>
                        Selection Criteria
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium min-w-[140px]">Min CGPA:</span>
                          <Badge className="bg-green-600 text-white">{selectedCompany.selectionCriteria.minCGPA}</Badge>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium min-w-[140px]">Eligible Branches:</span>
                          <div className="flex flex-wrap gap-1">
                            {selectedCompany.selectionCriteria.eligibleBranches.map((branch, i) => (
                              <Badge key={i} variant="secondary">{branch}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium min-w-[140px]">Duration:</span>
                          <Badge className="bg-cyan-600 text-white">{selectedCompany.selectionCriteria.duration}</Badge>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium min-w-[140px]">Stipend:</span>
                          <Badge className="bg-orange-600 text-white">{selectedCompany.selectionCriteria.stipend}</Badge>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-sm font-medium">Selection Rounds:</span>
                          <div className="space-y-1 pl-4">
                            {selectedCompany.selectionCriteria.rounds.map((round, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <span className="text-purple-400">→</span>
                                <span className="text-sm text-gray-300">{round}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="openings" className="space-y-3 mt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Card key={i} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="mb-1">Software Development Intern {i}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {selectedCompany.locations[i % selectedCompany.locations.length]}
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="text-xs">Internship</Badge>
                              <Badge variant="secondary" className="text-xs">Full-time</Badge>
                            </div>
                          </div>
                          <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                            Apply
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="alumni" className="space-y-3 mt-4">
                    {selectedCompany.alumni.length > 0 ? (
                      <>
                        <div className="p-4 bg-blue-50 rounded-lg mb-4">
                          <p className="text-sm text-blue-700">
                            Connect with {selectedCompany.alumni.length} alumni from your college working at {selectedCompany.name}
                          </p>
                        </div>
                        {selectedCompany.alumni.map((alum, i) => (
                          <Card key={i} className="p-4 hover:shadow-md transition-shadow bg-gray-800/50 border-gray-700">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-12 h-12">
                                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white">
                                    {alum.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="mb-1 text-white">{alum.name}</h4>
                                  <p className="text-sm text-gray-400">{alum.role}</p>
                                  <p className="text-xs text-gray-500">Batch of {alum.year}</p>
                                </div>
                              </div>
                              <Button size="sm" variant="outline" className="text-blue-400 hover:bg-blue-500/10 border-blue-500/30">
                                <Linkedin className="w-4 h-4 mr-2" />
                                Connect
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                        <p>No alumni information available yet</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white py-6">
                    Apply for Internship at {selectedCompany.name}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-cyan-600/20 to-teal-600/20 border-cyan-500/30 backdrop-blur-sm text-white text-center">
          <h2 className="text-3xl mb-4">Ready to Apply?</h2>
          <p className="text-lg mb-6 text-gray-300 max-w-2xl mx-auto">
            Complete your profile and let AI Guru help you find the perfect internship match based on your skills and interests.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-8 py-6"
          >
            Complete Profile & Get Matched
          </Button>
        </Card>
      </div>
    </div>
  );
}
