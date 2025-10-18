import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Mic, Video, Play, Pause, RotateCcw, Award, TrendingUp, Lightbulb, Target, ChevronRight } from "lucide-react";

export function MockInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const interviewQuestions = [
    {
      id: 1,
      question: "Tell me about yourself and your background.",
      category: "Introduction",
      timeLimit: 90,
      tips: ["Keep it concise (60-90 seconds)", "Focus on relevant experience", "End with why you're interested in this role"],
    },
    {
      id: 2,
      question: "What is your experience with React and modern web development?",
      category: "Technical",
      timeLimit: 120,
      tips: ["Mention specific projects", "Discuss challenges you overcame", "Show enthusiasm for the technology"],
    },
    {
      id: 3,
      question: "Describe a challenging project you worked on and how you handled it.",
      category: "Behavioral",
      timeLimit: 120,
      tips: ["Use STAR method", "Be specific about your role", "Highlight the positive outcome"],
    },
    {
      id: 4,
      question: "Where do you see yourself in 3-5 years?",
      category: "Career Goals",
      timeLimit: 90,
      tips: ["Show ambition but be realistic", "Align with company growth", "Demonstrate commitment"],
    },
    {
      id: 5,
      question: "Do you have any questions for us?",
      category: "Closing",
      timeLimit: 60,
      tips: ["Always have 2-3 questions prepared", "Ask about team culture", "Show genuine interest"],
    },
  ];

  const mockFeedback = {
    overallScore: 85,
    strengths: [
      "Clear and confident communication",
      "Good use of technical terminology",
      "Structured answers using STAR method",
    ],
    improvements: [
      "Reduce filler words (um, like)",
      "Make more eye contact with camera",
      "Provide more specific examples",
    ],
    metrics: {
      clarity: 90,
      confidence: 85,
      relevance: 80,
      bodyLanguage: 75,
    },
  };

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowFeedback(false);
    setIsRecording(false);
  };

  const currentQ = interviewQuestions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Mock Interview Simulator
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Practice your interview skills with real-time AI feedback
          </p>
        </div>

        {/* Progress */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg text-white font-bold">Interview Progress</h3>
              <p className="text-sm text-gray-300 font-semibold">
                Question {currentQuestion + 1} of {interviewQuestions.length}
              </p>
            </div>
            <Badge className="bg-purple-500/30 text-purple-200 border-purple-500/50 px-4 py-2 text-base font-bold">
              {Math.round(((currentQuestion + 1) / interviewQuestions.length) * 100)}% Complete
            </Badge>
          </div>
          <Progress 
            value={((currentQuestion + 1) / interviewQuestions.length) * 100} 
            className="h-3 bg-gray-700"
          />
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Interview Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video/Audio Recording Area */}
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-[400px] flex items-center justify-center border-2 border-gray-700">
              {!isRecording ? (
                <div className="text-center">
                  <Video className="w-24 h-24 mx-auto mb-6 text-gray-400" />
                  <h3 className="text-2xl mb-4 text-white font-bold">Ready to Start?</h3>
                  <p className="text-gray-400 mb-6 font-semibold">
                    Click the button below to begin recording your answer
                  </p>
                  <Button
                    size="lg"
                    onClick={handleStartRecording}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-bold"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    <span className="text-white">Start Recording</span>
                  </Button>
                </div>
              ) : (
                <div className="text-center w-full">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                      <Mic className="w-16 h-16" />
                    </div>
                    <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-red-600 text-white font-bold px-3 py-1">
                      REC
                    </Badge>
                  </div>
                  <h3 className="text-2xl mb-4 text-white font-bold">Recording in Progress...</h3>
                  <p className="text-gray-400 mb-6 font-semibold">
                    Take your time and answer thoughtfully
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button
                      size="lg"
                      onClick={handleStopRecording}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold"
                    >
                      <Pause className="w-5 h-5 mr-2" />
                      <span className="text-white">Stop Recording</span>
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            {/* Current Question */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/50 font-bold px-3 py-1">
                  {currentQ.category}
                </Badge>
                <Badge variant="outline" className="border-gray-600 text-white font-bold">
                  ⏱️ {currentQ.timeLimit}s suggested
                </Badge>
              </div>
              <h2 className="text-2xl mb-4 text-white font-bold">{currentQ.question}</h2>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-l-4 border-blue-500 p-5 rounded-lg">
                <h4 className="mb-3 flex items-center gap-2 text-white font-bold text-lg">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Pro Tips:</span>
                </h4>
                <ul className="space-y-2">
                  {currentQ.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-semibold">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Feedback Section */}
            {showFeedback && (
              <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 backdrop-blur-sm animate-scale-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl flex items-center gap-2 text-white font-bold">
                    <Award className="w-7 h-7 text-green-400" />
                    <span className="text-white">AI Feedback</span>
                  </h3>
                  <div className="text-center">
                    <div className="text-4xl text-green-400 font-bold">{mockFeedback.overallScore}%</div>
                    <p className="text-xs text-gray-300 font-semibold">Overall Score</p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="mb-6">
                  <h4 className="mb-4 text-white font-bold text-lg">Performance Breakdown</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">Clarity</span>
                        <span className="text-green-400 font-bold">{mockFeedback.metrics.clarity}%</span>
                      </div>
                      <Progress value={mockFeedback.metrics.clarity} className="h-2 bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">Confidence</span>
                        <span className="text-cyan-400 font-bold">{mockFeedback.metrics.confidence}%</span>
                      </div>
                      <Progress value={mockFeedback.metrics.confidence} className="h-2 bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">Relevance</span>
                        <span className="text-yellow-400 font-bold">{mockFeedback.metrics.relevance}%</span>
                      </div>
                      <Progress value={mockFeedback.metrics.relevance} className="h-2 bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">Body Language</span>
                        <span className="text-orange-400 font-bold">{mockFeedback.metrics.bodyLanguage}%</span>
                      </div>
                      <Progress value={mockFeedback.metrics.bodyLanguage} className="h-2 bg-gray-700" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Strengths */}
                  <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                    <h4 className="mb-3 flex items-center gap-2 text-white font-bold">
                      <span className="text-2xl">💪</span>
                      <span className="text-white">Strengths</span>
                    </h4>
                    <ul className="space-y-2">
                      {mockFeedback.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          <span className="text-white font-semibold">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Areas for Improvement */}
                  <div className="p-4 bg-orange-500/20 rounded-lg border border-orange-500/30">
                    <h4 className="mb-3 flex items-center gap-2 text-white font-bold">
                      <span className="text-2xl">📈</span>
                      <span className="text-white">Improve</span>
                    </h4>
                    <ul className="space-y-2">
                      {mockFeedback.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Target className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                          <span className="text-white font-semibold">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  {currentQuestion < interviewQuestions.length - 1 ? (
                    <Button
                      onClick={handleNextQuestion}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold"
                    >
                      <span className="text-white">Next Question</span>
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleRestart}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold"
                    >
                      <RotateCcw className="w-5 h-5 mr-2" />
                      <span className="text-white">Start Over</span>
                    </Button>
                  )}
                </div>
              </Card>
            )}
          </div>

          {/* Right Sidebar - Tips & Progress */}
          <div className="space-y-6">
            {/* Interview Tips */}
            <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm">
              <h3 className="text-lg mb-4 flex items-center gap-2 text-white font-bold">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <span className="text-white">How to Answer</span>
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="text-cyan-400 font-bold text-lg">1.</span>
                    <span className="text-white">Introduction (30s)</span>
                  </h4>
                  <p className="text-sm text-gray-300 font-semibold">Start with a brief personal intro and your background</p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="text-cyan-400 font-bold text-lg">2.</span>
                    <span className="text-white">Key Points (60s)</span>
                  </h4>
                  <p className="text-sm text-gray-300 font-semibold">Discuss main experiences and achievements</p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="text-cyan-400 font-bold text-lg">3.</span>
                    <span className="text-white">Conclusion (30s)</span>
                  </h4>
                  <p className="text-sm text-gray-300 font-semibold">End with why you're interested in the role</p>
                </div>
              </div>
            </Card>

            {/* Questions List */}
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <h3 className="text-lg mb-4 text-white font-bold">All Questions</h3>
              <div className="space-y-2">
                {interviewQuestions.map((q, index) => (
                  <div
                    key={q.id}
                    className={`p-3 rounded-lg transition-all ${
                      index === currentQuestion
                        ? "bg-purple-500/30 border-2 border-purple-500"
                        : index < currentQuestion
                        ? "bg-green-500/20 border border-green-500/30"
                        : "bg-gray-700/30 border border-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === currentQuestion
                            ? "bg-purple-500 text-white"
                            : index < currentQuestion
                            ? "bg-green-500 text-white"
                            : "bg-gray-600 text-gray-300"
                        }`}
                      >
                        {index < currentQuestion ? "✓" : index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white font-semibold">{q.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Success Rate */}
            <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
              <h3 className="text-lg mb-4 text-white font-bold">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Interviews Completed</span>
                  <span className="text-green-400 font-bold text-xl">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Avg Score</span>
                  <span className="text-cyan-400 font-bold text-xl">82%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Improvement</span>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/50 font-bold">
                    +15% ↑
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
