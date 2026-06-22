import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send, ChevronRight, Bot } from "lucide-react";

// ── Quick reply options shown as chips in the first message ───────────────────
const QUICK_REPLIES = [
  { label: "Book an appointment", key: "book"      },
  { label: "Our services",        key: "services"  },
  { label: "Opening hours",       key: "hours"     },
  { label: "Insurance & HMO",     key: "insurance" },
  { label: "Find us",             key: "location"  },
  { label: "Talk to someone",     key: "human"     },
];

// ── Pre-built bot responses keyed to quick replies ────────────────────────────
// `link` is optional — renders a teal "pill" CTA inside the bubble
const BOT_RESPONSES = {
  book: {
    text: "You can book an appointment in under 2 minutes. Choose your department, doctor, and preferred time slot.",
    link: { label: "Book now →", to: "/booking" },
  },
  services: {
    text: "We cover Cardiology, General Medicine, Pediatrics, Dermatology, Dental Care, and Neurology — all under one roof.",
    link: { label: "View all services →", to: "/services" },
  },
  hours: {
    text: "We're open Monday – Saturday 7:00am – 9:00pm and Sunday 10:00am – 5:00pm. Our emergency line runs 24/7.",
  },
  insurance: {
    text: "We accept AXA Mansard, Hygeia HMO, Avon Healthcare, Reliance HMO, AIICO Insurance, and Leadway Health. Call us to confirm your specific plan.",
  },
  location: {
    text: "We're at 123 Adeola Odeku Street, Victoria Island, Lagos. Parking is available on-site.",
    link: { label: "Get directions →", to: "/contact" },
  },
  human: {
    text: "Our patient care team is available Mon – Sat 7am – 9pm. You can reach us by phone or send us a message and we'll reply within 2 hours.",
    link: { label: "Send a message →", to: "/contact" },
  },
};

// ── Keyword map for free-text input ──────────────────────────────────────────
const KEYWORD_RULES = [
  { key: "book",      words: ["book", "appoint", "schedul", "reserv", "slot"] },
  { key: "services",  words: ["service", "department", "treat", "special", "offer"] },
  { key: "hours",     words: ["hour", "open", "close", "time", "when"] },
  { key: "insurance", words: ["insur", "hmo", "cover", "plan", "axa", "hygeia"] },
  { key: "location",  words: ["where", "address", "location", "find", "direct", "map"] },
  { key: "human",     words: ["speak", "talk", "human", "person", "call", "phone", "contact"] },
];

function matchKeyword(text) {
  const lower = text.toLowerCase();
  for (const { key, words } of KEYWORD_RULES) {
    if (words.some((w) => lower.includes(w))) return key;
  }
  return null;
}

function timestamp() {
  return new Date().toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" });
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ChatBox() {
  const [open, setOpen]     = useState(false);
  const [messages, setMsgs] = useState([
    {
      from: "bot",
      text: "Hi there 👋 I'm the MediCare assistant. What can I help you with today?",
      time: timestamp(),
      showChips: true,         // only the first bot message shows quick reply chips
    },
  ]);
  const [input, setInput]   = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef           = useRef(null);
  const inputRef            = useRef(null);

  // Scroll to latest message whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus the input when the window opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function pushBot(key) {
    const response = BOT_RESPONSES[key] ?? {
      text: "I'm not sure about that — please call us on +234 800 MEDI-CARE or send a message and we'll get back to you within 2 hours.",
      link: { label: "Send a message →", to: "/contact" },
    };

    setTyping(true);
    setTimeout(() => {
      setMsgs((prev) => [
        ...prev,
        { from: "bot", text: response.text, link: response.link, time: timestamp() },
      ]);
      setTyping(false);
    }, 800);
  }

  function handleQuickReply(key, label) {
    // Add the user's "tap" as a message then respond
    setMsgs((prev) => [...prev, { from: "user", text: label, time: timestamp() }]);
    pushBot(key);
  }

  function handleSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMsgs((prev) => [...prev, { from: "user", text, time: timestamp() }]);
    const key = matchKeyword(text);
    pushBot(key ?? "__fallback__");
  }

  // Are there any chips still visible? Only show chips if first bot msg is present.
  const hasChips = messages.some((m) => m.showChips);

  return (
    // Sits at bottom-24 so it stacks directly above the EmergencyButton (bottom-6)
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Chat window ────────────────────────────────────────────────────── */}
      {open && (
        <div className="flex w-80 flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl sm:w-96"
          style={{ maxHeight: "min(440px, calc(100vh - 180px))" }}>

          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">MediCare Support</p>
                <p className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Usually replies in minutes
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15"
              aria-label="Close chat">
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-warm p-4">
            {messages.map((msg, i) => (
              <div key={i}>
                <div className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="flex max-w-[82%] flex-col gap-1.5">

                    {/* Bubble */}
                    <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "rounded-br-sm bg-primary text-white"
                        : "rounded-bl-sm bg-white text-charcoal shadow-sm"
                    }`}>
                      {msg.text}

                      {/* Optional CTA link inside bot bubble */}
                      {msg.from === "bot" && msg.link && (
                        <Link to={msg.link.to} onClick={() => setOpen(false)}
                          className="mt-2 flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                          {msg.link.label}
                        </Link>
                      )}
                    </div>

                    {/* Timestamp */}
                    <p className={`text-[10px] text-slate/50 ${
                      msg.from === "user" ? "text-right" : "text-left"
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>

                {/* Quick reply chips — only on the first bot message */}
                {msg.showChips && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {QUICK_REPLIES.map(({ label, key }) => (
                      <button key={key}
                        onClick={() => handleQuickReply(key, label)}
                        className="rounded-full border border-primary/25 bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm transition-colors hover:bg-mint">
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3.5 shadow-sm">
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <span key={i}
                      style={{ animationDelay: `${delay}s` }}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate/40" />
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <form onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-border bg-white px-3 py-2.5">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 rounded-full border border-border bg-warm px-4 py-2 text-sm text-charcoal placeholder:text-slate/50 focus:border-primary focus:outline-none"
            />
            <button type="submit"
              disabled={!input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark disabled:opacity-40">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* ── Toggle button ───────────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-105 ${
          open ? "bg-charcoal text-white" : "bg-primary text-white"
        }`}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}