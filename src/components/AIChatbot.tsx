import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, Lightbulb, User, Bot } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "👋 Hi! I'm **AI Guru**, your personal career assistant! I can help you with:\n\n🎯 **Internship Guidance** - Find, apply, and succeed\n📚 **Placement Prep** - Get campus ready\n📄 **Resume Building** - Stand out from the crowd\n💼 **Interview Prep** - Ace your interviews\n🚀 **Career Roadmap** - Plan your future\n💰 **Salary Insights** - Know your worth\n\n**Ask me anything in any language!** 🌍",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "How to find internships?",
    "Resume tips for freshers",
    "Top skills for 2025",
    "Interview preparation guide",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, isTyping]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Comprehensive internship guidance
    if (lowerMessage.includes("internship") || lowerMessage.includes("intern")) {
      if (lowerMessage.includes("find") || lowerMessage.includes("search") || lowerMessage.includes("where")) {
        return "🎯 **Best Places to Find Internships:**\n\n**Top Platforms:**\n✅ **LinkedIn** - Network + Jobs (Best for tech)\n✅ **Internshala** - India's #1 internship platform\n✅ **AngelList** - Startup internships\n✅ **Indeed** - Wide variety\n✅ **Naukri/Shine** - Established companies\n\n**Other Sources:**\n🏢 Company career pages directly\n📧 Cold emailing startups\n🎓 College placement cells\n🤝 Alumni referrals (use LinkedIn!)\n📱 Twitter - Follow startup founders\n\n**Pro Tips:**\n💡 Apply to 20+ positions weekly\n💡 Customize resume for each role\n💡 Follow up after 1 week\n💡 Build portfolio/GitHub first\n\nWant specific company recommendations?";
      }
      
      if (lowerMessage.includes("apply") || lowerMessage.includes("application")) {
        return "📝 **Internship Application Strategy:**\n\n**Before Applying:**\n✅ Research the company (1-2 hours)\n✅ Understand job requirements (100%)\n✅ Tailor resume & cover letter\n✅ Prepare 2-3 relevant projects\n✅ Update LinkedIn profile\n\n**Application Process:**\n1️⃣ **Resume** - ATS-friendly, 1-page\n2️⃣ **Cover Letter** - Show genuine interest\n3️⃣ **Portfolio** - Live projects + GitHub\n4️⃣ **LinkedIn** - Connect with recruiters\n5️⃣ **Follow-up** - Email after 5-7 days\n\n**Success Rate Boosters:**\n🚀 Apply within first 48 hours\n🚀 Get referrals (70% higher chance)\n🚀 Cold email hiring managers\n🚀 Show unique projects\n\nNeed help with resume?";
      }
      
      if (lowerMessage.includes("prepare") || lowerMessage.includes("ready")) {
        return "🎯 **Internship Preparation Checklist:**\n\n**Skills Development (2-3 months):**\n✅ Core technical skills for your domain\n✅ 2-3 portfolio projects (deployed)\n✅ Git/GitHub proficiency\n✅ Basic DSA (for tech roles)\n✅ Communication skills\n\n**Profile Building:**\n✅ Professional resume (ATS-friendly)\n✅ LinkedIn optimization (keywords)\n✅ GitHub with README files\n✅ Personal portfolio website\n✅ Certifications (Coursera/Udemy)\n\n**Application Ready:**\n✅ Cover letter templates\n✅ Email templates\n✅ Reference list ready\n✅ Portfolio presentations\n\n**Timeline:**\n📅 Start 3-4 months before target date\n📅 Apply to 5-10 positions weekly\n📅 Network consistently\n\nWhat domain are you targeting?";
      }
      
      if (lowerMessage.includes("tips") || lowerMessage.includes("advice")) {
        return "💡 **Top 10 Internship Success Tips:**\n\n**1. Start Early** 🎯\nApply 3-6 months in advance\n\n**2. Build Portfolio** 🛠️\nShow, don't just tell\n\n**3. Network Actively** 🤝\nLinkedIn + Alumni connections\n\n**4. Quality Applications** ✨\nCustomize each application\n\n**5. Follow Companies** 👀\nKnow their culture & products\n\n**6. Learn Continuously** 📚\nCertifications show commitment\n\n**7. Practice Interviews** 🎤\nMock interviews are crucial\n\n**8. Be Persistent** 💪\n100+ applications is normal\n\n**9. Get Feedback** 📊\nImprove with each rejection\n\n**10. Stay Positive** 😊\nRight opportunity will come!\n\nWant detailed guidance on any tip?";
      }
      
      // General internship response
      return "🎯 **Internship Success Guide:**\n\n**Finding Internships:**\n📍 LinkedIn, Internshala, AngelList\n📍 Company websites directly\n📍 College placement cell\n📍 Referrals (most effective!)\n\n**Application Timeline:**\n🗓️ Summer: Apply Jan-March\n🗓️ Winter: Apply Aug-Oct\n🗓️ Year-round: Startups (anytime)\n\n**Key Requirements:**\n✅ Strong resume (1-page)\n✅ 2-3 projects (GitHub)\n✅ Relevant skills\n✅ Good communication\n✅ Enthusiasm to learn\n\n**Success Rate:**\n📊 Apply to 20+ companies\n📊 Expect 5-10% callback rate\n📊 Referrals increase chances 3x\n\nWhat specific aspect do you need help with?";
    }

    // Detailed placement guidance
    if (lowerMessage.includes("placement") || lowerMessage.includes("campus")) {
      return "📚 **Campus Placement Complete Guide:**\n\n**Preparation Timeline (6 months):**\n\n**Month 1-2: Fundamentals**\n✅ DSA basics (Arrays, Strings, Loops)\n✅ Choose primary language (Java/Python/C++)\n✅ Basic projects (2-3)\n✅ Resume v1.0\n\n**Month 3-4: Intermediate**\n✅ Advanced DSA (Trees, Graphs, DP)\n✅ Solve 100+ LeetCode problems\n✅ System design basics\n✅ Mock tests\n\n**Month 5-6: Advanced**\n✅ Company-specific preparation\n✅ Mock interviews (10+)\n✅ Aptitude tests mastery\n✅ HR interview prep\n\n**Key Focus Areas:**\n💻 **Technical:** DSA + Projects + OOP\n📝 **Aptitude:** Quant + Logical + Verbal\n🎤 **Communication:** Soft skills + Confidence\n📄 **Resume:** Projects + Achievements\n\n**Target Companies:**\n🏆 **Dream:** FAANG, Microsoft, Adobe\n🎯 **Good:** Flipkart, Atlassian, Salesforce\n✅ **Mass:** TCS, Infosys, Wipro, Accenture\n\nWhich tier are you targeting?";
    }

    // Enhanced resume guidance
    if (lowerMessage.includes("resume") || lowerMessage.includes("cv")) {
      return "📄 **Resume Building Masterclass:**\n\n**Perfect Structure:**\n\n**1. Header**\n📧 Name, Email, Phone, LinkedIn, GitHub\n🎯 Professional email only!\n\n**2. Education** (GPA 7.5+)\n🎓 Degree, College, Year, CGPA\n🏆 Relevant coursework\n🏅 Academic achievements\n\n**3. Skills**\n💻 Languages: Python, Java, JavaScript\n🛠️ Frameworks: React, Node.js, Django\n📊 Tools: Git, Docker, MySQL\n\n**4. Projects** (Most Important!)\n🚀 Project Name + [GitHub] [Live]\n📝 1-2 lines: What + Tech + Impact\n💡 Quantify results (30% faster, 1000+ users)\n\n**5. Experience** (if any)\n💼 Internships, freelance, open-source\n📈 Use action verbs: Built, Developed, Designed\n\n**6. Certifications**\n🎖️ Coursera, Udemy, HackerRank\n\n**Golden Rules:**\n✅ **1 page only** for freshers\n✅ **ATS-friendly** (no tables/columns)\n✅ **Action verbs** (avoid 'Worked on')\n✅ **Quantify** achievements\n✅ **No typos** (grammar check 3x)\n✅ **Keywords** matching job description\n✅ **PDF format** always\n\n**Common Mistakes:**\n❌ Multiple pages\n❌ Fancy fonts/colors\n❌ Too much text\n❌ Generic descriptions\n❌ Spelling errors\n\nWant me to review a section?";
    }

    // Comprehensive interview prep
    if (lowerMessage.includes("interview") || lowerMessage.includes("preparation")) {
      return "💼 **Interview Preparation Complete Guide:**\n\n**Technical Interview (60%):**\n\n**DSA Preparation:**\n✅ 150+ LeetCode problems minimum\n✅ Focus on: Arrays, Strings, Trees, Graphs, DP\n✅ Pattern recognition > Memorization\n✅ Time & Space complexity analysis\n✅ Practice explaining your approach\n\n**System Design (for experienced):**\n✅ Scalability concepts\n✅ Database design\n✅ API design\n✅ Caching, Load balancing\n\n**Projects Deep Dive:**\n✅ Know every line of code\n✅ Tech stack reasoning\n✅ Challenges faced\n✅ How you'd improve it\n\n**HR Interview (20%):**\n\n**STAR Method Answers:**\n📌 **Situation** - Context\n📌 **Task** - Your responsibility\n📌 **Action** - What you did\n📌 **Result** - Outcome (quantified)\n\n**Common Questions:**\n❓ Tell me about yourself (60 sec)\n❓ Why this company? (research!)\n❓ Strengths/Weaknesses (honest)\n❓ Where do you see yourself in 5 years?\n❓ Why should we hire you?\n\n**Behavioral Round (20%):**\n✅ Teamwork examples\n✅ Conflict resolution\n✅ Leadership instances\n✅ Learning from failure\n\n**Pro Tips:**\n💡 Research company (2 hours)\n💡 Prepare 5+ questions to ask\n💡 Mock interviews (10+)\n💡 Practice on Pramp/Interviewing.io\n💡 Record yourself answering\n💡 Dress professionally\n💡 Join 5 mins early\n\nWhich round do you need help with?";
    }

    // Skills and learning roadmap
    if (lowerMessage.includes("skill") || lowerMessage.includes("learn") || lowerMessage.includes("course")) {
      return "🚀 **2025 In-Demand Skills & Learning Path:**\n\n**For Software Engineers:**\n\n**Must-Have (Core):**\n✅ **Languages:** Python/Java/JavaScript\n✅ **DSA:** Arrays to Dynamic Programming\n✅ **Git/GitHub:** Version control mastery\n✅ **Databases:** SQL (MySQL/PostgreSQL)\n✅ **APIs:** REST, JSON handling\n\n**High-Demand (Pick 2-3):**\n🔥 **Frontend:** React/Next.js + Tailwind\n🔥 **Backend:** Node.js/Django/Spring Boot\n🔥 **Mobile:** React Native/Flutter\n🔥 **Cloud:** AWS/Azure basics\n🔥 **DevOps:** Docker, CI/CD basics\n🔥 **AI/ML:** Python + TensorFlow/PyTorch\n\n**For Data Roles:**\n📊 **Analytics:** SQL, Excel, Power BI/Tableau\n📊 **Science:** Python, Pandas, NumPy\n📊 **ML:** Scikit-learn, Statistics\n\n**For Design:**\n🎨 **UI/UX:** Figma, Adobe XD\n🎨 **Web:** HTML, CSS, Basic JS\n🎨 **Research:** User testing, Wireframing\n\n**Soft Skills (Critical!):**\n💬 Communication (presentations)\n🤝 Teamwork (collaboration)\n⏰ Time management\n🧠 Problem-solving\n📖 Continuous learning\n\n**Learning Resources:**\n📚 **Free:** freeCodeCamp, The Odin Project\n🎓 **Paid:** Coursera, Udemy (₹500-2000)\n💻 **Practice:** LeetCode, HackerRank\n🎬 **YouTube:** Traversy Media, freeCodeCamp\n\n**3-Month Learning Plan:**\n**Week 1-4:** Fundamentals + 1 project\n**Week 5-8:** Intermediate + 2 projects\n**Week 9-12:** Advanced + Portfolio site\n\nWhat's your target role?";
    }

    // Salary insights
    if (lowerMessage.includes("salary") || lowerMessage.includes("ctc") || lowerMessage.includes("package")) {
      return "💰 **Salary Guide for Freshers (2025):**\n\n**Software Development:**\n🏆 **FAANG/Tier-1:** ₹15-45 LPA\n   (Google, Microsoft, Amazon, Adobe)\n\n🎯 **Tier-2 Product:** ₹8-18 LPA\n   (Flipkart, Swiggy, Ola, Razorpay)\n\n🏢 **Tier-3 Product:** ₹5-12 LPA\n   (Startups, mid-size companies)\n\n💼 **Service-based:** ₹3-7 LPA\n   (TCS, Infosys, Wipro, Cognizant)\n\n**Other Domains:**\n📊 **Data Analyst:** ₹3.5-9 LPA\n🤖 **ML Engineer:** ₹6-15 LPA\n🎨 **UI/UX Designer:** ₹4-12 LPA\n📱 **Product Manager:** ₹8-20 LPA (rare for freshers)\n📈 **Digital Marketing:** ₹2.5-6 LPA\n\n**Factors Affecting Salary:**\n📍 **Location:**\n   • Bangalore/Hyderabad: +20-30%\n   • Pune/Chennai: +10-20%\n   • Tier-2 cities: Base\n\n🎓 **College Tier:**\n   • IIT/NIT/BITS: Higher offers\n   • Tier-2: Moderate\n   • Others: Standard\n\n💻 **Skills:**\n   • Niche tech (AI/ML): +30-50%\n   • Full-stack: +20%\n   • Basic: Base\n\n🏆 **Experience:**\n   • Internships: +10-20%\n   • Projects: +10%\n   • Open-source: +15%\n\n**Internship Stipends:**\n💵 **Paid:** ₹10,000-₹1,00,000/month\n   • FAANG: ₹50,000-1,00,000\n   • Startups: ₹10,000-30,000\n   • Service: ₹5,000-15,000\n\n**Negotiation Tips:**\n✅ Research market rates\n✅ Highlight unique skills\n✅ Multiple offers = leverage\n✅ Be professional, not pushy\n\nWant company-specific salary data?";
    }

    // Career path guidance
    if (lowerMessage.includes("career") || lowerMessage.includes("path") || lowerMessage.includes("should i")) {
      return "🎯 **Career Path Decision Framework:**\n\n**Self-Assessment Questions:**\n\n**1. What do you enjoy?**\n   ✅ Building things → Development\n   ✅ Analyzing data → Data Science/Analytics\n   ✅ Creating designs → UI/UX\n   ✅ Solving business problems → Product/Consulting\n\n**2. Your strengths?**\n   💻 Coding & logic → Software Engineer\n   📊 Numbers & patterns → Data Analyst\n   🎨 Creativity & aesthetics → Designer\n   💬 Communication → Product Manager/Marketing\n\n**3. Work style preference?**\n   🏢 Structured: Product companies\n   🚀 Fast-paced: Startups\n   🎯 Stable: Service companies\n   🌏 Flexible: Freelance/Remote\n\n**Top Career Paths 2025:**\n\n**1. Software Development** 💻\n   • Demand: 🔥🔥🔥 Very High\n   • Salary: ₹3-45 LPA\n   • Growth: Excellent\n   • Roles: Frontend, Backend, Full-stack, Mobile\n\n**2. Data Science/Analytics** 📊\n   • Demand: 🔥🔥 High\n   • Salary: ₹4-20 LPA\n   • Growth: Rapid\n   • Roles: Data Analyst, Scientist, ML Engineer\n\n**3. UI/UX Design** 🎨\n   • Demand: 🔥🔥 Growing\n   • Salary: ₹3-15 LPA\n   • Growth: Steady\n   • Roles: UI Designer, UX Researcher, Product Designer\n\n**4. Cloud/DevOps** ☁️\n   • Demand: 🔥🔥🔥 Very High\n   • Salary: ₹5-25 LPA\n   • Growth: Booming\n   • Roles: DevOps Engineer, Cloud Architect\n\n**5. Cybersecurity** 🔒\n   • Demand: 🔥🔥 High\n   • Salary: ₹4-18 LPA\n   • Growth: Increasing\n   • Roles: Security Analyst, Penetration Tester\n\n**Decision Process:**\n1️⃣ Try 2-3 online courses (free)\n2️⃣ Build small projects in each\n3️⃣ See what you enjoy most\n4️⃣ Check job market demand\n5️⃣ Commit to one path (6-12 months)\n\n**Career Switching:**\n✅ Possible at any time!\n✅ Many skills are transferable\n✅ Takes 3-6 months of focused learning\n\nWhat interests you most?";
    }

    // Company insights
    if (lowerMessage.includes("company") || lowerMessage.includes("companies") || lowerMessage.includes("faang")) {
      return "🏢 **Top Companies for Freshers (2025):**\n\n**Tier 1 - Dream Companies** 🏆\n\n**FAANG:**\n• **Meta (Facebook):** ₹20-45 LPA\n• **Amazon:** ₹15-35 LPA\n• **Netflix:** ₹25-50 LPA (rare for freshers)\n• **Google:** ₹18-40 LPA\n• **Apple:** ₹20-42 LPA\n\n**MAMAA (Updated):**\n• **Microsoft:** ₹18-42 LPA\n• **Adobe:** ₹15-35 LPA\n• **Atlassian:** ₹20-38 LPA\n\n**Tier 2 - Product-Based** 🎯\n• **Flipkart:** ₹12-25 LPA\n• **Swiggy:** ₹10-22 LPA\n• **Ola:** ₹8-18 LPA\n• **Razorpay:** ₹12-20 LPA\n• **CRED:** ₹15-25 LPA\n• **Zerodha:** ₹10-18 LPA\n\n**Tier 3 - Growing Startups** 🚀\n• **Meesho:** ₹8-15 LPA\n• **Urban Company:** ₹6-12 LPA\n• **PhonePe:** ₹10-18 LPA\n• **Paytm:** ₹8-15 LPA\n\n**Tier 4 - Mass Recruiters** 💼\n• **TCS:** ₹3.5-7 LPA\n• **Infosys:** ₹3.5-7 LPA\n• **Wipro:** ₹3.5-7 LPA\n• **Cognizant:** ₹4-8 LPA\n• **Accenture:** ₹4.5-8 LPA\n\n**Pros & Cons:**\n\n**FAANG/Tier-1:**\n✅ High salary, brand name, learning\n❌ Very competitive, high pressure\n\n**Tier-2 Product:**\n✅ Good pay, better work-life, learning\n❌ Moderate competition\n\n**Startups:**\n✅ Fast growth, ownership, versatility\n❌ Less stable, long hours, lower initial pay\n\n**Service-Based:**\n✅ Job security, good for beginners, training\n❌ Lower pay, less challenging work\n\n**How to Target:**\n📌 **Dream:** Need DSA mastery + strong projects\n📌 **Good:** DSA + 2-3 projects + good resume\n📌 **Mass:** Basic DSA + decent communication\n\n**Selection Process:**\n1️⃣ Online test (DSA + Aptitude)\n2️⃣ Technical interviews (2-3 rounds)\n3️⃣ HR/Managerial round\n4️⃣ Offer\n\nWhat's your priority: Salary, Learning, or Stability?";
    }

    // Portfolio/Projects
    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio")) {
      return "🛠️ **Building Winning Projects & Portfolio:**\n\n**Portfolio Must-Haves:**\n\n**1. Personal Website** 🌐\n   • Clean, professional design\n   • About, Projects, Skills, Contact\n   • Hosted (Vercel/Netlify/GitHub Pages)\n   • Custom domain (optional but impressive)\n\n**2. GitHub Profile** 💻\n   • 15+ repositories (quality > quantity)\n   • Clear README files\n   • Consistent contributions\n   • Pinned best projects\n\n**3. LinkedIn** 💼\n   • Professional photo\n   • Detailed experience\n   • Skills endorsed\n   • Recommendations\n\n**Project Ideas by Level:**\n\n**Beginner (Start here):**\n✅ Todo App with authentication\n✅ Weather App (API integration)\n✅ Portfolio website\n✅ Calculator/Quiz app\n\n**Intermediate (Impressive):**\n🔥 E-commerce site (full-stack)\n🔥 Blog platform with CMS\n🔥 Chat application (real-time)\n🔥 Social media clone\n🔥 Expense tracker with charts\n\n**Advanced (Stand out!):**\n🏆 Video streaming platform\n🏆 Collaborative code editor\n🏆 AI-powered recommendation system\n🏆 Blockchain application\n🏆 Real-time collaboration tool\n\n**Project Checklist:**\n✅ **Deployed** (live link is must!)\n✅ **GitHub** (clean, documented code)\n✅ **README** (problem, features, tech stack)\n✅ **Screenshots/GIF** (visual appeal)\n✅ **Unique feature** (what makes it different?)\n✅ **Responsive** (mobile-friendly)\n✅ **Professional UI** (use Tailwind/Material UI)\n\n**Tech Stack Recommendations:**\n\n**Full-Stack:**\n• **Frontend:** React + Tailwind CSS\n• **Backend:** Node.js + Express\n• **Database:** MongoDB/PostgreSQL\n• **Auth:** JWT/Firebase\n• **Deploy:** Vercel + Railway/Render\n\n**How to Showcase:**\n📝 **Resume:** Top 3 projects with metrics\n💬 **Interview:** Be ready to explain every detail\n🎥 **Video:** Demo video on YouTube\n📱 **Social:** Tweet your builds, share on LinkedIn\n\n**Common Mistakes to Avoid:**\n❌ Too many incomplete projects\n❌ No README files\n❌ Local-only (not deployed)\n❌ Copied tutorials (be original!)\n❌ No error handling\n❌ Poor UI/UX\n\nNeed specific project suggestions for your domain?";
    }

    // DSA and coding
    if (lowerMessage.includes("coding") || lowerMessage.includes("dsa") || lowerMessage.includes("leetcode") || lowerMessage.includes("algorithm")) {
      return "💻 **DSA Mastery Roadmap (3-6 months):**\n\n**Phase 1: Foundations (Weeks 1-4)**\n\n**Topics:**\n✅ Time & Space Complexity (Big O)\n✅ Arrays & Strings\n✅ Sorting algorithms (Bubble, Merge, Quick)\n✅ Searching (Binary search)\n✅ Basic math problems\n\n**Practice:** 40-50 Easy problems\n**Platforms:** LeetCode, HackerRank\n\n**Phase 2: Intermediate (Weeks 5-8)**\n\n**Topics:**\n✅ Linked Lists (Single, Double, Circular)\n✅ Stacks & Queues\n✅ Hashing (HashMaps, HashSets)\n✅ Recursion basics\n✅ Two pointers technique\n\n**Practice:** 50-60 Easy-Medium problems\n**Focus:** Pattern recognition\n\n**Phase 3: Advanced (Weeks 9-12)**\n\n**Topics:**\n✅ Trees (Binary, BST, AVL)\n✅ Graphs (BFS, DFS, Shortest path)\n✅ Dynamic Programming (Basics)\n✅ Greedy algorithms\n✅ Backtracking\n\n**Practice:** 40-50 Medium problems\n**Goal:** Solve without hints\n\n**Phase 4: Expert (Weeks 13-16)**\n\n**Topics:**\n✅ Advanced DP\n✅ Segment Trees, Trie\n✅ Advanced Graph algorithms\n✅ Bit manipulation\n✅ Company-specific patterns\n\n**Practice:** 30+ Medium-Hard problems\n**Mock interviews:** 10-15 sessions\n\n**Daily Practice Schedule:**\n\n**Weekdays (2 hours):**\n• 30 min: Theory/concepts\n• 90 min: Problem solving (2-3 problems)\n\n**Weekends (4 hours):**\n• 1 hour: Revision\n• 2 hours: Contest/Mock interview\n• 1 hour: Review mistakes\n\n**Top Platforms:**\n🏆 **LeetCode** - Best for interviews (150+ problems)\n🥇 **HackerRank** - Good for beginners\n🥈 **CodeForces** - Competitive programming\n🥉 **GeeksforGeeks** - Interview prep + theory\n🎯 **Pramp** - Mock interviews (free)\n💼 **Interviewing.io** - Real interviews\n\n**Problem-Solving Strategy:**\n\n**Step 1:** Understand (Read 2-3 times)\n**Step 2:** Examples (Manual solve)\n**Step 3:** Approach (Brute force first)\n**Step 4:** Optimize (Better solution)\n**Step 5:** Code (Clean, readable)\n**Step 6:** Test (Edge cases)\n**Step 7:** Analyze (Time/Space)\n\n**Target by Company:**\n• **FAANG:** 200+ problems (Medium/Hard)\n• **Good Product:** 150 problems (Easy/Medium)\n• **Service:** 80-100 problems (Easy/Medium)\n\n**Pro Tips:**\n💡 Focus on patterns, not solutions\n💡 Revise solved problems weekly\n💡 Time yourself (30-45 min/problem)\n💡 Explain your approach aloud\n💡 Don't give up in 5 minutes\n💡 Learn from editorials\n\n**Common Patterns:**\n🎯 Sliding Window\n🎯 Two Pointers\n🎯 Fast & Slow Pointers\n🎯 Merge Intervals\n🎯 Cyclic Sort\n🎯 In-place LL Reversal\n🎯 BFS/DFS\n🎯 Top K Elements\n🎯 Dynamic Programming\n\nWant a detailed study plan for your timeline?";
    }

    // Verification/Authenticity
    if (lowerMessage.includes("verify") || lowerMessage.includes("real") || lowerMessage.includes("fake") || lowerMessage.includes("scam") || lowerMessage.includes("genuine")) {
      return "🔍 **How to Verify if an Internship is Genuine:**\n\n**Red Flags (Avoid!):**\n🚩 Asking for money/fees upfront\n🚩 Too good to be true (₹50k+ for freshers)\n🚩 Vague job description\n🚩 No company website/social media\n🚩 Email from Gmail/Yahoo (not company domain)\n🚩 Immediate offer without interview\n🚩 Poor grammar in communications\n🚩 Pressure to accept quickly\n\n**Verification Checklist:**\n\n✅ **Company Research:**\n   • Check company website\n   • LinkedIn company page (employee count)\n   • Google reviews & Glassdoor\n   • Social media presence\n   • News/media coverage\n\n✅ **Job Posting:**\n   • Posted on legitimate platforms\n   • Professional job description\n   • Clear role & responsibilities\n   • Reasonable compensation\n   • Proper company email domain\n\n✅ **Communication:**\n   • Official email (@companyname.com)\n   • Professional tone\n   • Clear process explained\n   • Scheduled interviews\n   • Contact details provided\n\n✅ **Interview Process:**\n   • Proper interview rounds\n   • Questions about skills/projects\n   • Meet actual team members\n   • Office address/virtual tour\n   • Written offer letter\n\n**Safe Platforms:**\n✅ LinkedIn (verify company)\n✅ Internshala (verified companies)\n✅ Company career pages directly\n✅ College placement cells\n✅ AngelList (for startups)\n✅ Naukri/Indeed (check reviews)\n\n**What to Do:**\n1️⃣ Google the company name + \"scam\"\n2️⃣ Check company registration\n3️⃣ Contact via official channels\n4️⃣ Ask for employee references\n5️⃣ Trust your instincts\n\n**Report Scams:**\n📧 Internshala/LinkedIn support\n🚔 Cybercrime portal (India)\n📱 Social media warnings\n\n**Pro Tips:**\n💡 Never pay for internships\n💡 Research company thoroughly\n💡 Verify recruiter on LinkedIn\n💡 Ask questions in interview\n💡 Check offer letter carefully\n\nNeed help verifying a specific opportunity?";
    }

    // Greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("namaste")) {
      return "Namaste! 🙏 Hello! 👋\n\nI'm **AI Guru**, your personal career guide!\n\n**I can help you with:**\n\n🎯 **Internships** - Find, apply, verify, succeed\n📚 **Placements** - Campus recruitment prep\n📄 **Resume** - ATS-friendly, impactful\n💼 **Interviews** - Technical + HR rounds\n🚀 **Skills** - What to learn in 2025\n💰 **Salary** - Expectations & negotiation\n🏢 **Companies** - Which to target & how\n🛠️ **Projects** - Ideas & portfolio building\n💻 **DSA** - Complete roadmap\n\n**Quick Questions:**\n• \"How to find internships?\"\n• \"Resume tips for freshers\"\n• \"Top skills for 2025\"\n• \"Interview preparation guide\"\n• \"Is this internship genuine?\"\n\n**I speak all languages!** 🌍\nHindi, English, Tamil, Telugu - ask in any language!\n\nWhat would you like to know? 😊";
    }

    // Thanks
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks") || lowerMessage.includes("धन्यवाद")) {
      return "You're very welcome! 😊🙏\n\nRemember:\n✨ **Persistence beats talent**\n✨ **Every rejection is a lesson**\n✨ **Your dream job is waiting**\n\nI'm always here to help you succeed! Feel free to ask anything, anytime.\n\n**Before you go:**\n📌 Use our Mock Interview feature\n📌 Check Skill Gap Analyzer\n📌 Build your Resume\n📌 Track your Applications\n\nAll the best for your career journey! 🚀\n\nGood luck! 🍀";
    }

    // Help/Guide
    if (lowerMessage.includes("help") || lowerMessage.includes("guide") || lowerMessage.includes("how")) {
      return "🤝 **How I Can Help You:**\n\n**Ask me about:**\n\n1️⃣ **Internship Guidance**\n   • How to find internships?\n   • Application strategies\n   • Interview preparation\n   • Offer negotiation\n   • Verify if internship is real\n\n2️⃣ **Placement Preparation**\n   • Campus recruitment timeline\n   • DSA preparation roadmap\n   • Aptitude test tips\n   • Company-wise preparation\n\n3️⃣ **Resume & Portfolio**\n   • Resume structure & tips\n   • ATS optimization\n   • Project ideas\n   • Portfolio building\n\n4️⃣ **Interview Success**\n   • Technical round prep\n   • HR round questions\n   • Behavioral interviews\n   • Mock interview tips\n\n5️⃣ **Career Planning**\n   • Which career to choose?\n   • Skills to learn\n   • Learning roadmap\n   • Salary expectations\n\n6️⃣ **Company Insights**\n   • Top companies for freshers\n   • Company-specific prep\n   • Work culture insights\n   • Salary ranges\n\n**Example Questions:**\n❓ \"How to prepare for Google interview?\"\n❓ \"Best projects for resume?\"\n❓ \"Data Science vs Web Development?\"\n❓ \"How to get referrals?\"\n❓ \"Internship application timeline?\"\n\n**Pro Tip:** Be specific for detailed answers!\n\nWhat would you like to know first? 🎯";
    }

    // Default fallback with context
    return "🤔 I'd love to help you with that!\n\n**I specialize in:**\n\n🎯 **Internship & Placement** - Finding opportunities, application strategies, verification\n📄 **Resume & Portfolio** - Building impressive profiles\n💼 **Interview Preparation** - Technical, HR, behavioral rounds\n🚀 **Career Guidance** - Path selection, skill development\n💰 **Salary Insights** - Market rates, negotiation\n🏢 **Company Information** - Top companies, selection process\n💻 **DSA & Coding** - Complete preparation roadmap\n🛠️ **Projects** - Ideas and portfolio building\n\n**Try asking:**\n• \"How to find good internships?\"\n• \"Resume tips for software engineer\"\n• \"Best skills to learn in 2025\"\n• \"How to prepare for FAANG?\"\n• \"Is this internship offer genuine?\"\n\n**I understand all languages!** 🌍\n\nCould you please be more specific about what you'd like to know? I'm here to help you succeed! 😊";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputValue(prompt);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-2xl shadow-cyan-500/50 z-50 p-0 border-2 border-white animate-bounce"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </Button>
      )}

      {/* Chat Window - Fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center p-4 animate-scale-in">
          <Card className="w-full h-full max-w-7xl max-h-[95vh] shadow-2xl border-2 border-cyan-500/50 bg-gray-900 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-700 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl">AI Guru</h3>
                  <p className="text-sm text-cyan-100 font-semibold">Your Personal Career Assistant - Ask me anything!</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 text-white w-12 h-12"
              >
                <X className="w-7 h-7" />
              </Button>
            </div>

          {/* Quick Prompts */}
          <div className="p-4 border-b border-gray-700 bg-gray-800/50">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-white font-semibold">Quick Questions:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, index) => (
                <Badge
                  key={index}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="cursor-pointer bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-500/30 transition-all text-sm px-4 py-2"
                >
                  {prompt}
                </Badge>
              ))}
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6 bg-gray-900">
            <div className="space-y-6 max-w-5xl mx-auto" ref={scrollRef}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Avatar - AI Guru (left side) */}
                  {message.role === "assistant" && (
                    <Avatar className="w-10 h-10 border-2 border-cyan-500">
                      <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600">
                        <Bot className="w-6 h-6 text-white" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div className="flex flex-col max-w-[75%]">
                    {/* Name Label */}
                    <span className={`text-xs font-bold mb-1 ${
                      message.role === "user" ? "text-cyan-400 text-right" : "text-cyan-400"
                    }`}>
                      {message.role === "user" ? "You" : "AI Guru"}
                    </span>
                    
                    {/* Message Bubble */}
                    <div
                      className={`p-4 rounded-lg ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-tr-none"
                          : "bg-gray-800 text-white border border-gray-700 rounded-tl-none"
                      }`}
                    >
                      <p className="text-base whitespace-pre-line font-semibold leading-relaxed">{message.content}</p>
                      <span className="text-xs opacity-70 mt-2 block">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Avatar - Student (right side) */}
                  {message.role === "user" && (
                    <Avatar className="w-10 h-10 border-2 border-purple-500">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600">
                        <User className="w-6 h-6 text-white" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <Avatar className="w-10 h-10 border-2 border-cyan-500">
                    <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600">
                      <Bot className="w-6 h-6 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col max-w-[75%]">
                    <span className="text-xs font-bold mb-1 text-cyan-400">AI Guru</span>
                    <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg rounded-tl-none">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-6 border-t border-gray-700 bg-gray-800/50">
            <div className="flex gap-3 max-w-5xl mx-auto">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything about internships, placements, interviews, resume, skills..."
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 h-14 text-base px-4"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white h-14 px-6"
              >
                <Send className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </Card>
        </div>
      )}
    </>
  );
}
