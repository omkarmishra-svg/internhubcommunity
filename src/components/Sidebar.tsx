import {
  Home,
  LayoutDashboard,
  User,
  Compass,
  Briefcase,
  GraduationCap,
  BookOpen,
  Info,
  LogOut,
  Menu,
  X,
  FileText,
  Trophy,
  Target,
  ListChecks,
  Mic,
  Shield,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import logoImage from "figma:asset/1daa135f4290d86cac69d18bda4c6fb0b8d02bb8.png";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  studentProfile: any;
  onLogout: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({
  currentPage,
  onNavigate,
  studentProfile,
  onLogout,
  isOpen,
  onToggle,
}: SidebarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "profileView", label: "Your Profile", icon: User },
    { id: "resume", label: "My Resume", icon: FileText },
    { id: "gamification", label: "Achievements", icon: Trophy },
    { id: "skillgap", label: "Skill Gap Analyzer", icon: Target },
    { id: "applications", label: "My Applications", icon: ListChecks },
    { id: "mockinterview", label: "Mock Interview", icon: Mic },
    { id: "verification", label: "Verify Internships", icon: Shield },
    { id: "explore", label: "Explore Careers", icon: Compass },
    { id: "internships", label: "Internships", icon: Briefcase },
    { id: "courses", label: "Courses", icon: GraduationCap },
    { id: "plan", label: "My Learning Plan", icon: BookOpen },
    { id: "about", label: "About", icon: Info },
  ];

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-72 flex flex-col`}
      >
        {/* Logo & Profile Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="mb-6 cursor-pointer" onClick={() => onNavigate("home")}>
            <img src={logoImage} alt="InternHub Logo" className="h-12 w-auto mb-2" />
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              InternHub
            </h2>
            <p className="text-xs text-muted-foreground">Powered by AI Guru</p>
          </div>

          {/* User Profile Card */}
          <Card
            className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => {
              onNavigate("profileView");
              onToggle();
            }}
          >
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 border-2 border-white">
                <AvatarImage src={studentProfile?.profilePhoto} />
                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white">
                  {studentProfile?.name?.charAt(0)?.toUpperCase() || "S"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">
                  {studentProfile?.name || "Student"}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {studentProfile?.college || "College"}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    if (window.innerWidth < 1024) onToggle();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}
