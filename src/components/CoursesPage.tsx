import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  BookOpen,
  Award,
  Clock,
  Users,
  Star,
  Search,
  Play,
  CheckCircle2,
} from "lucide-react";

export function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Priya Sharma",
      category: "Web Development",
      level: "Beginner",
      duration: "12 weeks",
      students: 15234,
      rating: 4.8,
      price: "Free",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      description:
        "Master full-stack web development from scratch. Build real-world projects and deploy them.",
      gradient: "from-blue-500 to-cyan-500",
      lessons: 156,
      certificate: true,
    },
    {
      id: 2,
      title: "Data Structures & Algorithms Masterclass",
      instructor: "Prof. Rajesh Kumar",
      category: "Programming",
      level: "Intermediate",
      duration: "10 weeks",
      students: 12890,
      rating: 4.9,
      price: "Free",
      skills: ["DSA", "Python", "Problem Solving", "Coding Interviews"],
      description:
        "Ace coding interviews with comprehensive DSA coverage. Includes 300+ problems.",
      gradient: "from-purple-500 to-pink-500",
      lessons: 128,
      certificate: true,
    },
    {
      id: 3,
      title: "UI/UX Design Foundation",
      instructor: "Ananya Desai",
      category: "Design",
      level: "Beginner",
      duration: "8 weeks",
      students: 8956,
      rating: 4.7,
      price: "Free",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
      description:
        "Learn design thinking and create beautiful user interfaces using Figma.",
      gradient: "from-pink-500 to-rose-500",
      lessons: 89,
      certificate: true,
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. Amit Verma",
      category: "Data Science",
      level: "Intermediate",
      duration: "10 weeks",
      students: 11234,
      rating: 4.8,
      price: "Free",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization", "ML Basics"],
      description:
        "Analyze data and build predictive models using Python libraries.",
      gradient: "from-green-500 to-teal-500",
      lessons: 112,
      certificate: true,
    },
    {
      id: 5,
      title: "Digital Marketing Essentials",
      instructor: "Neha Patel",
      category: "Marketing",
      level: "Beginner",
      duration: "6 weeks",
      students: 9567,
      rating: 4.6,
      price: "Free",
      skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      description:
        "Master digital marketing strategies and grow your online presence.",
      gradient: "from-orange-500 to-red-500",
      lessons: 67,
      certificate: true,
    },
    {
      id: 6,
      title: "React & TypeScript Advanced",
      instructor: "Karthik Reddy",
      category: "Web Development",
      level: "Advanced",
      duration: "8 weeks",
      students: 7823,
      rating: 4.9,
      price: "Free",
      skills: ["React", "TypeScript", "State Management", "Testing"],
      description:
        "Build production-ready React applications with TypeScript and best practices.",
      gradient: "from-cyan-500 to-blue-600",
      lessons: 94,
      certificate: true,
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Sunita Iyer",
      category: "Data Science",
      level: "Intermediate",
      duration: "12 weeks",
      students: 10456,
      rating: 4.8,
      price: "Free",
      skills: ["Python", "ML Algorithms", "TensorFlow", "Model Deployment"],
      description:
        "Learn machine learning from basics to deployment. Includes hands-on projects.",
      gradient: "from-indigo-500 to-purple-600",
      lessons: 145,
      certificate: true,
    },
    {
      id: 8,
      title: "Mobile App Development with React Native",
      instructor: "Vikram Singh",
      category: "Mobile Development",
      level: "Intermediate",
      duration: "10 weeks",
      students: 6789,
      rating: 4.7,
      price: "Free",
      skills: ["React Native", "Mobile UI", "APIs", "App Deployment"],
      description:
        "Build cross-platform mobile apps for iOS and Android using React Native.",
      gradient: "from-teal-500 to-cyan-600",
      lessons: 98,
      certificate: true,
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Data Science",
    "Design",
    "Programming",
    "Marketing",
    "Mobile Development",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      course.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            InternHub Academy
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Free courses designed to accelerate your career journey
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search courses, skills, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 text-center">
              <p className="text-3xl mb-1">50+</p>
              <p className="text-sm text-muted-foreground">Courses</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-3xl mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Free</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-3xl mb-1">75k+</p>
              <p className="text-sm text-muted-foreground">Students</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-3xl mb-1">4.8⭐</p>
              <p className="text-sm text-muted-foreground">Avg Rating</p>
            </Card>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category.toLowerCase()}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-cyan-200 group"
            >
              {/* Course Header */}
              <div
                className={`h-32 bg-gradient-to-r ${course.gradient} p-6 flex items-end`}
              >
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                  {course.category}
                </Badge>
              </div>

              <div className="p-6">
                {/* Title & Instructor */}
                <h3 className="text-xl mb-2 group-hover:text-cyan-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  by {course.instructor}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {(course.students / 1000).toFixed(1)}k students
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    {course.rating}
                  </div>
                </div>

                {/* Level Badge */}
                <div className="mb-4">
                  <Badge
                    className={
                      course.level === "Beginner"
                        ? "bg-green-100 text-green-700"
                        : course.level === "Intermediate"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }
                  >
                    {course.level}
                  </Badge>
                  {course.certificate && (
                    <Badge className="ml-2 bg-orange-100 text-orange-700">
                      <Award className="w-3 h-3 mr-1" />
                      Certificate
                    </Badge>
                  )}
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">
                    You'll learn:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white group-hover:shadow-lg transition-all">
                  <Play className="w-4 h-4 mr-2" />
                  Start Learning
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No courses found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
