"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Clock,
  BookOpen,
  Home,
  CheckCircle2,
  QrCode,
  Bot,
  PlusCircle,
  Wifi,
  Battery,
  RotateCw
} from "lucide-react";

type AnuvatView = "home" | "live_quiz" | "join_class" | "my_classes" | "ai_assistant";

export function AnuvatPhoneMockup() {
  const [activeView, setActiveView] = useState<AnuvatView>("home");
  const [quizCodeInput, setQuizCodeInput] = useState("QUIZ01");
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [cameraScanning, setCameraScanning] = useState(false);
  const [joinClassCode, setJoinClassCode] = useState("CS101A");
  const [joinedSuccess, setJoinedSuccess] = useState(false);

  const timerRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      timerRefs.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  const addTimer = (timer: NodeJS.Timeout) => {
    timerRefs.current.push(timer);
    return timer;
  };

  // Exact quick actions from HomeScreen.jsx in SambrathnaVin/anuvat-mobile-main
  const QUICK_ACTIONS = [
    {
      id: "live_quiz",
      title: "Live Quiz",
      icon: Clock,
      color: "bg-[#dc2626]",
      view: "live_quiz" as AnuvatView
    },
    {
      id: "join_class",
      title: "Join Class",
      icon: PlusCircle,
      color: "bg-[#16a34a]",
      view: "join_class" as AnuvatView
    },
    {
      id: "my_classes",
      title: "My Classes",
      icon: BookOpen,
      color: "bg-[#2563eb]",
      view: "my_classes" as AnuvatView
    },
    {
      id: "ai_assistant",
      title: "AI Assistant",
      icon: Bot,
      color: "bg-[#8b5cf6]",
      view: "ai_assistant" as AnuvatView
    }
  ];

  // Exact assignments & announcements from HomeScreen.jsx
  const UPCOMING_ASSIGNMENTS = [
    { id: 1, title: "State Management Deep Dive", class: "React Dev", due: "Nov 15" },
    { id: 2, title: "Final Project Planning", class: "React Dev", due: "Dec 5" }
  ];

  const RECENT_ANNOUNCEMENTS = [
    { id: 1, class: "React Dev", text: "New assignment posted", time: "2h ago" },
    { id: 2, class: "JavaScript 101", text: "Class rescheduled", time: "5h ago" }
  ];

  const handleStartQuiz = () => {
    if (quizCodeInput.toUpperCase() === "QUIZ01") {
      setQuizStarted(true);
      setSelectedQuizAnswer(null);
      setQuizAnswered(false);
    }
  };

  const handleAnswerQuiz = (optIndex: number) => {
    setSelectedQuizAnswer(optIndex);
    setQuizAnswered(true);
    if (optIndex === 0) {
      setQuizScore((prev) => prev + 100);
    }
  };

  const handleSimulateQrScan = () => {
    setCameraScanning(true);
    const t = setTimeout(() => {
      setCameraScanning(false);
      setQuizCodeInput("QUIZ01");
      setQuizStarted(true);
    }, 600);
    addTimer(t);
  };

  return (
    <div className="relative mx-auto max-w-[340px] select-none font-sans">
      {/* Outer Titanium iPhone 16 Pro Frame */}
      <div className="relative rounded-[50px] p-3.5 bg-gradient-to-b from-[#383D45] via-[#1D2026] to-[#0E1014] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.14)]">
        {/* Screen Bezel */}
        <div className="rounded-[40px] bg-black p-3 overflow-hidden relative border border-white/10 shadow-inner">
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-40 flex items-center justify-between px-3 border border-white/10 shadow-md">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-white/20" />
            <div className="w-2 h-2 rounded-full bg-[#1A1A1A] border border-white/15" />
          </div>

          {/* iOS Status Bar */}
          <div className="flex justify-between items-center text-[11px] font-semibold text-white/90 px-3 pt-1 pb-3 relative z-30">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-xs text-white/80">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* App Body Container (Expo 54 React Native App) */}
          <div className="min-h-[520px] bg-[#0F141F] rounded-[30px] text-white flex flex-col justify-between relative overflow-hidden border border-slate-800">
            {/* Scrollable View Content */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              {/* VIEW 1: HOME SCREEN (Exact from HomeScreen.jsx) */}
              {activeView === "home" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {/* Header Greeting */}
                  <div className="flex justify-between items-start pt-1">
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">Hello, Vin! 👋</h4>
                      <p className="text-xs text-slate-400">Welcome back to Anuvat</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-xs font-bold text-blue-400">
                      VS
                    </div>
                  </div>

                  {/* 4 Quick Actions Grid from HomeScreen.jsx */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      QUICK ACTIONS
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {QUICK_ACTIONS.map((action) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={action.id}
                            type="button"
                            onClick={() => setActiveView(action.view)}
                            className="p-3 rounded-2xl bg-[#161C2B] border border-[#222B3F] hover:border-slate-600 text-left transition-all flex items-center gap-2.5 shadow-sm group"
                          >
                            <div className={`w-8 h-8 rounded-xl ${action.color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-white tracking-tight">
                              {action.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Upcoming Assignments from HomeScreen.jsx */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      UPCOMING ASSIGNMENTS
                    </span>
                    <div className="space-y-1.5">
                      {UPCOMING_ASSIGNMENTS.map((item) => (
                        <div
                          key={item.id}
                          className="p-2.5 rounded-xl bg-[#141A28] border border-[#1F273B] flex justify-between items-center text-xs"
                        >
                          <div>
                            <div className="font-semibold text-white text-xs">{item.title}</div>
                            <span className="text-[11px] text-blue-400 font-mono">{item.class}</span>
                          </div>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1D253B] text-slate-300">
                            Due {item.due}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Announcements from HomeScreen.jsx */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      RECENT ANNOUNCEMENTS
                    </span>
                    <div className="space-y-1.5">
                      {RECENT_ANNOUNCEMENTS.map((item) => (
                        <div
                          key={item.id}
                          className="p-2.5 rounded-xl bg-[#141A28] border border-[#1F273B] flex justify-between items-center text-xs"
                        >
                          <div>
                            <span className="text-[11px] font-mono text-emerald-400 font-bold block">{item.class}</span>
                            <div className="text-xs text-slate-200">{item.text}</div>
                          </div>
                          <span className="text-[11px] text-slate-400 font-mono">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: LIVE QUIZ (Exact from LiveQuizScreen.jsx) */}
              {activeView === "live_quiz" && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveView("home");
                        setQuizStarted(false);
                      }}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                    >
                      &larr; Back to Home
                    </button>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                      Live Quiz
                    </span>
                  </div>

                  {!quizStarted ? (
                    <div className="space-y-3 text-center pt-2">
                      <div className="w-12 h-12 rounded-2xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white">Join Live Quiz Session</h5>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Enter 6-digit session code or scan classroom QR code.
                        </p>
                      </div>

                      {/* Code Input */}
                      <div className="p-3 rounded-2xl bg-[#161C2B] border border-[#222B3F] space-y-2 text-left">
                        <label className="text-[11px] font-mono text-slate-400 uppercase block">
                          6-Digit Quiz Code
                        </label>
                        <input
                          type="text"
                          value={quizCodeInput}
                          onChange={(e) => setQuizCodeInput(e.target.value.toUpperCase())}
                          placeholder="e.g. QUIZ01"
                          maxLength={6}
                          className="w-full px-3 py-2 rounded-xl bg-[#0F1420] border border-[#2A344D] text-white font-mono font-bold text-center tracking-widest text-base focus:outline-none focus:border-rose-500"
                        />
                        <button
                          type="button"
                          onClick={handleStartQuiz}
                          className="w-full py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md transition-all"
                        >
                          Join Active Quiz
                        </button>
                      </div>

                      <div className="relative flex py-1 items-center">
                        <div className="flex-grow border-t border-slate-800" />
                        <span className="flex-shrink mx-2 text-[11px] text-slate-500 font-mono">OR</span>
                        <div className="flex-grow border-t border-slate-800" />
                      </div>

                      {/* Camera QR Scanner Button (expo-camera) */}
                      {!cameraScanning ? (
                        <button
                          type="button"
                          onClick={handleSimulateQrScan}
                          className="w-full py-2.5 rounded-xl bg-[#182033] hover:bg-[#202B45] text-slate-200 border border-[#283654] font-bold text-xs shadow-sm flex items-center justify-center gap-2"
                        >
                          <QrCode className="w-4 h-4 text-rose-400" />
                          <span>Scan Classroom QR (expo-camera)</span>
                        </button>
                      ) : (
                        <div className="p-3 rounded-xl bg-[#182033] border border-rose-500/50 flex items-center justify-center gap-2 text-xs font-mono text-rose-300">
                          <RotateCw className="w-4 h-4 animate-spin" />
                          <span>Detecting QR Code Nonce...</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Active Quiz Session */
                    <div className="space-y-3 animate-in fade-in">
                      <div className="p-3 rounded-xl bg-[#161C2B] border border-[#222B3F] space-y-1">
                        <div className="flex justify-between items-center text-[11px] font-mono">
                          <span className="text-rose-400 font-bold">SESSION: QUIZ01</span>
                          <span className="text-emerald-400 font-bold">Score: {quizScore} pts</span>
                        </div>
                        <p className="text-xs font-bold text-white pt-1 leading-snug">
                          Which mechanism isolates student data tables in Supabase?
                        </p>
                      </div>

                      <div className="space-y-2">
                        {[
                          { id: 0, text: "Row-Level Security (RLS) with auth.uid()", correct: true },
                          { id: 1, text: "Hardcoded Service Role Keys in Client Bundle", correct: false },
                          { id: 2, text: "Unauthenticated Cookies without Server Check", correct: false }
                        ].map((opt) => {
                          const isSelected = selectedQuizAnswer === opt.id;
                          let style = "bg-[#141A28] border-[#1F273B] text-slate-300";

                          if (quizAnswered) {
                            if (opt.correct) style = "bg-emerald-950 border-emerald-500 text-emerald-200 font-bold";
                            else if (isSelected && !opt.correct) style = "bg-rose-950 border-rose-500 text-rose-200";
                          } else if (isSelected) {
                            style = "bg-blue-950 border-blue-500 text-blue-200";
                          }

                          return (
                            <button
                              key={opt.id}
                              type="button"
                              disabled={quizAnswered}
                              onClick={() => handleAnswerQuiz(opt.id)}
                              className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all ${style}`}
                            >
                              <div className="flex items-start gap-2">
                                <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                                  {String.fromCharCode(65 + opt.id)}
                                </span>
                                <span className="text-xs">{opt.text}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizAnswered && (
                        <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center text-xs text-emerald-300 space-y-1 animate-in fade-in">
                          <p className="font-bold">+100 Points Awarded!</p>
                          <p className="text-[11px] text-slate-300">
                            Supabase RLS secures queries directly at PostgreSQL database engine level.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* VIEW 3: MY CLASSES */}
              {activeView === "my_classes" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setActiveView("home")}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                    >
                      &larr; Back to Home
                    </button>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                      Enrolled Classes (2)
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-2xl bg-[#161C2B] border border-[#222B3F] space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">React Dev</span>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">
                          Active
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">Section A &bull; Dr. Channarith</p>
                      <div className="text-[11px] font-mono text-slate-300 pt-1 border-t border-white/5 flex justify-between">
                        <span>Attendance: 96%</span>
                        <span>Assignments: 2 Pending</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#161C2B] border border-[#222B3F] space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">JavaScript 101</span>
                        <span className="text-[11px] font-mono text-blue-400 bg-blue-950 px-1.5 py-0.5 rounded">
                          Active
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">Section B &bull; Prof. Mengly</p>
                      <div className="text-[11px] font-mono text-slate-300 pt-1 border-t border-white/5 flex justify-between">
                        <span>Attendance: 92%</span>
                        <span>Assignments: All Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 4: JOIN CLASS */}
              {activeView === "join_class" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setActiveView("home")}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                    >
                      &larr; Back to Home
                    </button>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Join Classroom
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#161C2B] border border-[#222B3F] space-y-2">
                    <label className="text-[11px] font-mono text-slate-400 uppercase block">
                      Class Code
                    </label>
                    <input
                      type="text"
                      value={joinClassCode}
                      onChange={(e) => setJoinClassCode(e.target.value.toUpperCase())}
                      placeholder="e.g. CS101A"
                      className="w-full px-3 py-2 rounded-xl bg-[#0F1420] border border-[#2A344D] text-white font-mono font-bold text-center tracking-wider text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="button"
                      onClick={() => setJoinedSuccess(true)}
                      className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                    >
                      Join with Code
                    </button>
                  </div>

                  {joinedSuccess && (
                    <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center text-xs text-emerald-200 font-bold flex items-center justify-center gap-1.5 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Successfully Enrolled in Class!</span>
                    </div>
                  )}
                </div>
              )}

              {/* VIEW 5: AI ASSISTANT */}
              {activeView === "ai_assistant" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setActiveView("home")}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                    >
                      &larr; Back to Home
                    </button>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      Anuvat AI
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#161C2B] border border-[#222B3F] space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <h6 className="text-xs font-bold text-white">Anuvat Course Assistant</h6>
                        <span className="text-[11px] text-purple-400 font-mono">Trained on Course Materials</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0F1420] text-xs text-slate-300 leading-relaxed font-sans">
                      Hello Vin! I can help clarify concepts from your "React Dev" state management lectures or assist with assignment preparations.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom iOS Navigation Bar */}
            <div className="px-3 py-2 bg-[#090C14] border-t border-slate-800 flex justify-around items-center">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "my_classes", label: "Classes", icon: BookOpen },
                { id: "live_quiz", label: "Quiz", icon: Clock },
                { id: "ai_assistant", label: "AI Bot", icon: Bot }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveView(item.id as AnuvatView)}
                    className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition-all ${
                      isActive ? "text-blue-400 font-bold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] tracking-tight">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
