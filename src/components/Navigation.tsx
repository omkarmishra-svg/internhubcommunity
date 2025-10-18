import { Home, Compass, BookOpen, Info, Briefcase, GraduationCap, LayoutDashboard } from "lucide-react";
import logoImage from "figma:asset/1daa135f4290d86cac69d18bda4c6fb0b8d02bb8.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn?: boolean;
}

export function Navigation({ currentPage, onNavigate, isLoggedIn = false }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, requiresAuth: true },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "internships", label: "Internships", icon: Briefcase },
    { id: "courses", label: "Courses", icon: GraduationCap },
    { id: "plan", label: "My Plan", icon: BookOpen, requiresAuth: true },
    { id: "about", label: "About", icon: Info },
  ].filter(item => !item.requiresAuth || isLoggedIn);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("home")}>
            <img src={logoImage} alt="InternHub Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-cyan-600 font-bold">InternHub</h1>
              <p className="text-xs text-muted-foreground">Powered by AI Guru</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
          
          <div className="md:hidden flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`p-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
