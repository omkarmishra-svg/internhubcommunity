import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote, TrendingUp, Users, Award, Zap, ChevronRight, Building2 } from "lucide-react";
import { Logo } from "./Logo";

interface ReviewsPageProps {
  onContinue: () => void;
}

export function ReviewsPage({ onContinue }: ReviewsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineering Intern",
      company: "Google",
      college: "BPUT, Batch 2024",
      image: "",
      rating: 5,
      text: "InternHub's gamification system kept me motivated throughout my journey! The skill gap analyzer helped me focus on what actually matters. I went from confused to confident in just 3 months and landed my dream internship at Google! 🚀",
      category: "placement",
      date: "2 weeks ago",
    },
    {
      name: "Priya Patel",
      role: "SDE Intern",
      company: "Amazon",
      college: "IIT Delhi, Batch 2023",
      image: "",
      rating: 5,
      text: "The mock interview feature was an absolute game-changer for me. I practiced over 50 times before my actual Amazon interview. The AI feedback was incredibly detailed and spot-on. Highly recommend to anyone preparing for tech interviews!",
      category: "interview",
      date: "1 month ago",
    },
    {
      name: "Amit Kumar",
      role: "Data Analyst Intern",
      company: "Microsoft",
      college: "NIT Trichy, Batch 2024",
      image: "",
      rating: 5,
      text: "I was completely lost about my career path. InternHub showed me exactly which skills I needed to develop. The application tracker helped me stay organized with 15+ applications. From confusion to clarity - that's what InternHub gave me!",
      category: "career",
      date: "3 weeks ago",
    },
    {
      name: "Sneha Reddy",
      role: "UI/UX Design Intern",
      company: "Flipkart",
      college: "BITS Pilani, Batch 2023",
      image: "",
      rating: 5,
      text: "Absolutely love the alumni network feature! I connected with 3 seniors who work at Flipkart, and they guided me through the entire process. The resume builder saved me hours of work. This platform is a must-have for every student! ⭐",
      category: "networking",
      date: "2 months ago",
    },
    {
      name: "Karthik Iyer",
      role: "Full Stack Developer",
      company: "Accenture",
      college: "VIT Vellore, Batch 2024",
      image: "",
      rating: 5,
      text: "The daily challenges and XP system made learning fun! I earned Level 12 in just 2 months. The course recommendations were perfectly aligned with my career goals. Got placed at Accenture with 6 LPA package. Thank you InternHub! 🎉",
      category: "placement",
      date: "1 week ago",
    },
    {
      name: "Divya Menon",
      role: "Product Analyst",
      company: "Cognizant",
      college: "Anna University, Batch 2023",
      image: "",
      rating: 5,
      text: "As someone from a non-technical background, I was worried about switching to tech. InternHub's personalized learning path gave me clear direction. The skill gap analyzer was eye-opening! Now working as a Product Analyst! 💪",
      category: "career",
      date: "5 weeks ago",
    },
    {
      name: "Arjun Verma",
      role: "Backend Developer Intern",
      company: "TCS",
      college: "Amity University, Batch 2024",
      image: "",
      rating: 5,
      text: "The platform's AI Guru is like having a personal career coach 24/7! Got answers to all my doubts instantly. The gamification kept me engaged - I'm addicted to earning badges! Successfully cracked TCS interview in first attempt. 🏆",
      category: "interview",
      date: "3 days ago",
    },
    {
      name: "Pooja Singh",
      role: "Data Science Intern",
      company: "Infosys",
      college: "Manipal Institute, Batch 2023",
      image: "",
      rating: 5,
      text: "InternHub changed my life! The detailed company information with alumni connections gave me insider knowledge. Applied to 20+ companies using their tracker, got 5 interviews, and 2 offers! Choose Infosys finally. Best decision ever! ✨",
      category: "placement",
      date: "2 weeks ago",
    },
  ];

  const stats = [
    { icon: Users, label: "Students Placed", value: "50,000+", color: "from-cyan-500 to-blue-500" },
    { icon: Building2, label: "Partner Companies", value: "500+", color: "from-purple-500 to-pink-500" },
    { icon: Award, label: "Success Rate", value: "85%", color: "from-orange-500 to-red-500" },
    { icon: TrendingUp, label: "Avg. Salary Hike", value: "40%", color: "from-green-500 to-teal-500" },
  ];

  const categories = [
    { id: "all", label: "All Reviews", count: testimonials.length },
    { id: "placement", label: "Placements", count: testimonials.filter(t => t.category === "placement").length },
    { id: "interview", label: "Interviews", count: testimonials.filter(t => t.category === "interview").length },
    { id: "career", label: "Career Growth", count: testimonials.filter(t => t.category === "career").length },
    { id: "networking", label: "Networking", count: testimonials.filter(t => t.category === "networking").length },
  ];

  const filteredTestimonials = selectedFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedFilter);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Logo size="xl" showText={false} className="mb-6" />
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            InternHub
          </h1>
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
            🏆 India's #1 AI-Powered Career Platform
          </Badge>
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Trusted by 50,000+ Students Across India
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See what students are saying about their success journey with InternHub's 
            AI-powered skill analysis, mock interviews, and gamified learning experience.
          </p>

          {/* CTA Button */}
          <Button
            onClick={onContinue}
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-12 py-7 text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Start Your Success Story
            <ChevronRight className="w-6 h-6 ml-2" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all hover:scale-105"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Category Filters */}
        <Card className="p-4 mb-8 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                variant={selectedFilter === category.id ? "default" : "outline"}
                className={
                  selectedFilter === category.id
                    ? "bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </Card>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all hover:shadow-xl hover:border-cyan-500/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-14 h-14 border-2 border-cyan-500">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white text-lg">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-cyan-400">{testimonial.role}</p>
                      <p className="text-sm text-purple-400">{testimonial.company}</p>
                      <p className="text-xs text-gray-400">{testimonial.college}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="w-8 h-8 text-cyan-500/30 absolute -top-2 -left-2" />
                <p className="text-sm text-gray-300 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="p-12 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-cyan-500/30 backdrop-blur-sm text-center">
          <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Ready to Join 50,000+ Successful Students?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey with AI-powered career guidance, gamified learning, 
            and connect with top companies for your dream internship!
          </p>
          <Button
            onClick={onContinue}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-7 text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
          >
            Get Started for FREE
            <ChevronRight className="w-6 h-6 ml-2" />
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 100% Free for Students • Join in 2 minutes
          </p>
        </Card>
      </div>
    </div>
  );
}
