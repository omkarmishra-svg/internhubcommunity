import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { GraduationCap, Linkedin, Github, Plus, X } from "lucide-react";

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

interface StudentProfileProps {
  onComplete: (data: StudentProfileData) => void;
}

export function StudentProfile({ onComplete }: StudentProfileProps) {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [class10Marks, setClass10Marks] = useState("");
  const [class12Marks, setClass12Marks] = useState("");
  const [lastSemesterCGPA, setLastSemesterCGPA] = useState("");

  const suggestedSkills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "Java",
    "SQL",
    "HTML/CSS",
    "Git",
    "TypeScript",
    "Machine Learning",
    "Data Analysis",
    "UI/UX Design",
  ];

  const addSkill = (skill: string) => {
    if (skill.trim() && !skills.includes(skill.trim())) {
      setSkills([...skills, skill.trim()]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && college && skills.length > 0 && class10Marks && class12Marks && lastSemesterCGPA) {
      onComplete({
        name,
        email: "student@gmail.com", // This would come from login
        college,
        linkedinUrl,
        githubUrl,
        skills,
        class10Marks,
        class12Marks,
        lastSemesterCGPA,
      });
    }
  };

  const isFormValid = name && college && skills.length > 0 && class10Marks && class12Marks && lastSemesterCGPA;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Complete Your Profile
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us personalize your internship and career recommendations
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="mt-2"
              />
            </div>

            {/* College */}
            <div>
              <Label htmlFor="college">College/University Name *</Label>
              <Input
                id="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="e.g., BPUT, IIT Delhi, etc."
                required
                className="mt-2"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
              <div className="flex items-center gap-2 mt-2">
                <Linkedin className="w-5 h-5 text-blue-600" />
                <Input
                  id="linkedin"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile"
                  type="url"
                />
              </div>
            </div>

            {/* GitHub */}
            <div>
              <Label htmlFor="github">GitHub Profile (Optional)</Label>
              <div className="flex items-center gap-2 mt-2">
                <Github className="w-5 h-5 text-gray-800" />
                <Input
                  id="github"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/yourusername"
                  type="url"
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg mb-4">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="class10">Class 10th Marks (%) *</Label>
                  <Input
                    id="class10"
                    type="number"
                    value={class10Marks}
                    onChange={(e) => setClass10Marks(e.target.value)}
                    placeholder="85"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="class12">Class 12th Marks (%) *</Label>
                  <Input
                    id="class12"
                    type="number"
                    value={class12Marks}
                    onChange={(e) => setClass12Marks(e.target.value)}
                    placeholder="88"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="cgpa">Last Semester CGPA *</Label>
                  <Input
                    id="cgpa"
                    type="number"
                    step="0.01"
                    value={lastSemesterCGPA}
                    onChange={(e) => setLastSemesterCGPA(e.target.value)}
                    placeholder="8.5"
                    required
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <Label>Your Skills *</Label>
              <p className="text-sm text-muted-foreground mb-3">
                Add at least one skill. Type and press Enter or click +
              </p>
              
              <div className="flex gap-2 mb-3">
                <Input
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill(currentSkill);
                    }
                  }}
                  placeholder="Add a skill..."
                />
                <Button
                  type="button"
                  onClick={() => addSkill(currentSkill)}
                  disabled={!currentSkill.trim()}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Selected Skills */}
              {skills.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm mb-2">Your Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 hover:bg-white/20 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested Skills */}
              <div>
                <p className="text-sm mb-2">Suggested Skills (click to add):</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedSkills
                    .filter((s) => !skills.includes(s))
                    .map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="cursor-pointer hover:bg-cyan-100 hover:text-cyan-700"
                        onClick={() => addSkill(skill)}
                      >
                        + {skill}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Dashboard
              </Button>
              {!isFormValid && (
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Please fill in all required fields including academic information
                </p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
