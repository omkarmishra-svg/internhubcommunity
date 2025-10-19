import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { AIBanner } from "./components/AIBanner";
import { AIChatbot } from "./components/AIChatbot";
import { LoginPage } from "./components/LoginPage";
import { ReviewsPage } from "./components/ReviewsPage";
import { LandingPage } from "./components/LandingPage";
import { StudentProfile } from "./components/StudentProfile";
import { StudentDashboard } from "./components/StudentDashboard";
import { ProfilePage } from "./components/ProfilePage";
import { ResumeBuilder } from "./components/ResumeBuilder";
import { GamificationDashboard } from "./components/GamificationDashboard";
import { SkillGapAnalyzer } from "./components/SkillGapAnalyzer";
import { ApplicationTracker } from "./components/ApplicationTracker";
import { MockInterview } from "./components/MockInterview";
import { InterestSelection } from "./components/InterestSelection";
import { CareerSuggestions } from "./components/CareerSuggestions";
import { CareerRoadmap } from "./components/CareerRoadmap";
import { InternshipsPage } from "./components/InternshipsPage";
import { CoursesPage } from "./components/CoursesPage";
import { AboutPage } from "./components/AboutPage";
import { MyPlanPage } from "./components/MyPlanPage";
import { HRDashboard } from "./components/HRDashboard";
import { PlacementDashboard } from "./components/PlacementDashboard";
import { InternshipVerification } from "./components/InternshipVerification";

type Page = "reviews" | "login" | "home" | "explore" | "plan" | "about" | "interests" | "careers" | "roadmap" | "profile" | "internships" | "dashboard" | "courses" | "profileView" | "resume" | "gamification" | "skillgap" | "applications" | "mockinterview" | "hrDashboard" | "placementDashboard" | "verification";
type UserType = "student" | "hr" | "placement" | null;

interface StudentProfileData {
  name: string;
  email: string;
  college: string;
  linkedinUrl: string;
  githubUrl: string;
  skills: string[];
  profilePhoto?: string;
  bio?: string;
  class10Marks: string;
  class12Marks: string;
  lastSemesterCGPA: string;
}

interface Career {
  id: string;
  title: string;
  description: string;
  skills: string[];
  salaryRange: string;
  timeToLearn: string;
  demand: "High" | "Medium" | "Growing";
  gradient: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("reviews");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [studentProfile, setStudentProfile] = useState<StudentProfileData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [hrEmail, setHrEmail] = useState<string>("");
  const [placementInfo, setPlacementInfo] = useState<{collegeName: string; collegeId: string} | null>(null);

  // Load saved login state and profile from localStorage on mount
  useEffect(() => {
    const savedLoginState = localStorage.getItem("isLoggedIn");
    const savedUserType = localStorage.getItem("userType") as UserType;
    const savedProfile = localStorage.getItem("studentProfile");
    const savedInterests = localStorage.getItem("selectedInterests");
    const savedHrEmail = localStorage.getItem("hrEmail");
    const savedPlacementInfo = localStorage.getItem("placementInfo");
    
    if (savedLoginState === "true") {
      setIsLoggedIn(true);
      setUserType(savedUserType);
      
      if (savedUserType === "student" && savedProfile) {
        setStudentProfile(JSON.parse(savedProfile));
        setCurrentPage("dashboard");
        if (savedInterests) {
          setSelectedInterests(JSON.parse(savedInterests));
        }
      } else if (savedUserType === "hr" && savedHrEmail) {
        setHrEmail(savedHrEmail);
        setCurrentPage("hrDashboard");
      } else if (savedUserType === "placement" && savedPlacementInfo) {
        setPlacementInfo(JSON.parse(savedPlacementInfo));
        setCurrentPage("placementDashboard");
      }
    } else {
      // Show reviews page for first-time visitors
      setCurrentPage("reviews");
    }
  }, []);

  // Save login state and profile to localStorage whenever they change
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", userType || "");
      
      if (userType === "student" && studentProfile) {
        localStorage.setItem("studentProfile", JSON.stringify(studentProfile));
      } else if (userType === "hr" && hrEmail) {
        localStorage.setItem("hrEmail", hrEmail);
      } else if (userType === "placement" && placementInfo) {
        localStorage.setItem("placementInfo", JSON.stringify(placementInfo));
      }
    }
  }, [isLoggedIn, userType, studentProfile, hrEmail, placementInfo]);

  useEffect(() => {
    if (selectedInterests.length > 0) {
      localStorage.setItem("selectedInterests", JSON.stringify(selectedInterests));
    }
  }, [selectedInterests]);

  const handleNavigate = (page: string) => {
    if (page === "explore") {
      setCurrentPage("interests");
    } else {
      setCurrentPage(page as Page);
    }
  };

  const handleStartExploring = () => {
    setCurrentPage("interests");
  };

  const handleInterestsComplete = (interests: string[]) => {
    setSelectedInterests(interests);
    setCurrentPage("careers");
  };

  const handleSelectCareer = (career: Career) => {
    setSelectedCareer(career);
    setCurrentPage("roadmap");
  };

  const handleBackToCareers = () => {
    setCurrentPage("careers");
  };

  const handleLogin = (email: string, type: UserType = "student", additionalInfo?: any) => {
    setIsLoggedIn(true);
    setUserType(type);
    
    if (type === "student") {
      setCurrentPage("profile");
    } else if (type === "hr") {
      setHrEmail(email);
      setCurrentPage("hrDashboard");
    } else if (type === "placement") {
      setPlacementInfo(additionalInfo);
      setCurrentPage("placementDashboard");
    }
  };

  const handleProfileComplete = (data: StudentProfileData) => {
    setStudentProfile(data);
    setCurrentPage("dashboard");
  };

  const handleProfileUpdate = (data: StudentProfileData) => {
    setStudentProfile(data);
    localStorage.setItem("studentProfile", JSON.stringify(data));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setStudentProfile(null);
    setSelectedInterests([]);
    setSelectedCareer(null);
    setHrEmail("");
    setPlacementInfo(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userType");
    localStorage.removeItem("studentProfile");
    localStorage.removeItem("selectedInterests");
    localStorage.removeItem("hrEmail");
    localStorage.removeItem("placementInfo");
    setCurrentPage("reviews");
  };

  const handleContinueFromReviews = () => {
    setCurrentPage("login");
  };

  return (
    <div className="dark min-h-screen flex animated-background">
      {/* Floating education-themed shapes */}
      <div className="floating-shape floating-shape-1">🎓</div>
      <div className="floating-shape floating-shape-2">📚</div>
      <div className="floating-shape floating-shape-3">💡</div>
      <div className="floating-shape floating-shape-4">✏️</div>
      <div className="floating-shape floating-shape-5">📜</div>
      <div className="floating-shape floating-shape-6">💻</div>
      <div className="floating-shape floating-shape-7">🏆</div>
      <div className="floating-shape floating-shape-8">🎯</div>
      <div className="floating-shape floating-shape-9">🚀</div>
      
      {/* Sidebar Navigation - Only for students */}
      {isLoggedIn && userType === "student" && (
        <Sidebar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          studentProfile={studentProfile}
          onLogout={handleLogout}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      )}
      
      <div className="flex-1 flex flex-col">
        {isLoggedIn && userType === "student" && <AIBanner />}
        
        <main className="flex-1 relative z-10">
        {currentPage === "reviews" && <ReviewsPage onContinue={handleContinueFromReviews} onLogin={handleContinueFromReviews} />}
        
        {currentPage === "login" && <LoginPage onLogin={handleLogin} />}
        
        {currentPage === "hrDashboard" && <HRDashboard hrEmail={hrEmail} onLogout={handleLogout} />}
        
        {currentPage === "placementDashboard" && placementInfo && (
          <PlacementDashboard 
            collegeName={placementInfo.collegeName}
            collegeId={placementInfo.collegeId}
            onLogout={handleLogout}
          />
        )}
        
        {currentPage === "verification" && <InternshipVerification />}
        
        {currentPage === "profile" && (
          <StudentProfile onComplete={handleProfileComplete} />
        )}
        
        {currentPage === "profileView" && studentProfile && (
          <ProfilePage
            studentProfile={studentProfile}
            onUpdate={handleProfileUpdate}
          />
        )}
        
        {currentPage === "resume" && studentProfile && (
          <ResumeBuilder
            studentProfile={studentProfile}
            onUpdate={handleProfileUpdate}
          />
        )}
        
        {currentPage === "gamification" && studentProfile && (
          <GamificationDashboard studentProfile={studentProfile} />
        )}
        
        {currentPage === "skillgap" && studentProfile && (
          <SkillGapAnalyzer studentProfile={studentProfile} />
        )}
        
        {currentPage === "applications" && <ApplicationTracker />}
        
        {currentPage === "mockinterview" && <MockInterview />}
        
        {currentPage === "dashboard" && studentProfile && (
          <StudentDashboard
            studentProfile={studentProfile}
            onNavigate={handleNavigate}
          />
        )}
        
        {currentPage === "home" && (
          <LandingPage onStartExploring={handleStartExploring} />
        )}
        
        {currentPage === "interests" && (
          <InterestSelection onComplete={handleInterestsComplete} />
        )}
        
        {currentPage === "careers" && (
          <CareerSuggestions
            selectedInterests={selectedInterests}
            onSelectCareer={handleSelectCareer}
          />
        )}
        
        {currentPage === "roadmap" && selectedCareer && (
          <CareerRoadmap
            career={selectedCareer}
            onBack={handleBackToCareers}
          />
        )}
        
        {currentPage === "internships" && <InternshipsPage />}
        
        {currentPage === "courses" && <CoursesPage />}
        
        {currentPage === "about" && <AboutPage />}
        
        {currentPage === "plan" && (
          <MyPlanPage
            selectedInterests={selectedInterests}
            savedCareer={selectedCareer}
          />
        )}
        </main>
        
        {isLoggedIn && userType === "student" && <Footer />}
      </div>
      
      {/* AI Chatbot - Available for students after login */}
      {isLoggedIn && userType === "student" && <AIChatbot />}
    </div>
  );
}
