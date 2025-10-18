import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Send, 
  Calendar,
  Building2,
  Plus,
  Filter,
  TrendingUp
} from "lucide-react";

export function ApplicationTracker() {
  const [filter, setFilter] = useState("all");

  const applications = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineering Intern",
      status: "Interview Scheduled",
      appliedDate: "2025-01-05",
      deadline: "2025-01-25",
      stage: "Technical Round",
      color: "blue",
      interviewDate: "2025-01-20",
      logo: "https://logo.clearbit.com/google.com",
    },
    {
      id: 2,
      company: "Amazon",
      role: "Data Analyst Intern",
      status: "Under Review",
      appliedDate: "2025-01-08",
      deadline: "2025-02-01",
      stage: "Application Review",
      color: "yellow",
      logo: "https://logo.clearbit.com/amazon.com",
    },
    {
      id: 3,
      company: "Microsoft",
      role: "UX Design Intern",
      status: "Applied",
      appliedDate: "2025-01-10",
      deadline: "2025-02-15",
      stage: "Pending",
      color: "gray",
      logo: "https://logo.clearbit.com/microsoft.com",
    },
    {
      id: 4,
      company: "Meta",
      role: "Frontend Developer Intern",
      status: "Rejected",
      appliedDate: "2024-12-15",
      deadline: "2025-01-10",
      stage: "Application",
      color: "red",
      logo: "https://logo.clearbit.com/meta.com",
    },
    {
      id: 5,
      company: "Netflix",
      role: "Full Stack Intern",
      status: "Offer Received",
      appliedDate: "2024-12-20",
      deadline: "2025-01-05",
      stage: "Offer",
      color: "green",
      offerAmount: "₹40,000/month",
      logo: "https://logo.clearbit.com/netflix.com",
    },
  ];

  const stats = {
    total: applications.length,
    applied: applications.filter(a => a.status === "Applied").length,
    underReview: applications.filter(a => a.status === "Under Review").length,
    interviews: applications.filter(a => a.status === "Interview Scheduled").length,
    offers: applications.filter(a => a.status === "Offer Received").length,
    rejected: applications.filter(a => a.status === "Rejected").length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied": return "bg-gray-700/50 text-gray-200";
      case "Under Review": return "bg-yellow-500/20 text-yellow-300";
      case "Interview Scheduled": return "bg-blue-500/20 text-blue-300";
      case "Offer Received": return "bg-green-500/20 text-green-300";
      case "Rejected": return "bg-red-500/20 text-red-300";
      default: return "bg-gray-700/50 text-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Applied": return <Send className="w-4 h-4" />;
      case "Under Review": return <Clock className="w-4 h-4" />;
      case "Interview Scheduled": return <Calendar className="w-4 h-4" />;
      case "Offer Received": return <CheckCircle2 className="w-4 h-4" />;
      case "Rejected": return <XCircle className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };

  const filteredApplications = applications.filter(app => {
    if (filter === "all") return true;
    return app.status === filter;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Application Tracker
            </h1>
            <p className="text-lg text-muted-foreground">
              Track all your internship applications in one place
            </p>
          </div>
          <Button className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Application
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <p className="text-3xl mb-1 text-white">{stats.total}</p>
              <p className="text-xs text-gray-400">Total</p>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <p className="text-3xl mb-1 text-gray-300">{stats.applied}</p>
              <p className="text-xs text-gray-400">Applied</p>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <p className="text-3xl mb-1 text-yellow-400">{stats.underReview}</p>
              <p className="text-xs text-gray-400">Under Review</p>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <p className="text-3xl mb-1 text-blue-400">{stats.interviews}</p>
              <p className="text-xs text-gray-400">Interviews</p>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <p className="text-3xl mb-1 text-green-400">{stats.offers}</p>
              <p className="text-xs text-gray-400">Offers</p>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <p className="text-3xl mb-1 text-red-400">{stats.rejected}</p>
              <p className="text-xs text-gray-400">Rejected</p>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant={filter === "Applied" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("Applied")}
            >
              Applied
            </Button>
            <Button
              variant={filter === "Under Review" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("Under Review")}
            >
              Under Review
            </Button>
            <Button
              variant={filter === "Interview Scheduled" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("Interview Scheduled")}
            >
              Interviews
            </Button>
            <Button
              variant={filter === "Offer Received" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("Offer Received")}
            >
              Offers
            </Button>
          </div>
        </Card>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((app) => (
            <Card
              key={app.id}
              className="p-6 hover:shadow-xl transition-all border-2 hover:border-cyan-200"
            >
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img 
                    src={app.logo} 
                    alt={app.company}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl">${app.company.charAt(0)}</span>`;
                    }}
                  />
                </div>

                {/* Application Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl mb-1">{app.role}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        {app.company}
                      </div>
                    </div>
                    <Badge className={getStatusColor(app.status)}>
                      <span className="mr-2">{getStatusIcon(app.status)}</span>
                      {app.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Applied</p>
                      <p className="text-sm">{new Date(app.appliedDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Deadline</p>
                      <p className="text-sm">{new Date(app.deadline).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Current Stage</p>
                      <p className="text-sm">{app.stage}</p>
                    </div>
                    {app.interviewDate && (
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Interview Date</p>
                        <p className="text-sm text-blue-600 font-medium">
                          {new Date(app.interviewDate).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                    {app.offerAmount && (
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Offer Amount</p>
                        <p className="text-sm text-green-600 font-medium">{app.offerAmount}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    {app.status === "Interview Scheduled" && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Prepare for Interview
                      </Button>
                    )}
                    {app.status === "Offer Received" && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        Accept Offer
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Rate */}
        <Card className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Your Success Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Response Rate</p>
              <p className="text-3xl mb-1">80%</p>
              <p className="text-xs text-green-600">↑ 20% from last month</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Interview Conversion</p>
              <p className="text-3xl mb-1">60%</p>
              <p className="text-xs text-green-600">↑ 15% from last month</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Offer Rate</p>
              <p className="text-3xl mb-1">40%</p>
              <p className="text-xs text-yellow-600">Same as last month</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
