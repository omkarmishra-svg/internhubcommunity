import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, DollarSign, Clock, TrendingUp } from "lucide-react";

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

interface CareerSuggestionsProps {
  selectedInterests: string[];
  onSelectCareer: (career: Career) => void;
}

export function CareerSuggestions({
  selectedInterests,
  onSelectCareer,
}: CareerSuggestionsProps) {
  const allCareers: Record<string, Career[]> = {
    tech: [
      {
        id: "web-dev",
        title: "Web Developer",
        description:
          "Build and maintain websites and web applications using modern frameworks and technologies.",
        skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Git"],
        salaryRange: "$60k - $120k",
        timeToLearn: "6-12 months",
        demand: "High",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        id: "data-analyst",
        title: "Data Analyst",
        description:
          "Analyze data trends and create insights to help businesses make informed decisions.",
        skills: ["SQL", "Python", "Excel", "Tableau", "Statistics"],
        salaryRange: "$55k - $100k",
        timeToLearn: "4-8 months",
        demand: "High",
        gradient: "from-cyan-500 to-teal-500",
      },
    ],
    design: [
      {
        id: "ui-ux",
        title: "UI/UX Designer",
        description:
          "Design intuitive and beautiful user interfaces and experiences for digital products.",
        skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
        salaryRange: "$50k - $110k",
        timeToLearn: "5-10 months",
        demand: "High",
        gradient: "from-purple-500 to-pink-500",
      },
    ],
    marketing: [
      {
        id: "digital-marketer",
        title: "Digital Marketing Specialist",
        description:
          "Plan and execute online marketing campaigns across various digital channels.",
        skills: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics", "Email Marketing"],
        salaryRange: "$45k - $90k",
        timeToLearn: "3-6 months",
        demand: "Growing",
        gradient: "from-pink-500 to-rose-500",
      },
    ],
    business: [
      {
        id: "product-manager",
        title: "Product Manager",
        description:
          "Lead product development from ideation to launch, working with cross-functional teams.",
        skills: ["Strategy", "Communication", "Analytics", "Agile", "User Research"],
        salaryRange: "$70k - $140k",
        timeToLearn: "12-18 months",
        demand: "High",
        gradient: "from-orange-500 to-red-500",
      },
    ],
  };

  // Get careers based on selected interests
  const suggestedCareers: Career[] = [];
  selectedInterests.forEach((interest) => {
    if (allCareers[interest]) {
      suggestedCareers.push(...allCareers[interest]);
    }
  });

  // If no specific matches, show popular careers
  const displayCareers =
    suggestedCareers.length > 0
      ? suggestedCareers
      : [
          allCareers.tech[0],
          allCareers.design[0],
          allCareers.marketing[0],
          allCareers.business[0],
        ];

  const getDemandColor = (demand: string) => {
    if (demand === "High") return "bg-green-100 text-green-700";
    if (demand === "Growing") return "bg-blue-100 text-blue-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Your Career Matches
          </h1>
          <p className="text-lg text-muted-foreground">
            Based on your interests, here are some great career paths to explore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayCareers.map((career) => (
            <Card
              key={career.id}
              className="p-6 hover:shadow-xl transition-all border-2 hover:border-cyan-200 group"
            >
              <div
                className={`w-full h-2 bg-gradient-to-r ${career.gradient} rounded-full mb-4`}
              ></div>
              
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl">{career.title}</h2>
                <Badge className={getDemandColor(career.demand)}>
                  {career.demand} Demand
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6">{career.description}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span>Salary: {career.salaryRange}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Time to Learn: {career.timeToLearn}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm mb-2">Key Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => onSelectCareer(career)}
                className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white group-hover:shadow-lg transition-all"
              >
                View Career Roadmap
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>


      </div>
    </div>
  );
}
