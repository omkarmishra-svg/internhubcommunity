import { Home, Compass, BookOpen, Info, Briefcase, GraduationCap, LayoutDashboard } from "lucide-react";
import logoImage from "figma:asset/1daa135f4290d86cac69d18bda4c6fb0b8d02bb8.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "internships", label: "Internships", icon: Briefcase },
    { id: "courses", label: "Courses", icon: GraduationCap },
    { id: "plan", label: "My Plan", icon: BookOpen },
    { id: "about", label: "About", icon: Info },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
          <img src={logoImage} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold text-cyan-600">InternHub</h1>
        </div>

        {/* Center: Nav items */}
        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                  currentPage === item.id ? "bg-cyan-100 text-cyan-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* ✅ Right: Login button (always visible) */}
        <div className="ml-auto">
          <a 
             href="#login"
             className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
          >
            Login
          </a>
        </div>
        
      </div>
    </nav>
  );
}