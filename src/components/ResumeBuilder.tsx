import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download, Eye, Edit, Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Award } from "lucide-react";
import { useState } from "react";

interface ResumeBuilderProps {
  studentProfile: any;
  onUpdate?: (data: any) => void;
}

export function ResumeBuilder({ studentProfile, onUpdate }: ResumeBuilderProps) {
  const [viewMode, setViewMode] = useState<"preview" | "edit">("preview");

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl mb-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Your Resume
            </h1>
            <p className="text-muted-foreground">
              Professional resume auto-generated from your profile
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setViewMode(viewMode === "preview" ? "edit" : "preview")}
            >
              {viewMode === "preview" ? (
                <>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </>
              )}
            </Button>
            <Button
              onClick={handleDownloadPDF}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Resume Preview */}
        <Card className="p-12 bg-white shadow-2xl" id="resume-content">
          {/* Header Section */}
          <div className="text-center mb-8 pb-6 border-b-2 border-cyan-500">
            <h1 className="text-4xl mb-2">{studentProfile.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{studentProfile.college}</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>{studentProfile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>+91 XXXXXXXXXX</span>
              </div>
              {studentProfile.linkedinUrl && (
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600">LinkedIn</span>
                </div>
              )}
              {studentProfile.githubUrl && (
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-gray-800" />
                  <span>GitHub</span>
                </div>
              )}
            </div>
          </div>

          {/* Objective/Bio */}
          {studentProfile.bio && (
            <div className="mb-6">
              <h2 className="text-xl mb-3 flex items-center gap-2 text-cyan-700">
                <Award className="w-5 h-5" />
                OBJECTIVE
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {studentProfile.bio}
              </p>
            </div>
          )}

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2 text-cyan-700">
              <GraduationCap className="w-5 h-5" />
              EDUCATION
            </h2>
            
            <div className="space-y-4">
              {/* College */}
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="font-semibold">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-sm text-muted-foreground">
                  {studentProfile.college}
                </p>
                <p className="text-sm">
                  Current CGPA: <span className="font-semibold">{studentProfile.lastSemesterCGPA}</span> / 10.0
                </p>
              </div>

              {/* Class 12th */}
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="font-semibold">Class 12th (Senior Secondary)</h3>
                <p className="text-sm">
                  Percentage: <span className="font-semibold">{studentProfile.class12Marks}%</span>
                </p>
              </div>

              {/* Class 10th */}
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="font-semibold">Class 10th (Secondary)</h3>
                <p className="text-sm">
                  Percentage: <span className="font-semibold">{studentProfile.class10Marks}%</span>
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2 text-cyan-700">
              <Briefcase className="w-5 h-5" />
              TECHNICAL SKILLS
            </h2>
            <div className="flex flex-wrap gap-2">
              {studentProfile.skills?.map((skill: string, index: number) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2 text-cyan-700">
              <Award className="w-5 h-5" />
              PROJECTS
            </h2>
            
            <div className="space-y-4">
              {/* Sample projects - would come from profile */}
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="font-semibold">E-Commerce Web Application</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Full-stack MERN application | June 2024 - Present
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Built a fully functional e-commerce platform with user authentication</li>
                  <li>Implemented payment gateway integration using Stripe</li>
                  <li>Developed responsive UI using React and Tailwind CSS</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">Node.js</Badge>
                  <Badge variant="outline" className="text-xs">MongoDB</Badge>
                </div>
              </div>

              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="font-semibold">Task Management System</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Real-time Collaboration Tool | March 2024 - May 2024
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Developed real-time task tracking application with Firebase</li>
                  <li>Implemented user authentication and role-based access control</li>
                  <li>Created intuitive drag-and-drop interface</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">Firebase</Badge>
                  <Badge variant="outline" className="text-xs">Tailwind</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2 text-cyan-700">
              <Award className="w-5 h-5" />
              CERTIFICATIONS
            </h2>
            <ul className="space-y-2">
              <li className="text-sm flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Web Development Bootcamp - InternHub Academy (2024)</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Data Structures & Algorithms - InternHub Academy (2024)</span>
              </li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2 text-cyan-700">
              <Award className="w-5 h-5" />
              ACHIEVEMENTS & ACTIVITIES
            </h2>
            <ul className="space-y-2">
              <li className="text-sm flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Winner - College Hackathon 2024</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Technical Lead - College Coding Club</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>Volunteer - National Service Scheme (NSS)</span>
              </li>
            </ul>
          </div>

          {/* Declaration */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-muted-foreground mb-4">
              I hereby declare that the above information is true to the best of my knowledge.
            </p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm">Date: {new Date().toLocaleDateString()}</p>
                <p className="text-sm">Place: Bhubaneswar</p>
              </div>
              <div className="text-right">
                <div className="border-t border-gray-800 pt-2 px-8">
                  <p className="text-sm">{studentProfile.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tips Section */}
        <Card className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200">
          <h3 className="text-lg mb-3">💡 Resume Tips</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-1">✓</span>
              <span>Keep your resume to one page for internships</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-1">✓</span>
              <span>Use action verbs like "Developed", "Implemented", "Created"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-1">✓</span>
              <span>Quantify your achievements with numbers and metrics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-1">✓</span>
              <span>Customize your resume for each job application</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-content,
          #resume-content * {
            visibility: visible;
          }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
}
