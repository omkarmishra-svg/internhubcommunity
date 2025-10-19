import React, { useEffect, useRef, useState } from "react";

/**
 * AIChatbot (dark theme + mock Q&A)
 * - Named export: import { AIChatbot } from "./components/AIChatbot"
 * - Fullscreen on open, Insert Mock Q&A, keyword-based answers
 */

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    { id: number; role: "user" | "assistant"; content: string; ts?: number }[]
  >([
    {
      id: Date.now(),
      role: "assistant",
      content:
        "👋 Hi! I'm AI Guru — your internship & career assistant. Click 'Insert Mock Q&A' to load sample guidance, or ask a question below.",
      ts: Date.now(),
    },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // simple keyword-based answer generator
  const generateAnswer = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("resume") || q.includes("cv") || q.includes("format")) {
      return `📄 Resume tips:
1) Keep to 1 page for freshers.
2) Show 2-3 projects with bullet outcomes (what you did and results).
3) Add links to GitHub / portfolio. Would you like a simple template?`;
    }

    if (q.includes("apply") && q.includes("intern")) {
      return `🔎 How to apply to internships:
- Target 5-10 roles weekly.
- Tailor your resume & one-line message.
- Use LinkedIn, company pages, and referrals.`;
    }

    if (q.includes("interview") || q.includes("prepar")) {
      return `💼 Interview prep:
- Practice DS/Algo basics and a few system-design ideas for senior roles.
- Explain projects clearly: problem, approach, your role, result.
- Do mock interviews to refine answers.`;
    }

    if (q.includes("skills") || q.includes("learn")) {
      return `🚀 In-demand skills:
- Web: React + Node, version control, basic deployment.
- Data/ML: Python, pandas, basic models.
Pick one stack, build a project, and show it on your resume.`;
    }

    if (q.includes("portfolio") || q.includes("project")) {
      return `🛠 Portfolio tips:
- 3-4 projects with README, live demo (if possible), and code.
- Demonstrate end-to-end features and one technical achievement per project.`;
    }

    if (q.includes("linkedin") || q.includes("profile")) {
      return `🔗 LinkedIn tips:
- Clear headline, short 'about', projects, and skills.
- Add a professional photo and relevant links.`;
    }

    // fallback generic
    return `🤖 I can help with internships, resumes, interview prep, and projects.
Please give a specific question (example: "How to improve my resume for frontend internships?").`;
  };

  const sendMessage = () => {
    const text = inputValue.trim();
    if (!text) return;

    const userMsg = { id: Date.now(), role: "user" as const, content: text, ts: Date.now() };
    setMessages((p) => [...p, userMsg]);
    setInputValue("");

    const answer = generateAnswer(text);

    const assistantMsg = {
      id: Date.now() + 1,
      role: "assistant" as const,
      content: answer,
      ts: Date.now(),
    };

    setTimeout(() => setMessages((p) => [...p, assistantMsg]), 600);
  };

  // Insert mock internship & career Q&A for demo
  const insertMockQA = () => {
    const qas = [
      {
        q: "How can I find internships as a 2nd year student?",
        a:
          "Start with college placement cell, alumni, LinkedIn, and GitHub. Build 1-2 small projects and apply early; reach out to recruiters with a short message.",
      },
      {
        q: "What should I include in my internship resume?",
        a:
          "Header + contact, 2-4 skills, 2-3 projects with bullets (problem, approach, result), education, and links to GitHub/portfolio.",
      },
      {
        q: "How to prepare for coding rounds?",
        a:
          "Practice arrays, strings, hashing, and basic graph problems. Timeboxed practice and mock interviews help a lot.",
      },
      {
        q: "How to write a project in resume?",
        a:
          "One-line summary + 2 bullets: your role and measurable impact (e.g., improved performance by X%).",
      },
      {
        q: "How to network for internships?",
        a:
          "Follow and message alumni or engineers on LinkedIn politely, share your project link, and ask for short advice — often leads to referrals.",
      },
    ];

    const msgs = qas.flatMap((item, idx) => {
      const u = { id: Date.now() + idx * 10, role: "user" as const, content: item.q, ts: Date.now() };
      const a = { id: Date.now() + idx * 10 + 1, role: "assistant" as const, content: item.a, ts: Date.now() };
      return [u, a];
    });

    setMessages((prev) => [...prev, ...msgs]);
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI chat"
          style={{
            position: "fixed",
            right: 24,
            bottom: 24,
            width: 64,
            height: 64,
            borderRadius: 32,
            background: "linear-gradient(135deg,#06b6d4,#0ea5a0)",
            color: "white",
            border: "none",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          AI
        </button>
      )}

      {/* Fullscreen dark chat */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#0f172a", // page background darker
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            color: "white",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: 14,
              background: "linear-gradient(90deg,#0891b2,#0ea5a0)",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>AI Guru</div>
              <div style={{ fontSize: 12, opacity: 0.95 }}>Internship & Career Assistant</div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={insertMockQA}
                title="Insert mock internship & career Q&A"
                style={{
                  background: "white",
                  color: "#065f46",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Insert Mock Q&A
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "none",
                  padding: 8,
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>

          {/* Messages area - dark background and white text */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 18,
              background: "#0b1220",
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: 14,
                    background: m.role === "user" ? "#059669" : "#111827",
                    color: "#fff",
                    boxShadow: m.role === "user" ? "none" : "0 2px 10px rgba(0,0,0,0.4)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {m.content}
                  {m.ts && (
                    <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 8, textAlign: "right" }}>
                      {new Date(m.ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div
            style={{
              padding: 12,
              display: "flex",
              gap: 8,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              background: "#041026",
            }}
          >
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask your internship/career question..."
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "#0b1220",
                color: "white",
                outline: "none",
                fontSize: 14,
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "10px 14px",
                background: "linear-gradient(90deg,#06b6d4,#0ea5a0)",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}