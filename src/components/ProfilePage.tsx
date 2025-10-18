import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  User,
  Mail,
  GraduationCap,
  Linkedin,
  Github,
  Edit,
  Save,
  X,
  Camera,
  Award,
  BookOpen,
  Plus,
  FileText,
} from "lucide-react";

interface ProfilePageProps {
  studentProfile: any;
  onUpdate: (data: any) => void;
}

export function ProfilePage({ studentProfile, onUpdate }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(studentProfile);
  const [currentSkill, setCurrentSkill] = useState("");

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(studentProfile);
    setIsEditing(false);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePhoto: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addSkill = (skill: string) => {
    if (skill.trim() && !formData.skills.includes(skill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill.trim()],
      });
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s: string) => s !== skillToRemove),
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl mb-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Your Profile
            </h1>
            <p className="text-muted-foreground">
              Manage your personal information and settings
            </p>
          </div>
          {!isEditing ? (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleCancel} variant="outline">
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Photo & Basic Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                    <AvatarImage src={formData.profilePhoto} />
                    <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white text-3xl">
                      {formData.name?.charAt(0)?.toUpperCase() || "S"}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <label
                      htmlFor="photo-upload"
                      className="absolute bottom-0 right-0 w-10 h-10 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors"
                    >
                      <Camera className="w-5 h-5" />
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <h2 className="text-2xl mb-1">{formData.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {formData.college}
                </p>
                <Badge className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
                  Student
                </Badge>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="mb-4">Profile Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Skills Added
                  </span>
                  <span className="font-medium">{formData.skills?.length || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Profile Completion
                  </span>
                  <span className="font-medium">85%</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="p-6">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-600" />
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    {isEditing ? (
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2"
                      />
                    ) : (
                      <p className="mt-2 p-2 bg-gray-50 rounded-lg">
                        {formData.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label>Email</Label>
                    <p className="mt-2 p-2 bg-gray-50 rounded-lg flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      {formData.email}
                    </p>
                  </div>
                </div>

                <div>
                  <Label>College/University</Label>
                  {isEditing ? (
                    <Input
                      value={formData.college}
                      onChange={(e) =>
                        setFormData({ ...formData, college: e.target.value })
                      }
                      className="mt-2"
                    />
                  ) : (
                    <p className="mt-2 p-2 bg-gray-50 rounded-lg flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      {formData.college}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Bio/About Me</Label>
                  {isEditing ? (
                    <Textarea
                      value={formData.bio || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, bio: e.target.value })
                      }
                      placeholder="Tell us about yourself, your interests, and career goals..."
                      className="mt-2 min-h-24"
                    />
                  ) : (
                    <p className="mt-2 p-3 bg-gray-50 rounded-lg">
                      {formData.bio || "No bio added yet. Click edit to add one!"}
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {/* Academic Information */}
            <Card className="p-6">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Class 10th Marks (%)</Label>
                  {isEditing ? (
                    <Input
                      type="number"
                      value={formData.class10Marks}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          class10Marks: e.target.value,
                        })
                      }
                      placeholder="85"
                      className="mt-2"
                    />
                  ) : (
                    <p className="mt-2 p-2 bg-gray-50 rounded-lg">
                      {formData.class10Marks}%
                    </p>
                  )}
                </div>
                <div>
                  <Label>Class 12th Marks (%)</Label>
                  {isEditing ? (
                    <Input
                      type="number"
                      value={formData.class12Marks}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          class12Marks: e.target.value,
                        })
                      }
                      placeholder="88"
                      className="mt-2"
                    />
                  ) : (
                    <p className="mt-2 p-2 bg-gray-50 rounded-lg">
                      {formData.class12Marks}%
                    </p>
                  )}
                </div>
                <div>
                  <Label>Last Semester CGPA</Label>
                  {isEditing ? (
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.lastSemesterCGPA}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          lastSemesterCGPA: e.target.value,
                        })
                      }
                      placeholder="8.5"
                      className="mt-2"
                    />
                  ) : (
                    <p className="mt-2 p-2 bg-gray-50 rounded-lg">
                      {formData.lastSemesterCGPA} CGPA
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-600" />
                Social Links
              </h3>
              <div className="space-y-4">
                <div>
                  <Label className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    LinkedIn Profile
                  </Label>
                  {isEditing ? (
                    <Input
                      type="url"
                      value={formData.linkedinUrl || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, linkedinUrl: e.target.value })
                      }
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="mt-2"
                    />
                  ) : formData.linkedinUrl ? (
                    <a
                      href={formData.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 p-2 bg-gray-50 rounded-lg flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      {formData.linkedinUrl}
                    </a>
                  ) : (
                    <p className="mt-2 p-2 bg-gray-50 rounded-lg text-muted-foreground">
                      Not added
                    </p>
                  )}
                </div>

                <div>
                  <Label className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-gray-800" />
                    GitHub Profile
                  </Label>
                  {isEditing ? (
                    <Input
                      type="url"
                      value={formData.githubUrl || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, githubUrl: e.target.value })
                      }
                      placeholder="https://github.com/yourusername"
                      className="mt-2"
                    />
                  ) : formData.githubUrl ? (
                    <a
                      href={formData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 p-2 bg-gray-50 rounded-lg flex items-center gap-2 text-gray-800 hover:underline"
                    >
                      {formData.githubUrl}
                    </a>
                  ) : (
                    <p className="mt-2 p-2 bg-gray-50 rounded-lg text-muted-foreground">
                      Not added
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="text-xl mb-6">Skills & Technologies</h3>
              {isEditing && (
                <div className="mb-4">
                  <div className="flex gap-2">
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
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {formData.skills?.map((skill: string, index: number) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 text-sm"
                  >
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-2 hover:bg-white/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
